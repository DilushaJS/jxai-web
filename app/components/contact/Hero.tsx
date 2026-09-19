'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  motion,
  type Variants,
} from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

/* ============================================================
   VALIDATION
============================================================ */

const schema = z.object({
  lastName: z
    .string()
    .min(1, 'Required')
    .max(100),

  firstName: z
    .string()
    .min(1, 'Required')
    .max(100),

  email: z
    .string()
    .email('Invalid email')
    .max(254)
    .toLowerCase(),

  phone: z
    .string()
    .min(6, 'Invalid number')
    .max(25)
    .regex(
      /^[+0]?[\d\s\-().]{5,24}$/,
      'Invalid number',
    ),

  message: z
    .string()
    .min(10, 'Too short')
    .max(2000),
});

type FormValues = z.infer<typeof schema>;

/* ============================================================
   MOTION
============================================================ */

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   SHARED FIELD STYLES
============================================================ */

const inputClassName = `
  w-full

  rounded-[5px]

  border
  border-white/20

  bg-white/5

  px-3.5
  py-3

  font-sans
  text-[15px]
  font-normal
  leading-none
  tracking-[-0.01em]
  text-white

  outline-none

  placeholder:text-[15px]
  placeholder:text-white/60

  transition-[border-color,background-color,box-shadow]
  duration-300

  hover:border-white/30
  hover:bg-white/[0.065]

  focus:border-[#C281FF]/70
  focus:bg-[#A475C90D]
  focus:shadow-[0_0_0_3px_rgba(194,129,255,0.06),0_0_24px_rgba(140,69,255,0.06)]
`;

/* ============================================================
   ERROR
============================================================ */

