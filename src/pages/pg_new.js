// src/pages/pg_new.js

import React from "react";
import Head from "../components/head";
import { useSelector } from "react-redux";

const PgNew = () => {
    const counterStore = useSelector((state) => state);
    // console.log(counterStore)

    return (
        <>
        <Head />
        <h1>이곳은 새로운 페이지입니다.</h1>
        <p>멋진 페이지를 만들거에요.</p>
        <h2>{counterStore.MdNew.name}</h2>
        </>
    )
}

export default PgNew;