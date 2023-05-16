import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Main from './Main';
function Home() {
  return( 
    <Container>
     <Section>
        <h5>
          <a href='#'>Hiring in a hurry?</a>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
        </h5>
      </Section>
      <Layout>
        <LeftSide/>
        <Element>
        <Main/>
        </Element>
        <Element> 
        <RightSide/>
        </Element>
      </Layout>
    </Container>
  );
}
const Container = styled.div`
padding-top: 55px;
max-width: 100%;
`;
const Section = styled.section`
min-height: 50px;
padding: 16px 0;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
display: flex;
justify-content: center;
h5 {
  color: #0a66c2;
  font-size: 14px;
  a {
    font-weight: 700;
    margin-right: 10px;
  }
}
p {
  font-size: 14px;
  color: #434649;
  font-weight: 600;
  display: inline-block;
}
@media (max-width: 768px) {
  flex-direction: column;
  padding: 15px 5px;
}
`;
const Layout = styled.div`
display: grid;
grid-template-areas: "LeftSide Main RightSide";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
cloumn-gap: 25px;
row-gap: 25px;
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  padding: 0 5px;
}
`;

const Element = styled.div`
padding-left:25px;
@media(max-width: 768px){
  padding-left: 0;
  
}
`
export default Home;