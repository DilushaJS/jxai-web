'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type SectionProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  index?: number;
  variant?: 'default' | 'textOnly' | 'imageOnly';
};

export function AdvantageCard({
  title,
  description,
  image,
  index = 0,
  variant = 'default',
}: SectionProps) {
  const isLeft = index % 2 === 0;
  const isBottomRow = index >= 4;
  const isSecondRow = index === 2 || index === 3; // ✅ ONLY second row

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      className={`
        bg-black flex flex-col
        ${isSecondRow ? 'h-auto sm:h-auto md:h-[492px] justify-center' : 'min-h-auto sm:min-h-auto md:min-h-[400px]'}
        ${variant === 'default' && !isSecondRow ? 'justify-between' : ''}
        ${variant !== 'default' ? 'items-center' : ''}
        ${!isBottomRow ? 'md:border-b md:border-[#FFFFFF1A]' : ''}
        ${isLeft ? 'md:border-r md:border-[#FFFFFF1A]' : ''}
      `}
    >
      {/* TEXT */}
      {variant !== 'imageOnly' && (
        <div
          className={`
            p-4 sm:p-6 md:p-10 w-full
            ${isSecondRow ? 'flex flex-col justify-center items-start h-full' : ''}
            ${variant !== 'default' && !isSecondRow ? 'flex flex-col justify-center items-center' : ''}
          `}
        >
          {title && (
            <h3 className="text-white text-[22px] sm:text-[28px] md:text-[37.9px] leading-[28px] sm:leading-[36px] md:leading-[50px] -tracking-[0.95px] font-semibold">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-4 text-[#CFCDD6] font-light text-[12px] sm:text-[14px] md:text-[19.8px] leading-[18px] sm:leading-[22px] md:leading-[29.6px] tracking-[0px] max-w-[458px]">
              {description}
            </p>
          )}
        </div>
      )}

      {/* IMAGE */}
      {variant !== 'textOnly' && image && (
        <div
        className={`
            w-full
            ${variant === 'default' ? '' : ''}
            ${isSecondRow ? 'h-full flex items-center justify-center' : ''}
            ${variant === 'imageOnly' && !isSecondRow ? 'flex justify-center items-center h-full' : ''}
        `}
        >
            <Image
                src={image}
                alt="card image"
                width={500}
                height={400}
                className={`
                ${isSecondRow ? 'max-h-[90%] w-auto object-contain' : 'w-full h-auto object-cover'}
                `}
            />
        </div>
      )}
    </motion.div>
  );
}