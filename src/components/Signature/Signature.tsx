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
					
					<div className="signature__content__right__quote">
						<p className="signature__content__right__quote__original">audentes fortuna iuvat</p>
						<p className="signature__content__right__quote__english">fortune favors the bold</p>
					</div>

					<p className="signature__content__right__closeQuoteMark">“</p>
					
					<p className="signature__content__right__email">
						<a href="mailto:gabrieljimenezux@gmail.com">
							gabrieljimenezux@gmail.com
						</a>
					</p>
				</div>
			</div>

			<div className="signature__footer">
				<div className='signature__footer__left'>
					<a href="https://www.instagram.com/gabrieldjimenez/" target="_blank">
						{IconFactory.instagramIcon()}
					</a>
					<a href="https://www.linkedin.com/in/gabriel-david-jim%C3%A9nez-4a15a0109/" target="_blank">
						{IconFactory.linkedInIcon({ className: 'signature__footer__left__linkedIn' })}
					</a>
					<a href="https://www.behance.net/gabrieljimnez26" target="_blank">
						{IconFactory.behanceIcon({ className: 'signature__footer__left__behance' })}
					</a>
					<a href="https://dribbble.com/YayielUX" target="_blank">
						{IconFactory.dribbbleIcon()}
					</a>
				</div>

				<div className='signature__footer__right'>
					<a href="https://wa.me/584141020099" target="_blank">
						{IconFactory.whatsappIcon()}
					</a>
					<a href="https://t.me/GabrielJimenezF" target="_blank">
						{IconFactory.telegramIcon({ className: 'signature__footer__right__telegram' })}
					</a>
				</div>
			</div>
		</section>
	)
}