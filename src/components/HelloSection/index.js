import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-arin.jpg';
import Groom from '@assets/images/p-miftah.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
	const finalSubtitle = 'sábado, 3 de octubre de 2026';

	return (
		<Fragment>
			<div id="fh5co-couple" css={styWrapper}>
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
							<h2 className="main-font">Hola</h2>
							<h3 className="sub-title hs">{finalSubtitle}</h3>
							<p className="info">
								Con alegría y gratitud, compartimos este momento especial con ustedes. Agradecemos su presencia y
								cariño para celebrar junto a nosotros este día tan importante.
							</p>
						</div>
					</div>
					<div className="couple-wrap">
						<div className="couple-half">
							<div className="groom">
								<img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
							</div>
							<div className="desc-groom">
								<h3 className="main-font">Karla Gabriela</h3>
								<p className="parent-name parent-name__top">
									Hija de sus padres
								</p>
							</div>
						</div>
						<p className="heart text-center">
							<i className="icon-heart2"></i>
						</p>
						<div className="and-love">
							<i>&</i>
						</div>
						<div className="couple-half">
							<div className="bride">
								<img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
							</div>
							<div className="desc-bride">
								<h3 className="main-font">Ambrosio Raúl</h3>
								<p className="parent-name">
									Hijo de sus padres
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

HelloSection.propTypes = {
	isInvitation: bool.isRequired,
};

export default HelloSection;
