import awsConfig from '@/aws-exports'
import { Amplify, Auth } from "aws-amplify"
import { useState } from "react"

Amplify.configure(awsConfig)

export const useSignInCardController = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await Auth.signIn({
        username,
        password,
      })
      alert('authenticated')
    } catch (err) {
      console.log(err)
    }
    // request cognito service to sign in user
  }

  return { handleUsernameChange, handlePasswordChange, handleOnSubmit }
}