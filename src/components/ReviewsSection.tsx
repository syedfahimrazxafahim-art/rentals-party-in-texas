import React, { useState } from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/boatData';
import { Review } from '../types';
import { Star, MessageSquare, CheckCircle, ThumbsUp, Send } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newLake, setNewLake] = useState('Lake Lewisville');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: newAuthor,
      role: newRole || 'Dallas Local',
      rating: 5,
      date: 'Just now',
      lake: newLake,
      comment: newComment,
      event: 'Lake Party Experience',
      avatarBg: 'from-[#ff00e6] to-[#39ff14]',
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewAuthor('');
    setNewRole('');
    setNewComment('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative w-full py-12 px-4 sm:px-8 lg:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white font-heading">
          Dallas Community <span className="text-[#00f5ff]">Love</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-3">
          Over 500 happy party crews, bachelorette celebrations, and family lake day outings across DFW waters.
        </p>
      </div>

      {/* Review Metrics Banner */}
      <div className="max-w-7xl mx-auto mb-12 bg-black/50 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-wrap items-center justify-around gap-6 text-center">
        <div>
          <div className="text-4xl sm:text-5xl font-black text-[#00f5ff] font-heading drop-shadow-[0_0_12px_#00f5ff]">
            5.0
          </div>
          <div className="flex justify-center text-[#39ff14] my-1 text-sm">
            ★★★★★
          </div>
          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">
            Average Rating
          </div>
        </div>

        <div className="h-12 w-px bg-white/10 hidden sm:block" />

        <div>
          <div className="text-4xl sm:text-5xl font-black text-[#ff00e6] font-heading drop-shadow-[0_0_12px_#ff00e6]">
            500+
          </div>
          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">
            Dallas Locals Hosted
          </div>
        </div>

        <div className="h-12 w-px bg-white/10 hidden sm:block" />

        <div>
          <div className="text-4xl sm:text-5xl font-black text-[#39ff14] font-heading drop-shadow-[0_0_12px_#39ff14]">
            100%
          </div>
          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">
            BYOB & BYOE Approved
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {reviewsList.map((rev) => (
          <div
            key={rev.id}
            className="bg-[#1a0b2e] border border-white/15 hover:border-[#ff00e6]/60 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Reviewer Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-tr ${rev.avatarBg} flex items-center justify-center font-black text-black text-sm uppercase shadow-md`}
                  >
                    {rev.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base font-heading">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-gray-400">{rev.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[#39ff14] text-xs font-bold">★★★★★</div>
                  <span className="text-[10px] text-gray-500">{rev.date}</span>
                </div>
              </div>

              {/* Tag / Event */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] text-[#00f5ff] font-bold uppercase mb-4">
                <span>{rev.lake}</span>
                <span>•</span>
                <span>{rev.event}</span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-gray-400">
              <CheckCircle className="w-3.5 h-3.5 text-[#39ff14]" />
              <span>Verified Texas Flo Customer</span>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a Review Box */}
      <div className="max-w-3xl mx-auto bg-black/50 border border-white/15 rounded-3xl p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading text-center mb-2">
          Recently Cruised With Us?
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 text-center mb-6">
          Drop your review and show love to Dallas’s favorite pontoon crew!
        </p>

        {submitted ? (
          <div className="p-4 rounded-2xl bg-[#39ff14]/20 border border-[#39ff14] text-center text-[#39ff14] font-bold text-sm">
            🎉 Thank you! Your review has been added to our board.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="e.g. Alexis M."
                  className="w-full bg-[#1a0b2e] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                  Neighborhood / City
                </label>
                <input
                  type="text"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  placeholder="e.g. Uptown Dallas"
                  className="w-full bg-[#1a0b2e] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                Lake Cruised
              </label>
              <select
                value={newLake}
                onChange={(e) => setNewLake(e.target.value)}
                className="w-full bg-[#1a0b2e] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
              >
                <option value="Lake Lewisville">Lake Lewisville (Party Cove)</option>
                <option value="Joe Pool Lake">Joe Pool Lake</option>
                <option value="Lake Ray Hubbard">Lake Ray Hubbard</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">
                Your Lake Experience
              </label>
              <textarea
                required
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Tell us about the music, the boat, the vibes, or the sunset..."
                className="w-full bg-[#1a0b2e] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f5ff]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#ff00e6] hover:bg-white text-black font-black uppercase text-sm tracking-wider shadow-[0_0_15px_#ff00e6] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Post Your Review</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
