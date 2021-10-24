import { DateTime, Duration } from "luxon";

const config = {
	cognito: {
		REGION: process.env.REACT_APP_REGION,
		USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
		APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
		IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
	},
};

const HOUR_HEIGHT: number = 50;

function hourHeight(dt: DateTime): number {
	return toHeight(timeOnly(dt));
}

function toHeight(d: Duration): number {
	return (d.as("minutes") / 60) * HOUR_HEIGHT;
}

function timeOnly(dt: DateTime): Duration {
	return dt.diff(dt.startOf("day"));
}

export default config;
export { HOUR_HEIGHT, timeOnly, hourHeight, toHeight };
