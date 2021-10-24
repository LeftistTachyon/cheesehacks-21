/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
	id?: string | null;
	username: string;
};

export type ModelUserConditionInput = {
	username?: ModelStringInput | null;
	and?: Array<ModelUserConditionInput | null> | null;
	or?: Array<ModelUserConditionInput | null> | null;
	not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
	binary = "binary",
	binarySet = "binarySet",
	bool = "bool",
	list = "list",
	map = "map",
	number = "number",
	numberSet = "numberSet",
	string = "string",
	stringSet = "stringSet",
	_null = "_null",
}

export type ModelSizeInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
};

export type User = {
	__typename: "User";
	id: string;
	username: string;
	days?: Array<Day | null> | null;
	createdAt: string;
	updatedAt: string;
};

export type Day = {
	__typename: "Day";
	id: string;
	day: string;
	user?: User | null;
	comments?: Array<Task | null> | null;
	createdAt: string;
	updatedAt: string;
};

export type Task = {
	__typename: "Task";
	id: string;
	taskID: string;
	name: string;
	start?: string | null;
	end?: string | null;
	duration?: string | null;
	moveable: boolean;
	day?: Day | null;
	createdAt: string;
	updatedAt: string;
};

export type UpdateUserInput = {
	id: string;
	username?: string | null;
};

export type DeleteUserInput = {
	id: string;
};

export type CreateDayInput = {
	id?: string | null;
	day: string;
};

export type ModelDayConditionInput = {
	day?: ModelStringInput | null;
	and?: Array<ModelDayConditionInput | null> | null;
	or?: Array<ModelDayConditionInput | null> | null;
	not?: ModelDayConditionInput | null;
};

export type UpdateDayInput = {
	id: string;
	day?: string | null;
};

export type DeleteDayInput = {
	id: string;
};

export type CreateTaskInput = {
	id?: string | null;
	taskID: string;
	name: string;
	start?: string | null;
	end?: string | null;
	duration?: string | null;
	moveable: boolean;
};

export type ModelTaskConditionInput = {
	taskID?: ModelIDInput | null;
	name?: ModelStringInput | null;
	start?: ModelStringInput | null;
	end?: ModelStringInput | null;
	duration?: ModelStringInput | null;
	moveable?: ModelBooleanInput | null;
	and?: Array<ModelTaskConditionInput | null> | null;
	or?: Array<ModelTaskConditionInput | null> | null;
	not?: ModelTaskConditionInput | null;
};

export type ModelIDInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export type ModelBooleanInput = {
	ne?: boolean | null;
	eq?: boolean | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
};

export type UpdateTaskInput = {
	id: string;
	taskID?: string | null;
	name?: string | null;
	start?: string | null;
	end?: string | null;
	duration?: string | null;
	moveable?: boolean | null;
};

export type DeleteTaskInput = {
	id: string;
};

export type ModelUserFilterInput = {
	id?: ModelIDInput | null;
	username?: ModelStringInput | null;
	and?: Array<ModelUserFilterInput | null> | null;
	or?: Array<ModelUserFilterInput | null> | null;
	not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
	__typename: "ModelUserConnection";
	items?: Array<User | null> | null;
	nextToken?: string | null;
};

export type ModelDayFilterInput = {
	id?: ModelIDInput | null;
	day?: ModelStringInput | null;
	and?: Array<ModelDayFilterInput | null> | null;
	or?: Array<ModelDayFilterInput | null> | null;
	not?: ModelDayFilterInput | null;
};

export type ModelDayConnection = {
	__typename: "ModelDayConnection";
	items?: Array<Day | null> | null;
	nextToken?: string | null;
};

export type ModelTaskFilterInput = {
	id?: ModelIDInput | null;
	taskID?: ModelIDInput | null;
	name?: ModelStringInput | null;
	start?: ModelStringInput | null;
	end?: ModelStringInput | null;
	duration?: ModelStringInput | null;
	moveable?: ModelBooleanInput | null;
	and?: Array<ModelTaskFilterInput | null> | null;
	or?: Array<ModelTaskFilterInput | null> | null;
	not?: ModelTaskFilterInput | null;
};

export type ModelTaskConnection = {
	__typename: "ModelTaskConnection";
	items?: Array<Task | null> | null;
	nextToken?: string | null;
};

