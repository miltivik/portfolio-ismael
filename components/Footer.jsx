"use client";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'Skill',
      href: '#skill'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/miltivik'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ismael-medina-2b27a926b/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/accOfnico'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/sinplataa'
    },
  ];
import { ButtonPrimary } from "./Button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ChevronRight } from 'lucide-react';
  
  const Footer = () => {
    return (
        <footer className="section py-24 z-20">
            <div className="container rounded-md bg-zinc-950 relative  border border-zinc-50/20 p-4 ">
            <div className="pt-24">
                    <div className="lg:grid lg:grid-cols-3 raleway ">
                        <div className="mb-12 z-30">
                            <h2 className="mb-8 headline-1 lg:max-w-[24ch] raleway">Let&apos;s work together today!</h2>
                            <ButtonPrimary href='ismamed4@gmail.com' label='Start project' classes={' '}  icon={<ChevronRight className="hover:translate-x-1 transition-all" />} />
                        </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-40 z-30">
                        <div className="mb-2 ">
                            <p className="mb-2 text-zinc-200 text-2xl ">Sitemap</p>
                            <ul>
                                {sitemap.map(({href, label}, key) => (
                                    <li key={key}><a href={href} className="block py-1 text-md transition-colors text-zinc-400 hover:text-zinc-200">{label}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="z-30">
                        <div className="gp-4 lg:pl-40">
                            <p className="mb-2 text-zinc-200 text-2xl">Socials</p>
                            <ul>
                                {socials.map(({href, label}, key) => (
                                    <li key={key}><a href={href} target="_blank" className="block py-1 text-md transition-colors text-zinc-400 hover:text-zinc-200">{label}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                    <div className="flex items-center justify-between pt-10 raleway">
                        <a href="" className="mb-8">
                            <img src="/images/logo1.png" width={40} height={40} alt="logo" />
                        </a>
                        <p className="mb-8 text-sm text-zinc-500"> © 2025 <span className="text-zinc-200">Ismael Medina</span></p>
                    </div>
            </div>
                    <div className="absolute inset-0 pointer-events-none">
                      <BackgroundBeams />
                    </div>
            </div>
        </footer>

    )
  }
  
  export default Footer