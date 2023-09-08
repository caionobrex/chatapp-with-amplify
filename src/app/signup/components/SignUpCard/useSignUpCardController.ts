import awsConfig from '@/aws-exports'
import { Amplify, Auth } from 'aws-amplify'
import { useState } from "react"

Amplify.configure(awsConfig)

export const useSignUpCardController = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [file, setFile] = useState<File | null | undefined>(null)

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFile(e.currentTarget.files?.item(0))
  // }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await Auth.signUp({
        username,
        password,
        autoSignIn: {
          enabled: true,
        },
        attributes: {
          email
        },
      })
      const confirmationCode = prompt('Enter confirmation code')
      if (confirmationCode) {
        Auth.confirmSignUp(username, confirmationCode)
        alert('success')
      }
    } catch (err) {
      console.log(err)
    }
    // if (file) {
    //   try {
    //     const fileType = file.name.split('.').pop()
    //     const res = await s3Client.send(new PutObjectCommand({
    //       Bucket: 'filestoragestack-usersavatars18707e65-humfva40zuzt',
    //       Key: `fileName.${fileType}`,
    //       Body: file,
    //     }))
    //     console.log(res)
    //   } catch (err) {
    //     console.log(err)
    //     alert('upload to s3 failed')
    //   }
    // }
  }

  return { handleUsernameChange, handlePasswordChange, handleEmailChange, handleOnSubmit }
}