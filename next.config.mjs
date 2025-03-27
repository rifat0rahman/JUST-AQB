/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: "5mb", // Set the desired size limit here
      },
    },
    images:{
      domains: ['cse.just.edu.bd'],
    }
  };
  
  export default nextConfig;
   
  