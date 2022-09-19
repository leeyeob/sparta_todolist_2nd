// src/layout.js

import React from "react";
import "./compstyle.css";

const Layout = () => {
    return <StyledLayout />
}

export default Layout;

// Styled Components

const StyledLayout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`