export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap:
      'https://creator-finance-tools.vercel.app/sitemap.xml',
  };
}