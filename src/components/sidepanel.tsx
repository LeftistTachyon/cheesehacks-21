import { Box, Flex } from "@chakra-ui/layout";
import { Task } from "api/db";
import MeetingCard from "./meeting";
import TaskCard from "./task";

export default function Sidepanel({
	tasks,
	isToday,
	editable,
}: {
	tasks: Task[];
	isToday: boolean;
	editable: boolean;
}): JSX.Element {
	const boxes = [];
	for (let i = 0; i < 12; i++) {
		boxes.push(
			<Box
				borderColor="brand.secondary"
				borderWidth={3}
				key={i}
				flex={1}
				minW={200}
			></Box>
		);
	}

	return (
		<Flex flexDir="column" my={10}>
			{boxes}
			{tasks.map((task) => {
				return task.movable ? (
					<TaskCard
						task={task}
						onDelete={() => alert("Deleted!")}
						editable={editable}
					/>
				) : (
					<MeetingCard
						meeting={task}
						onDelete={() => alert("Deleted!?")}
						editable={editable}
					/>
				);
			})}
			{isToday ? (
				<Box
					borderColor="red"
					borderWidth={2}
					width="100%"
					position="absolute"
					top={50}
				></Box>
			) : null}
		</Flex>
	);
}
