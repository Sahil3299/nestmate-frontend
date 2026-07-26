import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { House, Search, PlusCircle, LogIn, LogOut, UserPlus, Menu, X, Info } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (href) => {
    if (href.includes('#')) {
      return location.pathname === '/' && location.hash === href.slice(href.indexOf('#'));
    }
    return location.pathname === href;
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) return undefined;

    const scrollTimer = window.setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, [location.hash, location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/', icon: House },
    { label: 'Browse', href: '/browse', icon: Search },
    { label: 'About', href: '/about', icon: Info },
  ];

  const handleNavClick = (event, href) => {
    setIsOpen(false);
    const hashIndex = href.indexOf('#');

    if (hashIndex !== -1 && location.pathname === '/') {
      event.preventDefault();
      const hash = href.slice(hashIndex);
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'px-4 pt-3 pb-2 sm:px-6' : 'px-0 pt-2 pb-2'
      }`}
    >
      <nav
        className={`transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'max-w-6xl mx-auto rounded-full bg-white border-[#E5E5E5] shadow-lg'
            : 'rounded-none bg-white border-transparent shadow-none'
        }`}
      >
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img src={logo} alt="NestMate" className="h-10 sm:h-11 w-auto" />
          <div className="hidden sm:block">
            <span className="font-serif font-extrabold text-lg text-[#0A0A0A] tracking-tight leading-none block">
              NestMate
            </span>
            <span className="block text-[9px] text-[#6B6B6B] font-semibold tracking-[0.2em] uppercase mt-0.5">
              Find Your Match
            </span>
          </div>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${
                  active
                    ? 'text-[#0A0A0A] font-bold bg-neutral-100'
                    : 'text-[#6B6B6B] font-medium hover:text-[#0A0A0A] hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          {user ? (
            <>
              <Link
                to={`/profile/${user._id || user.id}`}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#0A0A0A] bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] rounded-full transition-all duration-200 shadow-xs"
              >
                <div className="w-6 h-6 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  {user.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <span className="max-w-[90px] truncate">{user.name?.split(' ')[0] || 'Profile'}</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-[#6B6B6B] hover:text-[#0A0A0A] rounded-full transition-all duration-200"
                title="Sign Out"
              >
                <LogOut size={14} />
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              {/* Sign In - Plain text link with icon */}
              <Link
                to="/login"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
              >
                <LogIn size={15} />
                Sign In
              </Link>

              {/* Sign Up - Outline pill */}
              <Link
                to="/signup"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#0A0A0A] bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] rounded-full transition-all duration-200"
              >
                <UserPlus size={15} />
                Sign Up
              </Link>
            </>
          )}

          {/* Post Free Ad - Solid fill capsule (highest intent CTA) */}
          <Link
            to="/post-room"
            className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-[#0A0A0A] hover:bg-[#14B8A6] rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
          >
            <PlusCircle size={15} />
            Post Free Ad
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#0A0A0A] hover:bg-neutral-100 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-[#E5E5E5] rounded-3xl shadow-xl z-50 md:hidden animate-fadeIn p-5">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    active
                      ? 'text-[#0A0A0A] font-bold bg-neutral-100'
                      : 'text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-neutral-50'
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#E5E5E5] space-y-2">
              {user ? (
                <>
                  <Link
                    to={`/profile/${user._id || user.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-[#0A0A0A] bg-neutral-50 transition-all"
                  >
                    <div className="w-7 h-7 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {user.name?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                    My Profile
                  </Link>
                  <button
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-[#0A0A0A] hover:bg-neutral-50 w-full transition-all text-left"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-[#6B6B6B] hover:text-[#0A0A0A] transition-all"
                  >
                    <LogIn size={16} />
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium text-[#0A0A0A] border border-[#E5E5E5] justify-center transition-all"
                  >
                    <UserPlus size={16} />
                    Sign Up
                  </Link>
                </>
              )}
              <Link
                to="/post-room"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#0A0A0A] justify-center rounded-full shadow-sm w-full transition-all"
              >
                <PlusCircle size={16} />
                Post Free Ad
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
