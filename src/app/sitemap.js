import postSlugs from "./blog/postSlugs.json";

const siteUrl = "https://nisfornatureplay.com";

export default function sitemap() {
  const pagePaths = [
    "",
    "/about-nature-play",
    "/blog",
    "/contact-us",
    "/design-a-space",
    "/e-books-and-courses",
    "/e-books-and-courses/sensory-space-make-over",
    "/e-books-and-courses/nature-play-for-the-seven-senses",
    "/meet-jena",
    "/terms",
    "/the-ultimate-diy-guide",
  ];

  const postPaths = postSlugs.map((slug) => `/blog/posts/${slug}`);

  return [...pagePaths, ...postPaths].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
