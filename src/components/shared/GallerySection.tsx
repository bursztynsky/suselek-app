'use client';

// src/components/InstagramSection.tsx
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setTimeout(() => {
      setPosts(placeholderPosts);
      setLoading(false);
    }, 500);
  }, []);


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

        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll-left hover:pause-animation">
            {/* Duplicate posts 3 times for seamless loop */}
            {[...posts, ...posts, ...posts].map((post, index) => (
              <a
                key={`${post.id}-${index}`}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl transition-transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
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
