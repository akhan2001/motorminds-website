import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { founders } from './founders-data';

export default function TeamSection() {
	return (
		<section className="py-20 bg-black">
			<div className="container mx-auto px-4">
				<div className="max-w-8xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Meet Our Team</h2>
					<p className="text-gray-400 text-center mb-12 text-lg">
						The Minds Behind MotorMinds.
					</p>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{founders.map((founder, index) => (
							<div key={index} className="space-y-4">
								{/* Image Div */}
								<div className="relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
									<Image
										src={founder.image}
										alt={founder.name}
										fill
										className="object-cover transition-transform hover:scale-105"
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
									/>
								</div>
								
								{/* Founder Data Div */}
								<div className="space-y-3">
									{/* Name and LinkedIn */}
									<div className="flex items-center justify-between">
										<h3 className="text-2xl font-medium text-white">{founder.name}</h3>
										<a 
											href={founder.linkedin}
											className="text-gray-400 hover:text-white transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Linkedin className="h-5 w-5" />
										</a>
									</div>
									
									{/* Role */}
									<p className="text-gray-400 text-sm">{founder.role}</p>
									
									{/* Description */}
									<p className="text-gray-400 text-sm leading-relaxed">{founder.description}</p>
									
									{/* Favorite Car */}
									<div className="space-y-1">
										<p className="text-gray-500 text-sm">Favorite Car</p>
										<p className="text-white text-sm font-medium">{founder.favoriteCar}</p>
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