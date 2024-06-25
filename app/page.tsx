import styles from "./blog.module.css";
import PostScroller from "@/components/PostScroller";
import Hero from "@/components/Hero";
import getPosts from "@/lib/getPosts";
import sortPostsByCategory from "@/lib/sortPostsByCategory";
import getMostRecentPosts from "@/lib/getMostRecentPosts";
import CategoryNav from "@/components/CategoryNav";

export default async function Home() {
  const posts = await getPosts();
  const categorized = sortPostsByCategory(posts);
  const recent = getMostRecentPosts(posts, 5);

  return (
    <>
      <header>
        <Hero
          alt='Alex hero image'
          src='/img/green-code-banner.jpeg'
          h1='Welcome to my coding blog!'
          desc='Here you can browse all of my posts about coding and web development, sorted by category.'
        />
      </header>
      <div className={styles.homeContent}>
        <CategoryNav categorized={categorized}/>
        <PostScroller title='Recent' category={recent}/>
        {categorized.map((category) => (
          <PostScroller
            key={category[0].data.title}
            title={category[0].data.category}
            category={category}
            id={category[0].data.category}
          />
        ))}
      </div>
    </>
  );
}
