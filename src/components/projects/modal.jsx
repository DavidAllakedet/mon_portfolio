import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/modal.css";

const Modal = ({ onClose, project }) => {
  const { title, year, description, problematique, details,image, linkText, link } = project;
  const {  mission, competencesDeveloppees, technologies } = details;

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, modalRef]);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="modal-body">
          <img src={`/projects/images/${image}`} alt={title} className="main-image" /> <br />
          <strong className="modal-det">Année:</strong> {year}
            <br />
          <strong className="modal-det">Description: </strong>
          {description}
          <br />
          <strong className="modal-det">Problematique: </strong>
          {problematique}
          <br />
          <strong className="modal-det">Compétences développées:</strong>
            <ul className="competences-list">
              {competencesDeveloppees.map((competence, index) => (
                <li key={index}>{competence}</li>
              ))}
            </ul>
            <br />
          <div className="det-img">
          <div className="project-details">
            
            <strong className="modal-det">Mission:</strong> {mission}
            <br />
          
            <strong className="modal-det">Technologies utilisées:</strong>
            <ul className="technologies-list">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
            
          </div>

          <div className="image-gallery">
          <div className="additional-images">
              {details.images.map((img, index) => (
                <img
                  key={index}
                  src={`/projects/images/${img}`}
                  alt={`${title} - ${index + 1}`}
                  className={`additional-image additional-image-${index + 1}`}
                />
              ))}
            </div>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FontAwesomeIcon icon={faLink} />
            <span>{linkText}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
