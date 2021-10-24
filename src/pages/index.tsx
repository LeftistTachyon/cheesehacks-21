import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Heading, Center, Flex, Text, Link, VStack } from "@chakra-ui/layout";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Homepage(): JSX.Element {
	return (
		<>
			<Container bgImage="/background.png" bgSize="cover">
				<ContainerInside>
					<Center p={200} color="brand.primary">
						<Heading as="h1" size="3xl">
							Power through your day!
						</Heading>
					</Center>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside py={10}>
					<Flex alignItems="center">
						<Image src="/logo.png" flex={1} />
						<Text textAlign="center" flex={2}>
							<b>Need an easy way to sort our your day?</b>
							<br />
							We can help you organize your day-to-day tasks!
							<br />
							Easily differentiate between your commitments and
							your TODO list.
						</Text>
					</Flex>
				</ContainerInside>
			</Container>
			<Container bg="brand.secondary" mb={10}>
				<ContainerInside py={20}>
					<VStack spacing={5}>
						<Heading as="h1" size="2xl" color="brand.primary">
							SIGN UP TODAY!
						</Heading>
						<Link href="/landing">
							<Button>Click here!</Button>
						</Link>
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}
