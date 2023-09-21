import { Experience } from '../../components/Experience/Experience';
import { Header } from '../../components/Header/Header';
import { Portfolio } from '../../components/Portfolio/Portfolio';
import { Profile } from '../../components/Profile/Profile';
import { Signature } from '../../components/Signature/Signature';
import { Skills } from '../../components/Skills/Skills';
import './Home.scss';

export const HomePage = (): JSX.Element => {

	return (
		<div className="homePage">
			
			<div id='profile' className="homePage__profile">
				<Profile />
				<Portfolio />
			</div>

			<div id='experience' className="homePage__experience">
				<Experience />
			</div>

			<div id='skills' className="homePage__skills">
				<Skills />
			</div>

			<div id='contact' className="homePage__signature">
				<Signature />
			</div>
		</div>
	)
}