import PropType from 'prop-types'

const ButtonPrimary = ({href , target = '_self', label, icon, classes}) => {
    if (href) {
        return (
            <a href={href} target={target} className={" btn raleway btn-primary" + classes}>{label} {icon ? <span className='material-symbols-rounded ' aria-hidden='true'>{icon}</span> : undefined}</a>
        )
    } else {
        return (
        <button className={'btn btn-primary' + classes}>{label} 
        {icon ? <span className='material-symbols-rounded' aria-hidden='true'>{icon}</span> : undefined}
        </button> 
    )
    }   
  
}
ButtonPrimary.PropType = {
  href: PropType.string,
  target: PropType.string,
  label: PropType.string.isRequired,
  icon: PropType.string,
  classes: PropType.string
}

export {ButtonPrimary

}