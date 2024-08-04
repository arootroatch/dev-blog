import {MetadataRoute} from 'next'
import getPosts from "@/lib/getPosts";
import {Sitemap} from "@/lib/interfaces";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();

  let sitemapData: MetadataRoute.Sitemap = posts.map(post => {
    return {
      url: `https://arootroatch-blog.vercel.app/${post.filePath.replace(/\.mdx?$/, "")}`,
      lastModified: new Date(post.data.updated),
      changeFrequency: "yearly",
      priority: 0.8,
    }
  })

  const homepage: Sitemap = {
    url: "https://arootroatch-blog.vercel.app",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }

  sitemapData.unshift(homepage)

  return sitemapData;
}