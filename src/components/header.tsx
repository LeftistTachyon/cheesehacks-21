import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";

export default function Header(): JSX.Element {
	return (
		<>
			<Container
				position="fixed"
				w="100%"
				backdropFilter="blur(5px)"
				bg="#2C922DEE"
			>
				<ContainerInside>
					<Flex
						color="brand.tertiary"
						px={12}
						py={4}
						flexDir={{ base: "column", md: "row" }}
						alignItems="center"
					>
						<>
							<Link href="/">
								<Heading as="h3" size="md">
									Planit
								</Heading>
							</Link>
						</>
						<Spacer />
						<Link href="/login">Login | Sign Up</Link>
					</Flex>
				</ContainerInside>
			</Container>
			<Box h={{ base: "80px", md: "56px" }}></Box>
		</>
	);
}
