import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_82gp3yn', 'template_22hvhsm', e.target, 'lNmDJolvr5tvauvOJ')
            .then((result) => {
                console.log(result.text);
                alert("Votre message a été envoyé avec succès!");
            }, (error) => {
                console.log(error.text);
                alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.");
            });

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Contact | ${INFO.main.title}`}</title>
            </Helmet>

            <div className="page-content">
                <NavBar active="contact" />
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="title contact-title">
                            Comment me contacter.
                        </div>

                        <div className="subtitle contact-subtitle">
                            Merci pour votre intérêt à me contacter. Si vous avez une question 
                            ou un commentaire spécifique, n'hésitez pas à m'envoyer un e-mail à
                             <br /> <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a> . 
                            Vous pouvez également utiliser le formulaire de contact sur mon site Web.
                            Si vous préférez les réseaux sociaux, vous pouvez me trouver sur 
                            <a href={INFO.socials.instagram} 
                            target="_blank" rel="noreferrer">{INFO.socials.instagram}</a>.
                        </div>                      


                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Votre email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Votre message"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>

                    <div className="socials-container">
                        <div className="contact-socials">
                            <Socials />
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;
