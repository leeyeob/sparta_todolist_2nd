import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import PgTodo from "../pages/pg_todo";
import PgDetail from "../pages/pg_detail";
import PgCounter from "../pages/pg_counter";
import PgNew from "../pages/pg_new";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pg_todo" element={<PgTodo />} />
        <Route path="pg_detail/:id" element={<PgDetail />} />
        <Route path="pg_detail" element={<PgDetail />} />
        <Route path="pg_counter" element={<PgCounter />} />
        <Route path="pg_new" element={<PgNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;