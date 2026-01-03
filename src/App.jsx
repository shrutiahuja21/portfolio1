import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    BrainCircuit,
    Database,
    Code2,
    Workflow,
    MessageSquare,
    ExternalLink,
    ChevronRight,
    Menu,
    X,
    Phone
} from 'lucide-react';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen">
            <div className="bg-grid" />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="bg-blob"
                style={{ top: '-10%', right: '-5%', background: '#8b5cf6' }}
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="bg-blob"
                style={{ bottom: '-10%', left: '-5%', background: '#3b82f6' }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6">
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="max-w-7xl mx-auto flex justify-between items-center glass-card px-8 py-4 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        Shruti <span className="text-[#8b5cf6]">Ahuja</span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8">
                        {sections.map((section) => (
                            <motion.a
                                key={section.id}
                                href={`#${section.id}`}
                                className={`text-sm font-medium transition-colors hover:text-[#8b5cf6] relative ${activeSection === section.id ? 'text-[#8b5cf6]' : 'text-[#94a3b8]'}`}
                                onClick={() => setActiveSection(section.id)}
                                whileHover={{ y: -2 }}
                            >
                                {section.label}
                                {activeSection === section.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8b5cf6]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </motion.button>
                </motion.div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-2xl pt-32 px-10 md:hidden"
                    >
                        {sections.map((section, idx) => (
                            <motion.a
                                key={section.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                href={`#${section.id}`}
                                className="block text-4xl font-bold mb-8 text-white hover:text-[#8b5cf6]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {section.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                {/* Hero Section */}
                <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        style={{ opacity }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="px-4 py-1 glass-card border-[#8b5cf6]/30 inline-block mb-6"
                        >
                            <span className="text-xs font-semibold tracking-wider text-[#8b5cf6] uppercase">AI Architect & Data Scientist</span>
                        </motion.div>
                        <motion.h1
                            className="text-5xl md:text-8xl font-black mb-6 gradient-text leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Developing the Future <br /> with Generative AI
                        </motion.h1>
                        <motion.p
                            className="max-w-2xl mx-auto text-[#94a3b8] text-lg md:text-xl mb-10 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            I specialize in building production-ready AI systems using LangChain, RAG architectures, and Multimodal LLMs to solve complex real-world challenges.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-[#8b5cf6] text-white rounded-2xl font-bold flex items-center gap-2 group"
                            >
                                View My Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <div className="flex gap-4 ml-4">
                                {[
                                    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/shruti-ahuja-0b5338235" },
                                    { icon: <Mail size={20} />, href: "mailto:216963shrutiahuja@gmail.com" },
                                    { icon: <Phone size={20} />, href: "tel:+916239593556" }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        className="p-4 glass-card hover:bg-white/10"
                                        whileHover={{ y: -5, borderColor: "#8b5cf6" }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: -10 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="mt-20 relative"
                    >
                        <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-[100px] rounded-full" />
                        <BrainCircuit size={120} className="text-[#8b5cf6] float" strokeWidth={1} />
                    </motion.div>
                </section>

                {/* Skills Grid */}
                <section id="skills" className="py-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-12"
                    >
                        <div className="flex items-center gap-4">
                            <h2 className="text-4xl font-bold">Tech Stack</h2>
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#8b5cf6]/50 to-transparent" />
                        </div>
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {[
                                { title: 'Generative AI', skills: ['LLM (GPT-4, Claude, Llama)', 'LangChain', 'LlamaIndex', 'RAG Systems', 'Vector DBs (Pinecone, Chroma)', 'Prompt Engineering'], icon: <BrainCircuit className="text-[#8b5cf6]" /> },
                                { title: 'Programming', skills: ['Python', 'SQL', 'NoSQL', 'Django', 'FastAPI', 'C/C++'], icon: <Code2 className="text-[#3b82f6]" /> },
                                { title: 'Data Science & ML', skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'Computer Vision', 'NLP'], icon: <Database className="text-[#f472b6]" /> },
                                { title: 'Cloud & AI Ops', skills: ['Azure AI Services', 'Docker', 'CI/CD (GitHub Actions)', 'n8n', 'LangSmith', 'MLflow'], icon: <Workflow className="text-[#fbbf24]" /> },
                            ].map((category, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                    className="glass-card p-8 group relative overflow-hidden"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-6 p-3 glass-card border-[#fff]/10 w-fit"
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                                    <div className="flex flex-wrap gap-2 text-sm">
                                        {category.skills.map((skill, sIdx) => (
                                            <motion.span
                                                key={sIdx}
                                                whileHover={{ scale: 1.1, color: '#8b5cf6' }}
                                                className="px-3 py-1 glass-card border-[#fff]/5 text-[#94a3b8] cursor-default"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-4xl font-bold">Featured Projects</h2>
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#3b82f6]/50 to-transparent" />
                        </div>
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        >
                            {[
                                {
                                    title: 'Multimodal AI Chatbot',
                                    desc: 'Created a Q&A chatbot capable of processing text, image, audio, and video, deployed via Azure.',
                                    tags: ['Python', 'Azure', 'OpenCV', 'LLM'],
                                    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
                                    link: 'https://github.com/codsoft211/INTELLEXA.AI.git'
                                },
                                {
                                    title: 'ML Pipeline Architecture',
                                    desc: 'Built an end-to-end ML pipeline with ingestion, transformation, and modeling, featuring CI/CD via GitHub Actions.',
                                    tags: ['AWS S3', 'GitHub Actions', 'Docker', 'FastAPI'],
                                    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                                    link: 'https://github.com/shrutiahuja21/ML-project.git'
                                },
                                {
                                    title: 'AI Medical Therapist',
                                    desc: 'Sentiment analysis-driven chatbot with real-time Twilio alerts for mental health support.',
                                    tags: ['Sentiment Analysis', 'Twilio', 'NLP', 'Python'],
                                    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800',
                                    link: 'https://github.com/shrutiahuja21/medicalchatbot.git'
                                },
                                {
                                    title: 'AI CRM System',
                                    desc: 'Developed an intelligent CRM system featuring autonomous AI agents for lead generation, scheduling, and automated workflows.',
                                    tags: ['AI Agents', 'n8n', 'API Integration', 'Python'],
                                    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
                                    link: '#'
                                }
                            ].map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    className="glass-card group overflow-hidden"
                                >
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[#8b5cf6]/20 group-hover:bg-transparent transition-colors z-10" />
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                        <p className="text-[#94a3b8] mb-6 line-clamp-2">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-xs font-mono text-[#8b5cf6] uppercase tracking-wider">{tag}</span>
                                            ))}
                                        </div>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#8b5cf6] transition-colors group/btn"
                                            whileHover={{ x: 5 }}
                                        >
                                            View Source Code <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-4xl font-bold">Work Experience</h2>
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#f472b6]/50 to-transparent" />
                        </div>
                        <motion.div variants={containerVariants} className="space-y-8">
                            {[
                                {
                                    role: 'AI / ML Engineer',
                                    company: 'Techlance.ai',
                                    period: 'Dec 2024 – Present',
                                    points: [
                                        'Architecting an advanced AI CRM system integrated with autonomous agents.',
                                        'Developing sophisticated AI workflows to enhance customer relationship management.',
                                        'Implementing agentic workflows for lead prioritization and automated follow-ups.'
                                    ]
                                },
                                {
                                    role: 'Data Scientist',
                                    company: 'Actualisation.ai',
                                    period: 'Jun 2024 – Dec 2024',
                                    points: [
                                        'Led LLM, LangChain, RAG, and Generative AI projects like Firefly Email Integration.',
                                        'Optimized AI workflows, reducing processing time by 25%.',
                                        'Built AI automation bot for lead generation and scheduling.',
                                        'Automated CRM and cloud tasks with API integrations via n8n and Zapier.'
                                    ]
                                },
                                {
                                    role: 'Data Scientist Intern',
                                    company: 'Netmax Technology',
                                    period: 'Aug 2023 – Mar 2024',
                                    points: [
                                        'Researched AI tools and technologies for enterprise use.',
                                        'Applied ML, DL, and PowerBI for advanced data visualizations.'
                                    ]
                                }
                            ].map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="glass-card p-10 relative group"
                                    whileHover={{ x: 10, borderColor: "rgba(244, 114, 182, 0.3)" }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1 group-hover:text-[#8b5cf6] transition-colors">{exp.role}</h3>
                                            <p className="text-[#8b5cf6] font-medium">{exp.company}</p>
                                        </div>
                                        <div className="px-4 py-2 glass-card border-[#fff]/10 text-sm text-[#94a3b8]">
                                            {exp.period}
                                        </div>
                                    </div>
                                    <ul className="space-y-4">
                                        {exp.points.map((p, pIdx) => (
                                            <motion.li
                                                key={pIdx}
                                                className="flex gap-4 text-[#94a3b8]"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: pIdx * 0.1 }}
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8b5cf6] shrink-0" />
                                                {p}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

            </main>

            <footer className="border-t border-[#fff]/10 py-12 text-center text-[#94a3b8]">
                <p>© 2025 Shruti Ahuja. Crafted with React & Framer Motion.</p>
            </footer>
        </div>
    );
};

export default App;
