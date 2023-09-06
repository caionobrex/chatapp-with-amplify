/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
