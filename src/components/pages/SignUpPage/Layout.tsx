import Link from 'next/link'
import React from 'react'
import { Button } from '../../parts/buttons/Button'
import { Center } from '../../parts/bases/Center'
import { HStack } from '../../parts/bases/HStack'
import { EmailForm } from '../../parts/forms/EmailForm'
import { VStack } from '../../parts/bases/VStack'
import { PasswordForm } from '../../parts/forms/PasswordForm'
import { Checkbox } from '../../parts/forms/Checkbox'
import { FormattedMessage } from 'react-intl'
import { Logo } from '../../parts/images/Logo'

export type Props = {
  onChangeEmail: (email: string, isValid: boolean) => void
  onChangePassword: (email: string, isValid: boolean) => void
  onClickSubmit: () => void
  isValid: boolean
  visibleLoading: boolean
  onChangeCheckTerms: (checked: boolean) => void
}

export const Layout: React.VFC<Props> = (props) => {
  return (
    <VStack className="bg-aki-black min-h-screen items-center px-7">
      <Center className="mt-16">
        <Logo width={120} />
      </Center>
      <Center className="mt-6">
        <h1 className="text-lg font-bold text-white">
          <FormattedMessage id="SignUpPage.title" />
        </h1>
      </Center>
      <VStack className="mt-16">
        <EmailForm onChange={props.onChangeEmail} />
      </VStack>
      <VStack className="mt-4">
        <PasswordForm onChange={props.onChangePassword} />
      </VStack>
      <VStack className="mt-4 rounded-lg bg-neutral-990 p-3">
        <Checkbox onChangeChecked={props.onChangeCheckTerms}>
          <VStack className="text-white">
            <FormattedMessage id="SignUpPage.policyTerms" />
          </VStack>
        </Checkbox>
      </VStack>
      <VStack className="mt-6">
        <Button
          className="button-gradient-blue"
          visibleLoading={props.visibleLoading}
          onClick={props.onClickSubmit}
          disabled={!props.isValid}>
          <FormattedMessage id="SignUpPage.submit" />
        </Button>
      </VStack>
      <HStack className="mt-11 w-full justify-center">
        <Link href="/login" passHref>
          <a className="text-white underline">
            <FormattedMessage id="SignUpPage.loginLink" />
          </a>
        </Link>
      </HStack>
    </VStack>
  )
}
