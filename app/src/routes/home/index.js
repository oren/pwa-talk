import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Ponies</h1>
          <div class={style.list}>
            <div>Rarity</div>
            <img src="https://mylittlepony.hasbro.com/images/pick_EG_fluttershy.png"></img>
          </div>
          <div class={style.list}>
            <div>Rainbow Dash</div>
            <img src="http://vignette3.wikia.nocookie.net/mlp/images/1/11/FANMADE_Rainbow_Dash_flying_2.png/revision/latest?cb=20131218193139"></img>
          </div>
			</div>
		);
	}
}
