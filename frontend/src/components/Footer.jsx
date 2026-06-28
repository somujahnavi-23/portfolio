import { profile } from "../data/portfolioData";
import { Mail, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="relative z-10 bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-heading text-2xl tracking-tight font-semibold">{profile.name}</p>
          <p className="font-mono text-xs text-zinc-600 mt-1">{profile.headline} · {profile.location}</p>
        </div>

        <div className="flex items-center gap-4">
          <a data-testid="footer-email" href={`mailto:${profile.email}`} className="h-10 w-10 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-volt hover:border-volt/50 transition-colors">
            <Mail size={17} />
          </a>
          <a data-testid="footer-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-volt hover:border-volt/50 transition-colors">
            <Linkedin size={17} />
          </a>
          <button
            data-testid="footer-scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="h-10 w-10 flex items-center justify-center border border-white/10 text-zinc-400 hover:text-volt hover:border-volt/50 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
      <p className="text-center text-zinc-700 text-xs font-mono mt-8">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </p>
    </footer>
  );
};
