import Amplify from "@aws-amplify/core";
import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";
import awsExports from "@utils/aws-exports";
import { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";

Amplify.configure(awsExports);

export default function Header(): JSX.Element {
	const [user, setUser] = useState(null);
	useEffect(() => {
		Auth.currentUserInfo()
			.then((user) => {
				console.log("user: ", user);
				setUser(user);
			})
			.catch((err) => setUser(null));
	}, []);

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
						<Link href="/landing">
							{user ? "Dashboard" : "Login"}
						</Link>
					</Flex>
				</ContainerInside>
			</Container>
			<Box h={{ base: "80px", md: "56px" }}>{JSON.stringify(user)}</Box>
		</>
	);
}
