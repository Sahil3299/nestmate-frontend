import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Home,
  IndianRupee,
  MessageCircle,
  Play,
  Search,
  Shield,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import ListingCard from '../components/ListingCard';
import heroBg from '../assets/aboutpage.png';
import infoCard from '../assets/info_card.png';
import dashboardCard from '../assets/card.png';
import livingRoom from '../assets/shared_living_space.png';

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
    image: livingRoom,
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

const CITIES = ['Mumbai', 'Pune', 'Bangalore', 'Thane', 'Delhi', 'Hyderabad'];
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
    step: '01'
  },
  {
    icon: MessageCircle,
    title: 'Connect & Visit',
    description: 'Message directly to schedule a visit or virtual walkthrough with zero brokerage.',
    step: '02'
  },
  {
    icon: Home,
    title: 'Move In Safely',
    description: 'Finalize agreements stress-free and settle into your new home with verified trust.',
    step: '03'
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
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCity, setSearchCity] = useState('Mumbai');

  const handleSearch = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (searchCity) params.set('city', searchCity);
    navigate(`/browse?${params.toString()}`);
  };

  return (
    <div className="w-full overflow-x-hidden bg-[#F7F7F7]">
      <section className="px-3 pb-16 pt-3 sm:px-5 sm:pb-20 lg:px-7">
  <div className="relative isolate mx-auto min-h-[700px] max-w-[1440px] overflow-hidden rounded-[1.5rem] border border-black/[0.04] bg-[#f8f8f6] shadow-[0_18px_45px_rgba(23,20,16,0.06)] sm:min-h-[650px] lg:min-h-[700px]">

    {/* Background Image */}
    <img
      src={heroBg}
      alt="A welcoming NestMate home with a city view"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
    />

    {/* About-page style dark overlay */}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.62)_35%,rgba(0,0,0,0.30)_68%,rgba(0,0,0,0.08)_100%)]" />

    {/* Subtle overall darkening */}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.30)_100%)]" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex min-h-[700px] items-start px-6 py-12 sm:min-h-[650px] sm:items-center sm:px-12 sm:py-20 lg:min-h-[700px] lg:px-20 xl:px-28"
    >
      <div className="w-full max-w-2xl text-left">

        {/* SAME CONTENT */}
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs font-medium text-white/80 sm:mb-4 sm:text-base"
        >
          Move in with trust, not tension
        </motion.p>

        {/* SAME HEADING — About page typography/color */}
        <h1 className="mb-5 font-serif text-[2.9rem] font-black leading-[0.96] tracking-[-0.052em] text-white sm:mb-6 sm:text-[clamp(3.25rem,6vw,5.8rem)]">
          <motion.span
            variants={fadeUp}
            className="block"
          >
            Find Your Perfect
          </motion.span>

          <motion.span
            variants={fadeUp}
            className="block text-[#67CFA5]"
          >
            Flatmate in Mumbai
          </motion.span>
        </h1>

        {/* SAME TRUST BADGE */}
        <motion.div variants={fadeUp} className="mb-5 sm:mb-7">
          <TrustBadge tone="dark" />
        </motion.div>

        {/* SAME SEARCH */}
        <motion.div variants={fadeUp} className="mb-6 w-full max-w-2xl">
          <form
            onSubmit={handleSearch}
            className="flex flex-col items-center gap-2 rounded-[2rem] border border-[#E5E5E5] bg-white/95 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:border-[#0A0A0A]/50 sm:flex-row sm:rounded-full"
          >
            <div className="flex w-full flex-1 items-center gap-3 px-4 py-2">
              <Search
                size={20}
                className="shrink-0 text-[#6B6B6B]"
              />

              <input
                type="text"
                placeholder="Search by city, locality, or budget..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full bg-transparent text-sm text-[#0A0A0A] placeholder-[#6B6B6B]/70 focus:outline-none"
              />
            </div>

            <div className="flex w-full min-w-0 items-center gap-2 px-2 sm:w-auto">
              <select
                value={searchCity}
                onChange={(event) => setSearchCity(event.target.value)}
                className="shrink-0 cursor-pointer rounded-full border border-[#E5E5E5] bg-[#F7F7F7] px-4 py-2.5 text-xs font-semibold text-[#0A0A0A] focus:outline-none"
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#2A2A2A] sm:w-auto sm:flex-none sm:px-7"
              >
                Search
                <ArrowRight size={14} />
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* SAME BUTTONS */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            <Link
              to="/browse"
              className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#0A0A0A] shadow-xs transition-colors hover:bg-[#67CFA5]"
            >
              Start Browsing
              <ArrowRight size={13} />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            <a
              href="#how-it-works"
              className="flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white shadow-xs backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <Play size={12} />
              See How It Works
            </a>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
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
        className="bg-[#0A0A0A] py-24 lg:py-32"
      >
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={staggerContainer} className="max-w-xl">
              <motion.span variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                <Sparkles size={14} className="text-white" />
                Hassle-free matching
              </motion.span>
              <motion.h2 variants={fadeUp} className="mb-5 font-serif text-4xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Search less. Settle in with more{' '}
                <span className="italic text-white/80">confidence.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mb-8 text-base leading-relaxed text-white/70 sm:text-lg">
                NestMate keeps verified rooms, lifestyle preferences, and direct conversations together so every shortlist feels clearer from the first message.
              </motion.p>
              <motion.div variants={fadeUp} className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                {['Verified profile cues', 'Budget-first browsing', 'Direct owner chat', 'Lifestyle compatibility'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-white" />
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
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1A1A1A] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.3)] sm:p-3">
                <img
                  src={dashboardCard}
                  alt="NestMate dashboard showing flat discovery, matching, and requirements"
                  className="block h-auto w-full rounded-[1.45rem]"
                />
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
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="border-t border-[#E5E5E5] bg-white py-24 lg:py-32"
      >
        <div className="container-max">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="section-eyebrow mx-auto">Simple Process</span>
            <h2 className="section-title">How NestMate Works</h2>
            <p className="section-subtitle mx-auto">Three simple steps to find your ideal flatmate or rental room.</p>
          </div>

          <motion.figure
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#E5E5E5] bg-[#fbfbfa] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.06)] sm:p-3"
          >
            <img
              src={infoCard}
              alt="Find your perfect match, view verified profiles, explore homes, and chat with potential flatmates"
              className="block h-auto w-full rounded-[1.5rem]"
            />
          </motion.figure>
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
                  <div className="mb-5 font-serif text-5xl leading-none text-white/20">“</div>
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

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="border-t border-[#E5E5E5] bg-white py-24"
      >
        <div className="container-max">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#0A0A0A] p-10 text-center text-white shadow-xl lg:p-16">
            <h2 className="mb-6 font-serif text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Ready to Find Your Flatmate?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base font-normal leading-relaxed text-white/60 sm:text-lg">
              Join thousands of verified tenants and property owners. Zero brokerage, stress-free move-in.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring} className="w-full sm:w-auto">
                <Link
                  to="/post-room"
                  className="block w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#EFEFEF] sm:w-auto"
                >
                  Post Free Ad
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={spring} className="w-full sm:w-auto">
                <Link
                  to="/browse"
                  className="block w-full rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
                >
                  Browse Rooms
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
