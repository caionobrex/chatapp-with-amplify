'use client'

import { useSignInCardController } from "./useSignInCardController"

export const SignInCard = () => {
  const  { handleUsernameChange, handlePasswordChange, handleOnSubmit } = useSignInCardController()

  return (
    <div className="shadow-md bg-white p-6 rounded-md w-80">
      <h1 className="text-center text-2xl">Sign in</h1>
      <form className="w-full flex flex-col gap-y-6" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="avatar">Username</label>
          <input type="text" placeholder="username" className="w-full border rounded p-2" onChange={handleUsernameChange} />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="avatar">Password</label>
          <input type="password" placeholder="password" className="w-full border rounded p-2" onChange={handlePasswordChange} />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}