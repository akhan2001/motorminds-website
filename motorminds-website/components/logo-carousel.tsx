import Image from "next/image"
import fs from "fs"
import path from "path"

// This makes it a server component that runs on every request
async function getLogos() {
  const logoDirectory = path.join(process.cwd(), 'public', 'company-logos')
  const fileNames = await fs.promises.readdir(logoDirectory)
  
  // Filter for image files and create logo objects
  return fileNames
    .filter(file => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
    .map(file => ({
      src: `/company-logos/${file}`,
      alt: file
        .replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }))
}

export default async function LogoCarousel() {
  const logos = await getLogos()
  
  // If no logos found, don't render the section
  if (logos.length === 0) return null

  return (
    <section className="py-12 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-300 text-sm uppercase tracking-wider mb-8">
          Trusted by Leading Auto Brands
        </h3>
        <div className="logos-container">
          <div className="logos-slide">
            {logos.map((logo, idx) => (
              <div 
                key={`logo-1-${idx}`} 
                className="inline-block w-[120px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300 mx-10"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="logos-slide">
            {logos.map((logo, idx) => (
              <div 
                key={`logo-2-${idx}`} 
                className="inline-block w-[120px] h-[60px] relative grayscale hover:grayscale-0 transition-all duration-300 mx-10"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 