import { Asset } from '../../utils/Asset';
import './Portfolio.scss';

export const Portfolio = (): JSX.Element => {

	return (
		<section className="portfolio">
			<h2 className="portfolio__subtitle">Portfolio</h2>
			<h3 className="portfolio__sectionTitle">User Interface</h3>

			<div className="portfolio__uiSection">
				<div className="portfolio__uiSection__firstRow">
					<img src={Asset.BATMAN_PROJECT} />
					<img src={Asset.COIN_PROJECT} />
					<img src={Asset.GYM_PROJECT} />
				</div>

				<div className="portfolio__uiSection__secondRow">
					<img src={Asset.FAUXICA_PROJECT} />
					<img src={Asset.TWO_COIN_PROJECT} />
				</div>

				<div className="portfolio__uiSection__thirdRow">
					<img src={Asset.GYM_PROJECT} />
					<img src={Asset.TWO_COIN_PROJECT} />
				</div>
			</div>

			<h3 className="portfolio__sectionTitle portfolio__sectionTitle--cm">Community Manager</h3>

			<div className="portfolio__cmSection">
				<img src={Asset.SONRISA_PROJECT} />
				<img src={Asset.LINGUADEMY_PROJECT} />
			</div>
		</section>
	)
}