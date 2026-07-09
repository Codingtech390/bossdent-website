"use client";

import { useQuoteModal } from "@/context/QuoteModalContext";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  CheckCircle,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  X,
  Info,
  ShieldCheck,
  Package,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function QuoteModal() {
  const { isOpen, setIsOpen, selectedProduct, setSelectedProduct } =
    useQuoteModal(); // ✅

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

  // ✅ Jab selectedProduct aaye — subject auto-fill karo
  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        subject: selectedProduct,
        message:
          prev.message ||
          `I am interested in ${selectedProduct}. Please share pricing and details.`,
      }));
    }
  }, [selectedProduct]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Reset captcha + form + selectedProduct when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCaptchaToken(null);
      setCaptchaError(false);
      recaptchaRef.current?.reset();
      setSelectedProduct(""); // ✅ reset
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (token) setCaptchaError(false);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
  };

  // Standard dropdown options
  const standardOptions = [
    "product-inquiry",
    "pricing",
    "technical-support",
    "bulk-order",
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-[2rem] w-full max-w-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)] flex flex-col md:flex-row min-h-[500px]"
        >
          {/* ── Left Sidebar ── */}
          <div className="hidden md:flex w-20 bg-[#163a5c] items-center justify-between flex-col py-10 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <ShieldCheck size={24} className="text-[#26A7EB]" />
            </div>
            <div className="flex-1 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent my-6" />
            <div className="relative h-32 flex items-center justify-center w-full">
              <p className="absolute rotate-[-90deg] whitespace-nowrap text-white/50 uppercase tracking-[0.5em] font-black text-[11px] origin-center">
                Bossdent
              </p>
            </div>
          </div>

          {/* ── Right Form Section ── */}
          <div className="flex-1 p-8 md:p-12 relative overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all group"
            >
              <X
                size={20}
                className="group-hover:rotate-90 transition-transform"
              />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-[#163a5c] tracking-tight">
                Get a <span className="text-[#26A7EB]">Quick Quote</span>
              </h2>
              <p className="text-slate-500 mt-2 text-sm font-medium">
                Our experts will respond within 24 hours.
              </p>

              {/* ✅ Product badge — agar product page se aaya ho */}
              {selectedProduct && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 inline-flex items-center gap-2 bg-[#ecf5fb] border border-[#26A7EB]/30 text-[#26A7EB] px-3 py-1.5 rounded-full text-xs font-semibold"
                >
                  <Package size={13} />
                  {selectedProduct}
                </motion.div>
              )}
            </div>

            {/* ── Success State ── */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Success!</h3>
                <p className="text-slate-500">
                  Your request has been delivered.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                      size={18}
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all"
                    />
                  </div>
                </div>

                {/* ✅ Subject — product se aaya ho toh highlighted input, warna dropdown */}
                <div className="relative group">
                  <Info
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                    size={18}
                  />
                  {selectedProduct ? (
                    // ✅ Product page se aaya — readonly highlighted input
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#ecf5fb] border border-[#26A7EB]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all text-[#26A7EB] font-medium"
                    />
                  ) : (
                    // Normal dropdown — product select nahi hua
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all appearance-none text-slate-600"
                    >
                      <option value="">Select Category *</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="technical-support">
                        Technical Support
                      </option>
                      <option value="bulk-order">Bulk Order</option>
                    </select>
                  )}
                </div>

                {/* Message */}
                <div className="relative group">
                  <MessageSquare
                    className="absolute left-4 top-4 text-slate-400 group-focus-within:text-[#26A7EB] transition-colors"
                    size={18}
                  />
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements... *"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#26A7EB]/20 focus:border-[#26A7EB] transition-all resize-none"
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex flex-col gap-1">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                    onExpired={handleCaptchaExpired}
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
                  className="w-full bg-[#163a5c] hover:bg-[#1B4873] text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(26,22,117,0.3)] hover:shadow-[0_15px_40px_rgba(26,22,117,0.4)] transition-all active:scale-[0.98] disabled:opacity-70 group"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                      Send Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
