import Image from 'next/image';
import type { CSSProperties } from 'react';

import styles from './PurpleEnergyRing.module.css';

type PurpleEnergyRingProps = {
  className?: string;
};

type ParticleConfig = {
  x: string;
  y: string;
  size: number;
  opacity: number;
  dx: number;
  dy: number;
  delay: number;
  bright?: boolean;
};

const particles: ParticleConfig[] = [
  /* top / outer */
  {
    x: '22%',
    y: '7%',
    size: 2,
    opacity: 0.7,
    dx: -18,
    dy: -28,
    delay: 0,
  },
  {
    x: '34%',
    y: '3%',
    size: 1,
    opacity: 0.45,
    dx: -9,
    dy: -32,
    delay: 60,
  },
  {
    x: '48%',
    y: '1%',
    size: 3,
    opacity: 0.95,
    dx: 0,
    dy: -38,
    delay: 100,
    bright: true,
  },
  {
    x: '63%',
    y: '4%',
    size: 1,
    opacity: 0.5,
    dx: 10,
    dy: -31,
    delay: 40,
  },
  {
    x: '78%',
    y: '10%',
    size: 2,
    opacity: 0.75,
    dx: 24,
    dy: -25,
    delay: 130,
  },

  /* right / outer */
  {
    x: '90%',
    y: '20%',
    size: 1,
    opacity: 0.5,
    dx: 30,
    dy: -20,
    delay: 80,
  },
  {
    x: '96%',
    y: '34%',
    size: 3,
    opacity: 0.95,
    dx: 38,
    dy: -12,
    delay: 150,
    bright: true,
  },
  {
    x: '98%',
    y: '49%',
    size: 2,
    opacity: 0.7,
    dx: 42,
    dy: 0,
    delay: 30,
  },
  {
    x: '95%',
    y: '64%',
    size: 1,
    opacity: 0.45,
    dx: 36,
    dy: 13,
    delay: 120,
  },
  {
    x: '88%',
    y: '80%',
    size: 2,
    opacity: 0.8,
    dx: 28,
    dy: 27,
    delay: 70,
  },

  /* bottom / outer */
  {
    x: '76%',
    y: '92%',
    size: 2,
    opacity: 0.65,
    dx: 22,
    dy: 31,
    delay: 10,
  },
  {
    x: '61%',
    y: '97%',
    size: 1,
    opacity: 0.45,
    dx: 10,
    dy: 38,
    delay: 160,
  },
  {
    x: '48%',
    y: '99%',
    size: 3,
    opacity: 0.95,
    dx: 0,
    dy: 42,
    delay: 50,
    bright: true,
  },
  {
    x: '34%',
    y: '95%',
    size: 1,
    opacity: 0.5,
    dx: -11,
    dy: 36,
    delay: 100,
  },
  {
    x: '20%',
    y: '88%',
    size: 2,
    opacity: 0.75,
    dx: -27,
    dy: 28,
    delay: 140,
  },

  /* left / outer */
  {
    x: '9%',
    y: '77%',
    size: 1,
    opacity: 0.4,
    dx: -31,
    dy: 24,
    delay: 20,
  },
  {
    x: '3%',
    y: '63%',
    size: 2,
    opacity: 0.7,
    dx: -39,
    dy: 12,
    delay: 90,
  },
  {
    x: '1%',
    y: '48%',
    size: 3,
    opacity: 0.95,
    dx: -43,
    dy: 0,
    delay: 170,
    bright: true,
  },
  {
    x: '4%',
    y: '32%',
    size: 1,
    opacity: 0.45,
    dx: -36,
    dy: -13,
    delay: 70,
  },
  {
    x: '11%',
    y: '18%',
    size: 2,
    opacity: 0.65,
    dx: -27,
    dy: -25,
    delay: 120,
  },

  /* inner edge */
  {
    x: '27%',
    y: '22%',
    size: 1,
    opacity: 0.48,
    dx: -12,
    dy: -12,
    delay: 30,
  },
  {
    x: '50%',
    y: '17%',
    size: 2,
    opacity: 0.72,
    dx: 0,
    dy: -18,
    delay: 140,
  },
  {
    x: '73%',
    y: '24%',
    size: 1,
    opacity: 0.45,
    dx: 15,
    dy: -11,
    delay: 60,
  },
  {
    x: '82%',
    y: '48%',
    size: 2,
    opacity: 0.82,
    dx: 20,
    dy: 0,
    delay: 110,
    bright: true,
  },
  {
    x: '72%',
    y: '75%',
    size: 1,
    opacity: 0.5,
    dx: 13,
    dy: 14,
    delay: 10,
  },
  {
    x: '49%',
    y: '82%',
    size: 2,
    opacity: 0.7,
    dx: 0,
    dy: 18,
    delay: 150,
  },
  {
    x: '27%',
    y: '74%',
    size: 1,
    opacity: 0.45,
    dx: -14,
    dy: 13,
    delay: 80,
  },
  {
    x: '18%',
    y: '49%',
    size: 2,
    opacity: 0.7,
    dx: -20,
    dy: 0,
    delay: 130,
  },
];

export default function PurpleEnergyRing({
  className = '',
}: PurpleEnergyRingProps) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.ring} ${className}`}
    >
      {/* =====================================================
          RING
      ====================================================== */}
      <div className={styles.orbitScale}>
        <div className={styles.orbitMotion}>
          <div className={styles.centerGlow} />

          <div className={styles.innerAtmosphere} />

          {/* Main image */}
          <Image
            src="/images/home/purple-energy-ring.png"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 72vw, 740px"
            className={`${styles.energy} ${styles.energyBase}`}
          />

          {/* Soft ghost */}
          <Image
            src="/images/home/purple-energy-ring.png"
            alt=""
            fill
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 72vw, 740px"
            className={`${styles.energy} ${styles.energyGhostA}`}
          />

          {/* Sharp ghost */}
          <Image
            src="/images/home/purple-energy-ring.png"
            alt=""
            fill
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 72vw, 740px"
            className={`${styles.energy} ${styles.energyGhostB}`}
          />
        </div>
      </div>

      {/* =====================================================
          PARTICLES
      ====================================================== */}
      <div className={styles.particles}>
        {particles.map((particle, index) => {
          const style = {
            left: particle.x,
            top: particle.y,

            width: `${particle.size}px`,
            height: `${particle.size}px`,

            '--particle-opacity': particle.opacity,

            '--scatter-x': `${particle.dx}px`,
            '--scatter-y': `${particle.dy}px`,

            '--particle-delay': `${particle.delay}ms`,
          } as CSSProperties;

          return (
            <span
              key={index}
              style={style}
              className={`${styles.particle} ${
                particle.bright ? styles.particleBright : ''
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}