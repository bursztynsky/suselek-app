// src/components/Footer.tsx
import React from 'react';
import logo from '../../assets/SUSELEK_logo_medium.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import fbIcon from '../../assets/fb-icon.svg';
import mailIcon from '../../assets/mail-icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left Side - Logo and Social Icons */}
          <div className="flex flex-col items-start gap-6 lg:w-[40%] lg:flex-shrink-0">
            <img src={logo} alt="SUSELEK Logo" className="h-24 w-auto" />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hotelik.suselek/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/hotelik.suselek"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                <img src={fbIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="mailto:hotelik.suselek@gmail.com"
                className="transition-opacity hover:opacity-70"
              >
                <img src={mailIcon} alt="Email" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Three Columns (stacked on mobile, grid on desktop) */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-24 flex-1">
            {/* LOKALIZACJA Column */}
            <div className="flex flex-col gap-1 lg:gap-3">
              <h4 className="text-sm font-bold tracking-wider">LOKALIZACJA</h4>
              <p className="text-sm font-light leading-relaxed">Kasztanowa 2</p>
              <p className="text-sm font-light leading-relaxed">05-830 Nadarzyn, Polska</p>
              <div className="mt-4 lg:mt-6 h-48 lg:h-[175px] lg:w-[255px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.123!2d20.806667!3d52.098611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471935d9c8c8c8c8%3A0x1234567890abcdef!2sKasztanowa%202%2C%2005-830%20Nadarzyn!5e0!3m2!1sen!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SUSELEK Location"
                ></iframe>
              </div>
            </div>

            {/* KONTAKT Column */}
            <div className="flex flex-col gap-1 lg:gap-3">
              <h4 className="text-sm font-bold tracking-wider">KONTAKT</h4>
              <a
                href="tel:+48601155887"
                className="text-sm font-light leading-relaxed hover:underline transition-all"
              >
                + 48 601 155 887
              </a>
              <a
                href="mailto:hotelik.suselek@gmail.com"
                className="text-sm font-light leading-relaxed hover:underline transition-all"
              >
                hotelik.suselek@gmail.com
              </a>
            </div>

            {/* DOKUMENTY Column */}
            <div className="flex flex-col gap-1 lg:gap-3">
              <h4 className="text-sm font-bold tracking-wider">DOKUMENTY</h4>
              <a
                href="#cennik"
                className="text-sm font-light leading-relaxed hover:underline transition-all"
              >
                Cennik
              </a>
              <a
                href="#regulamin"
                className="text-sm font-light leading-relaxed hover:underline transition-all"
              >
                Regulamin
              </a>
              <a
                href="#privacy"
                className="text-sm font-light leading-relaxed hover:underline transition-all"
              >
                Polityka prywatności
              </a>
            </div>
          </div>
        </div>

        {/* Copyright at bottom */}
        <p className="text-sm text-center lg:text-left">© 2025 Aleksandra Bursztyńska-Kostrzewa</p>
      </div>
    </footer>
  );
};

export default Footer;
