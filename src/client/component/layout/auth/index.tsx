import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'

export const AuthLayout = ({ children }: PropsWithChildren<any>) => {
  return (
    <Container component='main' maxWidth='xs'>
      {children}
    </Container>
  )
}