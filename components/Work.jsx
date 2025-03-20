const works = [
    {
      imgSrc: '/images/dashboard.png',
      title: 'Storage Drive Dashboard',
      tags: ['Appwrite', 'Drive', 'Development'],
      projectLink: 'https://store-it-phi.vercel.app/home'
    }
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