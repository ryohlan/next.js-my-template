import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { Props } from './Layout'

export const useProps = (): Props => {
  const [_email, setEmail] = useState('')
  const [visibleLoading, setVisibleLoading] = useState<Props['visibleLoading']>(false)
  const router = useRouter()
  const onClickCancel: Props['onClickCancel'] = useCallback(() => {
    router.back()
  }, [router])
  const onClickSubmit: Props['onClickSubmit'] = useCallback(() => {
    setVisibleLoading(true)
    console.warn('TODO')
    setVisibleLoading(false)
    router.push(`/password_reset/confirmation`)
  }, [router])
  const isValid: Props['isValid'] = true
  return {
    isValid,
    visibleLoading,
    onClickSubmit,
    onChangeEmail: setEmail,
    onClickCancel,
  }
}
