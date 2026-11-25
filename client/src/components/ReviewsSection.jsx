import React, { useState } from 'react';
import { 
  Star, 
  Send, 
  CheckCircle2, 
  Loader2, 
  MessageSquareHeart, 
  Sparkles,
  ShieldCheck,
  Video,
  Code
} from 'lucide-react';
import { submitReview } from '../services/api';

const PROJECT_CATEGORIES = [
  'AI-Powered Video Creation',
  'Software Development',
  'Web & Digital Innovation',
  'Intelligent AI Solutions',
  'Digital & Cloud Solutions',
];

const ReviewsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    rating: 5,
    projectType: 'AI-Powered Video Creation',
    comment: '',
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingSelect = (star) => {
    setFormData((prev) => ({ ...prev, rating: star }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name or company name.');
      return;
    }
    if (!formData.comment.trim()) {
      setErrorMessage('Please write your review feedback.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitReview(formData);
      if (res && res.success) {
        setSubmitSuccess(true);
      } else {
        setErrorMessage(res.error || 'Failed to submit review. Please try again.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setFormData({
      name: '',
      company: '',
      role: '',
      rating: 5,
      projectType: 'AI-Powered Video Creation',
      comment: '',
    });
    setHoverRating(0);
  };

  const getRatingLabel = (score) => {
    switch (score) {
      case 5:
        return '5.0 — Outstanding Experience! ⭐⭐⭐⭐⭐';
      case 4:
        return '4.0 — Very Good & High Quality ⭐⭐⭐⭐';
      case 3:
        return '3.0 — Satisfactory ⭐⭐⭐';
      case 2:
        return '2.0 — Needs Improvement ⭐⭐';
      case 1:
        return '1.0 — Poor ⭐';
      default:
        return '5.0 — Outstanding Experience!';
    }
  };

  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-400/15 dark:bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/15 dark:bg-indigo-900/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/80 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-700 dark:text-brand-300 mb-3 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>Give Us Your Review</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Rate Your Experience with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-indigo-600">
              Aarohan Technology
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            We value your honest feedback. Share your experience with our AI video creation, software engineering, or digital solutions.
          </p>
        </div>

        {/* Review Submission Place (Card Form) */}
        <div className="bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/80 dark:border-slate-700 shadow-2xl shadow-brand-600/10 overflow-hidden relative">
          
          {/* Top Decorative Header Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-500 via-blue-500 to-indigo-600"></div>

          {submitSuccess ? (
            
            /* SUCCESS CONFIRMATION STATE */
            <div className="p-8 sm:p-14 text-center space-y-5 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Thank You for Your Review!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your feedback has been successfully submitted and saved. We truly appreciate you taking the time to share your thoughts with Aarohan Technology.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-center space-x-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30 transition duration-200"
                >
                  Give Another Review
                </button>
              </div>
            </div>

          ) : (

            /* INLINE REVIEW SUBMISSION FORM */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              
              {errorMessage && (
                <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/80 text-red-700 dark:text-red-300 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Star Rating Picker */}
              <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-center space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Select Your Star Rating <span className="text-red-500">*</span>
                </label>

                <div className="flex items-center justify-center space-x-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingSelect(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-2xl transition transform hover:scale-125 focus:outline-none"
                      title={`${star} Star`}
                    >
                      <Star
                        className={`w-8 h-8 sm:w-9 sm:h-9 ${
                          star <= (hoverRating || formData.rating)
                            ? 'text-amber-400 fill-amber-400 drop-shadow'
                            : 'text-slate-300 dark:text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="text-xs font-bold text-brand-600 dark:text-brand-400">
                  {getRatingLabel(hoverRating || formData.rating)}
                </div>
              </div>

              {/* Name & Company Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Shrestha"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none transition shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Kathmandu Media or Startup"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none transition shadow-sm"
                  />
                </div>
              </div>

              {/* Role & Service Type Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Role / Title (Optional)
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g. Founder, CEO, Creator"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none transition shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Service / Solution Used
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none transition shadow-sm"
                  >
                    {PROJECT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Review Comment Area */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Review Feedback <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {formData.comment.length} / 1200
                  </span>
                </div>
                <textarea
                  name="comment"
                  required
                  rows="4"
                  maxLength="1200"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Share details of your experience with Aarohan Technology — project delivery, communication, AI-powered video creation, or technical quality..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none transition shadow-sm leading-relaxed resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Aarohan Technology • Balkumari, Lalitpur</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full text-sm font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-600/30 hover:shadow-brand-600/40 transition duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Review...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Review</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </section>
  );
};

export default ReviewsSection;
