import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDialog } from '../../../hooks/useDialog'
import { AuthorizationTokenStore } from '../../../stores/AuthorizationTokenStore'
import { Props } from './Layout'
import { useLoginMutation } from './query.generated'

export const useProps = (): Props => {
  const [emailState, setEmailState] = useState({ text: '', isValid: false })
  const [passwordState, setPasswordState] = useState({ text: '', isValid: false })
  const [visibleLoading, setVisibleLoading] = useState<Props['visibleLoading']>(false)
  const [loginMutation] = useLoginMutation()
  const router = useRouter()
  const dialog = useDialog()
  const intl = useIntl()
  const onClickSubmit: Props['onClickSubmit'] = useCallback(async () => {
    setVisibleLoading(true)
    const res = await loginMutation({
      variables: { input: { email: emailState.text, password: passwordState.text } },
    })
    setVisibleLoading(false)
    if (res.data) {
      const { AccessToken, ExpiresIn, RefreshToken } = res.data.login.AuthenticationResult
      AuthorizationTokenStore.set({
        accessToken: AccessToken,
        refreshToken: RefreshToken ?? '',
        expiredIn: ExpiresIn,
      })
      router.push('/home')
    } else if (res.errors) {
      dialog.show({
        type: 'default',
        message: intl.formatMessage({ id: 'Error.default' }),
        buttons: [{ type: 'close' }],
      })
    }
  }, [emailState, passwordState, loginMutation, router, dialog, intl])
  const isValid: Props['isValid'] = emailState.isValid && passwordState.isValid

  return {
    isValid,
    visibleLoading,
    onClickSubmit,
    onChangeEmail: (text, isValid) => setEmailState({ text, isValid }),
    onChangePassword: (text, isValid) => setPasswordState({ text, isValid }),
  }
}
