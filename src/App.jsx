// REMINDER - Take it LIVE! Publish it on the INTERWEBZ :)
import './App.css';

const Card = ({ title }) => {
	return (
		<div className="card">
			<h2>{title}</h2>
		</div>
	);
};

const App = () => {
	return (
		<div className="card-container">
			<Card title="Jackie" rating={9} isCool={true} />
			<Card title="Panam" rating={11} />
			<Card title="Judy" rating={7} />
			<Card title="Lucy" rating={6} />
			<Card title="David" rating={7} />
		</div>
	);
};

export default App;
