import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skill from '@/components/Skill'
import Work from '@/components/Work'
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {

  return (    
    <main className="h-full bg-black ">
      <Header/>
      <Hero />
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
    </main>

  )
}

export default App
