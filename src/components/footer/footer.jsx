import './footer.css';
import LinkedInLogo from '../../assets/icons/linkedin.svg';
import GithubLogo from '../../assets/icons/github.svg';
import MediumLogo from '../../assets/icons/medium.svg';
import EmailLogo from '../../assets/icons/email.svg';
import MarkerLogo from '../../assets/icons/marker.svg';
import WhatsappLogo from '../../assets/icons/whatsapp.svg';

function Portfolio () {
    return (
        <div className="footer-container">
            <div>
                <div>
                    About me
                </div>
                <div>
                    I am always happy to dirty my hands on a complex task, so do not hesitate to hit me up with your requests!
                    And I'm even more interested if your project will benefit the humanity in any meaningful way.
                </div>
                <div>
                    Social media
                </div>
                <div>
                    <img src={LinkedInLogo} height="30" alt="Linkedin Logo"/>
                    <img src={GithubLogo} height="30" alt="Github Logo"/>
                    <img src={MediumLogo} height="30" alt="Medium Logo"/>
                    <img src={EmailLogo} height="30" alt="Email Logo"/>
                    <img src={MarkerLogo} height="25" alt="Marler Logo"/>
                    <img src={WhatsappLogo} height="30" alt="Whatsapp Logo"/>
                </div>
            </div>
            <div>
                <div>
                    Contact me
                </div>
                <div>
                    TODO: Contact form
                </div>
            </div>
        </div>
    );
}

export default Portfolio;