export type CreateUserMutationVariables = {
	input: CreateUserInput;
	condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
	createUser?: {
		__typename: "User";
		id: string;
		username: string;
		days?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type UpdateUserMutationVariables = {
	input: UpdateUserInput;
	condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
	updateUser?: {
		__typename: "User";
		id: string;
		username: string;
		days?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type DeleteUserMutationVariables = {
	input: DeleteUserInput;
	condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
	deleteUser?: {
		__typename: "User";
		id: string;
		username: string;
		days?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type CreateDayMutationVariables = {
	input: CreateDayInput;
	condition?: ModelDayConditionInput | null;
};

export type CreateDayMutation = {
	createDay?: {
		__typename: "Day";
		id: string;
		day: string;
		user?: {
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		comments?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type UpdateDayMutationVariables = {
	input: UpdateDayInput;
	condition?: ModelDayConditionInput | null;
};

export type UpdateDayMutation = {
	updateDay?: {
		__typename: "Day";
		id: string;
		day: string;
		user?: {
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		comments?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type DeleteDayMutationVariables = {
	input: DeleteDayInput;
	condition?: ModelDayConditionInput | null;
};

export type DeleteDayMutation = {
	deleteDay?: {
		__typename: "Day";
		id: string;
		day: string;
		user?: {
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		comments?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type CreateTaskMutationVariables = {
	input: CreateTaskInput;
	condition?: ModelTaskConditionInput | null;
};

export type CreateTaskMutation = {
	createTask?: {
		__typename: "Task";
		id: string;
		taskID: string;
		name: string;
		start?: string | null;
		end?: string | null;
		duration?: string | null;
		moveable: boolean;
		day?: {
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type UpdateTaskMutationVariables = {
	input: UpdateTaskInput;
	condition?: ModelTaskConditionInput | null;
};

export type UpdateTaskMutation = {
	updateTask?: {
		__typename: "Task";
		id: string;
		taskID: string;
		name: string;
		start?: string | null;
		end?: string | null;
		duration?: string | null;
		moveable: boolean;
		day?: {
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type DeleteTaskMutationVariables = {
	input: DeleteTaskInput;
	condition?: ModelTaskConditionInput | null;
};

export type DeleteTaskMutation = {
	deleteTask?: {
		__typename: "Task";
		id: string;
		taskID: string;
		name: string;
		start?: string | null;
		end?: string | null;
		duration?: string | null;
		moveable: boolean;
		day?: {
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type GetUserQueryVariables = {
	id: string;
};

export type GetUserQuery = {
	getUser?: {
		__typename: "User";
		id: string;
		username: string;
		days?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type ListUsersQueryVariables = {
	filter?: ModelUserFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListUsersQuery = {
	listUsers?: {
		__typename: "ModelUserConnection";
		items?: Array<{
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		nextToken?: string | null;
	} | null;
};

export type GetDayQueryVariables = {
	id: string;
};

export type GetDayQuery = {
	getDay?: {
		__typename: "Day";
		id: string;
		day: string;
		user?: {
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		comments?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type ListDaysQueryVariables = {
	filter?: ModelDayFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListDaysQuery = {
	listDays?: {
		__typename: "ModelDayConnection";
		items?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		nextToken?: string | null;
	} | null;
};

export type GetTaskQueryVariables = {
	id: string;
};

export type GetTaskQuery = {
	getTask?: {
		__typename: "Task";
		id: string;
		taskID: string;
		name: string;
		start?: string | null;
		end?: string | null;
		duration?: string | null;
		moveable: boolean;
		day?: {
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type ListTasksQueryVariables = {
	filter?: ModelTaskFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListTasksQuery = {
	listTasks?: {
		__typename: "ModelTaskConnection";
		items?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		nextToken?: string | null;
	} | null;
};

export type OnCreateUserSubscription = {
	onCreateUser?: {
		__typename: "User";
		id: string;
		username: string;
		days?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnUpdateUserSubscription = {
	onUpdateUser?: {
		__typename: "User";
		id: string;
		username: string;
		days?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnDeleteUserSubscription = {
	onDeleteUser?: {
		__typename: "User";
		id: string;
		username: string;
		days?: Array<{
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnCreateDaySubscription = {
	onCreateDay?: {
		__typename: "Day";
		id: string;
		day: string;
		user?: {
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		comments?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnUpdateDaySubscription = {
	onUpdateDay?: {
		__typename: "Day";
		id: string;
		day: string;
		user?: {
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		comments?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnDeleteDaySubscription = {
	onDeleteDay?: {
		__typename: "Day";
		id: string;
		day: string;
		user?: {
			__typename: "User";
			id: string;
			username: string;
			days?: Array<{
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		comments?: Array<{
			__typename: "Task";
			id: string;
			taskID: string;
			name: string;
			start?: string | null;
			end?: string | null;
			duration?: string | null;
			moveable: boolean;
			day?: {
				__typename: "Day";
				id: string;
				day: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			createdAt: string;
			updatedAt: string;
		} | null> | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnCreateTaskSubscription = {
	onCreateTask?: {
		__typename: "Task";
		id: string;
		taskID: string;
		name: string;
		start?: string | null;
		end?: string | null;
		duration?: string | null;
		moveable: boolean;
		day?: {
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnUpdateTaskSubscription = {
	onUpdateTask?: {
		__typename: "Task";
		id: string;
		taskID: string;
		name: string;
		start?: string | null;
		end?: string | null;
		duration?: string | null;
		moveable: boolean;
		day?: {
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};

export type OnDeleteTaskSubscription = {
	onDeleteTask?: {
		__typename: "Task";
		id: string;
		taskID: string;
		name: string;
		start?: string | null;
		end?: string | null;
		duration?: string | null;
		moveable: boolean;
		day?: {
			__typename: "Day";
			id: string;
			day: string;
			user?: {
				__typename: "User";
				id: string;
				username: string;
				createdAt: string;
				updatedAt: string;
			} | null;
			comments?: Array<{
				__typename: "Task";
				id: string;
				taskID: string;
				name: string;
				start?: string | null;
				end?: string | null;
				duration?: string | null;
				moveable: boolean;
				createdAt: string;
				updatedAt: string;
			} | null> | null;
			createdAt: string;
			updatedAt: string;
		} | null;
		createdAt: string;
		updatedAt: string;
	} | null;
};
