import { DateTime, Duration } from "luxon";

export class Database {
	data: User[];
	constructor() {
		this.data = [];
	}

	getUser(username: string): User {
		for (const u of this.data) {
			if (u.username == username) return u;
		}

		console.log("Creating ", username, "...");
		const output: User = new User(username);
		this.data.push(output);
		return output;
	}
}
export class User {
	username: string;
	days: Day[];
	constructor(username: string) {
		this.username = username;
		this.days = [];
	}
	getDay(day: DateTime): Day {
		for (const d of this.days) {
			if (d.day == day) return d;
		}

		console.log("Creating ", day, "...");
		const output: Day = new Day(day);
		this.days.push(output);
		return output;
	}
}
export class Day {
	day: DateTime;
	tasks: Task[];
	constructor(day: DateTime) {
		this.day = day;
		this.tasks = [
			{
				movable: true,
				name: "test",
				duration: Duration.fromObject({ hours: 2 }),
			},
			{
				movable: false,
				name: "meeting",
				startTime: DateTime.fromObject({ hour: 8 }),
				endTime: DateTime.fromObject({ hour: 9 }),
				duration: Duration.fromObject({ hours: 1 }),
			},
		];
	}
	getTask(name: string): Task {
		for (const t of this.tasks) {
			if (t.name == name) return t;
		}
	}
	addTask(t: Task) {
		this.tasks.push(t);
	}
}
export type Task = {
	name: string;
	startTime?: DateTime;
	endTime?: DateTime;
	duration: Duration;
	movable: boolean;
};

const database: Database = new Database();

export { database };
