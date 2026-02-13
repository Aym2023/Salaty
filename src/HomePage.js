import { styled }  from 'styled-components';
import PageNav  from './PageNav';

  const Main = styled.div`
  height: 100vh;
  margin: 2.5rem;
  background-image: linear-gradient(
       rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
     ),
    url('/bg.jpeg');
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
   `;

 const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 85%;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    text-align: center;
 `;

 const Heading1 = styled.h1`
  font-size: 4.5rem;
  line-height: 1.3;
`;

const Heading2 = styled.h2`
  width: 90%;
  font-size: 1.9rem;
  color: var(--color-light--1);
  margin-bottom: 2.5rem;
`;
 
  
function HomePage() {
    return (

        <Main>
      <PageNav />

          <Section>

          <Heading1>
         Salat is the main base in Islam
          <br />
          Salaty keeps track of your prayer time and qibla directions.
        </Heading1>
        <Heading2>
        Salat is one of the five pillars of Islam and is a fundamental act of worship for Muslims
         </Heading2>
        </Section>
        // </Main>
    );
}

export default HomePage;
