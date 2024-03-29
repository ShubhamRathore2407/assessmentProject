import { css, styled } from "styled-components"
import { fontSize, fontWeight } from "../../../theme/typography"
import { brand, colors } from "../../../theme/palette"

export const StyledContainer = styled.div<{sidebarOpen:boolean}>`
    width:${({sidebarOpen})=> sidebarOpen ? 264 : 112}px;
    min-height: calc(100vh - 32px);
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

export const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 1%;
    padding: 16px 24px;
    border-radius: 10px;
    background-color: ${colors.blackLight};
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05), 0px 0px 15px 0px rgba(40, 41, 61, 0.03);
`

export const StyledMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
    border-radius: 22px;
    background-color: ${colors.blackLight};
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05), 0px 0px 15px 0px rgba(40, 41, 61, 0.03);
    flex-direction: column;
    flex : 1;
    padding-top: 40px;
    position:relative;
`

export const StyledLogo = styled.img`

`
export const DropdownMenu = styled.div`
  position: absolute;
  top: 10%;
  left: 20;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const DropdownMenuItem = styled.div`
  /* Dropdown menu item styles */
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
export const StyledMenuListContainer = styled.div`
    display: flex;
    flex : 1;
    flex-direction: column;
    gap: 16px;
`

export const StyledMenuListItemContainer = styled.a<{active?:boolean, sidebarOpen?:boolean}>`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    padding : 12px 20px;
    border-radius: 10px;
    color : ${colors.white};
    font-size : ${fontSize.b1};
    font-weight : ${fontWeight.medium};
    &:hover {
        ${({active})=>!active && css`
        background : ${colors.black100};
    `}
    }
    ${({active})=>active && css`
        background : ${colors.black50};
        color : ${colors.radium};
        font-weight : ${fontWeight.bold};
    `}
    ${({sidebarOpen})=>!sidebarOpen && css`
        padding : 12px 24px;
        justify-content: center;
    `}
    
`

export const StyledMenuItemIcon = styled.img<{active?:boolean}>`
    width : 18px;
    height : 18px;
    filter: grayscale(100%) brightness(28%) hue-rotate(-190deg) saturate(720%) contrast(0.8);
    ${({active})=>active && css`
        filter : none;
    `}
`
export const StyledMenuItemLabel = styled.span`
   

`

export const StyledLogoutContainer = styled.div`

`

export const StyledMenuToggleContainer = styled.div`
    background-color : ${brand.secondaryMain};
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: absolute;
    top: 40px;
    right: -10px;
    cursor : pointer;
`
