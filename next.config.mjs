
import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites(){
    return {
      beforeFiles: [
        {
          source: '/ttt',
          destination: '/ttt/index.html',
          permanent: true
        },
      ],
    }
  }
};

export default withMDX(nextConfig);
