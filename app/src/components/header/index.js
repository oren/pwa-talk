import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>My Little Pony</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Checkout</Link>
					<Link activeClassName={style.active} href="/profile/john">Logout</Link>
				</nav>
			</header>
		);
	}
}
