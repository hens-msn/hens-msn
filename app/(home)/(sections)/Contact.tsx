"use client"

import { Github, MessageCircle, Mail, Send } from "lucide-react"
import { BsTwitterX } from "react-icons/bs"
import { motion } from "framer-motion"

export default function Contact() {
    const socialLinks = [
        {
            name: "WhatsApp",
            icon: MessageCircle,
            url: "https://wa.me/6282254505451?text=Hi%20there!%20Let's%20connect",
            bgColor: "bg-slate-100",
            textColor: "text-slate-600",
            hoverColor: "hover:bg-slate-200"
        },
        {
            name: "Twitter",
            icon: BsTwitterX,
            url: "https://x.com/hendymsn",
            bgColor: "bg-slate-100",
            textColor: "text-slate-600",
            hoverColor: "hover:bg-slate-200"
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/hens-msn",
            bgColor: "bg-slate-100",
            textColor: "text-slate-600",
            hoverColor: "hover:bg-slate-200"
        }
    ]

    return (
        <section id="contact" className="h-screen snap-start flex items-center justify-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="w-full px-4 relative z-10 max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/20 mb-6">
                                <Send className="w-4 h-4 text-orange-500" />
                                <span className="text-sm font-medium text-orange-600">Get In Touch</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4">
                                Let's Connect
                            </h2>
                            <div className="w-16 h-px bg-gradient-to-r from-orange-500 to-red-500 mx-auto" />
                        </motion.div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            Have a project in mind or just want to chat about technology? I'd love to hear from you.
                        </motion.p>
                    </div>

                    {/* Contact Content */}
                    <div className="space-y-8">
                        {/* Email Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 hover:bg-white/80 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-slate-900">Email</h3>
                                        <p className="text-slate-600">hendymms@engineer.com</p>
                                    </div>
                                </div>
                                <motion.a 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="mailto:hendymms@engineer.com"
                                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                                >
                                    Send Email
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">Social Media</h3>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                                            className={`flex items-center gap-3 p-4 rounded-xl ${social.bgColor} ${social.hoverColor} hover:shadow-lg transition-all duration-300 group border border-slate-200/50`}
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                                                <IconComponent className={`w-5 h-5 ${social.textColor} group-hover:text-orange-600 transition-colors duration-300`} />
                                            </div>
                                            <span className={`font-medium ${social.textColor}`}>{social.name}</span>
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="text-center"
                    >
                        <p className="text-slate-500 text-sm">
                            Looking forward to collaborating on amazing projects together! 🚀
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 