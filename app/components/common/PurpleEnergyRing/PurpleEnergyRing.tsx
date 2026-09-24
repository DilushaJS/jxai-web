'use client';

import type { CSSProperties } from 'react';

import styles from './PurpleEnergyRing.module.css';

type PurpleEnergyRingProps = {
  className?: string;
};

type Particle = {
  x: string;
  y: string;
  size: number;
  opacity: number;
  dx: number;
  dy: number;
  delay: number;
  bright?: boolean;
};

const particles: Particle[] = [
  { x: '19%', y: '18%', size: 1, opacity: 0.45, dx: -18, dy: -18, delay: 0 },
  { x: '29%', y: '8%', size: 2, opacity: 0.7, dx: -14, dy: -26, delay: 80 },
  { x: '43%', y: '4%', size: 1, opacity: 0.5, dx: -4, dy: -32, delay: 160 },

  {
    x: '57%',
    y: '5%',
    size: 3,
    opacity: 0.95,
    dx: 6,
    dy: -34,
    delay: 40,
    bright: true,
  },

  { x: '72%', y: '10%', size: 1, opacity: 0.5, dx: 18, dy: -28, delay: 120 },
  { x: '84%', y: '20%', size: 2, opacity: 0.7, dx: 27, dy: -21, delay: 20 },

  {
    x: '94%',
    y: '36%',
    size: 3,
    opacity: 0.9,
    dx: 37,
    dy: -10,
    delay: 150,
    bright: true,
  },

  { x: '97%', y: '52%', size: 1, opacity: 0.5, dx: 40, dy: 2, delay: 60 },
  { x: '91%', y: '70%', size: 2, opacity: 0.65, dx: 32, dy: 18, delay: 130 },
  { x: '80%', y: '84%', size: 1, opacity: 0.45, dx: 24, dy: 27, delay: 10 },

  {
    x: '63%',
    y: '94%',
    size: 3,
    opacity: 0.9,
    dx: 11,
    dy: 37,
    delay: 110,
    bright: true,
  },

  { x: '46%', y: '97%', size: 1, opacity: 0.45, dx: -2, dy: 40, delay: 180 },
  { x: '29%', y: '92%', size: 2, opacity: 0.7, dx: -15, dy: 34, delay: 70 },
  { x: '15%', y: '81%', size: 1, opacity: 0.5, dx: -28, dy: 27, delay: 140 },

  {
    x: '6%',
    y: '64%',
    size: 3,
    opacity: 0.9,
    dx: -38,
    dy: 14,
    delay: 30,
    bright: true,
  },

  { x: '3%', y: '47%', size: 1, opacity: 0.45, dx: -40, dy: -2, delay: 100 },
  { x: '8%', y: '31%', size: 2, opacity: 0.65, dx: -34, dy: -15, delay: 50 },

  /* inner edge */
  { x: '28%', y: '25%', size: 1, opacity: 0.4, dx: -10, dy: -9, delay: 120 },
  { x: '50%', y: '18%', size: 2, opacity: 0.65, dx: 0, dy: -15, delay: 30 },
  { x: '72%', y: '27%', size: 1, opacity: 0.45, dx: 11, dy: -9, delay: 170 },

  {
    x: '81%',
    y: '51%',
    size: 2,
    opacity: 0.8,
    dx: 17,
    dy: 1,
    delay: 70,
    bright: true,
  },

  { x: '69%', y: '75%', size: 1, opacity: 0.45, dx: 10, dy: 11, delay: 140 },
  { x: '49%', y: '81%', size: 2, opacity: 0.65, dx: 0, dy: 16, delay: 20 },
  { x: '26%', y: '70%', size: 1, opacity: 0.4, dx: -12, dy: 10, delay: 90 },
  { x: '19%', y: '49%', size: 2, opacity: 0.6, dx: -17, dy: 0, delay: 160 },
];

export default function PurpleEnergyRing({
  className = '',
}: PurpleEnergyRingProps) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.ring} ${className}`}
    >
      {/* soft atmosphere behind everything */}
      <div className={styles.atmosphere} />

      <div className={styles.hoverScale}>
        {/* =====================================================
            LARGE DIFFUSED COLOR GLOW
        ====================================================== */}

        <div className={`${styles.spinLayer} ${styles.glowSpin}`}>
          <div className={styles.glowRing} />
        </div>

        {/* =====================================================
            SHEER FLOWING FABRIC
        ====================================================== */}

        <div className={`${styles.spinLayer} ${styles.fabricSpin1}`}>
          <div className={`${styles.fabricRing} ${styles.fabric1}`} />
        </div>

        <div className={`${styles.spinLayer} ${styles.fabricSpin2}`}>
          <div className={`${styles.fabricRing} ${styles.fabric2}`} />
        </div>

        <div className={`${styles.spinLayer} ${styles.fabricSpin3}`}>
          <div className={`${styles.fabricRing} ${styles.fabric3}`} />
        </div>

        {/* =====================================================
            MAIN LUMINOUS COLOR BAND
        ====================================================== */}

        <div className={`${styles.spinLayer} ${styles.colorSpin}`}>
          <div className={styles.colorBand} />
        </div>

        {/* =====================================================
            WHITE / LAVENDER HOT INNER EDGE
        ====================================================== */}

        <div className={styles.hotRim} />

        {/* faint sharp fiber */}
        <div className={styles.fineRim} />
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