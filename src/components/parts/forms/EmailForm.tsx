import Image from 'next/image'
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { EmailValidator } from '../../../validations/EmailValidator'
import { HStack } from '../bases/HStack'
import { InputForm } from './InputForm'
import { Text } from '../bases/Text'
import { VStack } from '../bases/VStack'

type Props = {
  onChange: (text: string, isValid: boolean) => void
}

export const EmailForm: React.VFC<Props> = (props) => {
  const [validationError, setValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [text, setText] = useState('')

  const onChangeText = (text: string) => {
    setText(text)
    props.onChange(text, EmailValidator.isValid(text))
    setValidationError(!EmailValidator.isValid(text))
  }

  const onFocusChanged = (focused: boolean) => {
    setValidationError(!EmailValidator.isValid(text))
    setIsFocused(focused)
  }

  return (
    <VStack
      className={`items-center rounded-xl border-2 ${
        validationError
          ? 'border-red-500 bg-red-500'
          : isFocused
          ? 'border-neutral-white'
          : 'border-neutral-700'
      }`}>
      <InputForm
        hint={
          <HStack className="items-center">
            <VStack className="mr-2 opacity-40">
              <Image src="/images/email_hint.png" width="24px" height="24px" alt="email" />
            </VStack>
            <Text>
              <FormattedMessage id="EmailForm.emailHint" />
            </Text>
          </HStack>
        }
        onChangeText={onChangeText}
        onFocusChanged={onFocusChanged}
        inputMode="email"
      />
      {validationError ? (
        <VStack className="px-2 py-1.5">
          <Text className="text-xs text-white">
            <FormattedMessage id="EmailForm.error" />
          </Text>
        </VStack>
      ) : null}
    </VStack>
  )
}
