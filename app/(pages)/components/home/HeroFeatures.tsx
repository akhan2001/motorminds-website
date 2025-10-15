export default function HeroFeatures() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-[#c5c6c5]">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <path d="M6.564.75L3.5 3.814 1.436 1.75.75 2.436l2.75 2.75 3.75-3.75z"/>
                    </svg>
                </div>
                <span>No demo required</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <path d="M6.564.75L3.5 3.814 1.436 1.75.75 2.436l2.75 2.75 3.75-3.75z"/>
                    </svg>
                </div>
                <span>7-day free trial</span>
            </div>
        </div>
    );
}
