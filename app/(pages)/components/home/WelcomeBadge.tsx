export default function WelcomeBadge() {
    return (
        <div className="inline-flex items-center gap-3 bg-[#131412] border border-[#1f250e] rounded-[40px] px-6 py-3 mb-8 animate-fade-up-delay-1">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 text-sm font-medium">WELCOME TO MOTORMINDS</span>
        </div>
    );
}
