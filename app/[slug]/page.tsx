import Head from "next/head";
import styles from "@/app/blog.module.css";
import Hero from "@/components/Hero";
import getPost from "@/lib/getPost";
import { compileMDX } from "next-mdx-remote/rsc";
import MyProgressBar from "@/components/ProgressBar";
import { Frontmatter } from "@/lib/interfaces";
import PostSidebar from "@/components/PostSidebar";
import PostScroller from "@/components/PostScroller";
import getPosts from "@/lib/getPosts";
import getMostRecentPosts from "@/lib/getMostRecentPosts";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const markdown = await getPost(params.slug);
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  const date = new Date(frontmatter.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updated = new Date(frontmatter.updated);
  const formattedUpdate = updated.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isUpdated = formattedUpdate !== formattedDate;

  const gated = frontmatter.gated;

  const posts = await getPosts();
  const recent = getMostRecentPosts(posts, 5);

  const slug = params.slug;
  const pageURL = `https://arootroatch-blog.vercel.app/${slug}`;

  return (
    <div>
      <Head>
        <title>{frontmatter.title} | Sound Roots Mentorship</title>
      </Head>
      <article className={styles.article}>
        <header>
          <MyProgressBar />
          <Hero
            src={frontmatter.thumbnail}
            alt={frontmatter.thumbnail}
            h1={frontmatter.title}
            desc={frontmatter.description}
            date={formattedDate}
            author={frontmatter.author}
            updated={isUpdated ? formattedUpdate : undefined}
          />
        </header>
        <div className={styles.container}>
          <div className={styles.content}>
              <div className={styles.main}>{content}</div>
            <PostSidebar pageURL={pageURL} />
          </div>
        </div>
      </article>
      <PostScroller
        title='Explore more articles'
        category={recent}
        allPostsButton
      />
    </div>
  );
}
