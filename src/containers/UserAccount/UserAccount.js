import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import LoginModal from '../../components/UserAccount/Login/LoginModal';
import Logo from '../../components/NavBar/Logo';
// import {validateAndSubmit} from '../../components/UI/Validation/LoginModal';



const DivWrapper = styled.div`
  margin: 0px;
    font-family: 'Hind', sans-serif;


  height: 90%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column; 
  align-items: center;

  top: 10%;
  left: 0;
  background:  #0060ac;
  transition: transform .5s ease-in-out;

  padding: 0px 0px;
  z-index: 100;
  margin: 0px;
  box-sizing: border-box;
  transition: all .5s ease-in-out;
  transform:${props => props.close ? 'translateY(20%)' : 'translateY(0%)'};
`;



const MainDisplay = styled.div`


  background: #0060ac;
  width: 100%;
  height: auto;
  box-sizing: inherit;
  padding: 0px 18px;


`;

const Title = styled.h1`
  margin: 16px 0px 0px 0px;
  color: white;
  text-align: center;
  font-size: 45px;

`;


const UserAccount = (props) =>{




  let redirectIfAuth;
  if(props.isAuth){
    redirectIfAuth = (<Redirect to="/dashboard"/>);
  }

  

  return (
    <DivWrapper showSidedraw={props.showSidedraw} close={props.showSidedraw}>
      

      <MainDisplay move={props.showSidedraw} auth={props.isAuth}>
        <Title>login</Title>
      {redirectIfAuth}
        <LoginModal firebaseError={props.firebaseError}/>
      </MainDisplay>
     
    </DivWrapper>
  )
}

const mapStateToProps = state => {
  return {
    showSidedraw: state.navReducer.showSidedraw,
    isAuth: state.authReducer.token !== null,
    firebaseError: state.authReducer.error,

  }
};



export default connect(mapStateToProps)(UserAccount);