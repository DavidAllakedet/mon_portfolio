import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/common/banner";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<Banner />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">	
						Les Projets réalisés au cours de mon parcours.
						</div>

						<div className="subtitle projects-subtitle">
						Au fil de mon parcours en tant que développeur, 
						j'ai eu l'occasion de travailler sur une variété 
						de projets qui ont mis en valeur mes compétences 
						et ma passion pour le développement web. Voici 
						quelques-uns de mes projets les plus récents .
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
