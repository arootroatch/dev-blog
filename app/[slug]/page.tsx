import type { Metadata } from "next";
import styles from "@/app/blog.module.css";
import Hero from "@/components/Hero";
import getPost from "@/lib/getPost";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import clojure from "highlight.js/lib/languages/clojure";
import javascript from "highlight.js/lib/languages/javascript";
import java from "highlight.js/lib/languages/java";
import ruby from "highlight.js/lib/languages/ruby";
import go from "highlight.js/lib/languages/go";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import python from "highlight.js/lib/languages/python";
import yaml from "highlight.js/lib/languages/yaml";
import sql from "highlight.js/lib/languages/sql";
import xml from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import MyProgressBar from "@/components/ProgressBar";
import { Frontmatter } from "@/lib/interfaces";
import PostSidebar from "@/components/PostSidebar";
import PostScroller from "@/components/PostScroller";
import getPosts from "@/lib/getPosts";
import getMostRecentPosts from "@/lib/getMostRecentPosts";
import parseDate from "@/lib/parseDate";
import matter from "gray-matter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const markdown = getPost(slug);
  const { data } = matter(markdown);
  const frontmatter = data as Frontmatter;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updated,
      images: [frontmatter.thumbnail],
      url: `https://arootroatch-blog.vercel.app/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: `${post.filePath.replace(/\.mdx?$/, "")}`,
  }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markdown = getPost(slug);
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: markdown,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypeHighlight, { languages: { clojure, javascript, java, ruby, go, css, scss, python, yaml, sql, xml, bash } }]],
      },
    },
  });

  const date = parseDate(frontmatter.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updated = parseDate(frontmatter.updated);
  const formattedUpdate = updated.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isUpdated = formattedUpdate !== formattedDate;

  const gated = frontmatter.gated;

  const posts = getPosts();
  const recent = getMostRecentPosts(posts, 10);

  const pageURL = `https://arootroatch-blog.vercel.app/${slug}`;

  return (
    <div>
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
