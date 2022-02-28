import React from 'react'
import NextHead from 'next/head'

export const Title: React.VFC<{ title?: string }> = (props) => {
  return (
    <NextHead>
      <title>{props.title ? `${props.title} | ` : ''} App</title>
    </NextHead>
  )
}

export const Description: React.VFC<{ description: string }> = (props) => {
  return (
    <NextHead>
      <meta name="description" content={props.description} />
    </NextHead>
  )
}

export const Favicon: React.VFC<{ faviconUrl: string }> = (props) => {
  return (
    <NextHead>
      <link rel="icon" href={props.faviconUrl} />
    </NextHead>
  )
}

export const Head = { Title, Description, Favicon }
