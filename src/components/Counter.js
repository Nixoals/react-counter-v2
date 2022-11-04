import { useState } from 'react';

const Counter = (props) => {
	const [counter, setCounter] = useState(props.counter.counter);

	return (
		<>
			<section className="counter-wrapper">
				<div className="counter">
					<button
						disabled={counter < 1 ? true : false}
						onClick={() => {
							setCounter(counter - 1);
						}}
					>
						<ion-icon className="main-icon" name="remove-outline"></ion-icon>
					</button>
					<div>{counter}</div>
					<button
						disabled={counter > 9 ? true : false}
						onClick={() => {
							setCounter(counter + 1);
						}}
					>
						<ion-icon className="main-icon" name="add-outline"></ion-icon>
					</button>
				</div>
				<div className="reset-button">
					<button
						onClick={() => {
							setCounter(0);
						}}
					>
						Reset
					</button>
				</div>
			</section>
		</>
	);
};

export default Counter;
