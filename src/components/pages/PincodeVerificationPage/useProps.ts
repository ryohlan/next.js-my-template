import { useRouter } from 'next/router'
import { useState } from 'react'
import { Props } from './Layout'
import { useVerifyPincodeMutation } from './query.generated'

type Params = {
  email: string
}

export const useProps = (params: Params): Props => {
  const router = useRouter()
  const email = params.email as string
  const [isLoading, setIsLoading] = useState(false)
  const [verifyPincodeMutation] = useVerifyPincodeMutation()
  const onPressResend = () => {
    console.warn('TODO: resend pinocde')
  }
  const onPressCancel = () => router.back()
  const onChangeCode: Props['onChangeCode'] = async (code, isValid) => {
    if (isValid) {
      setIsLoading(true)
      const res = await verifyPincodeMutation({ variables: { confirmInput: { code, email } } })
      setIsLoading(false)
      if (res.data) {
        router.push('/login')
      } else if (res.errors) {
        console.warn('TODO')
        console.warn(res.errors)
      }
    }
  }
  return {
    email,
    isLoading,
    onChangeCode,
    onPressCancel,
    onPressResend,
  }
}
