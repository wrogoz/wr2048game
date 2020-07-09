import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Boardwithclasses from './boardwithclasses'
import Button from './newGameButton';

interface AppProps {

  result:number;
  gameOver:boolean;
}
const App = (props: AppProps ) => {



  return (
    <Container>
      <Table>
        <Button btnText="New Game"/>
        <Boardwithclasses/>
  <Score>Score: {props.result}</Score>
  {props.gameOver?<Score>Game Over </Score>:null }

      </Table>
    </Container>
  );
};

const Container = styled.div`
  height: 96vh;
  width: 98vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Table = styled.div`
  height: 500px;
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
const Score = styled.p`
  text-align:center;
  text-transform:uppercase;
  font-size:2rem;
  margin: 0;
  border-top:1px solid #777;
  padding:10px;

`
const mapStateToProps = (state: { array: any ,result:number,gameOver:boolean}) => {
  return {
    array: state.array,
    result:state.result,
    gameOver:state.gameOver
  };
};

export default connect(mapStateToProps)(App);
