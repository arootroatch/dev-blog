import { Posts } from "./interfaces";

const categories = [
  "Algorithms",
  "Clojure",
  "JavaScript",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "React",
  "Clean Code Practices",
  "Workflows",
  "Uncategorized"
];

export default function sortPostsByCategory(posts: Posts[]) {
  let categorized: Posts[][] = [];
  categories.forEach((category) => {
    categorized.push(posts.filter((post) => post.data.category === category));
  });
  categorized = categorized.filter((category) => category.length > 0);
  return categorized;
}
