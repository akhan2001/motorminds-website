import { Bricolage_Grotesque } from 'next/font/google';

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  // Available weights: 200, 300, 400, 500, 600, 700, 800
  weight: ['300', '400', '500', '700'],
  variable: '--font-bricolage',
}); 