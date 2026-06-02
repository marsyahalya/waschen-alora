import { Hero } from '@/components/sections/Hero';
import { FloatingStats } from '@/components/sections/FloatingStats';
import { Trust } from '@/components/sections/Trust';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Services } from '@/components/sections/Services';
import { Workflow } from '@/components/sections/Workflow';
import { Gallery } from '@/components/sections/Gallery';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { Sustainability } from '@/components/sections/Sustainability';
import { ContactSection } from '@/components/sections/Contact';
import { SocialMediaSection } from '@/components/sections/SocialMedia';
import { AnimatedContent } from '@/components/animations/AnimatedContent';

export default function Home() {
  return (
    <>
      <Hero />
      <FloatingStats />
      <Trust />
      <AnimatedContent><ClientLogos /></AnimatedContent>
      <AnimatedContent><Services /></AnimatedContent>
      <AnimatedContent><Gallery /></AnimatedContent>
      <AnimatedContent><TestimonialsSection /></AnimatedContent>
      <AnimatedContent><Sustainability /></AnimatedContent>
      <AnimatedContent><Workflow /></AnimatedContent>
      <AnimatedContent><SocialMediaSection /></AnimatedContent>
      <AnimatedContent><ContactSection /></AnimatedContent>
    </>
  );
}
