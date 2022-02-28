import Image from 'next/image'
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { PasswordValidator } from '../../../../validations/PasswordValidator'
import { Absolute } from '../../bases/Absolute'
import { Center } from '../../bases/Center'
import { HStack } from '../../bases/HStack'
import { InputForm } from '../InputForm'
import { PasswordValidationResultText } from './PasswordValidationResultText'
import { VStack } from '../../bases/VStack'

type Props = {
  hint?: string
  onChange: (text: string, isValid: boolean) => void
}

export const PasswordForm: React.VFC<Props> = (props) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [validationError, setValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [text, setText] = useState('')
  const onChangeText = (t: string) => {
    props.onChange(t, PasswordValidator.isValid(t))
    setText(t)
    setValidationError(!PasswordValidator.isValid(t))
  }
  const onFocusChanged = (focused: boolean) => {
    setValidationError(!PasswordValidator.isValid(text))
    setIsFocused(focused)
  }

  return (
    <Center>
      <VStack
        className={`items-center rounded-xl border-2 ${
          isFocused || validationError ? 'border-white bg-white' : 'border-neutral-700 bg-neutral-700'
        }`}>
        <InputForm
          hint={
            <HStack className="items-center">
              <VStack className="mr-2 opacity-40">
                <Image src="/images/password_hint.png" width="24px" height="24px" alt="email" />
              </VStack>
              {props.hint ?? <FormattedMessage id="PasswordForm.passwordHint" />}
            </HStack>
          }
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
          onFocusChanged={onFocusChanged}
          inputMode="text"
        />
        {isFocused || validationError ? (
          <VStack className="px-2 py-1">
            <PasswordValidationResultText isValid={PasswordValidator.contains8Characters(text)}>
              <FormattedMessage id="PasswordForm.lengthError" />
            </PasswordValidationResultText>
            <PasswordValidationResultText isValid={PasswordValidator.containsSpecialCharacters(text)}>
              <FormattedMessage id="PasswordForm.specialCharacterError" />
            </PasswordValidationResultText>
            <PasswordValidationResultText isValid={PasswordValidator.containsNumbers(text)}>
              <FormattedMessage id="PasswordForm.numbersError" />
            </PasswordValidationResultText>
            <PasswordValidationResultText isValid={PasswordValidator.containsUpperCaseLetters(text)}>
              <FormattedMessage id="PasswordForm.upperCaseError" />
            </PasswordValidationResultText>
          </VStack>
        ) : null}
      </VStack>
      <Absolute className="absolute right-0 top-0 p-5 opacity-50">
        {hidePassword ? (
          <Image
            width="24px"
            height="24px"
            src="/images/password_invisible.png"
            onClick={() => setHidePassword(false)}
            alt="Password invisible"
          />
        ) : (
          <Image
            width="24px"
            height="24px"
            src="/images/password_visible.png"
            onClick={() => setHidePassword(true)}
            alt="Password visible"
          />
        )}
      </Absolute>
    </Center>
  )
}
