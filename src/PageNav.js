import {  NavLink } from 'react-router-dom';
import { styled }  from 'styled-components';

 const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: #242a2e;
  `;

  const UL = styled.ul`
    list-style: none;
    display: flex;
    justify-content: end;
    align-items: start;
    gap: 4rem;
  `;

  const LI = styled.li`
    font-size: 3.2rem;
    color: yellow;
  `;


function PageNav() {
    return (
      <Nav>
            <UL>
            <LI>
            <NavLink to='qibla'>
            Qibla
            </NavLink>          
            </LI>

            <LI>
            <NavLink to='time'>
            Time
           </NavLink>
            </LI>
           </UL>
         </Nav>
    );
}

export default PageNav;
