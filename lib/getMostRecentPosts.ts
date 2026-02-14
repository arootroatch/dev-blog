import { Posts } from "./interfaces";
import parseDate from "./parseDate";

export default function getMostRecentPosts(posts: Posts[], amount: number) {
  return posts
    .toSorted(
      (a, b) =>
        parseDate(b.data.updated).getTime() - parseDate(a.data.updated).getTime()
    )
    .slice(0, amount);
}
