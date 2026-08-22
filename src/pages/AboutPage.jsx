import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Home,
  MessageCircle,
  Search,
  Shield,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';

import sharedLivingSpace from '../assets/aboutpage.png';
import cityIllustration from '../assets/homeImage_2.png';

const spring = { type: 'spring', stiffness: 320, damping: 24 };

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const VALUES = [
  {
    icon: Shield,
    title: 'Safe & Trusted',
    description: 'Verified users and quality listings.',
  },
  {
    icon: Users,
    title: 'Better Matches',
    description: 'Compatibility that actually matters.',
  },
  {
    icon: MessageCircle,
    title: 'Zero Brokerage',
    description: 'No hidden charges. Ever.',
  },
  {
    icon: Home,
    title: 'Built for You',
    description: 'Made for students and young professionals.',
  },
];

const PROCESS = [
  {
    icon: Search,
    step: '1',
    title: 'Discover',
    description: 'Explore verified rooms and flatmates.',
  },
  {
    icon: Users,
    step: '2',
    title: 'Match',
    description: 'Find compatible flatmates and rooms.',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Connect',
    description: 'Chat, plan, and get to know each other.',
  },
  {
    icon: Home,
    step: '4',
    title: 'Move In',
    description: 'Move in confidently and start your chapter.',
  },
];

const STATS = [
  { value: '10K+', label: 'Verified Listings' },
  { value: '5K+', label: 'Active Users' },
  { value: '2K+', label: 'Successful Matches' },
  { value: '20+', label: 'Cities' },
];

function Eyebrow({ children, className = '', tone = 'light' }) {
  return (
    <span className={`mb-4 block text-[11px] font-semibold uppercase tracking-[0.2em] ${tone === 'dark' ? 'text-white/40' : 'text-[#737373]'} ${className}`}>
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-[#F8F8F6]">
      <section className="px-3 pb-16 pt-3 sm:px-5 sm:pb-20 lg:px-7">
  <div className="relative isolate mx-auto min-h-[640px] max-w-[1440px] overflow-hidden rounded-[1.5rem] border border-black/[0.04] bg-[#F4F3F0] shadow-[0_18px_45px_rgba(23,20,16,0.06)] sm:min-h-[700px] lg:min-h-0 lg:aspect-[3/2]">

    {/* Background Image */}
    <img
      src={sharedLivingSpace}
      alt="Modern shared living space in the city"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
    />

    {/* Dark gradient — mainly on the left for text readability */}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,8,8,0.97)_0%,rgba(6,9,9,0.94)_30%,rgba(7,10,10,0.64)_43%,rgba(7,10,10,0.05)_67%)]" />

    {/* Subtle bottom gradient */}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.20)_100%)]" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex min-h-[640px] items-center px-7 py-16 sm:min-h-[700px] sm:px-12 lg:min-h-0 lg:px-16 lg:py-20 xl:px-16"
    >

      <div className="max-w-[600px]">

        <motion.div variants={fadeUp}>
          <div className="mb-20 flex items-center gap-3 text-[1.55rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.7rem]">
            <Home size={38} strokeWidth={2} className="text-white" />
            <span>Nest<span className="text-[#4EC2A5]">Mate</span></span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-[3.2rem] font-bold leading-[1.06] tracking-[-0.052em] text-white sm:text-6xl lg:text-[4.25rem]"
        >
          Find your{' '}
          <span className="text-[#4EC2A5]">people,</span>
          <br />
          Find your{' '}
          <span className="text-[#4EC2A5]">place.</span>
        </motion.h1>

        {/* Description */}
       <motion.p
  variants={fadeUp}
  className="mt-8 max-w-[500px] text-xl leading-[1.5] text-white/90 sm:text-[1.45rem]"
>
  Verified flatmates. Compatible lifestyle.
  <br />
  Better living, together.
</motion.p>

        <motion.div variants={fadeUp} className="mt-9 h-[2px] w-12 bg-[#4EC2A5]" />

        <motion.div
          variants={fadeUp}
          className="mt-9 grid max-w-[590px] grid-cols-3 gap-3 text-sm font-medium text-white sm:gap-6 sm:text-base"
        >
          <div className="flex items-center gap-2.5"><ShieldCheck size={39} strokeWidth={1.7} className="shrink-0 text-[#4EC2A5]" /><span>Verified<br />Profiles</span></div>
          <div className="flex items-center gap-2.5"><MessageCircle size={39} strokeWidth={1.7} className="shrink-0 text-[#4EC2A5]" /><span>Direct Chat,<br />No Brokerage</span></div>
          <div className="flex items-center gap-2.5"><Star size={39} strokeWidth={1.7} className="shrink-0 text-[#4EC2A5]" /><span>Compatibility<br />That Matters</span></div>
        </motion.div>

      </div>

    </motion.div>
  </div>
