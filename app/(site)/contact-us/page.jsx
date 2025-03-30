'use client'
import React, { useRef, useState } from 'react'
import {trackEvent} from '../../../firebase';
import emailjs from 'emailjs-com';

export default function page() {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending...');
        console.log('Form values:', Object.fromEntries(new FormData(e.target)));
        setIsSubmitting(true);
        setSubmitStatus({ type: 'info', message: 'Sending...' });

        emailjs
            .sendForm(
                'service_ib5mj0d',
                'template_h26dwm4',
                e.target,
                'eoBIIGwXNu1PxDqtR'
            )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setSubmitStatus({ type: 'success', message: 'Thank you for your message. We will get back to you shortly.' });
                form.current.reset();
                trackEvent('contact_form_submit_success');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                trackEvent('contact_form_submit_error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#013220] text-[16px] text-black";
    
    return (
        <main className="min-h-screen bg-[#EEECE3] font-garamond">
            <section className="relative w-full">
                <div className="container mx-auto px-4 py-24">
                    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
                        <div data-aos="fade-up">
                            <h1 className="text-[32px] md:text-[40px] font-bold text-[#013220] mb-6 text-center">
                                Contact Us
                            </h1>
                            <p className="text-gray-700 text-[18px] md:text-[20px] text-center font-[600] mb-8">
                                Tell us about yourself, and a member of our team will be in contact shortly.
                            </p>
                        </div>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="150">
                            <div>
                                <label htmlFor="user_name" className="block text-[#013220] text-[16px] font-[600] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-[#013220] text-[16px] font-[600] mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label htmlFor="user_type" className="block text-[#013220] text-[16px] font-[600] mb-2">
                                    Which of the following best describes you?
                                </label>
                                <select
                                    name="user_type"
                                    id="user_type"
                                    required
                                    className={inputClasses}
                                >
                                    <option value="" className="text-gray-400 font-[700]">Select an option</option>
                                    <option value="Independent sponsor">Independent sponsor</option>
                                    <option value="General partner">General partner</option>
                                    <option value="Limited partner">Limited partner</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[#013220] text-[16px] font-[600] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    className={inputClasses}
                                ></textarea>
                            </div>

                            {submitStatus.message && (
                                <div className={`text-center p-3 rounded ${
                                    submitStatus.type === 'success' ? 'bg-green-100 text-green-700' :
                                    submitStatus.type === 'error' ? 'bg-red-100 text-red-700' :
                                    'bg-blue-100 text-blue-700'
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[#013220] text-white py-3 px-6 rounded-md hover:bg-[#024c30] transition-colors duration-300 font-[600] text-[16px] ${
                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
