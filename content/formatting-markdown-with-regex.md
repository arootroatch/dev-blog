---
layout: blog
title: Formatting Markdown with Regex
author: Alex Root-Roatch
description: Using Clojure's string/replace function to format Jira issue descriptions
date: 2024-10-07T21:50:38-6:00
updated: 2024-10-07T21:50:38-6:00
thumbnail: /img/code-banner.jpg
category: [Clojure]
---

## That's Not Markdown

While working on the integration between Jira and Epic, I discovered that Jira has its own style of syntax that is not standard markdown. The result of this was that once a description was updated in one application, the formatting in the other application become very strange. For example, headings in Markdown syntax become ordered list items in Jira, and the number of pound sounds refers to level of indentation.

This posed an interesting challenge, since when a description is updated, it comes in as one big string that now needed to be parsed and reformatted. Not only did the description from Jira need to be reformatted to Markdown for Epic, the description in Epic also needed to be reformatted to fit Jira's syntax. 

Here's a brief example of the differences between Markdown on Jira's syntax: 

<table>
<thead>
<tr>
<th>Element</th>
<th>Markdown</th>
<th>Jira</th>
</tr>
</thead>
<tbody>
<tr>
<td>Headings</td>
<td># ,## ,### ,#### ,##### ,######  </td>
<td>h1. ,h2. ,h3. ,h4. ,h5. ,h6. </td>
</tr>
<tr>
<td>Ordered Lists</td>
<td>1. </td>
<td># </td>
</tr>
<tr>
<td>Nested Ordered Lists</td>
<td> ⇥ 1., ⇥⇥ 1. </td>
<td>##, ### </td>
</tr>
<tr>
<td>Inline Code</td>
<td> \`your code here\` </td>

<td>\{\{your code here\}\} </td>
</tr>
<tr>
<td>Code Block</td>
<td> \`\`\`your code here\`\`\` </td>

<td> \{noformat\}your code here\{noformat\}</td>
</tr>
<tr>
<td>Links</td>
<td> \[Link Name\]\(your-link.com\)</td>
<td> [Link Name|your-link.com]</td>
</tr>
</tbody>
</table>

## Revisiting Regex

To do the kind of swapping in place of certain symbols that was needed here, `Clojure.string/replace` came in very handy. It takes as arguments that string being changed, a regular expression representing the part of the string to be replaced, and what it should be replaced with. This, of course, meant that I needed to refresh my regex knowledge, since regex is one of those things that I can't seem to retain and must relearn every time I use it. 

One tricky thing about this was accounting for scenarios in which symbols might also be typed inside of paragraphs as normal text and should not be inadvertently converted. For example, a pound sign being typed in the middle of the paragraph should not be turned into the text `h1. ` when formatting the text for Jira. To help with this, I decided to split the description by every new line character so that I had a list where every element in the list was a separate element in the description, such as a paragraph or a heading. This allowed me to specifically check the beginning and ending of a line and only swap a pound sign for `h1. ` if it was at the start of the line and followed by a space. Since `string/replace` doesn't do anything if there's no match for the regex, I could simply create a threaded form for all the headings. 

```
(defn- ->epic-heading [line]
  (-> line
      (string/replace #"^h6. " "###### ")
      (string/replace #"^h5. " "##### ")
      (string/replace #"^h4. " "#### ")
      (string/replace #"^h3. " "### ")
      (string/replace #"^h2. " "## ")
      (string/replace #"^h1. " "# ")))
      
(defn- ->jira-heading [line]
  (-> line
      (string/replace #"^###### " "h6. ")
      (string/replace #"^##### " "h5. ")
      (string/replace #"^#### " "h4. ")
      (string/replace #"^### " "h3. ")
      (string/replace #"^## " "h2. ")
      (string/replace #"^# " "h1. ")))
```

#### Ordered Lists

Turning Markdown into a single-level ordered list in Jira was relatively easy after relearning some regex, since every list item that's not indented simply begins with a single pound sign: 

```
(string/replace line #"^[0-9]+. " "# ")
```

This regex says "one or more digits between 0 and 9 followed by a period and a space, specifically at the beginning of the line only." That'll turn `1. Number 1` into `# Number 1` as well `999. Number 999` into `# Number 999`, and any number in between or even higher. 

Turning ordered lists from Jira into Markdown was a different story altogether. In order to convert any number of single pound signs into the appropriate number, I first took the list that was the description split by every newline character and filtered it by lines that began with a pound sign followed by a space. The `Clojure.string/starts-with?` function proved very useful for this. Then, convert each pound sign into the appropriate number, I used `map-indexed` and `string/replace` together. Then I used `string/join` to turn the resulting list into one string where each element was separated by a newline character. 

```
(defn- ->epic-ordered-list [list]
  (string/join "\n" (map-indexed (fn [idx line] (string/replace line #"# " (str (inc idx) ". "))) list)))
```

## Inserting at a Specific Index

With the above ordered list formatted into Markdown, another challenge arose: inserting this chunk of the description back into the whole description in the proper place. To do this, I first needed to find the index where the unformatted ordered list started, for which I used the Java interop `.indexOf`. Then after counting how many items were in the list, I could then grab everything before the list, everything after the list, and concatenate it all together with the new list in the middle. 

```
(defn- replace-list-with-formatted [formatted-lines epic-ordered-list index-of-list length]
  (let [before (take index-of-list formatted-lines)
        after  (drop (+ index-of-list length) formatted-lines)]
    (concat before (list epic-ordered-list) after)))
```

Here, `formatted-lines` is a list where every element has gone through a series of `string/replace` functions for everything but formatting ordered lists, so this one of the last pieces of the process before the fully-reformated description is returned. 

## Next Steps

The next things I will need to work on is accounting for code blocks and blockquotes that contain newline characters in them, as my current approach with going line-by-line may not fully work for those cases. I also need to add parsing for italics and bold text. 

## Further Reading

If you'd like to dive deeper into Jira's unique syntax or regex in Clojure, I found these links helpful: 

[Jira Syntax](https://jira.atlassian.com/secure/WikiRendererHelpAction.jspa?section=all)

[Eric Normand's Blog](https://ericnormand.me/mini-guide/clojure-regex)

[This post from Ariel Ortiz](https://arielortiz.info/s202211/tc2037/notes/notes_regex.html)
