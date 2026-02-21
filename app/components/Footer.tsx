import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Cpu, Mail, Phone, MapPin } from 'lucide-react';
export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <img
                                className="transition-transform duration-500 group-hover:scale-105"
                                src="https://cetpatechnologies.com/wp-content/uploads/2024/10/cetpatechnology-logo.png"
                                alt="CETPA Technologies Logo"
                                width={100}
                                height={20}

                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We focus to provide you the help in utilization of these IT resources. Our team designs a model for your organization to utilize each resource and provide you better solutions.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Software Development & Engineering</Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">AI & Data Services</Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Corporate Training Services</Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Digital Marketing Services</Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Case Studies</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Case Study: AI & Data Services</Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Case Study: Optimizing IT Support for a Mid-Level Global Enterprise
                            </Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Case Study: Digital Transformation & Automation</Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Case Study: Cloud & DevOps Solutions</Link></li>
                            <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Case Study: IT Staff Augmentation & Outsourcing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-sm text-gray-400">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span>query@cetpainfotech.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-gray-400">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <span>0120 453 5353 / 9212172602</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-blue-500 mt-1" />
                                <span>D-58, Red FM Road, Sector 2,<br/> D Block, Sector 2,Noida, Uttar Pradesh 201301, India</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
                    <p>© 2026 Cetpatechnologies. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}