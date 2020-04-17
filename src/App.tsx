import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Board from "./board";

const App = () => {
  return (
    <Container>
      <Table>
        <Board />
      </Table>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Table = styled.div`
  height: 400px;
  width: 400px;
  background-color: #999;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
`;

const mapStateToProps = (state: { array: any }) => {
  return {
    array: state.array,
  };
};

export default connect(mapStateToProps)(App);
