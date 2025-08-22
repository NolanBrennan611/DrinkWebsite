import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import gsap from "gsap";
import { SplitText, ScrollTrigger, ScrollSmoother } from "gsap/all";
import Message from "./sections/Message.jsx";
import FlavorSection from "./sections/FlavorSection.jsx";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection.jsx";
import BenefitSection from "./sections/BenefitSection.jsx";
import { useEffect, useState } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.fonts.ready.then(() => setIsLoading(false));
    }, []);

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 3,
            effects: true,
        });

    }, []);

    return (
        <main>
            <NavBar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {isLoading ? (
                        <div className="h-screen flex items-center justify-center">
                            <p className="text-lg">Loading fonts...</p>
                        </div>
                    ) : (
                        <>
                            <Hero />
                            <Message />
                            <FlavorSection />
                            <NutritionSection />
                            <BenefitSection />
                            <div className="h-dvh"></div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default App;
