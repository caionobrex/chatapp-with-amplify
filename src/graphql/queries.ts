/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      room {
        id
        name
        messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      messages {
        items {
          id
          body
          createdAt
          updatedAt
          userMessagesId
          roomMessagesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      roomUsersId
      owner
      __typename
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
        room {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        roomUsersId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      name
      messages {
        items {
          id
          body
          createdAt
          updatedAt
          userMessagesId
          roomMessagesId
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          username
          createdAt
          updatedAt
          roomUsersId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      body
      room {
        id
        name
        messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      by {
        id
        username
        room {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        roomUsersId
        owner
        __typename
      }
      createdAt
      updatedAt
      userMessagesId
      roomMessagesId
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        room {
          id
          name
          createdAt
          updatedAt
          owner
          __typename
        }
        by {
          id
          username
          createdAt
          updatedAt
          roomUsersId
          owner
          __typename
        }
        createdAt
        updatedAt
        userMessagesId
        roomMessagesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
