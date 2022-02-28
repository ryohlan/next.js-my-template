import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from '../../parts/buttons/Button'
import { CancelButton } from '../../parts/buttons/CancelButton'
import { Center } from '../../parts/bases/Center'
import { PasswordForm } from '../../parts/forms/PasswordForm'
import { VStack } from '../../parts/bases/VStack'
import { Logo } from '../../parts/images/Logo'

export type Props = {
  onChangePassword: (email: string) => void
  onChangeConfirmationPassword: (email: string) => void
  onClickSubmit: () => void
  onClickCancel: () => void
  isValid: boolean
  visibleLoading: boolean
}

export const Layout: React.VFC<Props> = (props) => {
  return (
    <VStack className="bg-aki-black min-h-screen items-center px-7">
      <Center className="mt-16">
        <Logo width={120} />
      </Center>
      <Center className="mt-6">
        <h1 className="text-lg font-bold text-white">
          <FormattedMessage id="PasswordResetPage.title" />
        </h1>
      </Center>
      <VStack className="mt-11 text-center text-white">
        <FormattedMessage id="PasswordResetPage.description" />
      </VStack>
      <VStack className="mt-8">
        <PasswordForm onChange={props.onChangePassword} />
      </VStack>
      <VStack className="mt-4">
        <PasswordForm onChange={props.onChangeConfirmationPassword} />
      </VStack>
      <VStack className="mt-6">
        <Button
          className="button-gradient-blue"
          visibleLoading={props.visibleLoading}
          onClick={props.onClickSubmit}
          disabled={!props.isValid}>
          <FormattedMessage id="PasswordResetPage.submit" />
        </Button>
      </VStack>
      <VStack className="mt-40">
        <CancelButton onClick={props.onClickCancel}>
          <FormattedMessage id="PasswordResetPage.cancel" />
        </CancelButton>
      </VStack>
    </VStack>
  )
}
