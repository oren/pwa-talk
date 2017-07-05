import { h, Component } from "preact"
import Range from "rc-slider/lib/Range"
import "rc-slider/assets/index.css"
import style from "./style"
import IconMinus from "../icons/minus"
import IconPlus from "../icons/plus"

export default class ClinicHours extends Component {
	render() {
		return (
			<div class={style.page}>
				<h1 class={style.header}>Operating Hours</h1>
				<Sliders day="Monday" />
				<Sliders day="Tuesday" />
				<Sliders day="Wednesday" />
				<Sliders day="Thursday" />
				<Sliders day="Friday" />
				<Sliders day="Saturday" />
				<Sliders day="Sunday" />
			</div>
		)
	}
}

class Sliders extends Component {
	constructor(props) {
		super(props)
		this.state = {
			min: 0,
			max: 47,
			slot1: { from: 16, to: 24 },
			slot2: { from: 26, to: 30 },
			slot3: { from: 32, to: 40 },
			minus: true,
			plus: false,
			closed: false
		}
	}

	componentDidMount() {}

	onSlider1Change = value => {
		this.setState({ slot1: { from: value[0], to: value[1] } })
	}

	onSlider2Change = value => {
		this.setState({ slot2: { from: value[0], to: value[1] } })
	}

	onSlider3Change = value => {
		this.setState({ slot3: { from: value[0], to: value[1] } })
	}

	handleMinus = event => {
		if (this.state.slot3) {
			this.setState({
				slot3: null,
				minus: true,
				plus: true,
				closed: false
			})
		} else if (this.state.slot2) {
			this.setState({
				slot2: null,
				minus: true,
				plus: true,
				closed: false
			})
		} else if (this.state.slot1) {
			this.setState({
				slot1: null,
				minus: false,
				plus: true,
				closed: true
			})
		}
	}

	handlePlus = event => {
		if (this.state.slot2) {
			this.setState({
				slot3: { from: 32, to: 40 },
				plus: false,
				minus: true,
				closed: false
			})
		} else if (this.state.slot1) {
			this.setState({
				slot2: { from: 26, to: 30 },
				plus: true,
				minus: true,
				closed: false
			})
		} else {
			this.setState({
				slot1: { from: 16, to: 24 },
				minus: true,
				plus: true,
				closed: false
			})
		}
	}

	render({}, {}) {
		return (
			<div class={style.slider}>
				<div class={style.summary}>
					<h2 class={style.day}>{this.props.day}</h2>
					<div class={style.timeWrap}>
						{this.state.slot1 &&
							<div class={style.time}>
								{addAmOrPm(this.state.slot1.from)} -{" "}
								{addAmOrPm(this.state.slot1.to)}
							</div>}

						{this.state.slot2 &&
							<div class={style.time}>
								{addAmOrPm(this.state.slot2.from)} -{" "}
								{addAmOrPm(this.state.slot2.to)}
							</div>}

						{this.state.slot3 &&
							<div class={style.time}>
								{addAmOrPm(this.state.slot3.from)} -{" "}
								{addAmOrPm(this.state.slot3.to)}
							</div>}
						{this.state.closed &&
							<div class={style.closed}>
								Closed
							</div>}
					</div>
				</div>

				<div class={style.ranges}>
					{this.state.slot1 &&
						<Range
							defaultValue={[this.state.slot1.from, this.state.slot1.to]}
							min={this.state.min}
							max={this.state.max}
							onChange={this.onSlider1Change}
							pushable
							allowCross={false}
							marks={{ 0: "12am", 16: "8am", 32: "4pm", 46: "11pm" }}
							class={style.range}
						/>}
					{this.state.slot2 &&
						<Range
							defaultValue={[this.state.slot2.from, this.state.slot2.to]}
							min={this.state.min}
							max={this.state.max}
							onChange={this.onSlider2Change}
							pushable
							allowCross={false}
							marks={{ 0: "12am", 16: "8am", 32: "4pm", 46: "11pm" }}
							class={style.range}
						/>}
					{this.state.slot3 &&
						<Range
							class={style.range}
							defaultValue={[this.state.slot3.from, this.state.slot3.to]}
							min={this.state.min}
							max={this.state.max}
							onChange={this.onSlider3Change}
							pushable
							allowCross={false}
							marks={{ 0: "12am", 16: "8am", 32: "4pm", 46: "11pm" }}
							class={style.range}
						/>}
					{this.state.minus &&
						<div class={style.action} onClick={this.handleMinus}>
							<IconMinus size="24" class={style.minus} />
						</div>}
					{this.state.plus &&
						<div class={style.action} onClick={this.handlePlus}>
							<IconPlus size="24" class={style.plus} />
						</div>}
					<div class={style.clear} />
				</div>

			</div>
		)
	}
}

// Get number from slider as string: "35" (0-47)
// return time: 5:30pm
const addAmOrPm = time => {
	let hour = Math.floor(Number(time) / 2)

	if (hour > 11) {
		if (hour > 12) {
			hour = hour - 12
		}

		if (Number(time) % 2 === 1) {
			hour += ":30"
		} else {
			// hour += ":00"
		}

		return `${hour}pm`
	}

	if (hour === 0) {
		hour = 12
	}

	if (Number(time) % 2 === 1) {
		hour += ":30"
	} else {
		// hour += ":00"
	}

	return `${hour}am`
}
