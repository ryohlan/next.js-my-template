import React from 'react'
import { Center } from '../../parts/bases/Center'
import { VStack } from '../../parts/bases/VStack'
import { CancelButton } from '../../parts/buttons/CancelButton'
import { Text } from '../../parts/bases/Text'
import { PincodeForm } from '../../parts/forms/PincodeForm'
import { FormattedMessage } from 'react-intl'
import { Loading } from '../../parts/loadings/Loading'
import { Logo } from '../../parts/images/Logo'

export type Props = {
  email: string
  isLoading: boolean
  onChangeCode: (code: string, isValid: boolean) => void
  onPressCancel: () => void
  onPressResend: () => void
}

export const Layout: React.VFC<Props> = (props) => {
  return (
    <VStack className="bg-aki-black min-h-screen items-center px-7">
      <Center className="mt-16">
        <Logo width={120} />
      </Center>
      <Center className="mt-6">
        <Text className="text-lg font-bold text-white">
          <FormattedMessage id="SignUpPage.title" />
        </Text>
      </Center>
      <VStack className="mt-16 rounded-xl bg-neutral-800 px-4 py-2">
        <Text className="text-xs text-neutral-500">
          <FormattedMessage id={'PincodeVerificationPage.emailLabel'} />
        </Text>
        <Text className="text-xl text-white">{props.email}</Text>
      </VStack>
      <Text className="mt-6 text-center text-sm text-white">
        <FormattedMessage id="PincodeVerificationPage.note" />
      </Text>
      <VStack className="mt-6">
        <PincodeForm
          onChange={props.onChangeCode}
          onPressResend={props.onPressResend}
          disabledResendButton={props.isLoading}
        />
      </VStack>
      <Center className="h-20">
        <Loading visible={props.isLoading} size={20} color="white" />
      </Center>
      <Center className="mt-10">
        <CancelButton onClick={props.onPressCancel}>
          <FormattedMessage id="PincodeVerificationPage.cancel" />
        </CancelButton>
      </Center>
    </VStack>
  )
}
