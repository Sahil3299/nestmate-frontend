import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Eye, EyeOff, Home, CheckCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { authApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export default function SignupPage() {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seeker',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await authApi.register(form);
      const { accessToken, user } = res.data.data;
      localStorage.setItem('accessToken', accessToken);
      await refreshUser();
      toast.success(`Welcome to NestMate, ${user.name}!`);
      navigate('/', { replace: true });
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex bg-[#FAFAFA]">
      {/* Left - Monochrome Branding/Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0D0D12] text-white relative overflow-hidden items-center justify-center p-12">
        <div className="relative z-10 text-center max-w-md">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Home size={32} className="text-white" />
          </div>
          <h1 className="font-serif text-4xl font-extrabold text-white mb-4 tracking-tight">
            Join NestMate Today
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed font-normal">
            Create your account and find verified roommates or list your room with zero brokerage.
          </p>
          <div className="mt-10 space-y-3 max-w-xs mx-auto text-left">
            {['Create your profile in minutes', 'Connect with compatible roommates', 'Get personalized room recommendations'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle size={12} className="text-white" />
                </div>
                <span className="text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-10 shadow-xs">
          <h2 className="font-serif text-3xl font-bold text-[#0D0D12] mb-2 tracking-tight">Create Account</h2>
          <p className="text-[#6B7280] text-sm mb-8">Join the NestMate community and find your perfect match.</p>

          {error && (
            <div className="flex items-center gap-3 p-4 mb-6 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-xs font-medium">
              <AlertCircle size={16} className="shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D12]">
                Full Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-full border border-[#E5E7EB] bg-white px-4 py-3 pl-11 text-[#0D0D12] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0D0D12]/20 focus:border-[#0D0D12] transition-all text-sm"
                  autoComplete="name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D12]">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-[#E5E7EB] bg-white px-4 py-3 pl-11 text-[#0D0D12] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0D0D12]/20 focus:border-[#0D0D12] transition-all text-sm"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D12]">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-full border border-[#E5E7EB] bg-white px-4 py-3 pl-11 pr-11 text-[#0D0D12] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0D0D12]/20 focus:border-[#0D0D12] transition-all text-sm"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#0D0D12] transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D0D12]">
                I want to
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, role: 'seeker' })}
                  className={`flex flex-col items-center gap-1.5 p-3.5 rounded-2xl border transition-all ${
                    form.role === 'seeker'
                      ? 'border-[#0D0D12] bg-[#0D0D12] text-white'
                      : 'border-[#E5E7EB] bg-white text-[#6B7280] hover:border-neutral-400'
                  }`}
                >
                  <Home size={20} />
                  <span className="text-xs font-semibold">Find a Room</span>
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, role: 'host' })}
                  className={`flex flex-col items-center gap-1.5 p-3.5 rounded-2xl border transition-all ${
                    form.role === 'host'
                      ? 'border-[#0D0D12] bg-[#0D0D12] text-white'
                      : 'border-[#E5E7EB] bg-white text-[#6B7280] hover:border-neutral-400'
                  }`}
                >
                  <UserPlus size={20} />
                  <span className="text-xs font-semibold">List a Room</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#0D0D12] hover:bg-black text-white rounded-full text-sm font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <UserPlus size={16} />
                  Create Account
                </span>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-[#6B7280]">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-[#0D0D12] underline hover:text-black">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
