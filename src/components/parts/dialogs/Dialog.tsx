import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Absolute } from '../bases/Absolute'
import { Center } from '../bases/Center'
import { HStack } from '../bases/HStack'
import { Text } from '../bases/Text'
import { VStack } from '../bases/VStack'
import { Button } from '../buttons/Button'

export type Props = {
  type: 'default' | 'error'
  message: string
  buttons: Array<
    | { type: 'ok'; label?: string; onClick?: () => void }
    | { type: 'cancel'; label?: string; onClick?: () => void }
    | { type: 'close'; label?: string; onClick?: () => void }
  >
}

export const Dialog: React.VFC<Props> = (props) => {
  return (
    <Absolute className="top-0 left-0 z-50 h-full w-full">
      <Center className="h-full w-full p-4">
        <VStack className="w-full max-w-lg rounded-xl border border-solid border-neutral-600 bg-neutral-700 p-4">
          <Center>
            <Text className="mt-2 mb-6 text-lg text-white">{props.message}</Text>
          </Center>
          <HStack>
            <HStack className="relative items-center">
              {props.buttons.map((button) => {
                return (
                  <>
                    {button.type === 'ok' ? (
                      <Button className="mx-1 bg-neutral-50" onClick={button.onClick ?? (() => {})}>
                        <Text className="text-neutral-800">
                          {button.label ?? <FormattedMessage id="Dialog.ok" />}
                        </Text>
                      </Button>
                    ) : null}
                    {button.type === 'cancel' ? (
                      <Button
                        className="mx-1 border border-solid border-neutral-600 bg-neutral-700"
                        onClick={() => {
                          button.onClick?.()
                        }}>
                        <Text>{button.label ?? <FormattedMessage id="Dialog.cancel" />}</Text>
                      </Button>
                    ) : null}
                    {button.type === 'close' ? (
                      <Button
                        className="mx-1 border border-solid border-neutral-500 bg-neutral-600"
                        onClick={() => {
                          button.onClick?.()
                        }}>
                        <Text>{button.label ?? <FormattedMessage id="Dialog.close" />}</Text>
                      </Button>
                    ) : null}
                  </>
                )
              })}
            </HStack>
          </HStack>
        </VStack>
      </Center>
    </Absolute>
  )
}
