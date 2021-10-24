import Auth from "@aws-amplify/auth";
import Amplify from "@aws-amplify/core";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Heading } from "@chakra-ui/react";
import awsExports from "@utils/aws-exports";
import { useEffect, useState } from "react";

Amplify.configure(awsExports);

function Landing(): JSX.Element {
	const [user, setUser] = useState(null);
	useEffect(() => {
		Auth.currentUserInfo()
			.then((user) => {
				console.log("user: ", user);
				setUser(user);
			})
			.catch((err) => setUser(null));
	}, []);
	return <Heading>{JSON.stringify(user)}</Heading>;
	// return <></>;
}

export default withAuthenticator(Landing);
