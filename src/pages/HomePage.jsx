import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Home,
  IndianRupee,
  MessageCircle,
  Search,
  Shield,
  Sparkles,
  Star,
  User,
  Users,
} from 'lucide-react';
import ListingCard from '../components/ListingCard';
import bgImage from '../assets/Bg.png';
import sharedLivingSpace from '../assets/shared_living_space.png';
import infoCard from '../assets/info_card.png';
import cardImg from '../assets/card.png';

const DUMMY_LISTINGS = [
  {
    id: 'dummy-1',
    title: 'Premium 1BHK in Bandra West',
    locality: 'Bandra West',
    city: 'Mumbai',
    price: 25000,
    roomType: '1BHK',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    matchScore: 92,
    preferences: ['Vegetarian', 'Non-smoker', 'Female only'],
    gender: 'Female',
    available: true,
    owner: { id: 'owner-1', name: 'Priya Singh', avatar: 'PS' }
  },
  {
    id: 'dummy-2',
    title: 'Spacious 2BHK with Sea View',
    locality: 'Powai',
    city: 'Mumbai',
    price: 35000,
    roomType: '2BHK',
    image: 'sharedLivingSpace',
    matchScore: 85,
    preferences: ['Professional', 'Early sleeper'],
    gender: 'Male',
    available: true,
    owner: { id: 'owner-2', name: 'Rajesh Kumar', avatar: 'RK' }
  },
  {
    id: 'dummy-3',
    title: 'Cozy Studio near Koregaon Park',
    locality: 'Koregaon Park',
    city: 'Pune',
    price: 15000,
    roomType: 'Studio',
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop',
    matchScore: 88,
    preferences: ['Student', 'Non-smoker'],
    gender: 'Any',
    available: false,
    owner: { id: 'owner-3', name: 'Neha Patel', avatar: 'NP' }
  },
];

const AVATARS = ['AM', 'SK', 'RV'];

const VALUE_PILLARS = [
  {
    icon: Shield,
    title: 'Verified listings only',
    description: 'Every profile and room is manually verified with government ID check for complete safety.',
  },
  {
    icon: MessageCircle,
    title: 'Meet before you commit',
    description: 'Chat directly with potential flatmates, ask questions, and visit before signing any agreement.',
  },
  {
    icon: IndianRupee,
    title: 'Zero brokerage, hassle-free',
    description: 'Direct owner and tenant connections with no hidden middleman fees or brokerage charges.',
  },
];

const STEPS = [
  {
    icon: Search,
    title: 'Search & Filter',
    description: 'Explore verified rooms and roommate profiles by city, budget, and lifestyle preferences.',
    step: '01',
    image: infoCard
  },
  {
    icon: MessageCircle,
    title: 'Connect & Visit',
    description: 'Message directly to schedule a visit or virtual walkthrough with zero brokerage.',
    step: '02',
    image: cardImg
  },
  {
    icon: Home,
    title: 'Move In Safely',
    description: 'Finalize agreements stress-free and settle into your new home with verified trust.',
    step: '03',
    image: infoCard
  },
];

const TESTIMONIALS = [
  {
    name: 'Arjun Mehta',
    locality: 'Bandra, Mumbai',
    avatar: 'AM',
    quote: 'Found a great flatmate in 3 days. The verification process gave me complete confidence.',
    rating: 5
  },
  {
    name: 'Sneha Kapoor',
    locality: 'Kharadi, Pune',
    avatar: 'SK',
    quote: 'Zero brokerage and direct chat made moving to a new city stress-free and affordable.',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    locality: 'Indiranagar, Bangalore',
    avatar: 'RV',
    quote: 'The lifestyle compatibility score matched me with someone who shares my exact schedule.',
    rating: 5
  },
];

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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 38, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 },
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

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const hiwHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const hiwContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const hiwCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const hiwIconVariants = {
  hidden: { scale: 0, rotate: -10 },
  visible: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.1 } },
};

const hiwNumberVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, delay: 0.2 } },
};

function Stars({ rating, tone = 'light' }) {
  const activeClass = tone === 'dark' ? 'fill-white text-white' : 'fill-[#0A0A0A] text-[#0A0A0A]';
  const inactiveClass = tone === 'dark' ? 'text-white/20' : 'text-[#E5E5E5]';

  return (
    <div className="flex items-center gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={13}
          className={index < rating ? activeClass : inactiveClass}
        />
      ))}
    </div>
  );
}

