import React from 'react';
import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import { Template, UserAvatar, DeploymentPolicy, SettingsEdit } from '@carbon/icons-react';

const SideNavComponent = ({ mobielOpen, isExpanded, handlePageChange }) => {
    return (
        <SideNav
            isOpen={mobielOpen}
            expanded={isExpanded}
            aria-label="Side navigation"
        >
            <SideNavItems>
                <SideNavLink onClick={() => handlePageChange('Dasboard')}>
                    <div className="icon-large">
                        <Template />
                    </div>
                </SideNavLink>
                <SideNavLink onClick={() => handlePageChange('Profile')}><UserAvatar /></SideNavLink>
                <SideNavLink onClick={() => handlePageChange('Deployments')}><DeploymentPolicy /></SideNavLink>
                <SideNavLink onClick={() => handlePageChange('Settings')}><SettingsEdit /></SideNavLink>
            </SideNavItems>
        </SideNav>
    )
}

export default SideNavComponent
