import { IconFactory } from '../../factories/icon.factory';
import { Asset } from '../../utils/Asset';
import './Signature.scss';

export const Signature = (): JSX.Element => {

	return (
		<section className="signature">
			<div className="signature__content">
				<div className="signature__content__left">
					<img src={Asset.SIGNATURE_PICTURE} />
				</div>

				<div className="signature__content__right">
					<h2>Gabriel David Jiménez</h2>
					<p className="signature__content__right__jobPosition">Community Manager - UI/UX Junior Designer</p>
					<p className="signature__content__right__openingQuoteMark">“</p>
					<p className="signature__content__right__quote">audentes fortuna iuvat</p>
					<p className="signature__content__right__englishQuote">fortune favors the bold</p>
					<p className="signature__content__right__closeQuoteMark">“</p>

					<p className="signature__content__right__email">gabrieljimenezux@gmail.com</p>
				</div>
			</div>

			<div className="signature__footer">
				<div className='signature__footer__left'>
					{IconFactory.instagramIcon()}
					{IconFactory.linkedInIcon({ className: 'signature__footer__left__linkedIn' })}
					{IconFactory.behanceIcon({ className: 'signature__footer__left__behance' })}
				</div>

				<div className='signature__footer__right'>
					{IconFactory.whatsappIcon()}
					{IconFactory.telegramIcon({ className: 'signature__footer__right__telegram' })}
				</div>
			</div>
		</section>
	)
}