import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Flex, Spacer } from "@chakra-ui/layout";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Sidepanel from "@components/sidepanel";
import awsExports from "@utils/aws-exports";
import { database } from "api/db";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";

Amplify.configure(awsExports);

function EditDay(): JSX.Element {
	const [user, setUser] = useState(null);
	useEffect(() => {
		Auth.currentUserInfo()
			.then((user) => {
				console.log("user: ", user);
				setUser(user);
			})
			.catch((_err) => setUser(null));
	}, []);

	const dbUser = database.getUser(user.username);
	const toDay = DateTime.now().startOf("day");
	const dbDay = dbUser.getDay(toDay);

	return user ? (
		<Container>
			<ContainerInside>
				<Flex justifyItems="stretch">
					<Spacer />
					<Sidepanel
						tasks={dbDay.tasks}
						editable={false}
						isToday={true}
					/>
				</Flex>
			</ContainerInside>
		</Container>
	) : (
		<></>
	);
}

export default withAuthenticator(EditDay);
