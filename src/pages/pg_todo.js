// src/pages/pg_todo.js

import React from "react";
import Head from "../components/head";
import Todo from "../components/todo";

const PgTodo = () => {
    return (
        <>
            <Head />
            {/* <h1>이곳은 To Do List 입니다.</h1> */}
            <Todo />
        </>
    )
}

export default PgTodo;