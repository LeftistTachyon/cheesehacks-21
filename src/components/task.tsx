import {
	Center,
	PopoverArrow,
	Button,
	Box,
	useDisclosure,
	Text,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	NumberInput,
	Input,
} from "@chakra-ui/react";
import {
	Popover,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
} from "@chakra-ui/popover";
import { Field, Form, Formik } from "formik";
import { Task } from "api/db";
import React from "react";

type TaskCardProps = {
	task: Task;
	onDelete: () => void;
	[key: string]: any;
};

export default function TaskCard(props: TaskCardProps): JSX.Element {
	if (!props.task.movable)
		throw new Error("Invalid prop: meeting instead of task");

	const { onOpen, onClose, isOpen } = useDisclosure();

	function validateName(value: string): string {
		if (!value) return "Name is required";
	}
	function validateDuration(hours: number, minutes: number) {
		if (hours === 0 && minutes === 0)
			return "Please enter a duration greater than zero";
	}

	const duration = props.task.duration;

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
				<Formik
					initialValues={{
						name: props.task.name,
						hours: duration.hours,
						minutes: duration.minutes,
					}}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							onClose();
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{(innerProps) => (
						<Form>
							<FormLabel>Duration</FormLabel>
							<Flex justify="space-between" alignItems="center">
								<Field
									name="hours"
									validate={(hours) =>
										validateDuration(
											hours,
											innerProps.values.minutes
										)
									}
								>
									{({ field, form }) => (
										<FormControl
											id="hours"
											isInvalid={
												(form.errors.hours &&
													form.touched.hours) ||
												(form.errors.minutes &&
													form.touched.minutes)
											}
										>
											<NumberInput max={24} min={0}>
												<Input
													type="number"
													{...field}
													placeholder="0"
												/>
											</NumberInput>
										</FormControl>
									)}
								</Field>
								<Text mx={3}>:</Text>
								<Field name="minutes">
									{({ field, form }) => (
										<FormControl
											id="minutes"
											isInvalid={
												(form.errors.minutes &&
													form.touched.minutes) ||
												(form.errors.hours &&
													form.touched.hours)
											}
											isRequired
										>
											<NumberInput max={59} min={0}>
												<Input
													type="number"
													{...field}
													placeholder="10"
												/>
											</NumberInput>
										</FormControl>
									)}
								</Field>
							</Flex>

							<Field name="name" validate={validateName}>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.name &&
											form.touched.name
										}
										isRequired
										mt={4}
									>
										<FormLabel htmlFor="name">
											Task name
										</FormLabel>
										<Input
											{...field}
											id="name"
											placeholder="Task name"
										/>
										<FormErrorMessage>
											{form.errors.name}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Box mt={4}>
								<Button
									colorScheme="red"
									onClick={props.onDelete}
								>
									Delete
								</Button>
								<Button
									colorScheme="teal"
									isLoading={innerProps.isSubmitting}
									type="submit"
									mx={2}
								>
									Submit
								</Button>
								<Button variant="outline" onClick={onClose}>
									Cancel
								</Button>
							</Box>
						</Form>
					)}
				</Formik>
			</PopoverContent>
		</Popover>
	);
}
