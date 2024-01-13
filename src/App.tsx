import Section from './components/site/Section'
import Container from './components/site/Container'
import Layout from './components/site/Layout'
import Button from './components/library/Button'
function App() {
	return (
		<Layout>
			<Container
				title="Button"
				description="A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
			>
				<Section
					title="Primary"
					description="Primary action should be obvious. Solid, high-contrast background colors work great here."
				>
					<Button>Default</Button>
					<Button disabled>Disabled</Button>
				</Section>

				<Section
					title="Secondary"
					description="Secondary action should be clear but not prominent. Outline styles or lower-contrast background colors are great options"
				>
					<Button variant="secondary">Default</Button>
					<Button variant="secondary" disabled>
						Disabled
					</Button>
				</Section>

				<Section
					title="Tertiary"
					description="Tertiary action should be discoverable but unobtrusive. Styling these actions like links is usually the best approach."
				>
					<Button variant="tertiary">Tertiary</Button>

					<Button variant="tertiary" disabled>
						Disabled
					</Button>
				</Section>
				<Section
					title="Destructive"
					description="Destructive actions typically result in the removal of an item and may result in an undesirable consequence."
				>
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
