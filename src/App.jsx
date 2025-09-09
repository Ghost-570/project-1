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
		<>
			<h1>This is the way!!</h1>
			<div className="card-container">
				<Card title="Jackie" rating={9} isCool={true} />
				<Card title="Panam" rating={11} />
				<Card title="Judy" rating={8} />
				<Card title="David" rating={9} />
				<Card title="Lucy" rating={10} />
			</div>
			<p class="light">This is light text.</p>
			<p class="regular">This is regular text.</p>
			<p class="medium">This is medium text.</p>
			<p class="bold">This is bold text.</p>
			<p class="extra-bold">This is extra bold text.</p>
		</>
	);
};

export default App;
