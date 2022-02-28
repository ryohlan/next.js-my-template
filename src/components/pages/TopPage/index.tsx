import type { GetServerSideProps, NextPage } from 'next'
import { Head } from '../../parts/heads/Head'

export const TopPage: NextPage = () => {
  return (
    <>
      <Head.Title />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      statusCode: 302,
      destination: '/login',
    },
  }
}
