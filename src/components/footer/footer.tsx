import React from 'react';
import './footer.css'; 
import LinkedInLogo from '../../assets/icons/linkedin.svg';
import GithubLogo  from '../../assets/icons/github.svg';
import MediumLogo from '../../assets/icons/medium.svg';
import EmailLogo from '../../assets/icons/email.svg';
import WhatsappLogo from '../../assets/icons/whatsapp.svg';


class Footer extends React.Component  {

    socialUrls = {
        LINKEDIN: 'https://www.linkedin.com/in/marcos-carlomagno/',
        GITHUB: 'https://github.com/MCarlomagno',
        MEDIUM: 'https://mcarlomagno.medium.com/',
        EMAIL: 'mailto:marcoscarlomagno1@gmail.com',
        WHATSAPP: 'https://api.whatsapp.com/send?phone=543416620881'
    }

    handleIconClick (url: string) {
        window.open(url, "_blank");
    }

    render() {
        return (
            <div className="footer-container">
                <div>
                    <div className="footer-title">
                        About me
                    </div>
                    <div className="footer-body-text">
                        I am always happy to dirty my hands on a complex task, so do not hesitate to hit me up with your requests!
                        And I'm even more interested if your project will benefit the humanity in any meaningful way.
                    </div>
                </div>
                <div>
                <div className="footer-title">
                        Contact / Social Media
                    </div>
                    <div>
                        <img src={LinkedInLogo} alt="Linkedin Logo" className="footer-icon" onClick={(e) => this.handleIconClick(this.socialUrls.LINKEDIN)}/>
                        <img src={GithubLogo} alt="Github Logo" className="footer-icon" onClick={(e) => this.handleIconClick(this.socialUrls.GITHUB)}/>
                        <img src={MediumLogo} alt="Medium Logo" className="footer-icon" onClick={(e) => this.handleIconClick(this.socialUrls.MEDIUM)}/>
                        <img src={EmailLogo} alt="Email Logo" className="footer-icon" onClick={(e) => this.handleIconClick(this.socialUrls.EMAIL)}/>
                        <img src={WhatsappLogo} alt="Whatsapp Logo" className="footer-icon" onClick={(e) => this.handleIconClick(this.socialUrls.WHATSAPP)}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;