import React from 'react'
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';
import Deployments from './Deployments';
import SettingsPage from './SettingsPage';
import { Button } from '@carbon/react';
import { ArrowLeft, ArrowRight } from '@carbon/icons-react';
import SideNavComponent from './SideNavComponent';

const ModernDashboard = () => {
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


    const renderPage = () => {
        switch (currentPage) {
            case 'Dashboard':
                return <DashboardPage />
            case 'Profile':
                return <ProfilePage />
            case 'Deployments':
                return <Deployments />
            case 'Settings':
                return <SettingsPage />
            default:
                return <DashboardPage />
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <Button onClick={handleDrawerToggle}>
                {mobileOpen ? <ArrowLeft /> : <ArrowRight />}
            </Button>
            <SideNavComponent
                mobileOpen={mobileOpen}
                isExpanded={isExpanded}
                handlePageChange={handlePageChange}
            />
            <main style={{ marginLeft: mobileOpen ? (isExpanded ? '340px' : '84px') : '0', transition: 'margin-left 0.1s' }}>
                <div>{renderPage()}</div>
            </main ></div >
    )
}

export default ModernDashboard
