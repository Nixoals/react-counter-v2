import Counter from './Counter';

import { useState } from 'react';

const AddCounter = () => {
	const [counterTemplate, setCounterTemplate] = useState([{ counter: 0 }]);

	const handleCounter = () => {
		if (counterTemplate.length > 2) {
			return alert('Max counter Reached');
		}
		const newTemplate = [...counterTemplate];
		newTemplate.push({ counter: 0 });
		return setCounterTemplate(newTemplate);
	};
	return (
		<>
			<div className="add-counter">
				<button
					onClick={() => {
						handleCounter();
					}}
				>
					Add counter
				</button>
			</div>
			<section className="counters-container">
				{counterTemplate.map((counter, index) => {
					return <Counter key={index} counter={counter}></Counter>;
				})}
			</section>
		</>
	);
};

export default AddCounter;
