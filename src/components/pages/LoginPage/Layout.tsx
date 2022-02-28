import Link from 'next/link'
import React from 'react'
import { Button } from '../../parts/buttons/Button'
import { Center } from '../../parts/bases/Center'
import { HStack } from '../../parts/bases/HStack'
import { EmailForm } from '../../parts/forms/EmailForm'
import { VStack } from '../../parts/bases/VStack'
import { PasswordForm } from '../../parts/forms/PasswordForm'
import { FormattedMessage } from 'react-intl'
import { Logo } from '../../parts/images/Logo'

export type Props = {
  onChangeEmail: (email: string, isValid: boolean) => void
  onChangePassword: (email: string, isValid: boolean) => void
  onClickSubmit: () => void
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
          <FormattedMessage id="LoginPage.title" />
        </h1>
      </Center>
      <VStack className="mt-16">
        <EmailForm onChange={props.onChangeEmail} />
      </VStack>
      <VStack className="mt-4">
        <PasswordForm onChange={props.onChangePassword} />
      </VStack>
      <VStack className="mt-6">
        <Button
          className="button-gradient-blue "
          visibleLoading={props.visibleLoading}
          onClick={props.onClickSubmit}
          disabled={!props.isValid}>
          <FormattedMessage id="LoginPage.submit" />
        </Button>
      </VStack>
      <HStack className="mt-11 w-full justify-center">
        <Link href="/signup" passHref>
          <a className="text-white underline">
            <FormattedMessage id="LoginPage.signUpLink" />
          </a>
        </Link>
        <Link href="/password_reset" passHref>
          <a className="ml-9 text-white underline">
            <FormattedMessage id="LoginPage.passwordResetLink" />
          </a>
        </Link>
      </HStack>
    </VStack>
  )
}
