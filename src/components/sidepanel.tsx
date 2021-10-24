import { Box, Center, Flex } from "@chakra-ui/layout";
import { hourHeight, HOUR_HEIGHT } from "@utils/config";
import { Task } from "api/db";
import { DateTime } from "luxon";
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
	for (let i = 0; i < 24; i++) {
		boxes.push(
			<Center
				borderColor="brand.secondary"
				borderWidth={2}
				key={i}
				flex={1}
				minW={200}
				minH={HOUR_HEIGHT}
			>
				{i}:00
			</Center>
		);
	}

	return (
		<Flex flexDir="column" my={10} position="relative">
			{boxes}
			{tasks.map((task) => {
				return task.movable ? (
					<TaskCard
						task={task}
						onDelete={() => alert("Deleted!")}
						editable={editable}
						width="100%"
						position="absolute"
						top={hourHeight(task.startTime)}
					/>
				) : (
					<MeetingCard
						meeting={task}
						onDelete={() => alert("Deleted!?")}
						editable={editable}
						width="100%"
						position="absolute"
						top={hourHeight(task.startTime)}
					/>
				);
			})}
			{isToday ? (
				<Box
					borderColor="red"
					borderWidth={2}
					width="100%"
					position="absolute"
					top={hourHeight(DateTime.now())}
				></Box>
			) : null}
		</Flex>
	);
}
