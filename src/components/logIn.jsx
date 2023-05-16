import React , {useEffect}from 'react'
import styled from 'styled-components';
import{ signInAPI }from '../redux/actions/index'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogIn = (props) => {
  const Navigate = useNavigate();


   useEffect(() => {
      if (props.user) {
        Navigate("/Home");
      }
    }, [props.user, Navigate]);
  
  const handleSignInWithGoogle = () => {
    props.SignIn();

   
  }
  return (
    
      <Container>
      <Nav>
          <A href='index.html'>
          <img src="/images/logo.svg" alt="" />
          </A>
          <Join> join now</Join>
          <Sign>sign in</Sign>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>     
        <Google onClick={handleSignInWithGoogle}>
      <img src="/images/google.svg" alt="" />
      <p>Sign in with Google</p>
    </Google>

        </Form>
      
      </Section>
      </Container>

    

  )
};





const Container = styled.div`
padding: 0px;
  ;
`
const Nav = styled.nav`
max-width: 1128px;
padding: 12px 0pxs 16px;
margin-left:15px;
display: flex;
align-items: center;
position: relative;
justify-content: flex-end;
flex-wrap: nowrap;
& > a {
  width: 135px;
  height: 34px;
      margin-left: 15px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
}
`;
const A = styled.a`
max-width: 100px;
width: 1.5em;
height:1.5em;
margin-right: auto;
padding-left: 15px;
margin-left: 15px;

`;
const Join = styled.a`
font-size: 16px;
padding: 10px 10px;
text-align: center;
text-decoration: none;
display:flex  
border-radius: 4px;
color: rgba(0, 0, 0, 0.6);
&:hover {
  background-color: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
}

` 
const Sign = styled.a`
box-shadow: rgb(10, 102, 194) 0px 0px 0px 1px inset;
color: rgb(10, 102, 194);
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 35px;
padding: 5px 5px;
text-align: center;
margin-right: 15px;
background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 130px;
  padding-top: 40px;
  padding: 40px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`
const Hero = styled.div`
width: 100%;

h1{
  width: 55%;
  font-size: 50px;
  font-weight: 600;
  color: #2977c9;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
    width: 100%;
    line-height: 2;
  }
}

img{
  width: 700px;
  position: absolute;
  bottom: -13px;
  right: -100px;
  @media (max-width: 768px) {
    top: 230px;
    width: initial;
    position: initial;
    height: initial;
  }
}
`
const Form = styled.div`
margin-top: 100px;
width:440px;
@media (max-width: 768px) {
  margin-top: 20px;
}
`
const Google = styled.button`
display:flex;
justify-content: center;
background-color: white;
align-items: center;
border-radius: 45px;
width: 100%;
height: 60px;
box-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    transition-duration: 167ms;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.4);
    &:hover {
      background-color: rgba(255, 207, 207, 0.25);
      color: rgba(0, 0, 0, 0.75);
    }
    img{
      margin-right: 5px;
    }
`

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps =  (dispatch) =>  {
  return {
    SignIn: () => dispatch(signInAPI()),
  };
};





export default connect(mapStateToProps, mapDispatchToProps)(LogIn);