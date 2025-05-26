import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/about-hero.jpg"
          alt="MotorMinds Team"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          About Us
        </h1>
        <div className="w-24 h-1 bg-red-500 mx-auto"></div>
      </div>
    </section>
  );
} 