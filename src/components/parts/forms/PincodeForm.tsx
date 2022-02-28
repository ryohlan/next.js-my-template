import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { PincodeValidator } from '../../../validations/PincodeValidator'
import { Absolute } from '../bases/Absolute'
import { HStack } from '../bases/HStack'
import { InputForm } from './InputForm'
import { Text } from '../bases/Text'
import { VStack } from '../bases/VStack'

type Props = {
  onChange: (text: string, isValid: boolean) => void
  onPressResend: () => void
  disabledResendButton: boolean
}

export const PincodeForm: React.VFC<Props> = (props) => {
  const [validationError, setValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [text, setText] = useState('')
  const onChangeText = (t: string) => {
    props.onChange(t, PincodeValidator.isValid(t))
    setText(t)
    setValidationError(!PincodeValidator.isValid(t))
  }
  const onFocusChanged = (focused: boolean) => {
    setValidationError(!PincodeValidator.isValid(text))
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
            <FormattedMessage id="PincodeForm.pincodeHint" />
          </HStack>
        }
        onChangeText={onChangeText}
        inputMode="numeric"
        onFocusChanged={onFocusChanged}
      />
      {validationError ? (
        <VStack className="px-2 py-1.5">
          <Text className="text-xs">
            <FormattedMessage id="PincodeForm.error" />
          </Text>
        </VStack>
      ) : null}

      <Absolute className={`right-2.5 top-2.5 ${props.disabledResendButton ? 'opacity-20' : 'opacity-100'}`}>
        <button
          className={`h-9 rounded-md bg-white px-4 font-bold text-black drop-shadow-lg`}
          onClick={props.onPressResend}>
          <FormattedMessage id="PincodeForm.resend" />
        </button>
      </Absolute>
    </VStack>
  )
}
