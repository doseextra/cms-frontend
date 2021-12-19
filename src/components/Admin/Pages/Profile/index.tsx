import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ContactIcon } from '@fluentui/react-icons';

import './profile.scss';
import { Header } from '../../Core';

export default function Profile(): React.ReactElement {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  const [activeItem, setActiveItem] = useState('profile');

  return (
    <div className="app-container">
      <Header color="profile" />
      <div className="page-container profile-content">
        <div className="left-sidebar-menu-ctions">
          <button className="title-options" type="button">
            <ChevronLeftIcon />
            <span>Opções do perfil</span>
          </button>
          <div className="menu-options">
            <ul>
              <li>
                <button type="button">
                  <ContactIcon />
                  Meu perfil
                </button>
              </li>
              <li>
                <button type="button">
                  <ContactIcon />
                  Alertas
                </button>
              </li>
              <li>
                <button type="button">
                  <ContactIcon />
                  Token e API
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-profile-content">
          <div className="contentBox box-shadow">
            <div className="left-input-options">
              <h3>Meu Perfil</h3>
              <div className="input-forms">
                <label htmlFor="name">
                  Nome
                  <input type="text" id="name" className="text-box" />
                </label>
                <label htmlFor="lastName">
                  Sobrenome
                  <input type="text" id="lastName" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="email">
                  E-mail
                  <input type="text" id="email" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="phone_number">
                  Telefone
                  <input type="text" id="phone_number" className="text-box" />
                </label>
                <label htmlFor="alternative_phone_number">
                  Telefone Alternativo
                  <input type="text" id="alternative_phone_number" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="genre">
                  Gênero
                  <input type="text" id="genre" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="zip_code">
                  CEP
                  <input type="text" id="zip_code" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="street">
                  Endereço
                  <input type="text" id="street" className="text-box" />
                </label>
                <label htmlFor="house_number">
                  Número
                  <input type="text" id="house_number" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="apt_number">
                  Número Apartamento
                  <input type="text" id="apt_number" className="text-box" />
                </label>
                <label htmlFor="address_complement">
                  Complemento
                  <input type="text" id="address_complement" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="city">
                  Cidade
                  <input type="text" id="city" className="text-box" />
                </label>
                <label htmlFor="state">
                  Estado
                  <input type="text" id="state" className="text-box" />
                </label>
              </div>
              <div className="input-forms">
                <label htmlFor="country">
                  País
                  <input type="text" id="country" className="text-box" />
                </label>
              </div>
            </div>
            <div className="right-profile-avatar">
              <button type="button" className="transparent change-avatar-image">
                <img src="../../../../assets/images/avatar.webp" alt="Avatar" />
              </button>
              <button type="button" className="primary change-avatar box-shadow">Alterar imagem</button>
              <button type="button" className="danger removeAvatar box-shadow">Remover imagem</button>
            </div>
            <div className="save-action">
              <button type="button" className="primary box-shadow">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
