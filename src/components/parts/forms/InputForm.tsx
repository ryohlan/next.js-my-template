import React, { HTMLAttributes, ReactElement, useState } from 'react'
import { Absolute } from '../bases/Absolute'
import { VStack } from '../bases/VStack'

type Props = {
  hint: string | ReactElement
  secureTextEntry?: boolean
  onChangeText: (text: string) => void
  onFocusChanged?: (focused: boolean) => void
  inputMode: HTMLAttributes<unknown>['inputMode']
}

export const InputForm: React.VFC<Props> = (props) => {
  const [hintAnimationStyle, setHintAnimationStyle] = useState<
    'animate-form-hint-focus' | 'animate-form-hint-blur'
  >()
  return (
    <VStack className={`rounded-xl`}>
      <VStack className="relative row-span-2 h-14 w-full overflow-hidden rounded-xl bg-black">
        <Absolute className="top-4 left-4">
          <VStack className={`${hintAnimationStyle} text-lg text-neutral-500`}>{props.hint}</VStack>
        </Absolute>
        <Absolute className="h-full w-full">
          <VStack>
            <input
              className={`h-full w-full overflow-hidden rounded-xl bg-transparent px-3 pt-4 text-white focus-visible:border-white`}
              inputMode={props.inputMode}
              type={props.secureTextEntry ? 'password' : undefined}
              onFocus={() => {
                setHintAnimationStyle('animate-form-hint-focus')
                props.onFocusChanged?.(true)
              }}
              onChange={(e) => props.onChangeText(e.target.value)}
              onBlur={(event) => {
                props.onFocusChanged?.(false)
                const isNotEmpty = event.target.value.length > 0
                setHintAnimationStyle(isNotEmpty ? 'animate-form-hint-focus' : 'animate-form-hint-blur')
              }}
            />
          </VStack>
        </Absolute>
      </VStack>
    </VStack>
  )
}
