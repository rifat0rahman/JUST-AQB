/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: "10mb", // Set the desired size limit here
      },
    },
  };
  
  export default nextConfig;
   
  