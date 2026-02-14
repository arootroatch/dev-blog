/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    qualities: [5, 20, 75],
  },
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
