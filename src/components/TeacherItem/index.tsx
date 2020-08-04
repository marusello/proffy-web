import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/38086479?s=400&u=7a775e29f528ef9577b69f0ca07cad3630cda0ae&v=4" alt="Marcelo Augusto"/>
            <div>
              <strong>Marcelo Augusto</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 20,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}