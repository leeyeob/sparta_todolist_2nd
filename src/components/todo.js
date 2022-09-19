// components/todo.js

import React from "react";
import styled from "styled-components";
import "./compstyle.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo, removeTodo, completeTodo } from "../redux/modules/md_todo";

const Todo = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const onTitleHandler = (event) => {
        setTitle(event.target.value)
    };
    const onBodyHandler = (event) => {
        setBody(event.target.value)
    };
    const dispatch = useDispatch();
    const todoAdd = () => {
        dispatch(addTodo({ title, body }))
    };
    const clearInput= () => {
        inputTitle.current.value = "";
        inputBody.current.value = "";
    }
    const onEnterPress = (e) => {
        if(e.key==='Enter'){addTodoList()};
    };
    const addTodoList = () => {
        if (inputTitle.current.value === "") {
            alert("제목을 입력하세요");
        } else {
            if (inputBody.current.value === "") {
                alert("내용을 입력하세요");
            } else {
                todoAdd();
                clearInput();
            }
        };
    };
    const remove = (todo) => {
        dispatch(removeTodo(todo))
    };
    const complete = (todo) => {
        dispatch(completeTodo(todo))
    };
    const inputTitle = useRef(null);
    const inputBody = useRef(null);
    const todos = useSelector(state => state.MdTodo);
    const navigate = useNavigate();
    const clickDetail = (todo) => {
        navigate(`/pg_detail/${todo.id}`, { state: { todo } })
    };

    return (
        <>
            <div>
                <div className="inputbox">
                    제목<input placeholder="제목을 입력하세요" ref={inputTitle} className="inputTitle" onChange={onTitleHandler} onKeyPress={onEnterPress} />
                    내용<input placeholder="내용을 입력하세요" ref={inputBody} className="inputBody" onChange={onBodyHandler} onKeyPress={onEnterPress} />
                    <button className="inputBtn" onClick={() => {addTodoList();}}>
                        ⛳할일 추가
                    </button>
                </div>
            </div>
            <div className="todo">
                <h2>Working.. 🔥</h2>
                <div className="todoContainer">
                    {todos.map((todo) => (
                        todo.isDone === false ?
                            <div className="workingTodo" key={todo.id}>
                                {/* id :{todo.id} */}
                                <StyledTitle>{todo.title}</StyledTitle>
                                <hr />{todo.body}<br />
                                <StyledBtnSet>
                                    <button className="delBtn" onClick={() => { remove(todo.id) }}>
                                        삭제
                                    </button>
                                    <button className="chngBtn" onClick={() => { complete(todo) }}>
                                        완료
                                    </button>
                                    <button className="detailBtn" onClick={() => { clickDetail(todo) }}>
                                        상세</button>
                                </StyledBtnSet>
                            </div>
                            : null))}
                </div>

                <h2>Done..! 🎉</h2>
                <div className="todoContainer">
                    {todos.map((todo) => (
                        todo.isDone ?
                            <div className="doneTodo" key={todo.id}>
                                {/* id :{todo.id} */}
                                <StyledTitle>{todo.title}</StyledTitle>
                                <hr />{todo.body}<br />
                                <StyledBtnSet>
                                    <button className="delBtn" onClick={() => { remove(todo.id) }}>
                                        삭제
                                    </button>
                                    <button className="chngBtn" onClick={() => { complete(todo) }}>
                                        취소
                                    </button>
                                    <button className="detailBtn" onClick={() => { clickDetail(todo) }}>
                                        상세</button>
                                </StyledBtnSet>
                            </div>
                            : null))}
                </div>
            </div>
        </>
    )
}

export default Todo;

// Styled Components
const StyledTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const StyledBtnSet = styled.div`
    display: flex;
    justify-content: space-around;
    margin : auto;
    padding: 20px 0px 0px 0px;
`
