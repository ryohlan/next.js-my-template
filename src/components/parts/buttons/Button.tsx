import React from 'react'
import { Absolute } from '../bases/Absolute'
import { HStack } from '../bases/HStack'
import { Loading } from '../loadings/Loading'

type Props = {
  visibleLoading?: boolean
  onClick: () => void
  disabled?: boolean
  className?: string | undefined
}

export const Button: React.FC<Props> = (props) => {
  return (
    <HStack className="relative items-center">
      <button
        disabled={props.disabled}
        className={`h-12 w-full rounded-xl py-2 px-4 font-bold text-white drop-shadow-lg disabled:opacity-20 ${
          props.className ?? ''
        }`}
        onClick={props.onClick}>
        {props.children}
      </button>
      <Absolute className="right-3">
        <Loading visible={props.visibleLoading ?? false} size={22} />
      </Absolute>
    </HStack>
  )
}
