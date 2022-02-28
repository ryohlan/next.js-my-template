import { useRouter } from 'next/router'
import { PincodeVerificationPage } from '../../../components/pages/PincodeVerificationPage'

const Page = () => {
  const email = useRouter().query.email as string
  return <PincodeVerificationPage email={email} />
}

export default Page
