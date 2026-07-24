import { MessageCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UserProfileCard({
  name, age, profession, occupation, city, bio,
  avatar, profileImage,
  preferences = [], rating = 4.8, reviews = 12,
  userId,
  matchScore = 90,
}) {
  const navigate = useNavigate();
  const displayAvatar = avatar || profileImage || name?.charAt(0)?.toUpperCase();
  const displayProfession = profession || occupation;

  return (
    <div className="card overflow-hidden bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-neutral-400 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-[#0D0D12] text-white flex items-center justify-center font-serif text-2xl font-bold shrink-0">
          {displayAvatar}
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-[#0D0D12]">{name}</h3>
          <p className="text-xs text-[#6B7280]">
            {age && `${age} \u2022 `}{displayProfession}{displayProfession && city ? ' \u2022 ' : ''}{city}
          </p>
        </div>
      </div>

      {bio && <p className="text-xs text-[#6B7280] mb-6 leading-relaxed">{bio}</p>}

      {/* Rating */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className={i < Math.floor(rating) ? 'fill-[#0D0D12] text-[#0D0D12]' : 'text-[#E5E7EB]'} />
          ))}
        </div>
        <span className="text-xs text-[#6B7280] font-medium">{rating} ({reviews} reviews)</span>
      </div>

      {/* Compatibility */}
      <div className="mb-6 pb-6 border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D12]">Compatibility</span>
          <span className="text-xs font-bold text-[#0D0D12]">{matchScore}%</span>
        </div>
        <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#0D0D12] rounded-full" style={{ width: `${matchScore}%` }} />
        </div>
      </div>

      {/* Preferences (Neutral Badges) */}
      {preferences.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-semibold text-[#0D0D12] uppercase tracking-wider mb-2.5">Preferences</p>
          <div className="flex flex-wrap gap-1.5">
            {preferences.map((pref) => (
              <span key={pref} className="text-xs bg-white border border-[#E5E7EB] text-[#6B7280] px-2.5 py-1 rounded-full font-medium">{pref}</span>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => userId && navigate(`/messages/${userId}`)}
        className="w-full py-2.5 bg-[#0D0D12] hover:bg-black text-white rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all"
      >
        <MessageCircle size={15} />
        Send Message
      </button>
    </div>
  );
}
