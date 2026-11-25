import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  Film, 
  Settings, 
  X, 
  Video
} from 'lucide-react';
import logoImg from '../assets/logo.png';

const HeroVideoShowcase = () => {
  const [viewMode, setViewMode] = useState('video'); // 'video' | 'crest'
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isCinemaOpen, setIsCinemaOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customInputUrl, setCustomInputUrl] = useState('');
  const [videoSrc, setVideoSrc] = useState('/video/company-reel.webm');
  const [isYouTube, setIsYouTube] = useState(false);
  const [youtubeId, setYoutubeId] = useState('');

  const videoRef = useRef(null);
  const cinemaVideoRef = useRef(null);

  // Helper to parse YouTube IDs
  const extractYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const handleApplyCustomUrl = (e) => {
    e.preventDefault();
    if (!customInputUrl.trim()) return;

    const ytId = extractYouTubeId(customInputUrl.trim());
    if (ytId) {
      setIsYouTube(true);
      setYoutubeId(ytId);
      setVideoSrc(customInputUrl.trim());
    } else {
      setIsYouTube(false);
      setYoutubeId('');
      setVideoSrc(customInputUrl.trim());
    }
    setIsCustomModalOpen(false);
    setViewMode('video');
  };

  const togglePlay = () => {
    if (isYouTube) return;
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (isYouTube) return;
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Keyboard support for cinema mode (Esc key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCinemaOpen(false);
        setIsCustomModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] mx-auto flex flex-col items-center">
      
      {/* Background Soft Ambient Himalayan Glow */}
      <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-brand-400/25 via-blue-400/20 to-indigo-500/25 dark:from-brand-600/20 dark:via-blue-600/15 dark:to-indigo-700/20 rounded-3xl blur-3xl pointer-events-none -z-10"></div>

      {/* Top View Mode Switcher: Single Company Reel vs Official Crest */}
      <div className="w-full flex items-center justify-between gap-2 mb-3 px-1">
        
        {/* Toggle Pills */}
        <div className="inline-flex p-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-xs font-semibold">
          <button
            onClick={() => setViewMode('video')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
              viewMode === 'video'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Company Reel</span>
          </button>

          <button
            onClick={() => setViewMode('crest')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
              viewMode === 'crest'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Crest</span>
          </button>
        </div>

        {/* Change Video Button */}
        {viewMode === 'video' && (
          <button
            onClick={() => setIsCustomModalOpen(true)}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition shadow-sm"
            title="Custom video link or replace video"
          >
            <Settings className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span className="hidden sm:inline">Change Video</span>
          </button>
        )}

      </div>

      {/* Main Visual Display */}
      {viewMode === 'video' ? (
        
        /* SINGLE COMPANY REEL VIDEO SHOWCASE */
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-800/80 dark:border-slate-700 shadow-2xl shadow-brand-600/15 group">
          
          {/* Window Title Bar */}
          <div className="px-4 py-2.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-slate-400 text-[11px] font-mono font-medium truncate max-w-[200px]">
                aarohan-technology-reel.mp4
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="flex items-center space-x-1 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>OFFICIAL REEL</span>
              </span>
              <button
                onClick={() => setIsCinemaOpen(true)}
                className="text-slate-400 hover:text-white transition p-1 hover:bg-slate-800 rounded"
                title="Expand Cinema Mode"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Video Player Canvas */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            
            {isYouTube ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1`}
                title="Aarohan Technology Reel"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={videoSrc} type="video/webm" />
                  <source src="/video/company-reel.webm" type="video/webm" />
                  <source src="/video/company-reel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Big Center Play/Pause Button on Hover or Paused */}
                <div 
                  onClick={togglePlay}
                  className={`absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-opacity duration-200 cursor-pointer ${
                    !isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-brand-600/90 hover:bg-brand-500 text-white flex items-center justify-center shadow-xl shadow-brand-600/40 hover:scale-110 transition-transform">
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </div>
                </div>

                {/* Top Corner Watermark Crest Badge */}
                <div className="absolute top-3 right-3 z-10 pointer-events-none">
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold shadow-lg">
                    <img src={logoImg} alt="Aarohan Crest" className="w-4 h-4 object-contain" />
                    <span className="text-[10px] tracking-wider uppercase text-blue-300 font-extrabold">Aarohan</span>
                  </div>
                </div>

                {/* Bottom Controls Bar Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent flex items-center justify-between text-white text-xs opacity-90 group-hover:opacity-100 transition-opacity">
                  
                  {/* Left Controls: Play/Pause & Sound */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-sm"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="flex items-center space-x-1 px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-sm"
                      title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-[10px] font-mono text-amber-300">Unmute</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] font-mono text-emerald-300">Sound On</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Right Control: Cinema Theater Mode */}
                  <button
                    onClick={() => setIsCinemaOpen(true)}
                    className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-brand-600/80 hover:bg-brand-600 text-white transition backdrop-blur-sm text-[11px] font-medium shadow"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Cinema</span>
                  </button>

                </div>
              </>
            )}

          </div>

          {/* Reel Caption Footer */}
          <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                <span>Aarohan Technology Showreel</span>
                <span className="text-blue-400">●</span>
                <span className="text-[11px] text-blue-400 font-normal">AI & Software Solutions</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                AI-Powered Video Creation • Software Engineering • Digital Innovation
              </div>
            </div>
          </div>

        </div>

      ) : (

        /* OFFICIAL EMBLEM CREST CONTAINER */
        <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center animate-float">
          
          {/* Background Majestic Mountain Halo & Radiant Sky Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-300/40 via-sky-200/30 to-blue-400/25 dark:from-brand-900/35 dark:via-slate-800/40 dark:to-blue-950/40 rounded-full blur-2xl"></div>

          {/* Central Official Logo Badge in Glowing Frame */}
          <div className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 rounded-full p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-2 border-brand-200/90 dark:border-brand-700/80 shadow-2xl flex items-center justify-center group">
            
            {/* Rotating Subtle Tech Border */}
            <div className="absolute inset-3 rounded-full border border-dashed border-brand-400/40 dark:border-brand-500/30 animate-spin" style={{ animationDuration: '45s' }}></div>
            
            {/* Inner Soft Blue Radiance */}
            <div className="absolute inset-8 rounded-full bg-blue-400/10 dark:bg-blue-600/15 blur-xl pointer-events-none"></div>

            {/* Official Clean High-Res Circular Crest */}
            <img
              src={logoImg}
              alt="Aarohan Technology Ascent Crest"
              className="w-64 h-64 sm:w-76 sm:h-76 object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative z-10"
            />
          </div>

        </div>

      )}

      {/* Floating Badges */}
      <div className="w-full flex items-center justify-between gap-3 mt-4">
        
        {/* Left Badge: AI-Powered Video Creation */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-100 dark:border-slate-700 shadow-md rounded-xl p-2.5 flex items-center space-x-2.5 card-hover">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <Video className="w-4 h-4 text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Core Specialty</div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">AI-Powered Video</div>
          </div>
        </div>

        {/* Right Badge: 3K Followers */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-100 dark:border-slate-700 shadow-md rounded-xl p-2.5 flex items-center space-x-2.5 card-hover">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Community</div>
            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-1">
              <span>3K+ Followers</span>
              <span className="text-blue-500 font-bold">✓</span>
            </div>
          </div>
        </div>

      </div>

      {/* FULLSCREEN CINEMA MODAL LIGHTBOX */}
      {isCinemaOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
              <div className="flex items-center space-x-3">
                <img src={logoImg} alt="Aarohan Logo" className="w-7 h-7 object-contain" />
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span>Aarohan Technology Showreel</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-brand-500/20 text-brand-300 border border-brand-500/30">
                      Official HD
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    AI Video Creation • Software Development • Digital Innovation
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCinemaOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Player with Audio */}
            <div className="relative aspect-video w-full bg-black">
              {isYouTube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1`}
                  title="Aarohan Technology Cinema Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  ref={cinemaVideoRef}
                  className="w-full h-full object-contain"
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-slate-400">
                📍 1st Floor, Nepal Red Cross Society Building, Balkumari, Lalitpur
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Motto:</span>
                <span className="text-blue-400 font-bold">Build. Innovate. Success.</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* CHANGE VIDEO MODAL */}
      {isCustomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Film className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  Change Company Reel
                </h3>
              </div>
              <button
                onClick={() => setIsCustomModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleApplyCustomUrl} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Paste Custom Video URL (MP4, WebM, or YouTube Link)
                </label>
                <input
                  type="text"
                  value={customInputUrl}
                  onChange={(e) => setCustomInputUrl(e.target.value)}
                  placeholder="e.g., https://youtu.be/... or /video/my-video.mp4"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  💡 You can also place any video file in <code className="text-brand-600 dark:text-brand-400 font-mono">client/public/video/company-reel.mp4</code> and it will load automatically.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-600/30"
                >
                  Apply Reel
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default HeroVideoShowcase;
