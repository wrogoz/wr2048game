import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Board from "./board";
import Boardwithclasses from './boardwithclasses'
import Button from './newGameButton';


const App = () => {



  return (
    <Container>
      <Table>
        <Button btnText="New Game"/>
        <Boardwithclasses/>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Table = styled.div`
  height: 400px;
  width: 400px;
  background-color: #fff;
  border:2px solid #777;
  border-radius:10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  padding:15px;
  position:relative;
`;

const mapStateToProps = (state: { array: any }) => {
  return {
    array: state.array,
  };
};

export default connect(mapStateToProps)(App);
