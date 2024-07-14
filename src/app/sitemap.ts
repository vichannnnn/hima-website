import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://himaa.me',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://himaa.me/en',
          ja: 'https://himaa.me/ja',
        },
      },
    },
    {
      url: 'https://himaa.me/links',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://himaa.me/en/links',
          ja: 'https://himaa.me/ja/links',
        },
      },
    },
  ];
}
