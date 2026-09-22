import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Ceremonia y celebración</h2>
              <span className="sub-title sub-title__wedding">Será el día:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Ceremonia"
                time="6:00 PM"
                date="Sábado, 3 de octubre de 2026"
                description="Salón Comunal Col. Nueva Vida, Lo de Coy, Zona 1, Mixco"
              />
              <WeddingInfoBox
                title="Recepción"
                time="6:00 PM - 12:00 AM"
                date="Sábado, 3 de octubre de 2026"
                description="Salón Comunal Col. Nueva Vida, Lo de Coy, Zona 1, Mixco"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
