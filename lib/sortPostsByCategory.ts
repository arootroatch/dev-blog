import { Posts } from "./interfaces";

const categories = [
  "Algorithms",
  "Clean Code Practices",
  "Clojure",
  "CSS",
  "HTML",
  "Java",
  "JavaScript",
  "Python",
  "React",
  "SQL",
  "Workflows",
  "Uncategorized"
];

export default function sortPostsByCategory(posts: Posts[]) {
  let categorized: Posts[][] = [];
  categories.forEach((category) => {
    categorized.push(posts.filter((post) => post.data.category.includes(category)));
  });
  categorized = categorized.filter((category) => category.length > 0);
  return categorized;
}