function FieldError({
  message,
}: {
  message?: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <motion.span
      initial={{
        opacity: 0,
        y: -4,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        px-0.5

        font-sans
        text-xs
        font-normal
        text-red-400
      "
    >
      {message}
    </motion.span>
  );
}

/* ============================================================
   COMPONENT
============================================================ */

export default function ContactSection() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
    },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(
    values: FormValues,
  ) {
    setStatus('loading');

    try {
      console.log('Contact Form:', {
        name: `${values.firstName} ${values.lastName}`,
        phone: values.phone,
        email: values.email,
        message: values.message,
      });

      await new Promise((resolve) =>
        setTimeout(resolve, 1000),
      );

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      className="
        relative

        flex
        w-full
        items-center
        justify-center

        overflow-hidden

        bg-[#010101]
        rounded-[20px]

        px-4
        py-10

        sm:px-6
        sm:py-14

        md:px-8
        md:py-16

        lg:py-20
      "
    >
      {/* ========================================================
          AMBIENT BACKGROUND
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-72
          w-3/5

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#8C45FF]/5

          blur-[140px]
        "
      />

      {/* ========================================================
          MAIN WRAPPER
      ======================================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="
          group/container
          relative

          flex
          w-full
          max-w-273
          flex-col

          gap-6

          overflow-hidden

          rounded-[20px]

          border
          border-white/6

          bg-white/4

          p-4

          backdrop-blur-[80px]

          transition-[border-color,box-shadow]
          duration-500

          hover:border-white/10
          hover:shadow-[0_0_60px_rgba(140,69,255,0.035)]

          sm:p-5

          lg:flex-row
          lg:gap-7.5
        "
      >
        {/* Top edge glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-x-[12%]
            top-0
            z-10

            h-px

            bg-linear-to-r
            from-transparent
            via-[#C281FF]/30
            to-transparent

            opacity-0

            transition-opacity
            duration-500

            group-hover/container:opacity-100
          "
        />

        {/* ======================================================
            LEFT
        ====================================================== */}

        <motion.div
          variants={fadeUpVariants}
          className="
            relative
            z-10

            flex
            w-full
            flex-col

            gap-8

            rounded-2xl

            p-2

            sm:p-4

            md:gap-10

            lg:max-w-126.5
            lg:gap-10.25
            lg:p-10
          "
        >
          {/* Heading */}
          <div
            className="
              flex
              flex-col
              gap-2
            "
          >
            <h2
              className="
                m-0

                font-sans
                text-[26px]
                font-semibold
                leading-[110%]
                tracking-[-0.02em]
                text-white

                sm:text-[28px]

                lg:text-[30px]
                lg:leading-none
              "
            >
              Let&apos;s connect constellations
            </h2>

            <p
              className="
                m-0

                max-w-105

                font-sans
                text-sm
                font-normal
                leading-[145%]
                tracking-[-0.01em]
                text-white/75

                sm:text-[15px]

                lg:text-base
              "
            >
              Let&apos;s align our
              constellations! Reach out and let
              the magic of collaboration
              illuminate our skies.
            </p>
          </div>

          {/* ====================================================
              FORM
          ==================================================== */}

          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="
              flex
              w-full
              flex-col
              gap-3.5
            "
          >
            {/* Name row */}
            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-col
                gap-3.5

                sm:flex-row
              "
            >
              {/* Last name */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  gap-1
                "
              >
                <label
                  htmlFor="lastName"
                  className="sr-only"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  {...register('lastName')}
                  placeholder="Last Name"
                  autoComplete="family-name"
                  aria-invalid={
                    errors.lastName
                      ? 'true'
                      : 'false'
                  }
                  className={inputClassName}
                />

                <FieldError
                  message={
                    errors.lastName?.message
                  }
                />
              </div>

              {/* First name */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  gap-1
                "
              >
                <label
                  htmlFor="firstName"
                  className="sr-only"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  {...register('firstName')}
                  placeholder="First Name"
                  autoComplete="given-name"
                  aria-invalid={
                    errors.firstName
                      ? 'true'
                      : 'false'
                  }
                  className={inputClassName}
                />

                <FieldError
                  message={
                    errors.firstName?.message
                  }
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-col
                gap-1
              "
            >
              <label
                htmlFor="email"
                className="sr-only"
              >
                Email
              </label>

              <input
                id="email"
                {...register('email')}
                type="email"
                placeholder="Email"
                autoComplete="email"
                aria-invalid={
                  errors.email
                    ? 'true'
                    : 'false'
                }
                className={inputClassName}
              />

              <FieldError
                message={
                  errors.email?.message
                }
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-col
                gap-1
              "
            >
              <label
                htmlFor="phone"
                className="sr-only"
              >
                Phone Number
              </label>

              <input
                id="phone"
                {...register('phone')}
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                aria-invalid={
                  errors.phone
                    ? 'true'
                    : 'false'
                }
                className={inputClassName}
              />

              <FieldError
                message={
                  errors.phone?.message
                }
              />
            </motion.div>

            {/* Message */}
            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-col
                gap-1
              "
            >
              <label
                htmlFor="message"
                className="sr-only"
              >
                Message
              </label>

              <textarea
                id="message"
                {...register('message')}
                placeholder="Message"
                rows={5}
                aria-invalid={
                  errors.message
                    ? 'true'
                    : 'false'
                }
                className={`
                  ${inputClassName}

                  min-h-28
                  resize-none
                `}
              />

              <FieldError
                message={
                  errors.message?.message
                }
              />
            </motion.div>

            {/* Status */}
            {status === 'success' && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  font-sans
                  text-sm
                  text-emerald-400
                "
              >
                Message sent! We&apos;ll be in
                touch soon.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  font-sans
                  text-sm
                  text-red-400
                "
              >
                Something went wrong. Please
                try again.
              </motion.p>
            )}

            {/* ==================================================
                BUTTON
            ================================================== */}

            <motion.button
              variants={fadeUpVariants}
              type="submit"
              disabled={status === 'loading'}
              className="
                group/button
                relative

                flex
                min-h-9.5
                w-full
                cursor-pointer
                items-center
                justify-center

                overflow-hidden

                rounded-[10px]

                border
                border-[#FFFFFF26]

                bg-[#8C45FF66]

                px-2.5
                py-3

                font-sans
                text-[15px]
                font-medium
                leading-none
                tracking-[-0.01em]
                text-white

                shadow-[inset_0_0_6px_3px_#FFFFFF40]

                backdrop-blur-[14px]

                transition-[background-color,border-color,box-shadow,opacity]
                duration-300

                hover:border-white/25
                hover:bg-[#8C45FF80]
                hover:shadow-[inset_0_0_6px_3px_#FFFFFF40,0_0_24px_rgba(140,69,255,0.18)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C281FF]/70
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#0B0A0D]

                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {/* Button ambient light */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_50%_50%,rgba(194,129,255,0.14),transparent_65%)]

                  opacity-0

                  transition-opacity
                  duration-300

                  group-hover/button:opacity-100
                "
              />

              {/* Glass sweep */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  inset-y-0
                  -left-1/3

                  w-1/4

                  -skew-x-12

                  bg-linear-to-r
                  from-transparent
                  via-white/10
                  to-transparent

                  transition-transform
                  duration-700
                  ease-out

                  group-hover/button:translate-x-[550%]
                "
              />

              <span className="relative z-10">
                {status === 'loading'
                  ? 'Sending...'
                  : 'Contact Us'}
              </span>
            </motion.button>
          </motion.form>
        </motion.div>

        {/* ======================================================
            RIGHT IMAGE
        ====================================================== */}

        <motion.div
          variants={imageVariants}
          className="
            group/image
            relative

            min-h-90
            w-full

            overflow-hidden

            rounded-xl

            border
            border-white/2.5

            bg-[#0A0810]

            md:min-h-115

            lg:min-h-134
            lg:max-w-129
          "
        >
          <Image
            src="/images/contact-hero-img.svg"
            alt="Astronaut sitting on a planet looking at Earth"
            fill
            priority
            sizes="
              (max-width: 1024px) 100vw,
              516px
            "
            className="
              object-cover
              object-center

              transition-[transform,filter]
              duration-1000
              ease-out

              group-hover/image:scale-[1.018]
              group-hover/image:brightness-105
            "
          />

          {/* Dark bottom vignette */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              inset-x-0
              bottom-0

              h-1/2

              bg-linear-to-t
              from-[#080712]
              via-[#080712]/70
              to-transparent
            "
          />

          {/* Purple ambient edge */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -right-20
              top-1/3

              size-52

              rounded-full

              bg-[#8C45FF]/0
              blur-[80px]

              transition-colors
              duration-700

              group-hover/image:bg-[#8C45FF]/10
            "
          />

          {/* Image top highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[15%]
              top-0
              z-10

              h-px

              bg-linear-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          {/* ====================================================
              QUOTE
          ==================================================== */}

          <motion.div
            variants={fadeUpVariants}
            className="
              absolute
              inset-x-0
              bottom-0
              z-20

              p-5

              sm:p-6
            "
          >
            <blockquote
              className="
                m-0
                max-w-116.5

                font-sans
                text-sm
                font-normal
                leading-snug
                tracking-[-0.01em]
                text-white/75

                sm:text-[15px]

                lg:text-base
              "
            >
              &ldquo;Two lunar months revealed
              Earth&apos;s fragile beauty
              against vast silence, transforming
              my view of our place in the
              universe.&rdquo;
            </blockquote>

            <p
              className="
                mt-2

                font-sans
                text-sm
                font-semibold
                text-white/80

                sm:text-base
              "
            >
              Irinel Traista
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}