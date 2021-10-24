/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
