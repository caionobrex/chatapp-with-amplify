'use client'

import { useSignUpCardController } from "./useSignUpCardController"

export const SignUpCard = () => {
  const {
    handleUsernameChange,
    handlePasswordChange,
    handleFileChange,
    handleOnSubmit
  } = useSignUpCardController()

  return (
    <div className="shadow-md bg-white p-6 rounded-md">
      <h1 className="text-center text-2xl">Sign up</h1>
      <form className="w-full flex flex-col gap-y-6" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="avatar">Avatar</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="avatar">Username</label>
          <input type="text" placeholder="username" className="w-full border rounded p-2" onChange={handleUsernameChange} />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="avatar">Password</label>
          <input type="password" placeholder="password" className="w-full border rounded p-2" onChange={handlePasswordChange} />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}