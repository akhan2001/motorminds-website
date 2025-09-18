interface FeatureSectionProps {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    features: string[];
    reverse?: boolean;
}

export default function FeatureSection({ 
    image, 
    imageAlt, 
    title, 
    description, 
    features, 
    reverse = false 
}: FeatureSectionProps) {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                    {/* Image */}
                    <div className="flex-1">
                        <div className="relative w-full h-[400px] bg-gray-800 rounded-lg overflow-hidden">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {title}
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
