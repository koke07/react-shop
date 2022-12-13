import React from 'react';
import { Outlet } from "react-router-dom";
const Layout = ({ props }) => {
    return (

        <div className = "Layout">
           < Outlet />
        </div >
    );
}

export default Layout;