/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ArrowUpRightIcon,
  ClosePaneIcon,
  ContactIcon,
  RingerIcon,
  SettingsIcon,
} from '@fluentui/react-icons';

import { DashIcon } from '../../../Icons';

import * as globalActions from '../../../../store/ducks/global/actions';
import * as authActions from '../../../../store/ducks/auth/actions';
import { ApplicationState } from '../../../../store';
import { IGlobalState } from '../../../../store/ducks/global/types';

import './header.scss';

interface IHeader {
  color: string;
}

export default function Header({ color }: IHeader): React.ReactElement {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const history = useHistory();
  const services = [
    { id: 1, label: 'E-mails', icon: 'assets/images/enviar.svg', route: '/' },
    { id: 2, label: 'Sites', icon: 'assets/images/empilhados.svg', route: 'websites' },
    { id: 3, label: 'Bancos de dados', icon: 'assets/images/servidor-sql.svg', route: '/' },
    { id: 4, label: 'Arquivos', icon: 'assets/images/pasta.svg', route: '/' },
    { id: 5, label: 'Relatórios', icon: 'assets/images/grafico.svg', route: '/' },
    { id: 6, label: 'Financeiro', icon: 'assets/images/dolar.svg', route: '/' },
    { id: 7, label: 'Ajuda', icon: 'assets/images/socorro.svg', route: '/' },
  ];

  const globalState: IGlobalState = useSelector((state: ApplicationState) => state.global);
  const dispatch = useDispatch();

  function toggleLeftSidebar(): void {
    dispatch(globalActions.viewLeftSidebarAction(!globalState.viewLeftSidebar));
  }

  function toggleUserSidebar(): void {
    dispatch(globalActions.viewUserSidebarAction(!globalState.viewUserSidebar));
  }

  function toRoute(route: string) {
    history.push(route);
    dispatch(globalActions.viewUserSidebarAction(false));
  };

  function toLogout() {
    dispatch(authActions.authLogoutRequest());
  };

  return (
    <div className={`header ${color}`}>
      <nav className="nav-header">
        <div className="nav-brand">
          <div className="dash-action">
            <button type="button" className="open-dash" onClick={() => toggleLeftSidebar()}>
              <DashIcon />
            </button>
          </div>
          <div className="brand-text">
            <div className="container">
              <button type="button" className="anchor" onClick={() => toRoute('/admin')}>
                <span> awadmin host</span>
              </button>
            </div>
          </div>
          <div className={`dash-options-list animate ${globalState.viewLeftSidebar ? 'active' : 'hidden'}`}>
            <div className="dash-bar">
              <div className="dash-item">
                <button type="button" className="open-dash" onClick={() => toggleLeftSidebar()}>
                  <DashIcon />
                </button>
              </div>
              <div className="dash-item">
                <button type="button" className="open-dash-fullscreen">
                  <span>awadmin</span>
                  <ArrowUpRightIcon />
                </button>
              </div>
            </div>

            <div className="dash-main">
              <div className="dash-title">
                <span>Meus serviços</span>
              </div>
              <div className="list-apps">

                {services.map((service) => (
                  <button type="button" className="app" onClick={() => toRoute(service.route)} key={service.id}>
                    <img className="app-icon" src={service.icon} alt={service.label} />
                    <span className="app-label">{service.label}</span>
                  </button>
                ))}

              </div>
              <div className="dash-copyright">
                <a href="http://#" className="copyright-anchor">© 2020 awadmin/Regis Tomkiel</a>
              </div>
            </div>

          </div>
        </div>

        <div className="nav-actions">
          <div />
          <div className="app-actions">
            <div className="item">
              <button type="button">
                <div className="icon nav-settings">
                  <SettingsIcon />
                </div>
              </button>
            </div>
            <div className="item">
              <button type="button">
                <div className="icon nav-notifications">
                  <RingerIcon />
                </div>
              </button>
              <div className="nav-notification-status">
                <span className="notifications-counter">9</span>
              </div>
            </div>
            <div className={`item user ${globalState.viewUserSidebar ? 'active' : 'hidden'}`}>
              <button type="button" onClick={() => toggleUserSidebar()}>
                <div className="icon user-icon">
                  <ContactIcon />
                </div>
              </button>
              <div className="user-status" />
              <div className={`user-sidebar ${globalState.viewUserSidebar ? 'active' : 'hidden'}`}>
                <div className="user-sidebar-header">
                  <h1 className="title-sidebar">Minha conta</h1>
                  <div className="close-sidebar">
                    <button type="button" onClick={() => toggleUserSidebar()}>
                      <ClosePaneIcon />
                    </button>
                  </div>
                </div>
                <div className="sidebar-content">
                  <div className="sidebar-avatar">
                    <div className="icon">
                      <ContactIcon />
                    </div>
                  </div>
                  <div className="sidebar-resume">
                    <span className="user-name">User Name</span>
                    <span className="user-email">user@email.com</span>
                    <div className="more-infos">
                      <button type="button" className="anchor" onClick={() => toRoute('profile')}>
                        Meu perfil
                      </button>
                      <button type="button" className="anchor" onClick={() => toRoute('account')}>
                        Minha Conta
                      </button>
                      <button type="button" className="anchor" onClick={() => toLogout()}>
                        Sair
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
