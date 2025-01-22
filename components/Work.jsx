const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Full stack music app',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Card Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];
import ProjectCard from "./ProjectCard";
const Work = () => {
  return (
    <section className="section" id="work">
    <div className="container">
    <h2 className="mb-10  headline-2 raleway">Projects</h2>
    <div className="grid gap-x-4 z-30 gap-y-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] raleway">
        {works.map(({ imgSrc, title, tags, projectLink }, key) => (
        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>  
        ))}
    </div>
    </div>
    </section>
    
)
}

export default Work