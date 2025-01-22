import PropTypes from 'prop-types'
const ProjectCard = ({ imgSrc, title, tags, projectLink,classes }) => {
  return (
<div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60  ring-1 ring-inset ring-zinc-50/10 transition-colors group z-0' + classes}>

    <figure className='mb-4 overflow-hidden rounded-lg img-box aspect-square z-0 '>
        <img src={imgSrc} alt={title} width={300} height={300} className='img-cover hover:scale-110 transition-transform duration-700' loading='lazy' />
    </figure>
    
    <div className='flex items-center justify-between gap-4 '>
        <div >
            <h3 className="mb-3 title-1">{title}</h3>
        <div className='flex flex-wrap items-center gap-2 '>{tags.map((tag, key) => (<span className='grid items-center h-8 px-3 text-sm rounded-lg text-zinc-400 bg-zinc-50/5' key={key}>{tag}</span>))}</div>
        </div>
        <div className='grid rounded-lg *:  w-11 h-11 place-items-center bg-sky-400 text-zinc-950 shrink-0'>
            <span className='mt-2 ml-2 material-symbols-rounded' aria-hidden='true'><img src="/images/ArrowNortEast.svg" alt="" /></span>
        </div>
    </div>
    <a href={projectLink} target='_blank' className='absolute inset-0 z-10'/>
</div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string
}
export default ProjectCard