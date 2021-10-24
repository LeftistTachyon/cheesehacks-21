/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
	subscription OnCreateUser {
		onCreateUser {
			id
			username
			days {
				id
				day
				user {
					id
					username
					createdAt
					updatedAt
				}
				comments {
					id
					taskID
					name
					start
					end
					duration
					moveable
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateUser = /* GraphQL */ `
	subscription OnUpdateUser {
		onUpdateUser {
			id
			username
			days {
				id
				day
				user {
					id
					username
					createdAt
					updatedAt
				}
				comments {
					id
					taskID
					name
					start
					end
					duration
					moveable
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteUser = /* GraphQL */ `
	subscription OnDeleteUser {
		onDeleteUser {
			id
			username
			days {
				id
				day
				user {
					id
					username
					createdAt
					updatedAt
				}
				comments {
					id
					taskID
					name
					start
					end
					duration
					moveable
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onCreateDay = /* GraphQL */ `
	subscription OnCreateDay {
		onCreateDay {
			id
			day
			user {
				id
				username
				days {
					id
					day
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			comments {
				id
				taskID
				name
				start
				end
				duration
				moveable
				day {
					id
					day
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateDay = /* GraphQL */ `
	subscription OnUpdateDay {
		onUpdateDay {
			id
			day
			user {
				id
				username
				days {
					id
					day
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			comments {
				id
				taskID
				name
				start
				end
				duration
				moveable
				day {
					id
					day
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteDay = /* GraphQL */ `
	subscription OnDeleteDay {
		onDeleteDay {
			id
			day
			user {
				id
				username
				days {
					id
					day
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			comments {
				id
				taskID
				name
				start
				end
				duration
				moveable
				day {
					id
					day
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onCreateTask = /* GraphQL */ `
	subscription OnCreateTask {
		onCreateTask {
			id
			taskID
			name
			start
			end
			duration
			moveable
			day {
				id
				day
				user {
					id
					username
					createdAt
					updatedAt
				}
				comments {
					id
					taskID
					name
					start
					end
					duration
					moveable
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateTask = /* GraphQL */ `
	subscription OnUpdateTask {
		onUpdateTask {
			id
			taskID
			name
			start
			end
			duration
			moveable
			day {
				id
				day
				user {
					id
					username
					createdAt
					updatedAt
				}
				comments {
					id
					taskID
					name
					start
					end
					duration
					moveable
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteTask = /* GraphQL */ `
	subscription OnDeleteTask {
		onDeleteTask {
			id
			taskID
			name
			start
			end
			duration
			moveable
			day {
				id
				day
				user {
					id
					username
					createdAt
					updatedAt
				}
				comments {
					id
					taskID
					name
					start
					end
					duration
					moveable
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
