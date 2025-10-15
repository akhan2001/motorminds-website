import { 
    Users, 
    Wrench, 
    Calendar, 
    FileText, 
    Phone, 
    Brain, 
    Package 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SoftwareFeature {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

const softwareFeatures: SoftwareFeature[] = [
    {
        id: "ai-calling",
        icon: Phone,
        title: "AI Calling",
        description: "Automated AI-powered customer calls for updates, reminders, and follow-ups to improve customer communication."
    },
    {
        id: "mia-diagnostics",
        icon: Brain,
        title: "MIA Diagnostics",
        description: "AI-powered diagnostic analysis to identify vehicle issues, recommend solutions, and streamline repair processes."
    },
    {
        id: "parts-sourcing",
        icon: Package,
        title: "Parts Sourcing",
        description: "Intelligent parts sourcing system with supplier integration, inventory tracking, and automated ordering capabilities."
    },
    {
        id: "work-orders",
        icon: Wrench,
        title: "Work Orders", 
        description: "Create, manage, and track work orders from start to finish with detailed job descriptions and progress updates."
    },
    {
        id: "appointments",
        icon: Calendar,
        title: "Appointments",
        description: "Schedule and manage service appointments with automated reminders and real-time availability tracking."
    },
    {
        id: "invoices",
        icon: FileText,
        title: "Invoices",
        description: "Generate professional invoices, track payments, and manage billing with integrated accounting features."
    }
];

export default function SoftwareFeatures() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge 
                        variant="outline" 
                        className="mb-8 bg-[#131412] py-2 px-4 rounded-full border-[#1f250e] text-white hover:bg-[#131412]"
                    >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        #1 AUTO SHOP SOFTWARE
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-left text-white">
                        <span className="text-red-500">Stay ahead</span> in the auto repair business
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {softwareFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div 
                                key={feature.id}
                                className="bg-[#131412] border border-[#1f250e] rounded-2xl p-8 hover:border-red-500/30 transition-colors"
                            >
                                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-[#c5c6c5] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
