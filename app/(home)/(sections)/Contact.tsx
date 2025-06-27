"use client"

import { Github, MessageCircle, Mail, MapPin, Clock, Linkedin } from "lucide-react"
import { BsTwitterX } from "react-icons/bs"
import { motion } from "framer-motion"

export default function Contact() {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "hendymms@engineer.com",
            action: "mailto:hendymms@engineer.com",
            actionText: "Send Email",
            hint: "Project inquiries"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: "+62 822 5450 5451",
            action: "https://wa.me/6282254505451?text=Hi%20there!%20Let's%20connect",
            actionText: "Chat Now",
            hint: "Quick questions"
        }
    ]

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/hens-msn",
            username: "@hens-msn"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/hendymamusung",
            username: "@hendymamusung"
        },
        {
            name: "Twitter",
            icon: BsTwitterX,
            url: "https://x.com/hendymsn",
            username: "@hendymsn"
        }
    ]

    const workingInfo = [
        {
            icon: Clock,
            title: "Response Time",
            value: "Within 24 hours"
        },
        {
            icon: MapPin,
            title: "Working Hours",
            value: "9 AM - 6 PM (GMT+7)"
        },
        {
            icon: MessageCircle,
            title: "Languages",
            value: "English & Indonesian"
        }
    ]

    return (
        <section id="contact" className="h-screen snap-start flex items-center justify-center relative">
            <div className="w-full px-4 relative z-10 max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                                Let&apos;s Connect
                            </h2>
                            <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-red-500 mx-auto" />
                        </motion.div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            Specializing in web frameworks, mobile apps, and development tools. Have a project in mind or just want to chat about technology?
                        </motion.p>
                    </div>

                    {/* Contact Content */}
                    <div className="space-y-8">
                        {/* Contact Methods - Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-light text-slate-900 text-center">
                                Get In Touch
                            </h3>
                            
                            <div className="flex justify-center items-center gap-8 flex-wrap">
                                {contactMethods.map((method, index) => {
                                    const IconComponent = method.icon
                                    return (
                                        <motion.div
                                            key={method.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                                            className="group flex items-center gap-4 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors duration-300" />
                                            <div className="text-left">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-light text-slate-700">
                                                        {method.title}
                                                    </span>
                                                    <span className="text-xs text-slate-400">
                                                        • {method.hint}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-500 font-light">
                                                    {method.value}
                                                </p>
                                            </div>
                                            <motion.a
                                                href={method.action}
                                                target={method.action.startsWith('http') ? '_blank' : undefined}
                                                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="px-4 py-1 bg-slate-50 rounded-full text-slate-600 text-xs font-medium hover:bg-slate-100 transition-colors duration-300"
                                            >
                                                {method.actionText}
                                            </motion.a>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>

                        {/* Social Links - Horizontal */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-light text-slate-900 text-center">
                                Follow Me
                            </h3>
                            
                            <div className="flex justify-center items-center gap-6 flex-wrap">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                                            whileHover={{ y: -2 }}
                                            className="group flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors duration-300" />
                                            <div className="text-left">
                                                <h4 className="text-xs font-light text-slate-500">
                                                    {social.name}
                                                </h4>
                                                <p className="text-xs text-slate-600 font-light group-hover:text-slate-700 transition-colors duration-300">
                                                    {social.username}
                                                </p>
                                            </div>
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </motion.div>

                        {/* Working Info - Compact */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="border-t border-slate-100 pt-4"
                        >
                            <div className="flex justify-center items-center gap-8 flex-wrap">
                                {workingInfo.map((item, index) => {
                                    const IconComponent = item.icon
                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                                            className="flex items-center gap-2"
                                        >
                                            <IconComponent className="w-3 h-3 text-slate-400" />
                                            <span className="text-xs text-slate-500 font-light">
                                                {item.title}:
                                            </span>
                                            <span className="text-xs text-slate-600 font-light">
                                                {item.value}
                                            </span>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="text-center"
                        >
                            <p className="text-slate-500 text-sm font-light leading-relaxed">
                                Looking forward to collaborating on amazing projects together!
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Minimal scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
            </motion.div>
        </section>
    )
} 