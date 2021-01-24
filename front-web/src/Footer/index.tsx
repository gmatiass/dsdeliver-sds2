import './styles.css'
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://github.com/mindblows" target="_new"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/gabriel-silva-5a58201a2/" target="_new"><LinkedinIcon /></a>
                <a href="https://www.instagram.com/gmatiass/" target="_new"><InstagramIcon /></a>
            </div>
            <div className="footer-assign">
                Ícones feitos por <a href="https://www.flaticon.com/br/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> de <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a>
            </div>
        </footer>
    );
}

export default Footer;