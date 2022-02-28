import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { Props } from './Layout'
import { useSignUpMutation } from './query.generated'

export const useProps = (): Props => {
  const [emailState, setEmailState] = useState<{ text: string; isValid: boolean }>({
    text: '',
    isValid: false,
  })
  const [passwordState, setPasswordState] = useState<{ text: string; isValid: boolean }>({
    text: '',
    isValid: false,
  })
  const [termsChecked, setTermsChecked] = useState(false)
  const [visibleLoading, setVisibleLoading] = useState<Props['visibleLoading']>(false)
  const [signUp] = useSignUpMutation()
  const router = useRouter()
  const onClickSubmit: Props['onClickSubmit'] = useCallback(async () => {
    setVisibleLoading(true)
    const res = await signUp({
      variables: { input: { email: emailState.text, password: passwordState.text } },
    })
    setVisibleLoading(false)
    if (res.data) {
      router.push(`pincode_verification/${emailState.text}`)
    } else if (res.errors) {
      alert('TODO: Error Alert')
    }
  }, [signUp, emailState.text, passwordState.text, router])
  const isValid: Props['isValid'] = termsChecked && emailState.isValid && passwordState.isValid
  return {
    isValid,
    visibleLoading,
    onClickSubmit,
    onChangeEmail: (text, isValid) => setEmailState({ text, isValid }),
    onChangePassword: (text, isValid) => setPasswordState({ text, isValid }),
    onChangeCheckTerms: setTermsChecked,
  }
}
