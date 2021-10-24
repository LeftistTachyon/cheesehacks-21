import { Button } from "@chakra-ui/button";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
	Heading,
	HStack,
	StackDivider,
	Box,
	Center,
	Text,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { Field, Form, Formik } from "formik";
import { stringify } from "querystring";

export default function Login(): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside p={10}>
					<Center>
						<HStack
							divider={<StackDivider borderColor="gray.200" />}
							spacing={5}
							w="100%"
							alignItems="flex-start"
						>
							<Box flex={1}>
								<Heading mb={5}>Login</Heading>
								<LoginForm />
							</Box>
							<Box flex={1}>
								<Heading mb={3}>Register</Heading>
								<Text mb={5}>
									Don't have an account? It's completely free
									to create an account!
								</Text>
								<RegisterForm />
							</Box>
						</HStack>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}

function LoginForm(): JSX.Element {
	function validateUsername(value: string) {
		if (!value) return "Username is required";
	}
	function validatePassword(value: string) {
		if (!value) return "Password is required";
	}

	return (
		<Formik
			initialValues={{ username: "", password: "" }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			}}
		>
			{(props) => (
				<Form>
					<Field name="username" validate={validateUsername}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.username &&
									form.touched.username
								}
								isRequired
							>
								<FormLabel htmlFor="username">
									Username
								</FormLabel>
								<Input
									{...field}
									id="username"
									placeholder="Username"
								/>
								<FormErrorMessage>
									{form.errors.username}
								</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name="password" validate={validatePassword}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.password &&
									form.touched.password
								}
								isRequired
								mt={4}
							>
								<FormLabel htmlFor="password">
									Password
								</FormLabel>
								<Input
									{...field}
									id="password"
									placeholder="Password"
									type="password"
								/>
								<FormErrorMessage>
									{form.errors.password}
								</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Button
						mt={4}
						colorScheme="teal"
						isLoading={props.isSubmitting}
						type="submit"
					>
						Log In
					</Button>
				</Form>
			)}
		</Formik>
	);
}

function RegisterForm(): JSX.Element {
	function validateUsername(value: string) {
		if (!value) {
			return "Username is required";
		} else if (!/[A-Za-z0-9]{3,}/g.test(value)) {
			return "Usernames can only contain only alphanumeric characters and must be at least three characters long";
		}
	}
	function validateFirstPassword(value: string) {
		if (!value) {
			return "Password is required";
		} else if (value.length < 5) {
			return "Password must be at least 5 characters long";
		} else if (!value.match(/[0,9]/g)?.length) {
			return "Password must have at least one number";
		}
	}
	function validateBothPasswords(first: string, second: string) {
		if (!first) {
			return "Please type your password above";
		} else if (!second) {
			return "Please retype your password";
		} else if (second != first) {
			return "Both passwords must match";
		}
	}

	return (
		<Formik
			initialValues={{ newUsername: "", password1: "", password2: "" }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			}}
		>
			{(props) => (
				<Form>
					<Field name="newUsername" validate={validateUsername}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.newUsername &&
									form.touched.newUsername
								}
								isRequired
							>
								<FormLabel htmlFor="newUsername">
									Username
								</FormLabel>
								<Input
									{...field}
									id="newUsername"
									placeholder="Username"
								/>
								<FormErrorMessage>
									{form.errors.newUsername}
								</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name="password1" validate={validateFirstPassword}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.password1 &&
									form.touched.password1
								}
								isRequired
								mt={4}
							>
								<FormLabel htmlFor="password1">
									Password
								</FormLabel>
								<Input
									{...field}
									id="password1"
									placeholder="Password"
									type="password"
								/>
								<FormErrorMessage>
									{form.errors.password1}
								</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field
						name="password2"
						validate={(value) =>
							validateBothPasswords(props.values.password1, value)
						}
					>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.password2 &&
									form.touched.password2
								}
								isRequired
								mt={4}
							>
								<FormLabel htmlFor="password2">
									Confirm password
								</FormLabel>
								<Input
									{...field}
									id="password2"
									placeholder="Confirm password"
									type="password"
								/>
								<FormErrorMessage>
									{form.errors.password2}
								</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Button
						mt={4}
						colorScheme="teal"
						isLoading={props.isSubmitting}
						type="submit"
					>
						Register
					</Button>
				</Form>
			)}
		</Formik>
	);
}
