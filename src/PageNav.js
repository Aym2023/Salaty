import {  NavLink } from 'react-router-dom';
import { styled }  from 'styled-components';

 const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   color:#242a2e;
 `;

  const UL = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4rem;
  `;

  const LI = styled.li`
    font-size: 3rem;
    color: #0000;
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
