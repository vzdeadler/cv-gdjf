import { IconFactory } from '../../factories/icon.factory';
import './Profile.scss';

export const Profile = (): JSX.Element => {

	return (
		<section className="profile">
			<div className="profile__imageContainer">
				<div className="profile__imageContainer__clip"></div>
				<div className="profile__imageContainer__image" />
			</div>

			<div className="profile__info">
				<h1 className="profile__info__name">Gabriel David Jiménez</h1>
				<p className="profile__info__jobProfile">Community Manager - UI/UX Junior Designer</p>

				<h2 className="profile__info__subtitle">About me</h2>

				<div className="profile__info__socials">
					<a href="https://www.instagram.com/gabrieldjimenez/" target="_blank">
						{IconFactory.instagramIcon()}
					</a>
					<a href="https://www.linkedin.com/in/gabriel-david-jim%C3%A9nez-4a15a0109/" target="_blank">
						{IconFactory.linkedInIcon({ className: 'profile__info__socials__linkedIn' })}
					</a>
					<a href="https://www.behance.net/gabrieljimnez26" target="_blank">
						{IconFactory.behanceIcon()}
					</a>
					<a href="https://dribbble.com/YayielUX" target="_blank">
						{IconFactory.dribbbleIcon()}
					</a>
				</div>

				<p className="profile__info__description">
					I am a highly motivated and results-driven professional with a passion for learning and growth. 
					Experienced professional with a background in  journalism and inclined to problem-solving. 
					Skilled in collaborating with cross-functional teams to deliver quality results on time and within budget. 
					Ability to adapt quickly to new challenges and technologies, and thrive in fast-paced environments. 
					Always looking for challenges to expand my knowledge.
				</p>
			</div>
		</section>
	)
}