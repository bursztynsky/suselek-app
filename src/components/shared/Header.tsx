'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logo from '../../assets/SUSELEK_logo_small.svg';

const PhoneButton: React.FC<{ inverted: boolean }> = ({ inverted }) => {
  return (
    <a
      href="tel:+48601155887"
      className={`inline-flex items-center py-3 px-6 rounded-[var(--radius-pill)] border text-lg transition-all duration-300 cursor-pointer no-underline ${
        inverted
          ? 'text-primary border-primary hover:bg-primary hover:text-secondary'
          : 'text-secondary border-secondary hover:bg-secondary hover:text-primary'
      }`}
      aria-label="Zadzwoń pod numer +48 601 155 887"
    >
      <span className="mr-2 flex items-center leading-none">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1.1em] h-[1.1em] block"
        >
          <path
            d="M14.6667 11.2797V13.2797C14.6675 13.4654 14.6294 13.6492 14.555 13.8193C14.4807 13.9894 14.3716 14.1421 14.2348 14.2676C14.0979 14.3932 13.9364 14.4887 13.7605 14.5482C13.5847 14.6077 13.3983 14.6298 13.2134 14.6131C11.1619 14.3902 9.19137 13.6892 7.46004 12.5664C5.84926 11.5428 4.48359 10.1772 3.46004 8.56641C2.33336 6.82721 1.6322 4.84707 1.41337 2.78641C1.39671 2.60205 1.41862 2.41625 1.4777 2.24082C1.53679 2.0654 1.63175 1.9042 1.75655 1.76749C1.88134 1.63077 2.03324 1.52155 2.20256 1.44675C2.37189 1.37196 2.55493 1.33325 2.74004 1.33307H4.74004C5.06357 1.32989 5.37723 1.44446 5.62254 1.65543C5.86786 1.8664 6.02809 2.15937 6.07337 2.47974C6.15779 3.11978 6.31434 3.74822 6.54004 4.35307C6.62973 4.59169 6.64914 4.85102 6.59597 5.10033C6.5428 5.34964 6.41928 5.57848 6.24004 5.75974L5.39337 6.60641C6.34241 8.27544 7.72434 9.65737 9.39337 10.6064L10.24 9.75974C10.4213 9.5805 10.6501 9.45697 10.8994 9.4038C11.1488 9.35063 11.4081 9.37004 11.6467 9.45974C12.2516 9.68544 12.88 9.84199 13.52 9.92641C13.8439 9.97209 14.1396 10.1352 14.3511 10.3847C14.5625 10.6343 14.6748 10.9528 14.6667 11.2797Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="leading-none">+48 601 155 887</span>
    </a>
  );
};

const Header: React.FC = () => {
  const [isLightBg, setIsLightBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Detect if header is over HotelSection or ReviewsSection (dark backgrounds)
  useEffect(() => {
    const checkBackground = () => {
      const header = document.querySelector('header');
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const headerCenter = headerRect.top + headerRect.height / 2;

      // Check if header is over hotel or reviews sections
      const hotelSection = document.getElementById('hotel');
      const reviewsSection = document.getElementById('reviews');

      let isOverDarkSection = false;

      if (hotelSection) {
        const rect = hotelSection.getBoundingClientRect();
        if (rect.top <= headerCenter && rect.bottom >= headerCenter) {
          isOverDarkSection = true;
        }
      }

      if (reviewsSection) {
        const rect = reviewsSection.getBoundingClientRect();
        if (rect.top <= headerCenter && rect.bottom >= headerCenter) {
          isOverDarkSection = true;
        }
      }

      // isLightBg should be false when over dark sections (hotel/reviews)
      setIsLightBg(!isOverDarkSection);
    };

    checkBackground();
    window.addEventListener('scroll', checkBackground);
    window.addEventListener('resize', checkBackground);

    return () => {
      window.removeEventListener('scroll', checkBackground);
      window.removeEventListener('resize', checkBackground);
    };
  }, [pathname]);

  const handleNavClick =
    (sectionId: string, targetPath: string = '/') =>
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      // If it's a dedicated page (not home page with sections), just navigate to it
      if (targetPath !== '/') {
        router.push(targetPath);
        return;
      }

      const scrollTo = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (pathname !== targetPath) {
        router.push(targetPath);
        setTimeout(scrollTo, 100);
      } else {
        scrollTo();
      }
    };

  const navItems = [
    { id: 'hotel', label: 'Hotel dla zwierząt', path: '/' },
    { id: 'strzyzenie', label: 'Strzyżenie', path: '/' },
    { id: 'psychologia', label: 'Psychologia zwierząt', path: '/' },
    { id: 'galeria', label: 'Galeria', path: '/' },
    { id: 'o-mnie', label: 'O nas', path: '/about' },
    { id: 'cennik', label: 'Cennik', path: '/cennik' },
    { id: 'regulamin', label: 'Regulamin', path: '/' },
  ];

  const textColor = isLightBg ? 'text-primary' : 'text-secondary';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 py-4">
        <nav className="max-w-7xl mx-auto px-4">
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center">
              <img src={logo.src} alt="SUSELEK" className="h-12 w-12" />
            </Link>

            <ul className="flex items-center gap-6 m-0 p-0 list-none">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${textColor} no-underline hover:opacity-70 transition-opacity duration-300`}
                    onClick={handleNavClick(item.id, item.path)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <PhoneButton inverted={isLightBg} />
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src={logo.src} alt="SUSELEK" className="h-10 w-10" />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 w-7 h-7 justify-center items-end focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`h-0.5 w-full transition-all duration-300 ${textColor === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`}
              ></span>
              <span
                className={`h-0.5 w-full transition-all duration-300 ${textColor === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`}
              ></span>
              <span
                className={`h-0.5 w-1/2 transition-all duration-300 ${textColor === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`}
              ></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-secondary z-[100] lg:hidden">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
              >
                <img src={logo.src} alt="SUSELEK" className="h-10 w-10" />
              </Link>

              {/* Close Button (X) */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <ul className="flex flex-col gap-6 m-0 p-0 list-none mb-8">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-primary text-2xl no-underline hover:opacity-70 transition-opacity duration-300 block text-left"
                    onClick={handleNavClick(item.id, item.path)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Phone Button at Bottom */}
            <div className="mt-auto">
              <PhoneButton inverted={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
