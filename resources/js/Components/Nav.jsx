import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Nav = () => {
    return (
        <nav className="p-16">
            <ul className="flex space-x-4 items-center">
                <Link href="/">
                    <img
                        src="/images/logowhite.png"
                        alt="Logo"
                        className="size-40"
                    />
                </Link>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Nav;
