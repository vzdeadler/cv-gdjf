import { IconFactory } from '../../factories/icon.factory';
import { Asset } from '../../utils/Asset';
import './Portfolio.scss';

export const Portfolio = (): JSX.Element => {

	return (
		<section className="portfolio">
			<h2 className="portfolio__subtitle">Portfolio</h2>
			<h3 className="portfolio__sectionTitle">User Interface</h3>

			<div className="portfolio__uiSection">
				<div className="portfolio__uiSection__firstRow">
					<a href="https://www.behance.net/gallery/170705827/Movie-Ticket-App-The-Batman" target="_blank">
						<img src={Asset.BATMAN_PROJECT} />
					</a>
					<a href="https://www.behance.net/gallery/170705737/Crypto-App-CoinFlip" target="_blank">
						<img src={Asset.COIN_PROJECT} />
					</a>
					<a href="https://www.behance.net/gallery/170705641/Landing-Page-Design-Gym-Unlimited" target="_blank">
						<img src={Asset.GYM_PROJECT} />
					</a>
				</div>

				<div className="portfolio__uiSection__secondRow">
					<a href="https://www.behance.net/gallery/170705905/Landing-Animated-Page-Fauxica-Appareal" target="_blank">
						<img src={Asset.FAUXICA_PROJECT} />
					</a>
					<a href="https://www.behance.net/gallery/180865233/Keago-Project-I-Research" target="_blank">
						<img src={Asset.KEAGO_PROJECT} />
					</a>
				</div>

				<div className="portfolio__uiSection__thirdRow">
					<a href="https://www.behance.net/gallery/170705641/Landing-Page-Design-Gym-Unlimited" target="_blank">
						<img src={Asset.GYM_PROJECT} />
					</a>
					<a href="https://www.behance.net/gallery/180865233/Keago-Project-I-Research" target="_blank">
						<img src={Asset.KEAGO_PROJECT} />
					</a>
				</div>
			</div>

			<h3 className="portfolio__sectionTitle portfolio__sectionTitle--cm">Community Manager</h3>

			<div className="portfolio__cmSection">
				<a href="https://www.behance.net/gallery/181391853/Doctor-Sonrisa-Community-Management" target="_blank">
					<h3>@doctorsonrisaoficial</h3>
					<img src={Asset.SONRISA_PROJECT} />
				</a>
				<a href="https://www.behance.net/gallery/181456755/Linguademy-Community-Management" target="_blank">
					<h3>@linguademy_es</h3>
					<img src={Asset.LINGUADEMY_PROJECT} />
				</a>
			</div>

			<a className="portfolio__seeMore" href="https://www.behance.net/gabrieljimnez26" target="_blank">
				More on behance
				{IconFactory.rightIcon()}
			</a>
		</section>
	)
}