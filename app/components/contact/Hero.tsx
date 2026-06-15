'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

// ─── validation ───────────────────────────────────────────────────────────────

const schema = z.object({
  lastName: z.string().min(1, 'Required').max(100),
  firstName: z.string().min(1, 'Required').max(100),
  email: z.string().email('Invalid email').max(254).toLowerCase(),
  phone: z
    .string()
    .min(6, 'Invalid number')
    .max(25)
    .regex(/^[+0]?[\d\s\-().]{5,24}$/, 'Invalid number'),
  message: z.string().min(10, 'Too short').max(2000),
});

type FormValues = z.infer<typeof schema>;

// ─── animation variants ───────────────────────────────────────────────────────

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// ─── shared input className ───────────────────────────────────────────────────

const inputCls = [
  'w-full rounded-[5px] px-[14px] py-3',
  'bg-[#FFFFFF0D] border border-[#FFFFFF33]',
  'text-white text-[15px] font-normal leading-none tracking-[-0.01em]',
  'placeholder:text-white/60 placeholder:text-[15px] placeholder:tracking-[-0.01em]',
  'outline-none focus:border-[#06C0CA] transition-colors duration-200',
].join(' ');

// ─── component ────────────────────────────────────────────────────────────────

export default function ContactSection() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    setStatus('loading');

    try {
      console.log('Contact Form:', {
        name: `${values.firstName} ${values.lastName}`,
        phone: values.phone,
        email: values.email,
        message: values.message,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[#010101] px-4 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full flex-col gap-7.5 overflow-hidden rounded-[20px] p-5 lg:flex-row"
        style={{
          maxWidth: 1092,
          border: '2px solid rgba(10,13,23,0.05)',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(380px)',
          WebkitBackdropFilter: 'blur(380px)',
        }}
      >
        {/* Left Side */}
        <motion.div
          variants={fadeUp}
          className="flex w-full flex-col gap-10.25 rounded-2xl p-6 lg:max-w-126.5 lg:p-10"
        >
          <div className="flex flex-col gap-2">
            <h2
              className="m-0 text-[30px] font-semibold leading-none text-white"
              style={{
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              }}
            >
              Let's connect constellations
            </h2>

            <p
              className="m-0 text-base font-normal leading-none text-white"
              style={{
                letterSpacing: '-0.01em',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              }}
            >
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-3.5"
          >
            <div className="flex flex-col gap-3.5 sm:flex-row">
              <div className="flex flex-1 flex-col gap-1">
                <input
                  {...register('lastName')}
                  placeholder="Last Name"
                  className={inputCls}
                />
                {errors.lastName && (
                  <span className="text-xs text-red-400">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-1">
                <input
                  {...register('firstName')}
                  placeholder="First Name"
                  className={inputCls}
                />
                {errors.firstName && (
                  <span className="text-xs text-red-400">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <input
                {...register('email')}
                type="email"
                placeholder="Email"
                autoComplete="email"
                className={inputCls}
              />
              {errors.email && (
                <span className="text-xs text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                {...register('phone')}
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                className={inputCls}
              />
              {errors.phone && (
                <span className="text-xs text-red-400">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <textarea
                {...register('message')}
                placeholder="Message"
                rows={5}
                className={`${inputCls} resize-none`}
              />
              {errors.message && (
                <span className="text-xs text-red-400">
                  {errors.message.message}
                </span>
              )}
            </div>

            {status === 'success' && (
              <p className="text-sm text-emerald-400">
                Message sent! We'll be in touch soon.
              </p>
            )}

            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-[5px] px-2.5 py-3 text-[15px] font-medium leading-none text-white transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 cursor-pointer"
              style={{
                letterSpacing: '-0.01em',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                background:
                  'linear-gradient(90deg, #06C0CA 0%, #045A5F 117.18%)',
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Contact Us'}
            </button>
          </form>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeUp}
          className="relative w-full overflow-hidden rounded-xl lg:max-w-129"
          style={{ minHeight: 360, maxHeight: 536 }}
        >
          <Image
            src="/images/contact-hero-img.svg"
            alt="Astronaut sitting on a planet looking at Earth"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 516px"
            className="object-cover object-center"
          />

          <div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{ opacity: 0.7 }}
          >
            <blockquote
              className="m-0 max-w-116.5 text-base font-normal leading-snug text-white"
              style={{
                letterSpacing: '-0.01em',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              }}
            >
              "Two lunar months revealed Earth's fragile beauty against vast
              silence, transforming my view of our place in the universe."
            </blockquote>

            <p
              className="mt-2 text-base font-semibold text-white"
              style={{
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              }}
            >
              Irinel Traista
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}