import React from 'react';
import { object, string, bool, func } from 'prop-types';

import { styHero, styBackground } from './styles';

function WelcomeSection({ guestName, isInvitation, isAnonymGuest, location, codeLink, onClickDetail }) {
  const inviteName = guestName || 'Invitado';

  return (
    <div css={styHero}>
      <header id="fh5co-header" role="banner" className="fh5co-cover" css={styBackground}>
        <div className="invitation-card">
          <div className="ornament ornament-top" aria-hidden="true" />
          <div className="ornament ornament-bottom" aria-hidden="true" />

          <p className="invitation-copy">
            Hay momentos inolvidables que se atesoran en el corazón para siempre, con esta razón quiero que
            compartas conmigo este día especial.
          </p>

          <div className="invitation-names">
            <span>Karla Gabriela</span>
            <span className="and-sign">&amp;</span>
            <span>Ambrosio Raul</span>
          </div>

          <div className="invitation-years">20 Años</div>

          <div className="invitation-date">3 DE OCTUBRE 2026 A LAS 6:00 PM</div>

          <div className="invitation-confirmation">
            <span className="quote">“CONFIRMA</span>
            <span className="quote">TU</span>
            <span className="quote">ASISTENCIA”</span>
            <span className="phone">4230-5629</span>
          </div>

          <div className="invitation-location">
            SALÓN COMUNAL COL.NUEVA VIDA, LO DE COY, ZONA 1 MIXCO
          </div>

          {isInvitation && (
            <div className="invitation-guest">
              {inviteName}
            </div>
          )}

          {!isInvitation && !isAnonymGuest && (
            <div className="invitation-guest">{inviteName}</div>
          )}
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object,
  codeLink: string,
  onClickDetail: func,
};

WelcomeSection.defaultProps = {
  guestName: '',
  location: {},
  codeLink: '',
  onClickDetail: () => undefined,
};

export default WelcomeSection;
