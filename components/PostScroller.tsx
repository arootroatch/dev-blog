import Postcard from "./Postcard";
import styles from "@/components/postScroller.module.css";
import { PostScrollerProps } from "@/lib/interfaces";
import Link from "next/link";

export default function PostScroller({ title, category, allPostsButton, id, count }: PostScrollerProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={`${styles.title}`} id={id ? id : undefined}>{title}</h2>
        {count && <div className={styles.count}>{count} articles</div>}
      </div>
      <div className={styles.categoryWrapper}>
        {category.map((post) => (
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
