'use client'

import { useHomeController } from "./useHomeController"

export default function Home() {
  const {
    rooms,
    selectedRoomId,
    loadingRooms,
    messages,
    loadingMessages,
    handleJoinRoom,
    handleSignOut,
    handleCreateRoom,
    handleOnSendMessage
  } = useHomeController()

  return (
    <main className="h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white shadow-md w-[1200px] flex min-h-[40rem] rounded-xl">
        <div className="flex flex-col justify-between w-1/5 p-3 border-r">
          <div>
            <h1 className="text-2xl border-b mb-3 pb-1">
              Select a room
            </h1>
            {loadingRooms ? (
              <span>Loading</span>
            ) : (
              <ul className="flex flex-col">
                {rooms?.map((room) => (
                  <li key={room?.id}>
                    <button type="button" className={`w-full text-left p-2 transition-all duration-400 hover:bg-gray-50 ${selectedRoomId  === room.id ? 'bg-gray-50' : ''}`} onClick={handleJoinRoom(room.id)}>
                      {room?.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col mt-8">
            <button type="button" className="mt-4 text-red-500" onClick={handleSignOut}>Sign out</button>
            <button type="button" className="mt-4" onClick={handleCreateRoom}>Create room</button>
          </div>
        </div>
        <div className="flex-1 p-3">
          {loadingMessages ? (
            <div>Loading</div>
          ) : (
            <>
              <div className="bg-gray-50 p-2 h-96 overflow-auto">
                {messages.length === 0 ? (
                  <span>Nenhuma mensagem</span>
                ) : (
                  <ul className="flex flex-col gap-y-4">
                    {messages.map((message) => (
                      <li key={message.id} className={`bg-gray-200 px-2 self-end`}>
                        {message.body}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <form className="mt-2" onSubmit={handleOnSendMessage}>
                <textarea name="message" id="#message" placeholder="Type your message" className="p-2 w-full rounded resize-none bg-gray-50 outline-none" rows={2}></textarea>
                <button type="submit" className="mt-2">Send</button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
