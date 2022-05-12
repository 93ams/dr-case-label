import { FC } from 'react'
import { AuthLayout } from '../client/component/layout'
import { LoginForm } from '../client/component/organism'

const Auth: FC = () => {
  return <AuthLayout><LoginForm/></AuthLayout>
}

export default Auth
