// src/components/InstagramSection.tsx
import React, {useState, useEffect, useRef} from 'react';
import styles from '../styles/InstagramSection.module.scss';

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
        media_url: '/src/assets/krolik1.png',
        permalink: 'https://www.instagram.com/hotelik.suselek/',
        media_type: 'IMAGE',
    },
    {
        id: '2',
        media_url: '/src/assets/krolik2.png',
        permalink: 'https://www.instagram.com/hotelik.suselek/',
        media_type: 'IMAGE',
    },
    {
        id: '3',
        media_url: '/src/assets/krolik3.png',
        permalink: 'https://www.instagram.com/hotelik.suselek/',
        media_type: 'IMAGE',
    },
    {
        id: '4',
        media_url: '/src/assets/swinka1.png',
        permalink: 'https://www.instagram.com/hotelik.suselek/',
        media_type: 'IMAGE',
    },
    {
        id: '5',
        media_url: '/src/assets/krolik1.png',
        permalink: 'https://www.instagram.com/hotelik.suselek/',
        media_type: 'IMAGE',
    },
    {
        id: '6',
        media_url: '/src/assets/krolik2.png',
        permalink: 'https://www.instagram.com/hotelik.suselek/',
        media_type: 'IMAGE',
    },
];

const InstagramSection: React.FC = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // TODO: Replace with actual Instagram API call
        // For now, using placeholder data
        setTimeout(() => {
            setPosts(placeholderPosts);
            setLoading(false);
        }, 500);
    }, []);

    const scrollToIndex = (index: number) => {
        if (carouselRef.current) {
            const scrollAmount = index * (243 + 16); // image width + gap
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };

    const handlePrev = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const maxIndex = posts.length - 1;
        const newIndex = currentIndex < maxIndex ? currentIndex + 1 : maxIndex;
        scrollToIndex(newIndex);
    };

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
        <section id="instagram" className={styles.instagramSection}>
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
                    <button
                        className={`${styles.carouselButton} ${styles.prevButton}`}
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        aria-label="Previous"
                    >
                        ‹
                    </button>

                    <div className={styles.carouselContainer}>
                        <div className={styles.carousel} ref={carouselRef}>
                            {posts.map((post) => (
                                <a
                                    key={post.id}
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

                    <button
                        className={`${styles.carouselButton} ${styles.nextButton}`}
                        onClick={handleNext}
                        disabled={currentIndex >= posts.length - 1}
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;

