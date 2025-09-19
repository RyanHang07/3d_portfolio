import TitleHeader from '../../components/TitleHeader.jsx'
import GlowCard from '../../components/Cards/GlowCard.jsx'
import { testimonials } from '../../constants/index.js'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center pt-12 mt-0 content-container section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="Testimonials" sub="💃 Why People Love My Work and I 🕺" />
            <div className="lg:columns-3 md:columns=2 columns-1 mt-16">
                {testimonials.map(({imgPath, name, mentions, review}, index) => (
                    <a key={index} href={`https://www.linkedin.com/in/${mentions}`} target="_blank" rel="noopener noreferrer" className="block">
                        <GlowCard card={{review}}>
                            <div className="flex items-center gap-3">
                                <div className="flex-none">
                                    <img src={imgPath} alt={name} className="testimonial-img" />
                                </div>
                                <div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-white-50">@{mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials