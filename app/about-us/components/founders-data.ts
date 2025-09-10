export interface Founder {
	name: string;
	role: string;
	description: string;
	image: string;
	favoriteCar: string;
	linkedin: string;
}

export const founders: Founder[] = [
	{
		name: "Hussain",
		role: "Co-Founder & CEO",
		description: "Visionary leader with expertise in legal, financials, and business strategy.",
		image: "/team-images/hussain_siddiqui.png",
		favoriteCar: "1969 Chevy Camaro",
		linkedin: "https://www.linkedin.com/in/hussain-siddiqui-6386a3263"
	},
	{
		name: "Zaid",
		role: "Co-Founder & COO",
		description: "Operations and cloud technology expert, driving scalable business solutions.",
		image: "/team-images/zaid_khusro.png",
		favoriteCar: "BMW Alpina B8",
		linkedin: "https://www.linkedin.com/in/zaidkhusro25"
	},
	{
		name: "Abdullah",
		role: "Co-Founder & CTO",
		description: "Service advisor turned software developer, leading technical innovation and development.",
		image: "/team-images/abdullah_khan.png",
		favoriteCar: "MK5 Toyota Supra",
		linkedin: "https://www.linkedin.com/in/abdullah-khan-2001"
	},
	{
		name: "Basil",
		role: "Chief Sales Officer (CSO)",
		description: "Business and technology expert with extensive experience in client acquisition.",
		image: "/team-images/basil_siddiqui.png",
		favoriteCar: "BMW M5",
		linkedin: "https://www.linkedin.com/in/basil-siddiqui-a89118212"
	},
];
