import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { I18nProvider } from '../../i18n/I18nProvider'
import Head from 'next/head'
import { ApolloProviderWrapper } from '../apollo/ApolloProviderWrapper'
import { DialogProvider } from '../../hooks/useDialog'

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex min-h-screen min-w-full justify-center bg-neutral-930 p-0">
        <div className="min-h-screen w-full max-w-screen-md">
          <I18nProvider>
            <RecoilRoot>
              <DialogProvider>
                <ApolloProviderWrapper>
                  <Component {...pageProps} />
                </ApolloProviderWrapper>
              </DialogProvider>
            </RecoilRoot>
          </I18nProvider>
        </div>
      </main>
    </>
  )
}
