import Image from 'next/image'
import React from 'react'

type Props = {
  width: number
}

const rate = 99 / 346

export const Logo: React.VFC<Props> = (props) => {
  return (
    <Image src="/images/logo.png" width={`${props.width}px`} height={`${props.width * rate}px`} alt="Logo" />
  )
}
