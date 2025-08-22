import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Message = () => {
    useGSAP(() => {
        document.fonts.ready.then(() => {
            const firstMessageSplit = SplitText.create('.first-message', { type: "words" });
            const secondMessageSplit = SplitText.create('.second-message', { type: "words" });
            const paragraphSplit = SplitText.create('.message-content p', { type: "words, lines", linesClass: "paragraph-line" });

            gsap.to(firstMessageSplit.words, {
                color: "#faeade",
                ease: "power1.in",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".message-content",
                    start: "top center",
                    scrub: true,
                    end: "30% center",
                }
            })

            gsap.to(secondMessageSplit.words, {
                color: "#faeade",
                ease: "power1.in",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".second-message",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            })

            const revealTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".msg-text-scroll",
                    start: "top 60%",
                },
            })

            revealTl.to(".msg-text-scroll", {
                duration: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.inOut",
            })

            const paragraphTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".message-content p",
                    start: "top center",
                }
            })
            paragraphTl.from(paragraphSplit.words, {
                yPercent: 300,
                rotate: 3,
                ease: "power1.inOut",
                duration: 1,
                stagger: 0.01
            })
        })
    })

    return (
        <section className="message-content">
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message">Stir up your fearless past and</h1>
                        <div className="msg-text-scroll" style={{
                            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                        }}>
                            <div className="bg-light-brown md:pb-5 pb-5 px-5">
                                <h2 className="text-red-brown">Fuel up</h2>
                            </div>
                        </div>
                        <h1 className="second-message">Your future with every gulp of Perfect Protein</h1>
                    </div>
                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p>Rev up your rebel spirit and feed the adventure of life with SPYLT, where you're one chug away
                            from epic nostalgia and fearless fun.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Message
