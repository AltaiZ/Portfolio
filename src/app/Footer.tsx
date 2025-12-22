import { FacebookIcon, InstagramIcon, Mail, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-20 fixed bottom-0 left-0 z-50 bg-card rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter">Contact me</h2>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Do you speak Mandarin? It's ok if you don't, I speak Mongolian
              too.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/munkhaltai.sukhbaatar"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground cursor-pointer"
              >
                <FacebookIcon size={20} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/altai_s/"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground cursor-pointer"
              >
                <InstagramIcon size={20} />
                <span>Instagram</span>
              </a>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <p>+976 96993933</p>
              </div>
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail size={20} />
                <p className="truncate">munkh_altai@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
