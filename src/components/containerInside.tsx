import { Box } from "@chakra-ui/react";

export default function ContainerInside(props: any): JSX.Element {
	return (
		<Box maxW={1200} w="100%" {...props} mx={25}>
			{props.children}
		</Box>
	);
}