</section>
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="border-y border-[#E5E5E5] bg-white py-20 lg:py-28"
      >
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-8 rounded-full bg-[#F7F7F7] blur-3xl" />
              <img
                src={cityIllustration}
                alt="A line illustration of people finding their place in the city"
                className="relative h-auto w-full mix-blend-multiply"
              />
            </div>
            <div className="max-w-xl">
              <Eyebrow>Our story</Eyebrow>
              <h2 className="font-serif text-4xl font-extrabold leading-[1.03] tracking-[-0.04em] text-[#101010] sm:text-5xl">
                A better way to find where you belong.
              </h2>
              <div className="mt-7 space-y-5 text-sm leading-relaxed text-[#5F5F5F] sm:text-base">
                <p>
                  We know the struggle of moving to a new city—finding a place, trusting strangers, and paying high brokers.
                </p>
                <p>
                  NestMate was built to change that. We bring verified rooms, compatible flatmates, and real connections into one platform so you can find more than just a room—you can find your people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="bg-[#0A0A0A] py-20 text-white lg:py-28"
      >
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
            <div className="max-w-sm">
              <Eyebrow tone="dark">Our mission</Eyebrow>
              <h2 className="font-serif text-4xl font-extrabold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl">
                Making cities feel like home.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
                We’re here to make moving simpler, safer, and more human for everyone.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 divide-x divide-y divide-white/10 border-y border-white/10 md:grid-cols-4 md:divide-y-0"
            >
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div key={value.title} variants={fadeUp} className="min-h-[190px] px-5 py-7 text-center md:px-6">
                    <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xs">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-white">{value.title}</h3>
                    <p className="mx-auto mt-2 max-w-[150px] text-xs leading-relaxed text-white/60">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="bg-[#0A0A0A] py-20 text-white lg:py-28"
      >
        <div className="container-max">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow tone="dark">Our process</Eyebrow>
            <h2 className="font-serif text-4xl font-extrabold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl">
              Simple steps, better living.
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1A1A1A] md:grid-cols-4"
          >
            {PROCESS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} className="relative min-h-[210px] border-b border-white/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                  <Icon size={24} className="mb-6 text-white" />
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white">{item.step}</span>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-3 max-w-[180px] text-xs leading-relaxed text-white/60">{item.description}</p>
                  {index < PROCESS.length - 1 && <ArrowRight size={15} className="absolute right-[-8px] top-[53%] z-10 hidden bg-[#1A1A1A] text-white/40 md:block" />}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8F8F6] py-20 lg:py-24"
      >
        <div className="container-max">
          <Eyebrow className="text-center">By the numbers</Eyebrow>
          <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 divide-x divide-y divide-[#E5E5E5] border-y border-[#E5E5E5] md:grid-cols-4 md:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-5 py-8 text-center md:px-7">
                <p className="font-serif text-4xl font-extrabold tracking-[-0.045em] text-[#101010] sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-xs font-medium text-[#696969]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="bg-white px-3 pb-20 pt-4 sm:px-5 lg:px-7 lg:pb-24">
  <div className="relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-[1.5rem] border border-[#E5E5E5] bg-[#F5F4F1]">
    <img
      src={sharedLivingSpace}
      alt="A calm NestMate home"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_60%]"
    />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.55)_55%,rgba(255,255,255,0.1)_100%)]" />

    <div className="mx-auto max-w-xl px-7 py-20 text-center sm:px-12 lg:py-24">
      <Eyebrow>Ready to get started?</Eyebrow>
      <h2 className="font-serif text-4xl font-extrabold leading-[1.03] tracking-[-0.04em] text-[#101010] sm:text-5xl">
        Find your place.<br />Find your people.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#606060]">
        Join thousands of people who have found more than just a room through NestMate.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring} className="w-full sm:w-auto">
          <Link to="/browse" className="flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2A2A2A]">
            Explore Rooms
            <ArrowRight size={15} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring} className="w-full sm:w-auto">
          <Link to="/post-room" className="flex items-center justify-center rounded-full border border-[#0A0A0A]/20 bg-white/80 px-6 py-3 text-sm font-semibold text-[#171717] backdrop-blur-sm transition-colors hover:border-[#0A0A0A]">
            Post a Room
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
