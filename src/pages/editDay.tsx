import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/layout";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Sidepanel from "@components/sidepanel";
import awsExports from "@utils/aws-exports";
import { database } from "api/db";
import { useState, useEffect } from "react";
import { DateTime, Duration } from "luxon";
import TaskCard from "@components/task";
import { Button } from "@chakra-ui/button";
import { useForceUpdate } from "@chakra-ui/hooks";

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

	if (user) {
		const dbUser = database.getUser(user.username);
		const toDay = DateTime.now().startOf("day");
		const dbDay = dbUser.getDay(toDay);

		function addTask(_e) {
			dbDay.addTask({
				movable: true,
				name: "New Task",
				duration: Duration.fromObject({ hours: 1 }),
			});
			console.log(dbDay.tasks);
		}
		function addMeeting(_e) {
			dbDay.addTask({
				movable: false,
				name: "New Meeting",
				startTime: DateTime.now(),
				endTime: DateTime.now().plus(Duration.fromObject({ hours: 1 })),
			});
			console.log(dbDay.tasks);
		}

		return (
			<Container>
				<ContainerInside>
					<Flex justifyItems="stretch">
						<Box py={30}>
							<Heading as="h1">Your tasks:</Heading>
							<Box my={7}>
								{dbDay.tasks.map((task) => {
									return task.movable && !task.startTime ? (
										<TaskCard
											task={task}
											onDelete={() => alert("Deleted!")}
											editable={true}
										/>
									) : null;
								})}
							</Box>
							<HStack spacing={5}>
								<Button onClick={addTask}>Add a task</Button>
								<Button onClick={addMeeting}>
									Add a meeting
								</Button>
							</HStack>
						</Box>
						<Spacer />
						<Sidepanel
							tasks={dbDay.tasks}
							editable={true}
							isToday={true}
						/>
					</Flex>
				</ContainerInside>
			</Container>
		);
	} else return <></>;
}

export default withAuthenticator(EditDay);
