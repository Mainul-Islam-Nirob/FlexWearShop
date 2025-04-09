import React from 'react'; 
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

function Contact() {
  return (
    <section className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center">Get in Touch</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-600 text-base">
          
          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <p className="font-semibold text-gray-800 mb-2">Contact Us</p>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <MapPin className="w-5 h-5 text-blue-600" />
              123 Flex Street, Dhaka, BD
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Mail className="w-5 h-5 text-blue-600" />
              support@flexwearshop.com
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Phone className="w-5 h-5 text-blue-600" />
              +880 1234 567 890
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <p className="font-semibold text-gray-800 mb-2">Quick Links</p>
            <a href="/shop" className="flex items-center gap-2 justify-center sm:justify-start hover:text-blue-600 transition">
              <ExternalLink className="w-4 h-4" /> Shop
            </a>
            <a href="/about" className="flex items-center gap-2 justify-center sm:justify-start hover:text-blue-600 transition">
              <ExternalLink className="w-4 h-4" /> About Us
            </a>
            <a href="/categories" className="flex items-center gap-2 justify-center sm:justify-start hover:text-blue-600 transition">
              <ExternalLink className="w-4 h-4" /> Categories
            </a>
            <a href="/blog" className="flex items-center gap-2 justify-center sm:justify-start hover:text-blue-600 transition">
              <ExternalLink className="w-4 h-4" /> Blog
            </a>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 text-center sm:text-left">
            <p className="font-semibold text-gray-800 mb-2">Customer Service</p>
            <a href="/faq" className="hover:text-blue-600 block">FAQ</a>
            <a href="/returns" className="hover:text-blue-600 block">Return Policy</a>
            <a href="/shipping" className="hover:text-blue-600 block">Shipping Info</a>
            <a href="/support" className="hover:text-blue-600 block">Help & Support</a>
          </div>

          {/* Company */}
          <div className="space-y-4 text-center sm:text-left">
            <p className="font-semibold text-gray-800 mb-2">Company</p>
            <a href="/careers" className="hover:text-blue-600 block">Careers</a>
            <a href="/terms" className="hover:text-blue-600 block">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-blue-600 block">Privacy Policy</a>
            <a href="/contact" className="hover:text-blue-600 block">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
