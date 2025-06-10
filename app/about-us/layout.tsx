import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MotorMinds - Revolutionizing Auto Shop Management",
  description: "Meet the team behind MotorMinds - passionate innovators combining automotive expertise with cutting-edge technology to transform auto shop management. Learn about our journey and mission.",
  openGraph: {
    title: "About Us | MotorMinds - Revolutionizing Auto Shop Management",
    description: "Meet the team behind MotorMinds - passionate innovators combining automotive expertise with cutting-edge technology to transform auto shop management.",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "MotorMinds Team"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | MotorMinds",
    description: "Meet the team behind MotorMinds - passionate innovators combining automotive expertise with cutting-edge technology.",
  }
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
