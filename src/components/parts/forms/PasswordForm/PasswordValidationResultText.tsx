import Image from 'next/image'
import React from 'react'
import { Center } from '../../bases/Center'
import { HStack } from '../../bases/HStack'
import { Text } from '../../bases/Text'

type Props = {
  isValid: boolean
}

export const PasswordValidationResultText: React.FC<Props> = (props) => {
  return (
    <HStack className={`items-center py-0.5 opacity-${props.isValid ? 100 : 50}`}>
      <Check checked={props.isValid} />
      <Text className="ml-1 text-xs leading-4 text-black">{props.children}</Text>
    </HStack>
  )
}

type CheckProps = {
  checked: boolean
}

const Check: React.VFC<CheckProps> = (props) => {
  return (
    <Center className={`h-3 w-3 rounded-xl border-0.5 border-black ${props.checked ? 'bg-black' : ''}`}>
      {props.checked ? (
        <Image src="/images/password_validation_check.png" width={8} height={8} alt="check" />
      ) : null}
    </Center>
  )
}
