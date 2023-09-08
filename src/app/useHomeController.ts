import { CreateMessageInput, CreateMessageMutation, CreateRoomInput, CreateRoomMutation, ListMessagesQuery, ListRoomsQuery, Message, OnCreateMessageSubscription, OnCreateRoomSubscription, Room } from "@/API"
import { createMessage, createRoom } from "@/graphql/mutations"
import { listMessages, listRooms } from "@/graphql/queries"
import { onCreateMessage, onCreateRoom } from "@/graphql/subscriptions"
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api'
import { API, Amplify, Auth } from "aws-amplify"
import { useCallback, useEffect, useState } from "react"
import awsConfig from '@/aws-exports'

Amplify.configure(awsConfig)

export const useHomeController = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null)
  const [loadingRooms, setLoadingRoom] = useState(true)
  const [loadingMessages, setLoadingMessages] = useState(true)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)

  const handleOnSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = event.currentTarget.message.value

    if (!selectedRoomId || !message || !currentUserId) return

    const input: CreateMessageInput = {
      body: message,
      roomMessagesId: selectedRoomId,
      userMessagesId: currentUserId,
    }
    try {
      const messageField = document.getElementById('#message') as HTMLInputElement
      messageField.value = ''
      await API.graphql<GraphQLQuery<CreateMessageMutation>>({
        query: createMessage, variables: { input }, authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleCreateRoom = async () => {
    const roomName = prompt('Enter room name')
    if (roomName) {
      const input: CreateRoomInput = {
        name: roomName,
      }
      try {
        await API.graphql<GraphQLQuery<CreateRoomMutation>>({
          query: createRoom, variables: { input }, authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
      } catch {
        alert('error')
      }
    }
  }

  const handleSignOut = async () => {
    const willUserSignOut = confirm('Are you sure you want to sign out?')
    if (willUserSignOut) {
      await Auth.signOut()
      alert('Signed out')
    }
  }

  const fetchRooms = async () => {
    try {
      const { data }  = await API.graphql<GraphQLQuery<ListRoomsQuery>>({
        query: listRooms, authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
      setRooms(data?.listRooms?.items ?? [])
      setLoadingRoom(false)
    } catch {
      alert('error when fetching rooms')
    }
  }

  const fetchMessages = useCallback(async (roomId: string) => {
    setLoadingMessages(true)
    const { data } = await API.graphql<GraphQLQuery<ListMessagesQuery>>({ 
      query: listMessages, variables: { filter: { roomMessagesId: { eq: roomId } } },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    setMessages(data?.listMessages?.items.sort((a, b) => a.createdAt.localeCompare(b.createdAt)) ?? [])
    setLoadingMessages(false)
  }, [setLoadingMessages, setMessages])

  const handleJoinRoom = (roomId: string) => () => {
    const willUserJoinRoom = confirm('Join room ?')
    if (willUserJoinRoom) {
      setSelectedRoomId(roomId)
      fetchMessages(roomId)
    }
  }

  useEffect(() => {
    if (rooms.length === 0) {
      fetchRooms()
    }
  }, [rooms])

  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<OnCreateRoomSubscription>>({
      query: onCreateRoom,
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    }).subscribe({
      next: ({ value }) => {
        if (value.data?.onCreateRoom) {
          setRooms((current) => [value.data!.onCreateRoom as Room, ...current])
        }
      }
    })
    return () => sub.unsubscribe()
  }, [setRooms])

  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<OnCreateMessageSubscription>>({
      query: onCreateMessage,
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    }).subscribe({
      next: ({ value }) => {
        if (value.data?.onCreateMessage) {
          setMessages((current) => [...current, value.data!.onCreateMessage as Message])
        }
      }
    })
    return () => sub.unsubscribe()
  }, [setMessages])

  useEffect(() => {
    if (!currentUserId) {
      Auth.currentAuthenticatedUser().then((user) => {
        setCurrentUserId(user.attributes.sub)
      })
    }
  }, [setCurrentUserId, currentUserId])

  return {
    rooms,
    selectedRoomId,
    loadingRooms,
    messages,
    loadingMessages,
    currentUserId,
    handleJoinRoom,
    handleSignOut,
    handleCreateRoom,
    handleOnSendMessage
  }
}