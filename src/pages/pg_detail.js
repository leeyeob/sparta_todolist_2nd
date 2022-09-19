// src/pages/pg_detail.js

import React from "react";
import styled from "styled-components";
import Head from "../components/head";
import { useNavigate, useLocation } from "react-router-dom";

const PgDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <StyledLayout>
            <Head />
            <DetailContaner>
                {/* <h1>이곳은 상세페이지 입니다.</h1> */}
                <div>
                    id : {location.state.todo.id}
                    <br/>
                    <StyledTitle>{location.state.todo.title}</StyledTitle>
                    <hr/>
                    <StyledBody>{location.state.todo.body}</StyledBody>
                    <br/>
                    <StyledIsDone>{location.state.todo.isDone ? "아자, 완료~😁" : "아직 미완료..😢"}</StyledIsDone>
                    <StyledBtn
                    onClick={() => {navigate("/pg_todo");}}>
                    이전으로
                    </StyledBtn>
                </div>
                
            </DetailContaner>
        </StyledLayout>
    )
}

export default PgDetail;

// Styled Components

const StyledLayout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`

const DetailContaner = styled.div`
    margin: auto;
    border: 4px solid #aaa;
    border-radius: 12px;
    padding: 12px 12px 12px 12px;
    width: 500px;
    height: 500px;
    font-size: 20px;
`

const StyledBtn = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 100px;
    border: 3px solid;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 800;
    text-align : center;
    padding: 10px;
    cursor: pointer;

    &:hover {
    border: 4px solid;
    border-radius: 10px;
    font-size: 21px;
    font-weight: 900;
    }
`

const StyledTitle = styled.div`
    font-size: 28px;
    font-weight: bold;
`

const StyledBody = styled.div`
    font-size: 22px;
    font-weight: bold;
`

const StyledIsDone = styled.div`
    font-size: 22px;
    font-weight: bold;
    text-align : center;
`