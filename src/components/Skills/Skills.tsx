import { IconFactory } from '../../factories/icon.factory';
import './Skills.scss';

export const Skills = (): JSX.Element => {

	return (
		<section className="skills">
			<div className="skills__content">
				<h2 className="skills__content__title">Skills</h2>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Community Management
					</h3>

					<p className="skills__content__item__description">
						Proficient in cultivating and nurturing vibrant online communities through effective
						communication, conflict resolution, and content curation. I’m a content creator for
						the following social media platforms:
					</p>

					<ul className="skills__content__item__list">
						<li className="skills__content__item__list__listItem">
							{IconFactory.instagramIcon()}
							<p>Instagram</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.ytIcon()}
							<p>Youtube</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.twitterIcon()}
							<p>Twitter</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.tiktokIcon()}
							<p>TikTok</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.fbIcon()}
							<p>Facebook</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.linkedInIcon()}
							<p>LinkedIn</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.dcIcon()}
							<p>Discord</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.threadsIcon()}
							<p>Threads</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.snapchatIcon()}
							<p>Snapchat</p>
						</li>

						<li className="skills__content__item__list__listItem">
							{IconFactory.pinterestIcon()}
							<p>Pinterest</p>
						</li>
					</ul>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Photography
					</h3>

					<p className="skills__content__item__description">
						Skilled in capturing compelling images that convey powerful narratives. 
						Proficient in using photography as a medium to evoke emotions and engage viewers.
					</p>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Teaching & Pedagogy
					</h3>

					<p className="skills__content__item__description">
						Experienced in designing and delivering effective educational content, catering to diverse learning styles. 
						Adept at creating engaging lesson plans and fostering an inclusive and supportive learning environment.
					</p>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Writing & Content Creation
					</h3>

					<p className="skills__content__item__description">
						Strong writing abilities encompassing blog posts, articles, social media content, and marketing copy. 
						Capable of crafting captivating stories and conveying ideas with clarity and creativity, both in Spanish and English.
					</p>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Communication & Interpersonal Skills
					</h3>

					<p className="skills__content__item__description">
						Exceptional verbal and written communication skills, allowing for effective engagement with diverse audiences, 
						stakeholders, and team members. Proven ability to listen, empathize, and respond thoughtfully to inquiries and feedback.
					</p>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Audiovisual Production & Editing
					</h3>

					<p className="skills__content__item__description">
						Proficient in creating high-quality audiovisual content, including videos, podcasts, 
						and multimedia presentations. Skilled in video editing, sound design, and post-production processes.
					</p>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						SEO & Digital Marketing
					</h3>

					<p className="skills__content__item__description">
						Experienced in devising and implementing effective Searching Engine Optimization (SEO) strategies to improve 
						website visibility and organic search rankings. Skilled in leveraging digital marketing channels to 
						enhance brand awareness, engage audiences, and achieve business objectives.
					</p>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Languages
					</h3>

					<p className="skills__content__item__description">
						Native-level fluency in English (C2) with exceptional language skills, both written and verbal. 
						Able to communicate confidently and effectively with diverse audiences, and adept at creating engaging 
						and polished content in English. Additionally, proficient in Russian (B1) with the ability to 
						understand and communicate in various everyday situations. Continuously working to further improve 
						language skills and cultural understanding.
					</p>
				</div>

				<div className="skills__content__item">
					<h3 className="skills__content__item__subtitle">
						{IconFactory.checkIcon()}
						Proficient in Software Tools
					</h3>

					<p className="skills__content__item__description">
						Experienced in effectively utilizing a diverse range of software tools, including [LIST SPECEFIC SOFTWARE NAMES], 
						to streamline workflow, optimize productivity, and achieve project objectives. Skilled in leveraging these tools 
						to enhance data analysis, content creation, project management, and other essential tasks.
					</p>
				</div>
			</div>
		</section>
	)
}