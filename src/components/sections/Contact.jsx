import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import { companyInfo, services } from '../../data/companyData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-dev',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your project requirements';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title="Let's Build"
          highlightTitle="What's Next."
          subtitle="Tell us what you're working on. Our software engineering team will evaluate your requirements and provide a detailed proposal within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Authentic Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="right">
              <div className="rounded-3xl bg-white p-8 border border-slate-200/80 space-y-6 shadow-md">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Direct Contacts
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reach out to discuss your technical architecture. We are ready to help transform your business ideas into reliable software products.
                </p>

                <div className="space-y-6 pt-4 border-t border-slate-100">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Inquiry</div>
                      <a href={`mailto:${companyInfo.contact.email}`} className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Line</div>
                      <a href={`tel:${companyInfo.contact.phone}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Office Location</div>
                      <div className="text-sm font-bold text-slate-900">
                        {companyInfo.contact.address}
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Business Hours</div>
                      {companyInfo.contact.hours.map((h, i) => (
                        <div key={i} className="text-xs text-slate-600">{h}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-sky-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{companyInfo.contact.guarantee}</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Master Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/80 shadow-md">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Inquiry Submitted Successfully</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting High Skilled Technologies. Our software engineering leads will review your inquiry and reach out within 24 hours.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', company: '', service: 'web-dev', message: '' });
                        }}
                      >
                        Submit Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Request a Project Proposal</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 border text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all ${
                            errors.name ? 'border-red-500' : 'border-slate-200'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 border text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all ${
                            errors.email ? 'border-red-500' : 'border-slate-200'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Required Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all cursor-pointer"
                      >
                        {services.map(s => (
                          <option key={s.id} value={s.id} className="bg-white text-slate-900">
                            {s.title} ({s.subtitle})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Message & Project Details *
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your technical requirements, target timeline, and preferred stack..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 border text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full shadow-lg"
                      icon={Send}
                    >
                      {isSubmitting ? 'Sending Request...' : 'Start a Conversation'}
                    </Button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
