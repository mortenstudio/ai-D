import adapter from '@sveltejs/adapter-vercel';
 
export default {
  kit: {
    adapter: adapter(),
    version: {
      name: Date.now().toString()
    }
  },
};