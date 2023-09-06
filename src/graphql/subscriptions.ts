/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom(
    $filter: ModelSubscriptionRoomFilterInput
    $owner: String
  ) {
    onCreateRoom(filter: $filter, owner: $owner) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom(
    $filter: ModelSubscriptionRoomFilterInput
    $owner: String
  ) {
    onUpdateRoom(filter: $filter, owner: $owner) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom(
    $filter: ModelSubscriptionRoomFilterInput
    $owner: String
  ) {
    onDeleteRoom(filter: $filter, owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
