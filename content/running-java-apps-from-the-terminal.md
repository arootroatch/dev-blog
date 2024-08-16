---
layout: blog
title: Running Java Apps from the Terminal
author: Alex Root-Roatch
description: How to compile and run Java applications in the command line
date: 2024-08-15T21:34:30-6:00
updated: 2024-08-15T21:34:30-6:00
thumbnail: /img/java-banner.png
category: [Java]
---

## Leiningen Who?

This past week, I've been working on a larger project in Java and needed to be able to run the program with a terminal command. Unlike Clojure projects built with Leiningen, I couldn't simply type `lein run` to execute my application. Instead, Java code first needs to be compiled to Java Bytecode, and the resulting Bytecode class files are executed. 

## Compiling to Bytecode

Java is a compiled language, but it doesn't compile to binary machine code. Since the Java Runtime Environment uses the Java Virtual Machine, Java compiles to Java Bytecode, which is what the JVM speaks. 

To compile Java files, we use the `javac` terminal command and point it to our Java files. We can also specify a specific directory to place the compiled files into with the `-d` option. Not specifying an output directory will place the compiled files in the same directory as the Java files. 

Java files have a `.java` extension while compiled Java class files have a `.class` extension.

Here's an example of compiling all the files in the `src` directory and placing the class files in the `out` directory: 

```
javac -d /Users/username/current-projects/my-project/out
/Users/username/current-projects/my-project/src/*.java
```

The `*` is a wildcard character that says "compile all the files in this folder that have the `.java` extension." If you only had one file to compile, you would simply enter the name of that file. 

These file paths are absolute paths starting from root, so if your terminal session is already inside the `my-project` folder, you can simple type `out` or `./out` and `src` or `./src`.

However, if you're saving this command into a shell script file, you'll need to use the absolute paths. I have my compile script saved to a `compile.sh` bash file in the `my-project` folder; this makes it so when I want to compile my code I simply type `bash compile.sh` in my terminal instead of remembering the command. 

## Targeting Older Compile Versions

In my current project, I'm using a suite of tests that works with Java 21, the newest LTS version. On my system, however, I have Java 22 installed. This meant that the test suite couldn't run my code! Instead, I got an error about my class files being on class file version 66 and how they needed to be class file version 65 or earlier. 

Thankfully, the Java compiler allows us to target previous versions when we compile using the `--release` option: 

```
javac --release 21 -d /Users/username/current-projects/my-project/out
/Users/username/current-projects/my-project/src/*.java
```

Voilá! Problem solved.

## Running the Code

To execute the compiled code, we use the `java` terminal command (note the lack of the letter "c"). Our `Main.java` file will be compiled to `Main.class`, but the `.class` extension is not needed when executed the class file. 

There's one "gotcha" here, though: if we have multiple files, we can't simply call `java out/Main`. We need to tell Java the path at which it can find the rest of the code using the `-cp` or `classpath` option. Once specifying the classpath, we don't need to include the entire filepath when executing `Main`: 

```
java -cp /User/username/current-projects/my-project/out Main
```

If you have all of your files in a package inside your source directory, the files will be compiled in a package in your out directory. To execute `Main`, use dot notation: 

```
java -cp /User/username/current-projects/my-project/out MyPackage.Main
```

To enter arguments to `Main`, simply type them at the end of the command after `MyPackage.Main.`

I have this script saved as a `my-app.sh` bash file, so I can simply type `bash my-app.sh` to run my program. To allow arguments into the bash file, add `--args "$@"` in the shell script so that anything typed after `bash my-app.sh` gets passed into the script at the right place as a string array. 

### Extra Credit

You could take this one step further and add the `my-app.sh` file to the `/usr/local/bin` directory to make it its own terminal command. If the file includes a shebang at the top, then you can simply type `my-app` in the terminal to run your app. 


