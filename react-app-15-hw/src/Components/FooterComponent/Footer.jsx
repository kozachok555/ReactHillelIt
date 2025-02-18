import './Footer.scss'
import { useTheme } from '../ThemeContext';
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
export default function Footer(){
    const { isLightMode } = useTheme();
    return (
        <div className={`footer-container-${isLightMode ? "light" : "dark"}`}>
            <div className='Footer'>
                <h4>My Contacts:</h4>
                <ul className='contacts-list'>
                    <li className='instagram-contact'>
                        <InstagramIcon />
                        <a href="https://www.instagram.com/vova.koza4enko/">@vova.koza4enko</a>
                    </li>
                    <li className='github-contact'>
                        <GitHubIcon/>
                        <a href="https://github.com/kozachok555">My Git</a>
                    </li>
                    <li className='linkedin-contact'>
                        <LinkedInIcon/>
                        <p>Here will be my Linkedin</p>
                    </li>
                    <li className='phone-contact'>
                        <PhoneIcon/>
                        <p>+110 000 012 23 11</p>
                    </li>
                    <li className='mail-contact'>
                        <MailIcon/>
                        <p>kz4nkovova@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}