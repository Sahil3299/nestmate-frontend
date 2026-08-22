import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Zap, Users, Home, Pencil, Trash2 } from 'lucide-react';

export default function ListingCard({
  id,
  title,
  description,
  locality,
  city,
  price,
  roomType,
  image,
  matchScore,
  preferences = [],
  owner,
  gender,
  available = true,
  isBrokerageFree = true,
  isOwner = false,
  onEdit,
  onDelete,
}) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="card overflow-hidden group bg-white border border-[#E5E5E5] rounded-2xl hover:border-neutral-400 hover:shadow-card-hover transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-100 h-52 md:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Room Type & Brokerage Badges (Unified Neutral Pill Badges) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <div className="bg-white border border-[#E5E5E5] px-3 py-1 rounded-full text-xs font-semibold text-[#0A0A0A] shadow-xs flex items-center gap-1.5">
            <Home size={12} className="text-[#6B6B6B]" />
            {roomType}
          </div>
          {isBrokerageFree && (
            <div className="bg-white border border-[#E5E5E5] text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
              Zero Brokerage
            </div>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={(e) => { e.preventDefault(); setIsSaved(!isSaved); }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm border border-[#E5E5E5] rounded-full shadow-xs hover:bg-white transition-all duration-200"
          aria-label="Save listing"
        >
          <Heart
            size={16}
            className={isSaved ? 'fill-[#0A0A0A] text-[#0A0A0A]' : 'text-[#6B6B6B]'}
          />
        </button>

        {/* Match Score Pill */}
        {matchScore && (
          <div className="absolute bottom-3 left-3 bg-[#0A0A0A] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
            <Zap size={13} className="text-white" />
            {matchScore}% Match
          </div>
        )}

        {/* Availability Badge */}
        <div className="absolute bottom-3 right-3 bg-white border border-[#E5E5E5] text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-semibold shadow-xs flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-[#0A0A0A]' : 'bg-neutral-400'}`} />
          {available ? 'Available' : 'Rented'}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Title & Locality */}
        <h3 className="font-serif font-bold text-[#0A0A0A] mb-1 line-clamp-1 text-lg">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] mb-3">
          <MapPin size={13} />
          {locality}, {city}
        </div>

        {/* Short Description */}
        {description && (
          <p className="text-xs text-[#6B6B6B] line-clamp-2 mb-4 leading-relaxed h-8">
            {description}
          </p>
        )}

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-serif font-bold text-[#0A0A0A]">
            &#x20B9;{price?.toLocaleString()}<span className="text-xs font-sans text-[#6B6B6B] font-normal"> / month</span>
          </p>
        </div>

        {/* Gender & Preferences (Unified Neutral Badges) */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {gender && (
            <span className="text-xs bg-white border border-[#E5E5E5] text-[#6B6B6B] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Users size={11} />
              {gender}
            </span>
          )}
          {preferences.slice(0, 2).map((pref, idx) => (
            <span
              key={idx}
              className="text-xs bg-white border border-[#E5E5E5] text-[#6B6B6B] px-2.5 py-1 rounded-full font-medium"
            >
              {pref}
            </span>
          ))}
          {preferences.length > 2 && (
            <span className="text-xs bg-white border border-[#E5E5E5] text-[#6B6B6B] px-2.5 py-1 rounded-full font-medium">
              +{preferences.length - 2}
            </span>
          )}
        </div>

        {/* Owner & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
          {owner && (
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                {owner.avatar || owner.name?.charAt(0) || 'U'}
              </div>
              <span className="text-xs text-[#6B6B6B] font-medium">{owner.name}</span>
            </div>
          )}
          {isOwner ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onEdit?.(id)}
                className="btn-secondary px-3 py-2 text-xs"
                aria-label={`Edit ${title}`}
              >
                <Pencil size={13} />
                Edit
              </button>
              <button
                type="button"
                onClick={() => onDelete?.(id)}
                className="btn-primary px-3 py-2 text-xs"
                aria-label={`Delete ${title}`}
              >
                <Trash2 size={13} />
                Delete
              </button>
            </div>
          ) : (
            <Link
              to={`/browse/${id}`}
              className="px-4 py-2 bg-[#0A0A0A] hover:bg-[#2A2A2A] text-white rounded-full text-xs font-semibold transition-all"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