function TrustBadge({ tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <motion.div
      variants={fadeUp}
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border shadow-xs ${
        isDark
          ? 'border-white/15 bg-white/10 text-white'
          : 'border-[#E5E5E5] bg-white text-[#0A0A0A]'
      }`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex -space-x-2 overflow-hidden"
      >
        {AVATARS.map((avatar, index) => (
          <motion.div
            key={avatar}
            variants={{
              hidden: { opacity: 0, scale: 0.72 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { ...spring, delay: index * 0.04 },
              },
            }}
            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold ring-2 ${
              isDark
                ? 'bg-white text-[#0A0A0A] ring-[#0A0A0A]'
                : 'bg-[#0A0A0A] text-white ring-white'
            }`}
          >
            {avatar}
          </motion.div>
        ))}
      </motion.div>
      <span className={`text-xs font-semibold tracking-wide ${isDark ? 'text-white/80' : 'text-[#0A0A0A]'}`}>
        Trusted by 12,000+ flatmates & tenants
      </span>
    </motion.div>
  );
}

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full overflow-x-hidden bg-[#F7F7F7]">
      <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 lg:pb-24">
        <div className="container-max">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-center lg:text-left"
            >
              <motion.p
                variants={fadeUp}
                className="mb-4 text-sm font-medium tracking-wide text-[#6B6B6B] sm:text-base"
              >
                Move in with trust, not tension
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mb-8 font-serif text-4xl font-black leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
              >
                Find Your Perfect Flatmate in Mumbai
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mb-8 flex items-center justify-center gap-3 lg:justify-start"
              >
                <div className="flex -space-x-2.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#F7F7F7] bg-[#0A0A0A]"
                      style={{ zIndex: 3 - i }}
                    >
                      <User size={16} className="text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-[#6B6B6B]">
                  Trusted by verified users across Mumbai
                </span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring}>
                  <Link
                    to="/browse"
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E5E5] bg-white px-6 py-3 text-sm font-semibold text-[#0A0A0A] shadow-sm transition-all hover:border-[#0A0A0A]/50 hover:shadow-md"
                  >
                    <Search size={16} className="text-[#6B6B6B]" />
                    Start your search
                    <ArrowRight size={14} className="text-[#6B6B6B]" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="relative mx-auto flex min-h-[280px] w-full max-w-[640px] items-center justify-center overflow-visible px-0 py-2 sm:min-h-[360px] lg:min-h-[440px] xl:max-w-[760px]"
            >
              <img
                src={bgImage}
                alt="NestMate Line Art Illustration"
                className="relative z-10 h-auto max-h-[320px] w-full max-w-[640px] object-contain mix-blend-multiply sm:max-h-[420px] lg:max-h-[520px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-y border-[#E5E5E5] bg-white py-16"
      >
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {VALUE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={cardReveal}
                  whileHover={{ y: -4, boxShadow: '0 16px 34px rgba(0, 0, 0, 0.08)' }}
                  transition={spring}
                  className="rounded-3xl border border-[#E5E5E5] bg-[#F7F7F7] p-8 transition-colors hover:border-[#0A0A0A]/30"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#0A0A0A] shadow-xs">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-[#0A0A0A]">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B6B6B]">{pillar.description}</p>
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
        className="bg-[#0A0A0A] py-24 text-white lg:py-32"
      >
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={staggerContainer} className="max-w-xl">
              <motion.span variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <Sparkles size={14} className="text-[#14B8A6]" />
                Hassle-free matching
              </motion.span>
              <motion.h2 variants={fadeUp} className="mb-5 font-serif text-4xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Search less. Settle in with more confidence.
              </motion.h2>
              <motion.p variants={fadeUp} className="mb-8 text-base leading-relaxed text-white/60 sm:text-lg">
                NestMate keeps verified rooms, lifestyle preferences, and direct conversations together so every shortlist feels clearer from the first message.
              </motion.p>
              <motion.div variants={fadeUp} className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                {['Verified profile cues', 'Budget-first browsing', 'Direct owner chat', 'Lifestyle compatibility'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#14B8A6]" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-2xl"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-white/5 blur-2xl" />
              <div className="ticket-stub relative overflow-hidden rounded-t-[2rem] border border-white/15 bg-[#111111] p-4 shadow-2xl sm:p-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                  <img
                    src={sharedLivingSpace}
                    alt="NestMate shared living preview"
                    className="h-72 w-full object-cover sm:h-80"
                  />
                </div>
                <div className="grid gap-4 px-1 pb-8 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]">NestMate shortlist</p>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-white">3 strong matches near your budget</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">A calmer way to compare homes, flatmates, and move-in fit.</p>
                  </div>
                  <div className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">
                    92% Match
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="py-24 lg:py-32"
      >
        <div className="container-max">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-eyebrow">Handpicked Homes</span>
              <h2 className="section-title">Featured Listings</h2>
              <p className="section-subtitle">Explore top-rated verified rooms across India</p>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring}>
              <Link
                to="/browse"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-2.5 text-xs font-semibold text-[#0A0A0A] transition-all hover:border-[#0A0A0A]"
              >
                View All Listings
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {DUMMY_LISTINGS.map((listing) => (
              <motion.div key={listing.id} variants={cardReveal} whileHover={{ y: -4 }} transition={spring}>
                <ListingCard {...listing} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="border-t border-[#E5E5E5] bg-white py-24 lg:py-32"
      >
        <div className="container-max">
          <motion.div
            variants={prefersReducedMotion ? undefined : hiwHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="section-eyebrow mx-auto">Simple Process</span>
            <h2 className="section-title">How NestMate Works</h2>
            <p className="section-subtitle mx-auto">Three simple steps to find your ideal flatmate or rental room.</p>
          </motion.div>

          <motion.div
            variants={prefersReducedMotion ? undefined : hiwContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={prefersReducedMotion ? undefined : hiwCardVariants}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -8, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }
                  }
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E5E5E5] bg-white p-8 transition-colors hover:border-[#0A0A0A]/30"
                >
                  <div>
                    <div className="mb-4 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F7F7F7]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-36 w-full object-cover"
                      />
                    </div>

                    <div className="mb-8 flex items-center justify-between">
                      <motion.div
                        variants={prefersReducedMotion ? undefined : hiwIconVariants}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] bg-[#F7F7F7] text-[#0A0A0A]"
                      >
                        <Icon size={20} />
                      </motion.div>
                      <motion.span
                        variants={prefersReducedMotion ? undefined : hiwNumberVariants}
                        className="font-serif text-2xl font-bold text-[#E5E5E5]"
                      >
                        {step.step}
                      </motion.span>
                    </div>

                    <h3 className="mb-3 font-serif text-xl font-bold text-[#0A0A0A]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#6B6B6B]">{step.description}</p>
                  </div>
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
        viewport={{ once: true, amount: 0.18 }}
        className="bg-[#0A0A0A] py-24 text-white lg:py-32"
      >
        <div className="container-max">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Real Experiences</span>
              <h2 className="font-serif text-4xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Real stories.
                <span className="block italic text-white/80">Real people.</span>
              </h2>
            </div>
            <TrustBadge tone="dark" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={cardReveal}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)' }}
                transition={spring}
                className="flex min-h-[270px] flex-col justify-between rounded-3xl border border-white/10 bg-[#1A1A1A] p-8"
              >
                <div>
                  <div className="mb-5 font-serif text-5xl leading-none text-[#14B8A6]">“</div>
                  <Stars rating={testimonial.rating} tone="dark" />
                  <p className="text-sm font-medium leading-relaxed text-white/70">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0A0A0A] ring-2 ring-white/20">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{testimonial.name}</p>
                    <p className="text-[11px] text-white/40">{testimonial.locality}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-[#0A0A0A] p-12 text-center text-white shadow-2xl lg:p-20"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#14B8A6]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#14B8A6]/8 blur-3xl" />

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#14B8A6]"
            >
              Get started
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="mb-5 font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Your next home is one message away
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
              className="mx-auto mb-6 max-w-xl text-sm font-normal leading-relaxed text-white/50 sm:text-base"
            >
              Join thousands of verified tenants and property owners. Zero brokerage, stress-free move-in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-white/40"
            >
              <span>25,000+ tenants</span>
              <span className="hidden sm:inline">•</span>
              <span>Zero brokerage</span>
              <span className="hidden sm:inline">•</span>
              <span>Verified owners</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={spring} className="w-full sm:w-auto">
                <Link
                  to="/post-room"
                  className="flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#0A0A0A] shadow-md transition-all duration-200 hover:bg-[#14B8A6] hover:text-white hover:shadow-lg sm:w-auto"
                >
                  Post Free Ad
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={spring} className="w-full sm:w-auto">
                <Link
                  to="/browse"
                  className="flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/15 sm:w-auto"
                >
                  Browse Rooms
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
