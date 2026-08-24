import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
