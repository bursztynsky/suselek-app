'use client';

// src/components/InstagramSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import krolik1 from '../../assets/krolik1.png';
import krolik2 from '../../assets/krolik2.png';
import krolik3 from '../../assets/krolik3.png';
import swinka1 from '../../assets/swinka1.png';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url?: string;
}

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef<number | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      setPosts(placeholderPosts);
      setLoading(false);
    }, 500);
  }, []);

  // JS auto-scroll for mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || posts.length === 0) return;

    const speed = 30;
    let lastTime: number | null = null;

    const scroll = (timestamp: number) => {
      if (lastTime !== null && !isPaused.current && el) {
        const delta = (timestamp - lastTime) / 1000;
        el.scrollLeft += speed * delta;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      lastTime = timestamp;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [posts]);

  const onTouchStart = (e: React.TouchEvent) => {
    isPaused.current = true;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    // Resume auto-scroll after 2s of inactivity
    setTimeout(() => {
      isPaused.current = false;
    }, 2000);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isPaused.current = true;
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
    setTimeout(() => {
      isPaused.current = false;
    }, 2000);
  };

  if (loading) {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <p className="text-text">Ładowanie...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="bg-white py-8 md:py-20">
      <div className="container mx-auto max-w-full px-0">
        <h2 className="text-[16px] md:text-[40px] text-center text-black mb-8 md:mb-12 px-4">
          <span className="italic font-light">Obserwuj nas</span>{' '}
          <a
            href="https://www.instagram.com/hotelik.suselek/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-normal hover:underline"
          >
            @hotelik.suselek
          </a>
        </h2>

        {/* Mobile: swipeable + auto-scroll */}
        <div
          ref={scrollRef}
          className="flex md:hidden gap-4 overflow-x-auto no-scrollbar py-6 px-4 cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {[...posts, ...posts].map((post, index) => (
            <a
              key={`${post.id}-${index}`}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-64 h-64 rounded-2xl"
              onClick={e => isDragging.current && e.preventDefault()}
            >
              <img
                src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                alt="Instagram post"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </a>
          ))}
        </div>

        {/* Desktop: CSS auto-scroll animation */}
        <div className="relative overflow-x-hidden hidden md:block">
          <div className="flex gap-4 animate-scroll-left hover:pause-animation py-6 px-2">
            {[...posts, ...posts, ...posts].map((post, index) => (
              <a
                key={`${post.id}-${index}`}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 h-80 rounded-2xl transition-all hover:scale-105 hover:shadow-md"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt="Instagram post"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
