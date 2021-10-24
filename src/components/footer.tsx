import { ReactNode } from "react";
import { Box, Container, Stack, SimpleGrid, Text } from "@chakra-ui/react";

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};

export default function LargeWithAppLinksAndSocial() {
	return (
		<Box bgColor="brand.secondary" color="brand.tertiary">
			<Container as={Stack} maxW={"6xl"} py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
					<Stack align={"flex-start"}>
						<ListHeader>Contact Us</ListHeader>
						<Text>test@example.com</Text>
						<Text>(789) 445-6325</Text>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
