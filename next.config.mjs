/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites(){
    return {
      beforeFiles: [
        {
          source: '/ttt',
          destination: '/ttt/index.html',
        },
      ],
    }
  }
};

export default nextConfig;
