import { Box, Flex } from "@chakra-ui/layout";
import { Task } from "api/db";

export default function Sidepanel({ tasks }: { tasks: Task[] }): JSX.Element {
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
		</Flex>
	);
}
