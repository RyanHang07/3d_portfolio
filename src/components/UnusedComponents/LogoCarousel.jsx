import { logoIconsList } from '../../constants/index.js'

const LogoIcon = ({icon}) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoCarousel = () => {
  return (
    <div className="md:my-20 my-10 relative">
        <div className="graident-edge" />
        <div className="graident-edge" />

        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>

    </div>
  )
}

export default LogoCarousel