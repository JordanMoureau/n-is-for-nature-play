import fs from "fs";
import path from "path";

const siteUrl = "https://nisfornatureplay.com";

const postsDir = path.join(process.cwd(), "src", "app", "blog", "posts");

function getPostSlugs() {
  return fs
    .readdirSync(postsDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith("_") &&
        !entry.name.startsWith("(") &&
        !entry.name.startsWith("[")
    )
    .map((entry) => entry.name);
}

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

  const postPaths = getPostSlugs().map((slug) => `/blog/posts/${slug}`);

  return [...pagePaths, ...postPaths].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
