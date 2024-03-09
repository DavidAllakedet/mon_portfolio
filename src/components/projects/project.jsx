import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal"; 
import "./styles/project.css";

const Project = (props) => {
  const { image, title, description, linkText, link } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className="project">
        <div className="project-container">
          <div className="project-logo" onClick={openModal}>
          <img src={`/projects/images/${image}`} alt={title} className="main-image" />
          </div>
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-link">
            <div className="project-link-icon">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className="project-link-text">
              <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal onClose={closeModal} project={props}> 
          <div className="modal-content">
            <img src={image} alt="logo" />
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
           
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              <FontAwesomeIcon icon={faLink} />
              <span>{linkText}</span>
            </a>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Project;
