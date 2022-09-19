// src/pages/home.js

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Head from "../components/head";

const Home = () => {
    const navigate = useNavigate();

    return (
        <StyledLayout>
            <Head />
            {/* <h1>이곳은 home 2입니다.</h1> */}
            <StMainBox>
                <StBox borderColor="red" onClick={() => {navigate("/pg_todo")}}>
                    엽이의 Todo List 🚀</StBox>
                <StBox borderColor="green" onClick={() => {navigate("/pg_counter")}}>
                    Counter</StBox>
                <StBox borderColor="blue" onClick={() => {navigate("/pg_new")}}>
                    미완성 공간</StBox>
            </StMainBox>
        </StyledLayout>
    )
}

export default Home;

// Styled Components

const StyledLayout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`

const StMainBox = styled.div`
    margin: 10px;
    border-radius: 10px;
    height: 400px;
`

const StBox = styled.div`
    margin: 30px auto;
    width: 600px;
    border: 3px solid ${(props) => props.borderColor};
    border-radius: 10px;
    font-size: 24px;
    font-weight: 800;
    text-align : center;
    padding: 20px 0px 20px 0px;
    cursor: pointer;

    &:hover {
    border: 4px solid ${(props) => props.borderColor};
    font-size: 26px;
    font-weight: 900;
    }
`