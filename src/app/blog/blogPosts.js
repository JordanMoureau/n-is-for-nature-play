"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./blog.module.css";
import { posts } from "./posts.js";

const POSTS_PER_PAGE = 5;

export default function BlogPosts() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const visiblePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const changePage = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.posts}>
        {visiblePosts.map((post, index) => (
          <article
            key={post.title}
            className={`${styles.post} ${
              index % 2 !== 0 ? styles.postReverse : ""
            }`}
          >
            <Link href={post.href} className={styles.imageWrap}>
              <Image
                src={post.image}
                alt=""
                width={800}
                height={600}
                className={styles.postImage}
              />
            </Link>

            <div className={styles.postContent}>
              <h3>
                <Link href={post.href}>{post.title}</Link>
              </h3>

              <p>{post.excerpt}</p>

              <Link href={post.href} className={styles.readMore}>
                Read More <span>{">"}</span>
              </Link>
            </div>
          </article>
        ))}

        <div className={styles.pagination}>
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={currentPage === page ? styles.activePage : ""}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}
