import { NextPage } from 'next'
import React from 'react'
import { useIntl } from 'react-intl'
import { Head } from '../../parts/heads/Head'
import { Layout } from './Layout'
import { useProps } from './useProps'

export const LoginPage: NextPage = () => {
  const intl = useIntl()
  return (
    <>
      <Head.Title title={intl.formatMessage({ id: 'LoginPage.headTitle' })} />
      <Layout {...useProps()} />
    </>
  )
}
