/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
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
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
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
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
