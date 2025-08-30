import Image from "next/image";
import Typewriter from "@/components/ui/TypewriterEffect";
import { Linkedin, Github, Facebook, X } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex  flex-col items-center gap-8 px-4 py-12 md:flex-row md:gap-16 md:px-8 lg:px-20">

      {/* Left: Text Content */}
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold gradient-text mb-2 md:text-5xl lg:text-6xl">
          {`I'm Blessing`}
        </h1>
        <h2 className="text-xl mb-4 font-medium">
          <Typewriter />
        </h2>
        <hr className="my-4 border-gray-200" />
        <p className="text-base mb-6">
          {`I'm a software engineer who believes tech should solve problems, not create them. My mission is to build solutions that are not only clean and scalable but also genuinely useful. When I'm not debugging or designing smoother user experiences, you'll find me sharing what I've learned through writing, teaching, and connecting with other builders. This blog is my space to share the lessons, projects, and stories from my journey in tech. Let's connect and build something cool together!`}
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/blessing-emejulu-63850a248/"
            aria-label="LinkedIn"
            className="text-[#8367C7] hover:text-[#5603AD]"

          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/BlessingEmejulu"
            aria-label="GitHub"
            className="text-[#8367C7] hover:text-[#5603AD]"

          >
            <Github size={24} />
          </a>
          <a
            href="https://www.facebook.com/blessing.emejulu.33"
            aria-label="Facebook"
            className="text-[#8367C7] hover:text-[#5603AD]"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://x.com/blessedtechie"
            aria-label="X"
            className="text-[#8367C7] hover:text-[#5603AD]"

          >
            <X size={24} />
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center mx-auto md:mx-0">
        <Image
          src="/blessedtechie.webp"
          alt="Blessing Emejulu"
          width={320}
          height={320}
          className="object-cover w-full h-full rounded-xl"
          priority
        />
      </div>
    </section>
  );
}