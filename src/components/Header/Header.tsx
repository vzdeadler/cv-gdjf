import './Header.scss';

export const Header = (): JSX.Element => {

	const HEADER_ITEMS = [
		{ name: 'Home', link: '#' },
		{ name: 'Portfolio', link: '#' },
		{ name: 'Education & Experience', link: '#' },
		{ name: 'Skills', link: '#' },
		{ name: 'Contact', link: '#' }
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

				<button className="header__nav__download">
					Download Resume
				</button>
			</nav>
		</div>
	)
}