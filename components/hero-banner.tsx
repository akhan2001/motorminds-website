import Image from 'next/image';

interface HeroBannerProps {
    title: string;
    backgroundImage: string;
    imageAlt?: string;
}

export default function HeroBanner({ 
    title, 
    backgroundImage,
    imageAlt = "Hero background" 
}: HeroBannerProps) {
    return (
        <section className="relative h-[40vh] min-h-[400px] w-full flex items-center">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    unoptimized={true}
                />
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {title}
                    </h1>
                    <div className="w-24 h-1 bg-red-500"></div>
                </div>
            </div>
        </section>
    );
}
