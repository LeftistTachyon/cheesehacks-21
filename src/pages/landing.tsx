import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import {
	Flex,
	Heading,
	Box,
	Spacer,
	Center,
	Text,
	Link,
	Button,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Sidepanel from "@components/sidepanel";
import awsExports from "@utils/aws-exports";
import { database } from "api/db";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

Amplify.configure(awsExports);

function Landing(): JSX.Element {
	const [user, setUser] = useState(null);
	useEffect(() => {
		Auth.currentUserInfo()
			.then((user) => {
				console.log("user: ", user);
				setUser(user);
			})
			.catch((_err) => setUser(null));
	}, []);

	if (user) {
		// stateless items
		const dbUser = database.getUser(user.username);
		const toDay = DateTime.now().startOf("day");
		const dbDay = dbUser.getDay(toDay);

		return (
			<Container>
				<ContainerInside>
					<Flex justifyItems="stretch">
						<Center>
							<Box my={5}>
								<Heading>
									Welcome back, {user.username}!
								</Heading>
								<Text mt={3} mb={7}>
									Here's to another productive day!
								</Text>
								<Link href="/editDay">
									<Button>Edit my day</Button>
								</Link>
							</Box>
						</Center>
						<Spacer />
						<Sidepanel
							tasks={dbDay.tasks}
							editable={false}
							isToday={true}
						/>
					</Flex>
				</ContainerInside>
			</Container>
		);
	} else return <></>;
	// return <></>;
}
/*
{
  "id": "us-east-2:1583aa82-860c-4ded-9fcd-f021c79313de",
  "username": "guiedgui",
  "attributes": {
    "sub": "a4a9bc48-33a1-4630-a5a0-400e6c66fd18",
    "email_verified": true,
    "phone_number_verified": false,
    "phone_number": "+12345678910",
    "email": "email@email.edu"
  }
}
*/

export default withAuthenticator(Landing);
