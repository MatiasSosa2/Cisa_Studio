import HeroMinimal from '@/components/hero-minimal';
import ServicesMinimal from '@/components/services-minimal';
import ProjectsMinimal from '@/components/projects-minimal';
import PricingMinimal from '@/components/testimonials-minimal';
import AIServicesFeatured from '@/components/ai-services-featured';
import ProcessTransparent from '@/components/process-transparent';
import StepFormDeepSpace from '@/components/contact-minimal-new';
import FooterMinimal from '@/components/footer-minimal';
import FloatingChatbot from '@/components/floating-chatbot';

export default function Page() {
  return (
    <main>
      <HeroMinimal />
      <ServicesMinimal />
      <ProjectsMinimal />
      <PricingMinimal />
      <AIServicesFeatured />
      <ProcessTransparent />
      <StepFormDeepSpace />
      <FooterMinimal />
      <FloatingChatbot />
    </main>
  );
}
