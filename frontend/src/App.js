import React from 'react'
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material'

const drawerWidth = 240
const collapsedDrawerWidth = 64

function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography paragraph>
        Welcome to your dashboard! Here you can see an overview of your activities and key metrics.
      </Typography>
      {/* Add more dashboard content here */}
    </Box>
  )
}

function ProfilePage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography paragraph>
        This is your profile page. You can view and edit your personal information here.
      </Typography>
      {/* Add more profile content here */}
    </Box>
  )
}

function SettingsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography paragraph>
        Adjust your account settings and preferences on this page.
      </Typography>
      {/* Add more settings content here */}
    </Box>
  )
}

export default function ModernDashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState('Dashboard')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded)
  }

 const handlePageChange = (pageName) => {
    setCurrentPage(pageName)
    setMobileOpen(false)
 }

  const drawer = (
    <div>
      <Toolbar 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={handleExpandToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <List>
        {['Dashboard', 'Profile', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isExpanded ? 'initial' : 'center',
                px: 2.5,
              }}
                onClick={() => {handlePageChange(text)}}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isExpanded ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index === 0 ? <DashboardIcon /> : index === 1 ? <PersonIcon /> : <SettingsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: isExpanded ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

 const renderPage = () => {
     switch (currentPage) {
         case 'Dashboard':
            return <DashboardPage />
         case 'Profile':
            return <ProfilePage />
         case 'Settings':
            return <SettingsPage />
         default:
            return <DashboardPage />
      }
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${isExpanded ? drawerWidth : collapsedDrawerWidth}px)` },
          ml: { sm: `${isExpanded ? drawerWidth : collapsedDrawerWidth}px` },
          transition: theme => theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Modern Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ 
          width: { sm: isExpanded ? drawerWidth : collapsedDrawerWidth },
          flexShrink: { sm: 0 },
          transition: theme => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: isExpanded ? drawerWidth : collapsedDrawerWidth,
              transition: theme => theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: 'hidden',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          width: { sm: `calc(100% - ${isExpanded ? drawerWidth : collapsedDrawerWidth}px)` },
          transition: theme => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Toolbar />
        {renderPage()}
      </Box>
    </Box>
  )
}
