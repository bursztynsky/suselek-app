import React from 'react';
import Image from 'next/image';
import about1Image from '../../assets/about1.jpg';
import about2Image from '../../assets/about2.jpg';
import about3Image from '../../assets/about3.jpg';
import aboutIcon from '../../assets/aboutIcon.svg';

const AdditionalServicesSection: React.FC = () => {
  return (
    <section id="dodatkowe-uslugi" className="w-full h-[728px] bg-white flex">
      {/* Column 1 */}
      <div className="flex-1 h-full relative">
        <Image
          src={about1Image}
          alt="Additional services"
          fill
          className="object-cover object-[56%_center]"
        />
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-16 text-white">
          <div className="relative text-left leading-tight -ml-8">
            <div className="text-[40px] font-bold italic">Dodatkowa</div>
            <div className="text-[40px] font-light italic">oferta</div>
            <Image
              src={aboutIcon}
              alt="About icon"
              width={60}
              height={60}
              className="absolute -top-8 -right-20"
            />
          </div>
        </div>
      </div>

      {/* Column 2 - with 2 rows */}
      <div className="flex-1 h-full flex flex-col">
        {/* Row 1 */}
        <div className="flex-1 bg-[#f8f6f2] flex flex-col justify-end p-8 text-[#292929]">
          <h3 className="text-2xl font-bold mb-4">Psychologia zwierząt</h3>
          <p className="text-base font-normal mb-2">
            Pomagam przy łączeniu zwierząt w stado:
          </p>
          <ul className="list-disc list-inside text-base font-normal">
            <li>online (konsultacje)</li>
            <li>osobiście (prowadzenie procesu łączenia)</li>
          </ul>
        </div>
        {/* Row 2 */}
        <div className="h-[364px] relative">
          <Image
            src={about2Image}
            alt="Additional services"
            fill
            className="object-cover object-[center_30%]"
          />
          <div className="absolute top-0 left-0 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Grooming</h3>
            <p className="text-base font-normal">strzyżenie królików i <br/>świnek morskich</p>
          </div>
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex-1 h-full relative">
        <Image
          src={about3Image}
          alt="Additional services"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AdditionalServicesSection;


