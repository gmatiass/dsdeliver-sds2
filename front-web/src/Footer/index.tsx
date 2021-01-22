import './styles.css'
import {ReactComponent as Logo} from './logo.svg';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://github.com/mindblows" target="_new"><YoutubeIcon /></a>
                <a href="https://www.linkedin.com/in/gabriel-silva-5a58201a2/" target="_new"><LinkedinIcon /></a>
                <a href="https://www.instagram.com/gmatiass/" target="_new"><InstagramIcon /></a>
            </div>
        </footer>
    );
}

export default Footer;