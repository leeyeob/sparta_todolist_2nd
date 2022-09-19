// components/counter.js

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "../redux/modules/md_counter";

const Counter = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.MdCounter.number);
  const onChangeHandler = (evnet) => {
    const { value } = evnet.target;
    setNumber(+value)
  };
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number))
  };
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number))
  };

  return (
    <StyledLayout>
      <StContainer>
        <div>카운터 모듈 실험 공간</div>
        <div>{globalNumber}</div>
        <input type="number" onChange={onChangeHandler} />
        <button onClick={onClickAddNumberHandler}>더하기</button>
        <button onClick={onClickMinusNumberHandler}>빼기</button>
      </StContainer>
    </StyledLayout>
  );
};

export default Counter;

const StyledLayout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`

const StContainer = styled.div`
    margin: 10px;
    border-radius: 10px;
    height: 400px;
    font-size: 24px;
    font-weight: 800;
    background-color: #eee;
`