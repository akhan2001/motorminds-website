import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    name: "Abdullah",
    role: "Co-Founder & CTO",
    description: "Service advisor turned software developer, leading technical innovation and development.",
    image: "/team-images/abdullah-khan.png",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Hussain",
    role: "Co-Founder & CEO",
    description: "Visionary leader with expertise in legal, financials, and business strategy.",
    image: "/team-images/hussain-siddiqui.png",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Zaid",
    role: "Co-Founder & COO",
    description: "Operations and cloud technology expert, driving scalable business solutions.",
    image: "/team-images/zaid-khusro.png",
    linkedin: "#",
    twitter: "#"
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Meet Our Team</h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            The minds behind MotorMinds
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-80 w-full bg-gray-800 flex items-center justify-center">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{founder.name}</h3>
                  <p className="text-red-500 text-sm mb-3">{founder.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{founder.description}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={founder.linkedin}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={founder.twitter}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 