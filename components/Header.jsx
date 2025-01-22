'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useEffect, useState} from "react";
import { useWindowScroll } from "react-use";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)


const Header = () => {

  
  const navContainterRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isnavVisible, setIsNavVisible] = useState(true)

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
      if (currentScrollY == 0) {
          setIsNavVisible(true);
          navContainterRef.current.classList.remove('floating-nav');
      } else if (currentScrollY > lastScrollY) {
          setIsNavVisible(false);
          navContainterRef.current.classList.add('floating-nav');
      } else if (currentScrollY < lastScrollY) {
          setIsNavVisible(true);
          navContainterRef.current.classList.add('floating-nav');
      }
      setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
      gsap.to(navContainterRef.current, {
          opacity: isnavVisible ? 1 : 0,
          y: isnavVisible ? 0 : -100,
          duration: 0.5,
      })
  }, [isnavVisible])


  return (
    <header className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-20" >
        <section ref={navContainterRef} className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/30 rounded-lg bg-[#1a1b1b] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-4">
            <ul className="flex raleway items-center justify-center gap-5 font-medium text-white">
                <a href="#home" className="hover:text-white/80"><li>Home</li></a>
                <a href="#work" className="hover:text-white/80"><li>Work</li></a>
                <a href="#skill" className="hover:text-white/80"><li>Skill</li></a>
                <a href="#contact" className="hover:text-white/80"><li>Contact</li></a>
            </ul>
        </section>
    </header>
  )
}

export default Header