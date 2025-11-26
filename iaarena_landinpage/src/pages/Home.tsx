// Import all components sections here

// import HeroSection from '../components/HeroSection';
// import ProblemSection from '../components/ProblemSection';
// import SolutionSection from '../components/SolutionSection';
// import InovationSection from '../components/InovationSection';
// import MarketSection from '../components/MarketSection';
// import ImpactSection from '../components/ImpactSection';
// import MVPSection from '../components/MVPSection';
// import TeamSection from '../components/TeamSection';
// import PicthVideoSection from '../components/PicthVideoSection';
// import CTASection from '../components/CTASection';
// import Footer from '../components/Footer';

// Shadcn components
import { Button } from "@/components/ui/button"

// Main component
const Home = () => {
    return (
        <div>
            <div className="app flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <Button onClick={() => alert("Exit? Really??")} variant="destructive">Exit</Button>
            </div>
        </div>
    );
}

export default Home;
