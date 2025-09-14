import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onExploreExperts: () => void;
}

export function Footer({ onExploreExperts }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16 py-12 border-b border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build your next LLM?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading AI companies who trust TIAI for their training data needs.
          </p>
          <Button 
            onClick={onExploreExperts}
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-6"
          >
            Explore Experts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TI</span>
              </div>
              <span className="text-xl font-bold">TIAI</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The leading platform for premium LLM training data creation with expert human intelligence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-smooth">Data Annotation</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Prompt Response Pairs</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Multi-turn Conversations</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Response Rating</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-smooth">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 TIAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-white transition-smooth">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}