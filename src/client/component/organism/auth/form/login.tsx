import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { useAuth } from '../../../../provider/auth'
import { LockOutlined } from '@mui/icons-material'
import { FormEvent, useEffect } from 'react'
import { useRouter } from 'next/router'

export const LoginForm = () => {
  const { login, cleanError, error, isAuthenticated } = useAuth()
  const router = useRouter()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login(event.currentTarget)
  }
  useEffect(cleanError, [])
  useEffect(() => {
    if (isAuthenticated) router.push('/')
  }, [isAuthenticated])
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Box sx={{ display: 'flex' }}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            style={{ flex: 1 }}
          />
          <Typography color="red" variant="subtitle2">
            {error}
          </Typography>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  )
}
