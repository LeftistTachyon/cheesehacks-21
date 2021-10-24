import {
	Center,
	PopoverArrow,
	Button,
	Box,
	useDisclosure,
	FormControl,
} from "@chakra-ui/react";
import {
	Popover,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
} from "@chakra-ui/popover";
import { Formik } from "formik";
import { Task } from "api/db";

type TaskCardProps = {
	task: Task;
	[key: string]: any;
};

export default function TaskCard(props: TaskCardProps): JSX.Element {
	const { onOpen, onClose, isOpen } = useDisclosure();

	return (
		<Popover
			isOpen={isOpen}
			onOpen={onOpen}
			onClose={onClose}
			closeOnBlur={false}
		>
			<PopoverTrigger>
				<Center
					borderRadius="lg"
					bgColor={props.bgColor ?? "brand.secondary"}
					_hover={{ cursor: "pointer" }}
					p={5}
				>
					{props.children}
				</Center>
			</PopoverTrigger>
			<PopoverContent p={5}>
				<PopoverArrow />
				<PopoverCloseButton />
				{Form(onClose)}
			</PopoverContent>
		</Popover>
	);
}
function Form(onClose: () => void): JSX.Element {
	return (
		<Formik
			initialValues={{}}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			}}
		>
			{(props) => (
				<FormControl>
					<Box mt={4}>
						<Button variant="outline" onClick={onClose}>
							Cancel
						</Button>
						<Button
							colorScheme="teal"
							isLoading={props.isSubmitting}
							type="submit"
						>
							Submit
						</Button>
					</Box>
				</FormControl>
			)}
		</Formik>
	);
}
