import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/schools.css";

const Schools = () => {
	return (
		<div className="schools">
			<Card
				icon={faBriefcase}
				title="Formations"
				body={
					<div className="schools-body">
						<div className="school">
							<img
								src="./isi.webp"
								alt="Groupe ISI"
								className="school-image"
							/>
							<div className="school-title">GROUPE ISI</div>
							<div className="school-subtitle">
								 Infographie/Multimedia
							</div>
							<div className="school-duration">Novembre 2019 - Aout 2022</div>
						</div>

						<div className="school">
							<img
								src="./oc.webp"
								alt="OpenClassrooms"
								className="school-image"
							/>
							<div className="school-title">OpenClassrooms</div>
							<div className="school-subtitle">
								Développeur Web
							</div>
							<div className="school-duration"> Mai 2023 - Mars 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Schools;
