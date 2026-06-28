import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import { profile } from "../data/portfolioData";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! Jahnavi will get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, testId: "contact-email" },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`, testId: "contact-phone" },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, testId: "contact-linkedin" },
    { icon: MapPin, label: "Location", value: profile.location, href: null, testId: "contact-location" },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="relative z-10 bg-[#050505] py-24 sm:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-volt mb-4 flex items-center gap-3"
        >
          <span className="text-zinc-600">06</span>
          <span className="h-px w-8 bg-volt inline-block" />
          Get In Touch
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-semibold leading-[0.95]"
            >
              Let's <span className="text-volt">talk.</span>
            </motion.h2>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md">
              Open to data & business analyst roles. Have a question or an opportunity? Drop a message — I read every one.
            </p>

            <div className="mt-10 space-y-3">
              {contactItems.map((c) => {
                const Inner = (
                  <div className="flex items-center gap-4 group">
                    <span className="h-11 w-11 flex items-center justify-center border border-white/10 text-zinc-400 group-hover:border-volt/50 group-hover:text-volt transition-colors">
                      <c.icon size={18} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">{c.label}</p>
                      <p className="text-zinc-200 group-hover:text-volt transition-colors">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" data-testid={c.testId}>
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} data-testid={c.testId}>{Inner}</div>
                );
              })}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={submit}
            data-testid="contact-form"
            className="lg:col-span-7 bg-[#0c0c0c] border border-white/10 p-8 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Name *" testId="contact-name-input">
                <input
                  data-testid="contact-name-field"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="form-input"
                />
              </Field>
              <Field label="Email *" testId="contact-email-input">
                <input
                  data-testid="contact-email-field"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@email.com"
                  className="form-input"
                />
              </Field>
            </div>
            <Field label="Subject" testId="contact-subject-input">
              <input
                data-testid="contact-subject-field"
                type="text"
                value={form.subject}
                onChange={update("subject")}
                placeholder="What's this about?"
                className="form-input"
              />
            </Field>
            <Field label="Message *" testId="contact-message-input">
              <textarea
                data-testid="contact-message-field"
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me a bit about the role or project..."
                className="form-input resize-none"
              />
            </Field>

            <button
              data-testid="contact-submit-button"
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-volt hover:bg-volt-hover disabled:opacity-60 text-white px-8 py-4 font-medium transition-colors"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .form-input::placeholder { color: #52525b; }
        .form-input:focus { border-color: #FF4500; }
      `}</style>
    </section>
  );
};

const Field = ({ label, children, testId }) => (
  <label className="block" data-testid={testId}>
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2 block">{label}</span>
    {children}
  </label>
);
