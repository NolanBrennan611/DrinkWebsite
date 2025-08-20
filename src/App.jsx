import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Message from "./sections/Message.jsx";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Message />
            <div className="h-dvh "></div>
        </main>
    )
}
export default App
