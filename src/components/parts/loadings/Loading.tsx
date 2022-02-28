import React from 'react'

type Props = {
  visible: boolean
  size: number
  color?: string
}

export const Loading: React.VFC<Props> = (props) => {
  return props.visible ? (
    <div className="flex justify-center">
      <div
        className="animate-spin rounded-full border-2 border-t-transparent"
        style={{
          height: props.size,
          width: props.size,
          borderColor: props.color ?? 'white',
          borderTopColor: 'transparent',
        }}></div>
    </div>
  ) : null
}
