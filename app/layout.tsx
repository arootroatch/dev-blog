import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "normalize.css";
import "highlight.js/styles/github.css";
import Providers from "./providers";
import getPosts from "@/lib/getPosts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Alex Root-Roatch | Dev Blog",
    template: "%s | Alex Root-Roatch",
  },
  description: "Articles about coding and web development, covering Clojure, Java, JavaScript, React, and more.",
  metadataBase: new URL("https://arootroatch-blog.vercel.app"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getPosts();
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar posts={posts} />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
