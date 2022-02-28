import React from 'react'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { strings } from './strings'

export const I18nProvider: React.FC = ({ children }) => {
  const locale = useRouter().locale! // next.config.jsでdefaultLocaleを設定しているのでかならずstringになる
  const localeStrings = strings[locale]
  return (
    <IntlProvider messages={localeStrings} locale={locale}>
      {children}
    </IntlProvider>
  )
}
