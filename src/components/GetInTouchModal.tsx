import React, { useState } from 'react';
import { X, Mail, Instagram, Send, Check, Copy } from 'lucide-react';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetInTouchModal: React.FC<GetInTouchModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [topic, setTopic] = useState('Feedback & Encouragement');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const contactEmail = 'thedailyquran5@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const subject = encodeURIComponent(`[Hifz In Progress] ${topic} - from ${name || 'A Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${userEmail}\nTopic: ${topic}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative bg-[#031C17] border border-gold-subtle rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#062D24] border border-gold-subtle text-[#F3EBDD] hover:text-[#C8A052] hover:border-[#C8A052] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C8A052] mb-1">
            Get In Touch
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#F3EBDD]">
            Support &amp; Connect
          </h3>
          <p className="text-xs sm:text-sm text-[#8EA393] font-light mt-1">
            For sponsorships, collaborations, or suggestions for future Hifz videos and resources.
          </p>
        </div>

        {/* Real Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          
          <button
            onClick={handleCopyEmail}
            className="p-3.5 rounded-2xl bg-[#062D24] border border-gold-subtle hover:border-[#C8A052] text-left transition-colors group"
          >
            <div className="flex items-center justify-between text-[#C8A052] mb-1">
              <Mail className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold">{copiedEmail ? 'Copied!' : 'Copy'}</span>
            </div>
            <div className="text-xs font-semibold text-[#F3EBDD]">Direct Email</div>
            <div className="text-[11px] text-[#8EA393] truncate">{contactEmail}</div>
          </button>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-[#062D24] border border-gold-subtle hover:border-[#C8A052] text-left transition-colors group block"
          >
            <div className="flex items-center justify-between text-[#C8A052] mb-1">
              <Instagram className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold">Open</span>
            </div>
            <div className="text-xs font-semibold text-[#F3EBDD]">Instagram DM</div>
            <div className="text-[11px] text-[#8EA393]">@hifzinprogress</div>
          </a>

        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#8EA393] mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Brother Zayd"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#8EA393]/50 focus:outline-none focus:border-[#C8A052] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#8EA393] mb-1">
              Your Email Address
            </label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#8EA393]/50 focus:outline-none focus:border-[#C8A052] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#8EA393] mb-1">
              Topic
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C8A052] transition-colors"
            >
              <option value="Sponsorship & Equipment">Sponsorship &amp; Equipment Support</option>
              <option value="Educational Collaboration">Educational Collaboration</option>
              <option value="Feedback & Encouragement">Feedback &amp; Encouragement</option>
              <option value="Teacher Inquiry">Quran Teacher Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#8EA393] mb-1">
              Your Message
            </label>
            <textarea
              rows={3}
              required
              placeholder="How would you like to support or collaborate on this journey?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#062D24] border border-gold-subtle/70 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#8EA393]/50 focus:outline-none focus:border-[#C8A052] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-[#031C17] bg-[#C8A052] hover:bg-[#D8B062] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Message via Email</span>
          </button>
        </form>

      </div>
    </div>
  );
};
