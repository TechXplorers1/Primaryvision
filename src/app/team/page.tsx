import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import OurTeam from '@/components/sections/our-team';

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}
