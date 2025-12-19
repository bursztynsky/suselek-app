'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import PhoneButton from './PhoneButton';
import SuselekLogo from '../assets/SUSELEK_logo_small.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkBackgroundColor = () => {
      const header = document.querySelector('header');
      if (!header) return;

      const originalPointerEvents = header.style.pointerEvents;
      header.style.pointerEvents = 'none';

      const headerRect = header.getBoundingClientRect();
      const headerCenter = headerRect.top + headerRect.height / 2;

      const elementAtCenter = document.elementFromPoint(window.innerWidth / 2, headerCenter);

      header.style.pointerEvents = originalPointerEvents;

      if (elementAtCenter) {
        const section = elementAtCenter.closest('section, main, body');
        if (section) {
          const bgColor = window.getComputedStyle(section).backgroundColor;

          const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);

            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

            setInvertColors(luminance > 0.5);
          }
        }
      }
    };

    window.addEventListener('scroll', checkBackgroundColor);
    window.addEventListener('resize', checkBackgroundColor);

    const timer = setTimeout(checkBackgroundColor, 100);

    return () => {
      window.removeEventListener('scroll', checkBackgroundColor);
      window.removeEventListener('resize', checkBackgroundColor);
      clearTimeout(timer);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSectionClick =
    (sectionId: string, targetPath: string = '/') =>
    (e: React.MouseEvent) => {
      e.preventDefault();
      closeMenu();

      if (sectionId === 'galeria') {
        scrollToElement(sectionId);
        return;
      }

      if (pathname !== targetPath) {
        router.push(targetPath);
        setTimeout(() => scrollToElement(sectionId), 100);
      } else {
        scrollToElement(sectionId);
      }
    };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-transparent py-4 ${invertColors ? 'text-primary' : 'text-secondary'}`}
    >
      <nav className="container flex justify-between items-center relative px-4 lg:px-8">
        <div className="flex items-center z-[52]">
          <Link href="/">
            <img src={SuselekLogo} alt="SUSELEK" className="h-10 w-auto md:h-8" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="hidden max-lg:flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2 z-[52]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 rounded transition-all duration-300 ${invertColors ? 'bg-primary' : 'bg-secondary'} ${isMenuOpen ? 'rotate-45 translate-x-[7px] translate-y-[7px]' : ''}`}
          ></span>
          <span
            className={`w-6 h-0.5 rounded transition-all duration-300 ${invertColors ? 'bg-primary' : 'bg-secondary'} ${isMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`w-6 h-0.5 rounded transition-all duration-300 ${invertColors ? 'bg-primary' : 'bg-secondary'} ${isMenuOpen ? '-rotate-45 translate-x-[7px] -translate-y-[7px]' : ''}`}
          ></span>
        </button>

        <ul
          className={`flex list-none m-0 p-0 gap-6 items-center max-lg:fixed max-lg:top-0 max-lg:h-screen max-lg:w-4/5 max-lg:max-w-[400px] max-lg:bg-primary max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:px-8 max-lg:py-8 max-lg:shadow-[-2px_0_10px_rgba(0,0,0,0.1)] max-lg:transition-all max-lg:duration-300 ${isMenuOpen ? 'max-lg:right-0' : 'max-lg:-right-full'}`}
        >
          <li className="m-0 max-lg:w-full max-lg:text-center">
            <a
              href="#hotel"
              className={`no-underline whitespace-nowrap transition-colors duration-300 max-lg:text-xl max-lg:block max-lg:py-2 max-lg:text-secondary hover:text-white ${invertColors ? 'text-primary max-lg:text-secondary hover:text-primary/80' : 'text-secondary'}`}
              onClick={handleSectionClick('hotel')}
            >
              Hotel dla zwierząt
            </a>
          </li>
          <li className="m-0 max-lg:w-full max-lg:text-center">
            <a
              href="#strzyzenie"
              className={`no-underline whitespace-nowrap transition-colors duration-300 max-lg:text-xl max-lg:block max-lg:py-2 max-lg:text-secondary hover:text-white ${invertColors ? 'text-primary max-lg:text-secondary hover:text-primary/80' : 'text-secondary'}`}
              onClick={handleSectionClick('strzyzenie')}
            >
              Strzyżenie
            </a>
          </li>
          <li className="m-0 max-lg:w-full max-lg:text-center">
            <a
              href="#psychologia"
              className={`no-underline whitespace-nowrap transition-colors duration-300 max-lg:text-xl max-lg:block max-lg:py-2 max-lg:text-secondary hover:text-white ${invertColors ? 'text-primary max-lg:text-secondary hover:text-primary/80' : 'text-secondary'}`}
              onClick={handleSectionClick('psychologia')}
            >
              Psychologia zwierząt
            </a>
          </li>
          <li className="m-0 max-lg:w-full max-lg:text-center">
            <a
              href="#galeria"
              className={`no-underline whitespace-nowrap transition-colors duration-300 max-lg:text-xl max-lg:block max-lg:py-2 max-lg:text-secondary hover:text-white ${invertColors ? 'text-primary max-lg:text-secondary hover:text-primary/80' : 'text-secondary'}`}
              onClick={handleSectionClick('galeria')}
            >
              Galeria
            </a>
          </li>
          <li className="m-0 max-lg:w-full max-lg:text-center">
            <a
              href="#o-mnie"
              className={`no-underline whitespace-nowrap transition-colors duration-300 max-lg:text-xl max-lg:block max-lg:py-2 max-lg:text-secondary hover:text-white ${invertColors ? 'text-primary max-lg:text-secondary hover:text-primary/80' : 'text-secondary'}`}
              onClick={handleSectionClick('o-mnie', '/about')}
            >
              O nas
            </a>
          </li>
          <li className="m-0 max-lg:w-full max-lg:text-center">
            <a
              href="#cennik"
              className={`no-underline whitespace-nowrap transition-colors duration-300 max-lg:text-xl max-lg:block max-lg:py-2 max-lg:text-secondary hover:text-white ${invertColors ? 'text-primary max-lg:text-secondary hover:text-primary/80' : 'text-secondary'}`}
              onClick={handleSectionClick('cennik')}
            >
              Cennik
            </a>
          </li>
          <li className="m-0 max-lg:w-full max-lg:text-center">
            <a
              href="#regulamin"
              className={`no-underline whitespace-nowrap transition-colors duration-300 max-lg:text-xl max-lg:block max-lg:py-2 max-lg:text-secondary hover:text-white ${invertColors ? 'text-primary max-lg:text-secondary hover:text-primary/80' : 'text-secondary'}`}
              onClick={handleSectionClick('regulamin')}
            >
              Regulamin
            </a>
          </li>
          <li className="hidden max-lg:block w-full text-center mt-4">
            <PhoneButton
              phoneNumber="+48601155887"
              displayNumber="+48 601 155 887"
              inverted={invertColors}
            />
          </li>
        </ul>
        <div className="block max-lg:hidden">
          <PhoneButton
            phoneNumber="+48601155887"
            displayNumber="+48 601 155 887"
            inverted={invertColors}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
