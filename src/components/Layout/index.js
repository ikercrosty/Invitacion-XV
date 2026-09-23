import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/arin-miftah-favicon.png';
//import IMAGE_URL from '@assets/images/khitbahmeta.jpg';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://miftahussalam.com/images/khitbahmeta.jpg`;
const META_DESCRIPTION = `Te invitamos a celebrar los XV años de Karla Gabriela. Agradecemos tu presencia y cariño en este día tan especial.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Karla Gabriela - XV Años</title>

        <link rel="icon" type="image/png" href={Favicon} />

        <meta property="og:title" content="Karla Gabriela - XV Años" />
        <meta property="og:image" itemprop="image" content={IMAGE_URL} />
        <meta property="og:url" content="https://arin.miftahussalam.com" />
        <meta property="og:site_name" content="Karla Gabriela - XV Años" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Karla Gabriela - XV Años" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://arin.miftahussalam.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@mif_salam" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
