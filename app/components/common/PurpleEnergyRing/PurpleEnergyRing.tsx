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

  dx: string;
  dy: string;

  delay: number;

  bright?: boolean;
};

/* ============================================================
   PARTICLE GENERATION

   Deterministic:
   - no Math.random()
   - hydration safe
   - irregular distribution
   - inner + middle + outer bands
   - hero-wide scatter
============================================================ */

const PARTICLE_COUNT = 110;

const hash = (value: number) => {
  const x =
    Math.sin(
      value * 12.9898 + 78.233,
    ) * 43758.5453;

  return x - Math.floor(x);
};

const particles: Particle[] = Array.from(
  {
    length: PARTICLE_COUNT,
  },

  (_, index) => {
    /* ======================================================
       BASE POSITION
    ====================================================== */

    const baseAngle =
      (index / PARTICLE_COUNT) *
      Math.PI *
      2;

    /*
     * Slight deterministic angle variation.
     * Prevents perfect circular rows.
     */
    const angle =
      baseAngle +
      (hash(index + 1) - 0.5) *
        0.24;

    /* ======================================================
       PARTICLE RADIUS

       3 different bands:
       - inner
       - middle
       - outer
    ====================================================== */

    let radius: number;

    if (index % 3 === 0) {
      radius =
        37 +
        hash(index + 20) * 7;
    } else if (index % 3 === 1) {
      radius =
        44 +
        hash(index + 30) * 8;
    } else {
      radius =
        51 +
        hash(index + 40) * 8;
    }

    const x =
      50 +
      Math.cos(angle) * radius;

    const y =
      50 +
      Math.sin(angle) * radius;

    /* ======================================================
       HERO-WIDE SCATTER

       Intentionally not radial.
       Every particle receives a different direction.
    ====================================================== */

    const scatterDirectionX =
      hash(index + 100) * 2 - 1;

    const scatterDirectionY =
      hash(index + 200) * 2 - 1;

    const scatterDistanceX =
      30 +
      hash(index + 101) * 30;

    const scatterDistanceY =
      22 +
      hash(index + 201) * 24;

    const dx =
      scatterDirectionX *
      scatterDistanceX;

    const dy =
      scatterDirectionY *
      scatterDistanceY;

    /* ======================================================
       PARTICLE SIZE

       Mostly 1px
       some 2px
       rare 3px
    ====================================================== */

    const sizeRoll =
      hash(index + 300);

    const size =
      sizeRoll > 0.94
        ? 3
        : sizeRoll > 0.7
          ? 2
          : 1;

    /* ======================================================
       PARTICLE OPACITY
    ====================================================== */

    const opacity =
      0.22 +
      hash(index + 400) * 0.68;

    return {
      x: `${x.toFixed(2)}%`,
      y: `${y.toFixed(2)}%`,

      size,

      opacity,

      dx: `${dx.toFixed(2)}vw`,
      dy: `${dy.toFixed(2)}vh`,

      delay: Math.round(
        hash(index + 500) * 480,
      ),

      bright:
        index % 13 === 0,
    };
  },
);

/* ============================================================
   COMPONENT
============================================================ */

export default function PurpleEnergyRing({
  className = '',
}: PurpleEnergyRingProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        ${styles.ring}
        ${className}
      `}
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className={styles.atmosphere}
      />

      {/* =====================================================
          ENERGY RING
      ====================================================== */}

      <div
        className={styles.hoverScale}
      >
        {/* =================================================
            LARGE DIFFUSED COLOR GLOW
        ================================================== */}

        <div
          className={`
            ${styles.spinLayer}
            ${styles.glowSpin}
          `}
        >
          <div
            className={styles.glowRing}
          />
        </div>

        {/* =================================================
            SHEER FLOWING FABRIC 1
        ================================================== */}

        <div
          className={`
            ${styles.spinLayer}
            ${styles.fabricSpin1}
          `}
        >
          <div
            className={`
              ${styles.fabricRing}
              ${styles.fabric1}
            `}
          />
        </div>

        {/* =================================================
            SHEER FLOWING FABRIC 2
        ================================================== */}

        <div
          className={`
            ${styles.spinLayer}
            ${styles.fabricSpin2}
          `}
        >
          <div
            className={`
              ${styles.fabricRing}
              ${styles.fabric2}
            `}
          />
        </div>

        {/* =================================================
            SHEER FLOWING FABRIC 3
        ================================================== */}

        <div
          className={`
            ${styles.spinLayer}
            ${styles.fabricSpin3}
          `}
        >
          <div
            className={`
              ${styles.fabricRing}
              ${styles.fabric3}
            `}
          />
        </div>

        {/* =================================================
            MAIN LUMINOUS BAND
        ================================================== */}

        <div
          className={`
            ${styles.spinLayer}
            ${styles.colorSpin}
          `}
        >
          <div
            className={styles.colorBand}
          />
        </div>

        {/* =================================================
            BLURRED WHITE / LAVENDER RIM
        ================================================== */}

        <div
          className={styles.hotRim}
        />

        {/* =================================================
            FINE SECONDARY FIBER
        ================================================== */}

        <div
          className={styles.fineRim}
        />
      </div>

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <div
        className={styles.particles}
      >
        {particles.map(
          (particle, index) => {
            const style = {
              left:
                particle.x,

              top:
                particle.y,

              width:
                `${particle.size}px`,

              height:
                `${particle.size}px`,

              '--particle-opacity':
                particle.opacity,

              '--scatter-x':
                particle.dx,

              '--scatter-y':
                particle.dy,

              '--particle-delay':
                `${particle.delay}ms`,
            } as CSSProperties;

            return (
              <span
                key={index}
                style={style}
                className={`
                  ${styles.particle}
                  ${
                    particle.bright
                      ? styles.particleBright
                      : ''
                  }
                `}
              />
            );
          },
        )}
      </div>
    </div>
  );
}