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
import { DateTime, Duration, Interval } from "luxon";

type MeetingCardProps = {
	meeting: Task;
	onDelete: () => void;
	editable: boolean;
	[key: string]: any;
};

export default function MeetingCard(props: MeetingCardProps): JSX.Element {
	if (props.meeting.movable)
		throw new Error("Invalid prop: task instead of meeting");

	const { onOpen, onClose, isOpen } = useDisclosure();

	function validateName(value: string): string {
		if (!value) return "Name is required";
	}
	function validateDuration(start: string, end: string) {
		if (
			DateTime.fromFormat(start, "HH:mm") >
			DateTime.fromFormat(end, "HH:mm")
		)
			return "Please make the start time after the end time.";
	}

	const inside = (
		<Center
			borderRadius="lg"
			bgColor={props.bgColor ?? "black.20"}
			_hover={{ cursor: "pointer" }}
			p={5}
		>
			{props.children}
		</Center>
	);

	return props.editable ? (
		<Popover
			isOpen={isOpen}
			onOpen={onOpen}
			onClose={onClose}
			enabled={props.editable}
		>
			<PopoverTrigger>{inside}</PopoverTrigger>
			<PopoverContent p={5}>
				<PopoverArrow />
				<PopoverCloseButton />
				<Formik
					initialValues={{
						name: props.meeting.name,
						start: props.meeting.startTime.toLocaleString(
							DateTime.TIME_24_SIMPLE
						),
						end: props.meeting.endTime.toLocaleString(
							DateTime.TIME_24_SIMPLE
						),
					}}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							props.meeting.name = values.name;
							props.meeting.startTime = DateTime.fromFormat(
								values.start,
								"HH:mm"
							);
							props.meeting.endTime = DateTime.fromFormat(
								values.end,
								"HH:mm"
							);
							props.meeting.duration = props.meeting.endTime.diff(
								props.meeting.startTime
							);
							onClose();
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{(innerProps) => (
						<Form>
							<Field
								name="start"
								validate={(start) =>
									validateDuration(
										start,
										innerProps.values.end
									)
								}
							>
								{({ field, form }) => (
									<FormControl
										id="start"
										isInvalid={
											(form.errors.start &&
												form.touched.start) ||
											(form.errors.end &&
												form.touched.end)
										}
										isRequired
									>
										<FormLabel>Start Time</FormLabel>
										<Input
											type="time"
											{...field}
											placeholder="0"
										/>
									</FormControl>
								)}
							</Field>
							<Field
								name="end"
								validate={(end) =>
									validateDuration(
										innerProps.values.start,
										end
									)
								}
							>
								{({ field, form }) => (
									<FormControl
										id="end"
										isInvalid={
											(form.errors.end &&
												form.touched.end) ||
											(form.errors.start &&
												form.touched.start)
										}
										isRequired
										mt={4}
									>
										<FormLabel>
											Finishing Time Time
										</FormLabel>
										<Input
											type="time"
											{...field}
											placeholder="10"
										/>
										<FormErrorMessage>
											{form.errors.start ||
												form.errors.end}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>

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
	) : (
		inside
	);
}
