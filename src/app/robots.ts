import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true'
      ? 'https://yourusername.github.io/suselek-app'
      : 'http://localhost:3000';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
