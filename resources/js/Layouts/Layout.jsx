import React from "react";
import Nav from "../Components/Nav";
import { Link } from "@inertiajs/inertia-react";
import "../../css/layout.css"; // Ensure to import your CSS file

const Layout = ({ children }) => {
    return (
        <div>
            <div className="banner">
                <Nav /> {/* Include your Nav component */}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
