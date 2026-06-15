import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { translations } from '../utils/translations';

export default function ContactForm({ lang }) {
  const t = translations[lang].contact.form;
  const errText = translations[lang].contact.errors;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    budget: '',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamically map services list from translations
  const services = translations[lang].services.list.map(s => s.title);

  const budgets = [
    t.budgetUnder1k,
    t.budget1k3k,
    t.budget3k5k,
    t.budget5kPlus,
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = errText.name;
    if (!formData.email.trim()) {
      newErrors.email = errText.emailEmpty;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = errText.emailInvalid;
    }
    if (!formData.serviceType) newErrors.serviceType = errText.service;
    if (!formData.details.trim()) {
      newErrors.details = errText.detailsEmpty;
    } else if (formData.details.length < 15) {
      newErrors.details = errText.detailsShort;
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        budget: '',
        details: '',
      });
    }, 1800);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-[#121824]/60 p-8 sm:p-10 rounded-3xl border border-brandSuccess/25 text-center flex flex-col items-center justify-center min-h-[450px] glow-emerald animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-brandSuccess/10 text-brandSuccess flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="font-outfit text-2xl font-black text-slate-900 dark:text-white mb-3">{t.successTitle}</h3>
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mb-8 font-medium">
          {t.successDesc}
        </p>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 text-xs font-bold text-brandSecondary hover:text-slate-950 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> {t.successReset}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#121824]/60 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-gray-800/40 shadow-xl relative overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              {t.nameLabel}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              className={`w-full bg-slate-50 text-slate-800 dark:bg-[#090D16]/50 dark:text-white border ${
                errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-gray-800'
              } rounded-xl px-4 py-3 text-sm form-input-focus font-medium`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              {t.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              className={`w-full bg-slate-50 text-slate-800 dark:bg-[#090D16]/50 dark:text-white border ${
                errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-gray-800'
              } rounded-xl px-4 py-3 text-sm form-input-focus font-medium`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              {t.phoneLabel}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.phonePlaceholder}
              className="w-full bg-slate-50 text-slate-800 dark:bg-[#090D16]/50 dark:text-white border border-slate-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm form-input-focus font-medium"
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              {t.serviceLabel}
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={`w-full bg-slate-50 text-slate-800 dark:bg-[#090D16] dark:text-white border ${
                errors.serviceType ? 'border-rose-500' : 'border-slate-200 dark:border-gray-800'
              } rounded-xl px-4 py-3 text-sm form-input-focus font-medium`}
            >
              <option value="">{t.serviceDefault}</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">
                  {service}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.serviceType}
              </p>
            )}
          </div>
        </div>

        {/* Budget Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            {t.budgetLabel}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                className={`px-3 py-3 text-xs rounded-xl font-bold border transition-all ${
                  formData.budget === b
                    ? 'bg-brandPrimary/10 border-brandSecondary text-brandSecondary'
                    : 'bg-slate-50 dark:bg-[#090D16]/40 border-slate-200 dark:border-gray-850 text-slate-500 dark:text-gray-400 hover:border-brandSecondary hover:text-brandSecondary'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            {t.detailsLabel}
          </label>
          <textarea
            name="details"
            rows="5"
            value={formData.details}
            onChange={handleChange}
            placeholder={t.detailsPlaceholder}
            className={`w-full bg-slate-50 text-slate-800 dark:bg-[#090D16]/50 dark:text-white border ${
              errors.details ? 'border-rose-500' : 'border-slate-200 dark:border-gray-800'
            } rounded-xl px-4 py-3 text-sm form-input-focus resize-y font-medium`}
          />
          {errors.details && (
            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.details}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-brandPrimary to-brandSecondary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-lg hover:shadow-brandPrimary/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {t.btnSubmitting}
            </>
          ) : (
            <>
              {t.btnSubmit}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
