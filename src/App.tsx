import Section from './components/site/Section'
import Container from './components/site/Container'
import Layout from './components/site/Layout'
function App() {
	return (
		<Layout>
			<Container title="Component name" description="Component description">
				<Section title="Section heading" description="Section description text">
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 1</div>
				</Section>

				<Section title="Section heading" description="Section description text">
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 1</div>
				</Section>
			</Container>

			<Container title="Component name" description="Component description">
				<Section title="Section heading" description="Section description text">
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 1</div>
				</Section>

				<Section title="Section heading" description="Section description text">
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 1</div>
				</Section>
			</Container>
			<Container title="Component name" description="Component description">
				<Section title="Section heading" description="Section description text">
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 1</div>
				</Section>

				<Section title="Section heading" description="Section description text">
					<div className="bg-blue-500/50 p-3">Component 1</div>
					<div className="bg-blue-500/50 p-3">Component 1</div>
				</Section>
			</Container>
		</Layout>
	)
}

export default App
