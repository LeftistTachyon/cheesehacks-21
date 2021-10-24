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

Amplify.configure(awsExports);

function EditDay(): JSX.Element {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		Auth.currentUserInfo()
			.then((user) => {
				console.log("user: ", user);
				const dbUser = database.getUser(user.username);
				const toDay = DateTime.now().startOf("day");
				const dbDay = dbUser.getDay(toDay);
				setTasks(dbDay.tasks);
			})
			.catch((_err) => setTasks([]));
	}, []);

	function addTask(_e) {
		tasks.push({
			movable: true,
			name: "New Task",
			duration: Duration.fromObject({ hours: 1 }),
		});
		console.log("addTask ", tasks);
	}
	function addMeeting(_e) {
		tasks.push({
			movable: false,
			name: "New Meeting",
			startTime: DateTime.now(),
			endTime: DateTime.now().plus(Duration.fromObject({ hours: 1 })),
		});
		console.log("addMeeting ", tasks);
	}

	return (
		<Container>
			<ContainerInside>
				<Flex justifyItems="stretch">
					<Box py={30}>
						<Heading as="h1">Your tasks:</Heading>
						<Box my={7}>
							{tasks.map((task) => {
								console.log(task);
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
							<Button onClick={addMeeting}>Add a meeting</Button>
						</HStack>
					</Box>
					<Spacer />
					<Sidepanel tasks={tasks} editable={true} isToday={true} />
				</Flex>
			</ContainerInside>
		</Container>
	);
}

export default withAuthenticator(EditDay);
