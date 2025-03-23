import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'rifat-rahman', 
        api_key: '589597695678498', 
        api_secret: 'hDBlKe-LoGIghab6mCjrl00ANaE' // Click 'View API Keys' above to copy your API secret
    });
        
})();
export default cloudinary;