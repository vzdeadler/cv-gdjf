import { IconFactory } from '../../factories/icon.factory';
import './Experience.scss';

export const Experience = (): JSX.Element => {

	return (
		<section className="experience">
			<div className="experience__section">
				<h2 className="experience__section__title">Education</h2>

				<ul className="experience__section__list">
					<li className="experience__section__list__item">
						{IconFactory.graduationCapIcon()}
						<div className="experience__section__list__item__content">							
							<h3 className="experience__section__list__item__content__title">Universidad Católica Santa Rosa</h3>
							<p className="experience__section__list__item__content__subtitle">2012 - 2018</p>
							<p className="experience__section__list__item__content__description">Bachelor in Communication - Audiovisuals specialization</p>
						</div>
					</li>

					<li className="experience__section__list__item">
						{IconFactory.graduationCapIcon()}
						<div className="experience__section__list__item__content">							
							<h3 className="experience__section__list__item__content__title">Colegio San Francisco de Sales (Salesianos)</h3>
							<p className="experience__section__list__item__content__subtitle">2006 - 2010</p>
							<p className="experience__section__list__item__content__description">Data processing specialization</p>
						</div>
					</li>
				</ul>

				<h2 className="experience__section__title">Experience</h2>

				<ul className="experience__section__list">
					<li className="experience__section__list__item">
						{IconFactory.briefcaseIcon({ className: 'briefcase' })}
						<div className="experience__section__list__item__content">							
							<h3 className="experience__section__list__item__content__title">Spanish / English teacher online</h3>
							<p className="experience__section__list__item__content__subtitle">Italki | 2019 - Present</p>
							<p className="experience__section__list__item__content__description">
								Worked as a Spanish teacher mainly for more than three years, using methods of teaching such as TPRS (Teaching Proficiency and Storytelling) 
								teaching more than 200 students and over 3500+ classes online.

								During my time as a teacher I managed two social media accounts to make my services known. 
								Both Linguademy and Spanish Language Club were projects that helped me getting a lot of new students from all over the world. 
								I was constantly designing new content and material for my classes of the social media.
							</p>
						</div>
					</li>

					<li className="experience__section__list__item">
						{IconFactory.briefcaseIcon({ className: 'briefcase' })}
						<div className="experience__section__list__item__content">							
							<h3 className="experience__section__list__item__content__title">English Teacher</h3>
							<p className="experience__section__list__item__content__subtitle">Loscher Language Institute | 2019</p>
							<p className="experience__section__list__item__content__description">
								Loscher Institute was my first experience as a teacher, handling groups of 6 people and more, using the Loscher method to teach English for teenagers and adults.
							</p>
						</div>
					</li>

					<li className="experience__section__list__item">
						{IconFactory.briefcaseIcon({ className: 'briefcase' })}
						<div className="experience__section__list__item__content">
							<h3 className="experience__section__list__item__content__title">Journalist, Content Producer and Community Manager</h3>
							<p className="experience__section__list__item__content__subtitle">Venezolana de Televisión (TV Channel) | 2018 - 2019</p>
							<p className="experience__section__list__item__content__description">
								I worked as a journalist and producer in Venezolana de Televisión, mainly creating content and producing it for the social media of this TV station. 
								I designed content, edited videos, wrote news, did field-work by interviewing the people on the street during many events, took photos for the website, 
								managed and designed content for social media, and traveled several places to cover events around the country.
							</p>
						</div>
					</li>

					<li className="experience__section__list__item">
						{IconFactory.briefcaseIcon({ className: 'briefcase' })}
						<div className="experience__section__list__item__content">
							<h3 className="experience__section__list__item__content__title">Community Manager and Social Marketing Coordinator</h3>
							<p className="experience__section__list__item__content__subtitle">Doctor Sonrisa Foundation | 2016 - 2018</p>
							<p className="experience__section__list__item__content__description">
								My main job in this institution was totally as a volunteer. The foundation’s mission is to bring joy and happiness to those at hospitals who are not having 
								such a great time. In plain words, I was a hospital clown. I worked there as Coordinator for Social Media, where I had the honor to run the image of the 
								foundation and create content for the media through videos, pictures and advertisements.
							</p>
						</div>
					</li>

					<li className="experience__section__list__item">
						{IconFactory.briefcaseIcon({ className: 'briefcase' })}
						<div className="experience__section__list__item__content">							
							<h3 className="experience__section__list__item__content__title">Public Relations & Community Manager</h3>
							<p className="experience__section__list__item__content__subtitle">National Statistic Institute (INE) | 2017</p>
							<p className="experience__section__list__item__content__description">
								I worked as a journalist inside the institute, posting news and keeping the institute updated in all areas of communication. I created videos, designed 
								content and managed it through the intern relations of the company.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}