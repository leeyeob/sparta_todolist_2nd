// src/head.js

import React from "react";
import styled from "styled-components";
import "./compstyle.css";
import { useNavigate } from "react-router-dom";

const Head = () => {
    const navigate = useNavigate();
    const goHome = () => { navigate("/") };

    return (
        <StyledHead>
            <StyledHeadLeft>μ½'s React Practice β</StyledHeadLeft>
            <button className="head_button" onClick={goHome}>
                Go π νμΌλ‘
            </button>
            <StyledHeadRight>Sparta</StyledHeadRight>
        </StyledHead>
    )
}

export default Head;

// Styled Components

const StyledHead = styled.div`
    height: 50px;
    border: 5px solid;
    border-radius: 10px;
    border-color: #eee;
    font-size: 24px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 25px 0px 25px;
    margin : 10px;
`

const StyledHeadLeft = styled.div`
    float: left;
`

const StyledHeadRight = styled.div`
    float: right;
`

