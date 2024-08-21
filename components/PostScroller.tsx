"use client"
import Postcard from "./Postcard";
import styles from "@/components/postScroller.module.css";
import {Posts, PostScrollerProps} from "@/lib/interfaces";
import Link from "next/link";
import {useState} from "react";


export default function PostScroller({title, category, allPostsButton, id, count}: PostScrollerProps) {
  const initalCategory = title == "Recent" ? category.toSorted(sortByDate) : category.toSorted(sortByTitle);
  const [sortedCategory, setSortedCategory] = useState(initalCategory);
  const [sortedByTitle, setSortedByTitle] = useState(title != "Recent");
  const [sortedByDate, setSortedByDate] = useState(title == "Recent");

  function titleSort() {
    if (!sortedByTitle) {
      setSortedByTitle(true);
      setSortedByDate(false);
      setSortedCategory(category.toSorted(sortByTitle));
    }
  }

  function dateSort() {
    setSortedByTitle(false);
    setSortedByDate(true);
    setSortedCategory(category.toSorted(sortByDate));
  }

  function sortByTitle(a: Posts, b: Posts) {
    const title1 = a.data.title;
    const title2 = b.data.title;

    if (title1 < title2) return -1;
    else return 1;
  }

  function sortByDate(a: Posts, b: Posts) {
    const date1 = new Date(a.data.date).getTime();
    const date2 = new Date(b.data.date).getTime();

    return date2 - date1;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.sortBtnGroup}>
          <button
            onClick={titleSort}
            className={`${styles.sortBtn} ${sortedByTitle && styles.selectedSort}`}>
            A - Z
          </button>
          <button
            onClick={dateSort}
            className={`${styles.sortBtn} ${sortedByDate && styles.selectedSort}`}>
            Most Recent
          </button>
        </div>
        <h2 className={`${styles.title}`} id={id ? id : undefined}>{title}</h2>
        {count && <div className={styles.count}>{count} article{(count > 1) && "s"}</div>}
      </div>
      <div className={styles.categoryWrapper}>
        {sortedCategory.map((post) => (
          <Postcard
            key={post.filePath}
            title={post.data.title}
            image={post.data.thumbnail}
            description={post.data.description}
            date={post.data.date}
            as={`/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/[slug]`}
          />
        ))}
      </div>
      {allPostsButton && <Link href={'/'} className={`${styles.btn} btn`}>Browse All Posts</Link>}
    </div>
  );
}
