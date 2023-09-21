import { Asset } from '../../utils/Asset';
import './Header.scss';

export const Header = (): JSX.Element => {

	const HEADER_ITEMS = [
		{ name: 'Home', link: '#' },
		{ name: 'Portfolio', link: '#profile' },
		{ name: 'Education & Experience', link: '#experience' },
		{ name: 'Skills', link: '#skills' },
		{ name: 'Contact', link: '#contact' }
	]

	return (
		<div className="header">
			<nav className="header__nav">
				<ul className="header__nav__links">
					{
						HEADER_ITEMS.map((item) => {
							return (
								<li className="header__nav__links__item">
									<a href={item.link}>
										{item.name}
									</a>
								</li>
							)
						})
					}
				</ul>

				<div className="header__nav__mobileName">
					<h1>Gabriel David Jiménez</h1>
					<p>Community Manager - UI/UX Junior Designer</p>
				</div>

				<a
					className="header__nav__download"					
					href={Asset.CV}
					target="_blank"
				>
					<button>
						Download Resume
					</button>
				</a>
			</nav>
		</div>
	)
}