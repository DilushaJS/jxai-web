"use client";

import Link from "next/link";
import Image from "next/image";

// JXAI Logo
const JXAILogo = () => (
  <span
    className="font-bold tracking-tight"
    style={{ fontFamily: "Archivo, sans-serif", fontSize: 20 }}
  >
    <span className="text-white">JX</span>
    <span className="text-red-500">AI</span>
  </span>
);

const anyscaleSocials = [
  { image: "/icons/linkedin.svg", href: "#", label: "LinkedIn" },
  { image: "/icons/facebook.svg", href: "#", label: "Facebook" },
  { image: "/icons/twitter.svg", href: "#", label: "Twitter" },
  { image: "/icons/github-f.svg", href: "#", label: "GitHub" },
];

const raySocials = [
  { image: "/icons/twitter.svg", href: "#", label: "Twitter" },
  { image: "/icons/github-f.svg", href: "#", label: "GitHub" },
];

const navLinks = [
  {
    title: "Company",
    links: [{ label: "About Us", href: "#" }],
  },
  {
    title: "Learn",
    links: [
      { label: "Resources",    href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog",         href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Dashboard", href: "#" },
      { label: "AI tools",  href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 py-16">

        {/* Top grid: left info block + right nav columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">

          {/* ── Left block ── */}
          <div className="flex flex-col gap-10 lg:max-w-[280px]">

            {/* JXai. Privacy Policy */}
            <p
              className="text-white leading-6"
              style={{ fontFamily: "Archivo, sans-serif", fontSize: 16 }}
            >
              JXai.{" "}
              <Link
                href="#"
                className="hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
            </p>

            {/* Follow Anyscale */}
            <div className="flex flex-col gap-5">
              <p
                className="text-white font-medium leading-[30px]"
                style={{ fontFamily: "Archivo, sans-serif", fontSize: 20 }}
              >
                Follow Anyscale
              </p>
              <div className="flex items-center gap-6">
                {anyscaleSocials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src={s.image}
                      alt={s.label}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Follow Ray */}
            <div className="flex flex-col gap-5">
              <p
                className="text-white font-medium leading-[30px]"
                style={{ fontFamily: "Archivo, sans-serif", fontSize: 20 }}
              >
                Follow Ray
              </p>
              <div className="flex items-center gap-6">
                {raySocials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src={s.image}
                      alt={s.label}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right nav columns ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
            {navLinks.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                {/* Column title */}
                <p
                  className="text-white font-medium leading-[30px]"
                  style={{ fontFamily: "Archivo, sans-serif", fontSize: 20 }}
                >
                  {col.title}
                </p>
                {/* Links */}
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-medium leading-[27px] text-white/70 hover:text-white transition-colors"
                        style={{
                          fontFamily: "Archivo, sans-serif",
                          fontSize: 18,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom logo — centered */}
        <div className="flex justify-center mt-16">
          <Link href="/" aria-label="JXAI Home">
            {/* 38×24px container as per spec */}
            <div style={{ width: 38, height: 24 }} className="flex items-center justify-center">
              <JXAILogo />
            </div>
          </Link>
        </div>

      </div>
    </footer>
  );
}