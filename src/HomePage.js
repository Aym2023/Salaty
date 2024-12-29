import {  NavLink } from 'react-router-dom';
import { styled }  from 'styled-components';

  const Main = styled.div`
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url("/bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
  `;

  

function HomePage() {
    return (
        <Main>
           <ul>
            <li>
            <NavLink to='qibla'>
            Qibla
            </NavLink>          
            </li>
            <li>
            <NavLink to='time'>
            Time
           </NavLink>
            </li>
           </ul>
        </Main>
    );
}

export default HomePage;
