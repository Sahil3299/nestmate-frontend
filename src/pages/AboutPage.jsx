import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Home, MessageCircle, Shield, Sparkles, Users } from 'lucide-react';
import sharedLivingSpace from '../assets/shared_living_space.png';

const spring = { type: 'spring', stiffness: 320, damping: 24 };

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const STATS = [
  { value: '12,000+', label: 'matched flatmates & tenants' },
  { value: '6', label: 'cities covered' },
  { value: '7 days', label: 'average shortlist window' },
];

const VALUES = [
  {
    icon: Shield,
    title: 'Trust first',
    description: 'We design around verified signals, safer conversations, and clearer decisions from the beginning.',
  },
  {
    icon: Users,
    title: 'Lifestyle fit',
    description: 'A good home match is more than rent. Habits, timing, and expectations matter too.',
  },
  {
    icon: MessageCircle,
    title: 'Direct connection',
    description: 'NestMate keeps communication simple so tenants, owners, and flatmates can move faster.',
  },
  {
    icon: Home,
    title: 'Calmer moving',
    description: 'The goal is less confusion, fewer middlemen, and a smoother path into the right home.',
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-[#F7F7F7]">
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-center lg:text-left"
            >
              <motion.span
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] shadow-xs"
              >
                <Sparkles size={14} className="text-[#14B8A6]" />
                About NestMate
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mb-6 font-serif text-5xl font-extrabold leading-[1] tracking-tight text-[#0A0A0A] sm:text-6xl lg:text-7xl"
              >
                Helping people find a home match they can trust.
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto max-w-xl text-base leading-relaxed text-[#6B6B6B] sm:text-lg lg:mx-0">
                NestMate exists to make flatmate and tenant discovery feel faster, safer, and more human for people moving across Indian cities.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-white" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#E5E5E5] bg-white p-3 shadow-card">
                <img
                  src={sharedLivingSpace}
                  alt="NestMate shared living"
                  className="h-[360px] w-full rounded-[1.5rem] object-cover grayscale"
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/25 bg-[#0A0A0A]/80 p-5 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">Mission</p>
                  <p className="mt-2 font-serif text-2xl font-bold leading-tight text-white">
                    Better matches, fewer compromises.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="border-y border-[#E5E5E5] bg-white py-20 lg:py-24"
      >
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">Why NestMate</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[#6B6B6B]">
              <p>
                Moving into a shared home should not feel like taking a leap in the dark. NestMate brings verified listings, preference-led discovery, and direct conversations into one calmer experience.
              </p>
              <p>
                We are building for students, professionals, tenants, and owners who want speed without losing trust. The right match should be easy to compare, easy to contact, and easy to feel good about.
              </p>
              <p>
                Our product direction stays simple: reduce brokerage friction, improve transparency, and help every person understand who they are choosing to live with before they commit.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 lg:py-24"
      >
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 16px 34px rgba(0, 0, 0, 0.08)' }}
                transition={spring}
                className="rounded-3xl border border-[#E5E5E5] bg-white p-8"
              >
                <p className="mb-2 font-serif text-5xl font-extrabold leading-none text-[#14B8A6]">{stat.value}</p>
                <p className="text-sm font-medium leading-relaxed text-[#6B6B6B]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-[#E5E5E5] bg-white py-24 lg:py-28"
      >
        <div className="container-max">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="section-eyebrow mx-auto">Values</span>
            <h2 className="section-title">Built for better decisions</h2>
            <p className="section-subtitle mx-auto">
              A minimal product promise: make every home search more transparent, direct, and trustworthy.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: '0 16px 34px rgba(0, 0, 0, 0.08)' }}
                  transition={spring}
                  className="rounded-3xl border border-[#E5E5E5] bg-[#F7F7F7] p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#0A0A0A]">
                    <Icon size={19} />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold text-[#0A0A0A]">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B6B6B]">{value.description}</p>
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
        viewport={{ once: true, amount: 0.25 }}
        className="bg-[#0A0A0A] py-24 text-white"
      >
        <div className="container-max">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <CheckCircle2 size={14} className="text-[#14B8A6]" />
              Zero brokerage, verified trust
            </div>
            <h2 className="mb-6 font-serif text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl">
              Ready to find your match?
            </h2>
            <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-white/60">
              Browse verified rooms or post a free ad and start connecting with people who fit your home, budget, and lifestyle.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring} className="w-full sm:w-auto">
                <Link
                  to="/post-room"
                  className="block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#14B8A6] hover:text-white"
                >
                  Post Free Ad
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring} className="w-full sm:w-auto">
                <Link
                  to="/browse"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
                >
                  Browse Rooms
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
