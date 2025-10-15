import ScrollingCarousel from './scrolling-carousel';
import { motorMindsFeatures } from './carousel-data';

export default function FeatureCarousel() {
    return (
        <div className="w-full h-16 bg-black">
            <div className="max-w-6xl mx-auto h-full">
                <ScrollingCarousel 
                    items={motorMindsFeatures}
                    speed={30}
                    direction="left"
                    className="h-full"
                />
            </div>
        </div>
    );
}
