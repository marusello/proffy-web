import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyImg from '../../assets/images/icons/study.svg';
import giveClassesImg from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

export default function Landing() {
  const [totalConnections, setTotalConnectons] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnectons(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Propfy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
           src={landingImg}
           alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="button-container">
          <Link to="/study" className="study">
            <img src={studyImg} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesImg} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>

    </div>  
  )
}