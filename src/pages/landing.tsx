import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Heading } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import TaskCard from "@components/task";
import awsExports from "@utils/aws-exports";
import { database, Task } from "api/db";
import { DateTime, Duration } from "luxon";
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

		const task: Task = {
			movable: true,
			name: "test",
			duration: Duration.fromObject({ hours: 2 }),
		};

		return (
			<Container>
				<ContainerInside>
					<Heading>{JSON.stringify(dbDay.day)}</Heading>
					<TaskCard task={task}>Send it</TaskCard>
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
