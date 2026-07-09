// app/contact/page.js
"use client";
import axios from "axios";
import { useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Info,
  ShieldCheck,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setLoading(true);
    setCaptchaError(false);
    try {
      const res = await axios.post("/api/contact", {
        ...formData,
        captchaToken,
      });
      if (res.data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (token) setCaptchaError(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      {/* ── Hero ── */}
      <section
        className="relative text-white min-h-[420px] md:min-h-[290px] flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `
      url('https://res.cloudinary.com/dk4npblv3/image/upload/v1779533658/Gemini_Generated_Image_mjxpvmmjxpvmmjxp_cleanup_sg9ir1.png')
    `,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4873]/82 to-[#163a5c]/85"></div>

        {/* Decorative blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#26A7EB]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Phone size={18} className="mr-2" />
              Contact Bossdent Global
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Get In Touch
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Have questions? Our team is here to help you find the perfect
              dental equipment for your practice.
            </p>
          </div>
        </div>
      </section>
      {/* ── Info Cards ── */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10">
            <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-[#26A7EB]">
              <div className="w-12 h-12 bg-[#26A7EB] rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+919810768600"
                className="text-[#1B4873] hover:text-[#26A7EB] font-medium block"
              >
                +91 9810-76-8600
              </a>
              {/* ✅ Call timing */}
              <p className="text-xs text-gray-400 mt-1">
                Mon–Sat · 9:00 AM – 6:00 PM
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-[#1B4873]">
              <div className="w-12 h-12 bg-[#1B4873] rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:sales@bossdentglobal.com"
                className="text-[#1B4873] hover:text-[#26A7EB] font-medium block mb-1 text-sm"
              >
                sales@bossdentglobal.com
              </a>
              <a
                href="mailto:admin@bossdentglobal.com"
                className="text-[#1B4873] hover:text-[#26A7EB] font-medium block text-sm"
              >
                admin@bossdentglobal.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-[#26A7EB]">
              <div className="w-12 h-12 bg-[#26A7EB] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Bossdent Global India Pvt Ltd, UG 11, Vardhman Golden Plaza,
                Road No 44, Pitam Pura, Above Goldy Motors, near Sewa Rasoi
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-[#1B4873]">
              <div className="w-12 h-12 bg-[#1B4873] rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Monday – Saturday
                <br />
                <span className="font-semibold text-[#26A7EB]">
                  9:00 AM – 6:00 PM
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-2">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ── Contact Form — QuoteModal style ── */}
            <div>
              <h2 className="text-3xl font-bold text-[#163a5c] mb-2">
                Send Us a <span className="text-[#26A7EB]">Message</span>
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              {/* Modal-style card */}
              <div className="bg-white rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden flex border border-slate-100">
                {/* Left sidebar — same as QuoteModal */}
                <div className="hidden md:flex w-16 bg-[#163a5c] items-center justify-between flex-col py-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <ShieldCheck size={20} className="text-[#26A7EB]" />
                  </div>
                  <div className="flex-1 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent my-6" />
                  <div className="relative h-28 flex items-center justify-center w-full">
                    <p className="absolute rotate-[-90deg] whitespace-nowrap text-white/50 uppercase tracking-[0.4em] font-black text-[10px] origin-center">
                      BossDent
                    </p>
                  </div>
                </div>

                {/* Form area */}
                <div className="flex-1 p-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                      >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle className="text-green-600" size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">
                          Success!
                        </h3>
                        <p className="text-slate-500 mt-1">
                          Your message has been delivered.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        {/* Name */}
                        <div className="relative group">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                            size={17}
                          />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all text-sm"
                          />
                        </div>

                        {/* Email + Phone */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="relative group">
                            <Mail
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                              size={17}
                            />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email Address *"
                              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all text-sm"
                            />
                          </div>
                          <div className="relative group">
                            <Phone
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                              size={17}
                            />
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Phone Number *"
                              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all text-sm"
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="relative group">
                          <Info
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                            size={17}
                          />
                          <select
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all appearance-none text-slate-600 text-sm"
                          >
                            <option value="">Select Category *</option>
                            <option value="product-inquiry">
                              Product Inquiry
                            </option>
                            <option value="pricing">Pricing Information</option>
                            <option value="technical-support">
                              Technical Support
                            </option>
                            <option value="bulk-order">Bulk Order</option>
                            <option value="partnership">
                              Partnership Opportunity
                            </option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div className="relative group">
                          <MessageSquare
                            className="absolute left-4 top-4 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                            size={17}
                          />
                          <textarea
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your requirements... *"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all resize-none text-sm"
                          />
                        </div>

                        {/* reCAPTCHA */}
                        <div className="flex flex-col gap-1">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={handleCaptchaChange}
                            onExpired={() => setCaptchaToken(null)}
                            theme="light"
                          />
                          {captchaError && (
                            <motion.p
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs font-medium flex items-center gap-1.5 mt-1"
                            >
                              <X size={12} />
                              Please complete the CAPTCHA before submitting.
                            </motion.p>
                          )}
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-[#163a5c] hover:bg-[#1B4873] text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(26,22,117,0.25)] hover:shadow-[0_15px_40px_rgba(26,22,117,0.35)] transition-all active:scale-[0.98] disabled:opacity-70 group"
                        >
                          {loading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send
                                size={18}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                              />
                              Send Message
                            </>
                          )}
                        </button>

                        <p className="text-xs text-slate-400 text-center">
                          By submitting, you agree to our privacy policy
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* ── Map & Why Choose Us ── */}
            <div>
              <h2 className="text-3xl font-bold text-[#1B4873] mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-8">
                We welcome you to visit our office and explore our complete
                product range
              </p>

              <div className="bg-gray-200 rounded-xl overflow-hidden mb-8 h-[380px]">
                <iframe
                  src="https://www.google.com/maps?q=28.6880836,77.1329651&z=17&hl=en&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BossDent Global Location"
                />
              </div>

              <div className="bg-[#ecf5fb] rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Why Choose Bossdent Global?
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "International Quality",
                      desc: "ISO certified products with rigorous testing",
                    },
                    {
                      title: "Expert Support",
                      desc: "Dedicated sales and technical assistance",
                    },
                    {
                      title: "Wide Product Range",
                      desc: "Complete dental solutions under one roof",
                    },
                    {
                      title: "Trusted Excellence",
                      desc: "Serving dental fraternity with commitment",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-[#26A7EB] flex-shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Contact ── */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1B4873] to-[#163a5c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Need Immediate Assistance?
          </h2>
          {/* ✅ Call timing mentioned */}
          <p className="text-white/70 text-sm mb-2">
            Available Monday – Saturday ·{" "}
            <span className="text-[#26A7EB] font-semibold">
              9:00 AM – 6:00 PM
            </span>
          </p>
          <p className="text-white/90 text-lg mb-8">
            Our team is ready to help you with your dental equipment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919810768600"
              className="inline-flex items-center justify-center gap-2 bg-[#26A7EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2193cf] transition-colors"
            >
              <Phone size={20} />
              Call: +91 9810-76-8600
            </a>
            <a
              href="https://wa.me/919810768600"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4873] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
