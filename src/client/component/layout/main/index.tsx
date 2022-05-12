import HeaderBar from '../../molecule/bar/header'
import { PropsWithChildren } from 'react'
import * as React from 'react'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useAuth } from '../../../provider/auth'

const MainLayout = ({ children }: PropsWithChildren<any>) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { username, logout } = useAuth()
  const router = useRouter()
  const handleMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  return (
    <Box>
      <HeaderBar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => router.push('/')}
        >
          Dr. CaseLabel
        </Typography>
        <Typography>Logged In as Dr. {username}</Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </Box>
      </HeaderBar>
      <Box component="main" sx={{ padding: '15px' }}>
        {children}
      </Box>
    </Box>
  )
}
export default MainLayout
