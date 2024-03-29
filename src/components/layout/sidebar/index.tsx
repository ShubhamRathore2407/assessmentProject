import React, { useEffect, useState } from 'react';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import {
  StyledContainer,
  StyledLogoContainer,
  StyledMenuContainer,
  StyledMenuItemLabel,
  StyledMenuListContainer,
  StyledMenuListItemContainer,
  StyledMenuToggleContainer,
} from './styles';
import { Icon } from '@mui/material';
import { colors } from '../../../theme/palette';
import { routes } from '../../../utils/routes';
import ProjectIcon from '@mui/icons-material/Article';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from '../../sideDrawer';

interface Props {}

const menuItems = [
  {
    key: 'population',
    label: 'Population',
    icon: <SchoolIcon />,
    path: routes.population.root,
  },
  {
    key: 'crypto',
    label: 'Crypto',
    icon: <ProjectIcon />,
    path: routes.crypto.root,
  },
  {
    key: 'combined',
    label: 'Combined',
    icon: <ApartmentIcon />,
    path: routes.combined.root,
  },
];

const Sidebar: React.FC<Props> = ({}) => {
  const [showBurger, setShowBurger] = useState(true && window.innerWidth < 767);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1000);
  
  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prevValue) => !prevValue);
  };

  return (
    <>
      {showBurger ? (
        <SideDrawer />
      ) : (
        <StyledContainer sidebarOpen={sidebarOpen}>
          <StyledMenuContainer>
            <StyledMenuToggleContainer onClick={toggleSidebar}>
              <Icon
                component={
                  sidebarOpen ? ChevronLeftRoundedIcon : ChevronRightRoundedIcon
                }
                style={{
                  color: colors.white,
                }}
              />
            </StyledMenuToggleContainer>
            <StyledMenuListContainer>
              {menuItems.map((menuItem) => {
                const active = location.pathname.startsWith(menuItem.path);

                return (
                  <StyledMenuListItemContainer
                    active={active}
                    key={menuItem.key}
                    href={menuItem.path}
                    sidebarOpen={sidebarOpen}
                  >
                    {menuItem.icon}
                    {sidebarOpen && (
                      <StyledMenuItemLabel>
                        {menuItem.label}
                      </StyledMenuItemLabel>
                    )}
                  </StyledMenuListItemContainer>
                );
              })}
            </StyledMenuListContainer>
          </StyledMenuContainer>
        </StyledContainer>
      )}
    </>
  );
};

export default Sidebar;
