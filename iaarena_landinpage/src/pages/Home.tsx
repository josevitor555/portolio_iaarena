// Styles CSS
import '../App.css';

// Import all components sections here
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import InovationSection from '../components/InovationSection';
import MarketSection from '../components/MarketSection';
import ImpactSection from '../components/ImpactSection';
import MVPSection from '../components/MVPSection';
import TeamSection from '../components/TeamSection';
import PicthVideoSection from '../components/PicthVideoSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

// Main component
const Home = () => {
    return (
        <div className='min-h-screen flex flex-col bg-background'>
            {/* Navigation component */}
            <Navigation />
            
            {/* Main content wrapper */}
            <div className='flex-1'>
                {/* Hero Section */}
                <HeroSection />
                
                {/* Problem Section */}
                <ProblemSection />
                
                {/* Solution Section */}
                <SolutionSection />
                
                {/* Inovation Section */}
                <InovationSection />
                
                {/* Market Section */}
                <MarketSection />
                
                {/* Impact Section */}
                <ImpactSection />
                
                {/* MVP Section */}
                <MVPSection />
                
                {/* Team Section */}
                <TeamSection />
                
                {/* Pitch Video Section */}
                <PicthVideoSection />
                
                {/* CTA Section */}
                <CTASection />
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;