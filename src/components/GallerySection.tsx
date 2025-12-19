'use client';

// src/components/InstagramSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/GallerySection.module.scss';
import krolik1 from '../assets/krolik1.png';
import krolik2 from '../assets/krolik2.png';
import krolik3 from '../assets/krolik3.png';
import swinka1 from '../assets/swinka1.png';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url?: string;
}

// Placeholder Instagram posts - replace with actual API integration
const placeholderPosts = [
  {
    id: '1',
    media_url: krolik1.src,
    permalink: 'https://www.instagram.com/hotelik.suselek/',
    media_type: 'IMAGE',
  },
  {
    id: '2',
    media_url: krolik2.src,
    permalink: 'https://www.instagram.com/hotelik.suselek/',
    media_type: 'IMAGE',
  },
  {
    id: '3',
    media_url: krolik3.src,
    permalink: 'https://www.instagram.com/hotelik.suselek/',
    media_type: 'IMAGE',
  },
  {
    id: '4',
    media_url: swinka1.src,
    permalink: 'https://www.instagram.com/hotelik.suselek/',
    media_type: 'IMAGE',
  },
  {
    id: '5',
    media_url: krolik1.src,
    permalink: 'https://www.instagram.com/hotelik.suselek/',
    media_type: 'IMAGE',
  },
  {
    id: '6',
    media_url: krolik2.src,
    permalink: 'https://www.instagram.com/hotelik.suselek/',
    media_type: 'IMAGE',
  },
];

const GallerySection: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // TODO: Replace with actual Instagram API call
    // For now, using placeholder data
    setTimeout(() => {
      setPosts(placeholderPosts);
      setLoading(false);
    }, 500);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || loading) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.2; // pixels per frame - adjust for speed

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Calculate the width of the content
      const maxScroll = carousel.scrollWidth / 2; // Divide by 2 because we duplicate content

      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      carousel.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(scroll);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [loading]);

  if (loading) {
    return (
      <section className={styles.instagramSection}>
        <div className={styles.container}>
          <p>Ładowanie...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className={styles.instagramSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Obserwuj nas{' '}
          <a
            href="https://www.instagram.com/hotelik.suselek/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramLink}
          >
            @hotelik.suselek
          </a>
        </h2>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel} ref={carouselRef}>
              {/* Render posts twice for infinite loop effect */}
              {[...posts, ...posts].map((post, index) => (
                <a
                  key={`${post.id}-${index}`}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.carouselItem}
                >
                  <img
                    src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                    alt="Instagram post"
                    className={styles.carouselImage}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
