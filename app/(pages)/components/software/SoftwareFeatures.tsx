import { 
    Users, 
    Calendar, 
    FileText, 
    CreditCard, 
    Shield, 
    BarChart3 
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
        id: "manage-customers",
        icon: Users,
        title: "Manage Customers",
        description: "Customer Management feature helps you keep track of customer information and service history."
    },
    {
        id: "appointment-scheduling",
        icon: Calendar,
        title: "Appointment Scheduling", 
        description: "Easily manage service appointments, track repair schedules, and oversee all bookings in real-time."
    },
    {
        id: "service-contracts",
        icon: FileText,
        title: "Service Contracts",
        description: "Generate, send, and collect digital service agreements with custom e-signatures to streamline client contracts."
    },
    {
        id: "easy-payments",
        icon: CreditCard,
        title: "Easy Payments",
        description: "Accept payments securely and seamlessly through multiple channels using your own accounts."
    },
    {
        id: "vehicle-inspections",
        icon: Shield,
        title: "Vehicle Inspections",
        description: "Conduct thorough vehicle inspections and document findings directly through the platform for better service quality."
    },
    {
        id: "business-analytics",
        icon: BarChart3,
        title: "Business Analytics",
        description: "Unlock powerful insights to improve shop efficiency, predict maintenance needs, and drive profitability."
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
