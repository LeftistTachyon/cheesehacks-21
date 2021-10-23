import { Heading } from "@chakra-ui/layout";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Homepage(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Heading as="h1">Welcome to the homepage!</Heading>
				<Heading as="h3">We're still thinking of what to do...</Heading>
			</ContainerInside>
		</Container>
	);
}
