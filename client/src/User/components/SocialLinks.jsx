import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { icons } from '../../data'
import { motion } from 'framer-motion'

const SocialMedia = () => {
    const socialMedia = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/",
            icon: <Facebook />
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/",
            icon: <Instagram />
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/",
            icon: <LinkedIn />
        },
        {
            name: "Github",
            link: "https://github.com/",
            icon: <GitHub />
        },
        {
            name: "Twitter",
            link: "https://twitter.com/",
            icon: <Twitter />
        }
    ]

    return (
        <>
            {
                socialMedia.map((sLink, index) => (
                    <motion.a
                        whileHover={{ scale: [1, 1.2], duration: 200 }}
                        href={sLink.link}
                        target="_blank"
                        key={index}
                        className="flex justify-center items-center text-white hover:bg-black hover:text-orange w-[3rem] h-[3rem] rounded-full"
                    >
                        {sLink.icon}
                    </motion.a>
                ))
            }
        </>
    )
}

export default SocialMedia;