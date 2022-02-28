import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { Props } from './Layout'

export const useProps = (): Props => {
  const [_password, setPassword] = useState('')
  const [_confirmationPassword, setConfirmationPassword] = useState('')
  const [visibleLoading, setVisibleLoading] = useState<Props['visibleLoading']>(false)
  const router = useRouter()
  const onClickCancel: Props['onClickCancel'] = useCallback(() => {
    router.back()
  }, [router])
  const onClickSubmit: Props['onClickSubmit'] = useCallback(() => {
    console.warn('TODO')
    setVisibleLoading(true)
  }, [])
  const isValid: Props['isValid'] = false
  return {
    isValid,
    visibleLoading,
    onClickSubmit,
    onChangePassword: setPassword,
    onChangeConfirmationPassword: setConfirmationPassword,
    onClickCancel,
  }
}
