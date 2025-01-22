
const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/git.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/typescript.svg',
      label: 'TypeScript',
      desc: 'JavaScript Superset'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
  ];

import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <section className="section" id="skill">
    <div className="container items-center justify-center raleway ">
    <h2 className=" headline-2">
    Current technologies
    </h2>
    <p className="mt-3 mb-8  text-zinc-400 max-w-[50ch]">
    I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.
    </p>
    <div className="container">
          <div className="grid gap-3  grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] ">
        {
            skillItem.map(({ imgSrc, label, desc }, key ) => (<SkillCard  key={key} imgSrc={imgSrc} label={label} desc={desc}/>))
        }
    </div>
    </div>
    </div>
    </section>

  )
}

export default Skill
