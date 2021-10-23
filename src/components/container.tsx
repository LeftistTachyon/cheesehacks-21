import { Center } from "@chakra-ui/react";

export default function Container(props: any): JSX.Element {
	return (
		<Center as="section" {...props}>
			{props.children}
		</Center>
	);
}
