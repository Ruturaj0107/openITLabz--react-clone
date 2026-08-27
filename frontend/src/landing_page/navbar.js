import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const dropdowns = {
    about: {
        label: "About Us",
        items: [{ label: "Leadership", to: "/leadership" }],
    },
    courses: {
        label: "Courses",
        items: [
            {
                label: "Cloud Computing",
                children: [
                    { label: "Amazon Web Services", to: "/amazon-web-services" },
                    { label: "Microsoft Azure", to: "/microsoft-azure" },
                    { label: "Google Cloud Platform", to: "/google-cloud-platform" },
                ],
            },
            {
                label: "DevOps",
                children: [
                    { label: "DevOps Professional", to: "/devops" },
                    { label: "Azure DevOps", to: "/azure-devops" },
                    { label: "Docker Certified Associate", to: "/docker-certified-associate" },
                    { label: "Certified Kubernetes Administrator", to: "/certified-kubernetes-administrator" },
                ],
            },
            { label: "Artificial Intelligence", children: [{ label: "Artificial Intelligence", to: "/artificial-intelligence" }] },
            { label: "Machine Learning", children: [{ label: "Machine Learning", to: "/machine-learning" }] },
            { label: "Data Science", children: [{ label: "Data Science", to: "/data-science" }] },
            { label: "Python Programming", children: [{ label: "Python Programming", to: "/project-oriented-python" }] },
        ],
    },
    resources: {
        label: "Resources",
        items: [
            { label: "Batches", to: "/batch" },
            { label: "Gallery", to: "/gallery" },
            { label: "Downloads", to: "/downloads" },
        ],
    },
};

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const navbarRef = useRef(null);

    const closeNavigation = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
        setOpenSubmenu(null);
    };

    useEffect(() => {
        const handlePointerDown = (event) => {
            if (!navbarRef.current?.contains(event.target)) {
                setOpenDropdown(null);
                setOpenSubmenu(null);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpenDropdown(null);
                setOpenSubmenu(null);
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const renderDropdown = (name) => {
        const dropdown = dropdowns[name];
        const isOpen = openDropdown === name;
        const menuId = `${name}-menu`;

        return (
            <li className={`nav-item navbar-dropdown${isOpen ? " is-open" : ""}`}>
                <button
                    className="nav-link navbar-dropdown-toggle fnt-clr-txt"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() => {
                        setOpenDropdown(isOpen ? null : name);
                        setOpenSubmenu(null);
                    }}
                >
                    {dropdown.label}
                    <img src="./assets/down-arrow.svg" alt="" aria-hidden="true" className="dropdown-arrow" />
                </button>
                <ul className="dropdown-menu" id={menuId} aria-label={`${dropdown.label} links`}>
                    {dropdown.items.map((item) => {
                        if (!item.children) {
                            return (
                                <li key={item.label}>
                                    <Link className="dropdown-item" to={item.to} onClick={closeNavigation}>{item.label}</Link>
                                </li>
                            );
                        }

                        const submenuId = `${name}-${item.label.toLowerCase().replaceAll(" ", "-")}-menu`;
                        const isSubmenuOpen = openSubmenu === item.label;
                        return (
                            <li className={`nested-dropdown${isSubmenuOpen ? " is-open" : ""}`} key={item.label}>
                                <button
                                    className="dropdown-item nested-dropdown-toggle"
                                    type="button"
                                    aria-expanded={isSubmenuOpen}
                                    aria-controls={submenuId}
                                    onClick={() => setOpenSubmenu(isSubmenuOpen ? null : item.label)}
                                >
                                    {item.label}<span className="nested-dropdown-arrow" aria-hidden="true">›</span>
                                </button>
                                <ul className="dropdown-menu nested-dropdown-menu" id={submenuId} aria-label={`${item.label} courses`}>
                                    {item.children.map((course) => (
                                        <li key={course.label}>
                                            <Link className="dropdown-item" to={course.to} onClick={closeNavigation}>{course.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top py-2 px-3" ref={navbarRef}>
            <div className="container espl-navbar-container">
                <Link to="/" aria-label="Open IT Labz home" onClick={closeNavigation}>
                    <img src="./assets/open-it-labz-logo.svg" id="logo" alt="Open IT Labz" className="logo-size" />
                </Link>
                <button
                    className="navbar-toggler shadow-none"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                    onClick={() => {
                        setIsMenuOpen((isOpen) => !isOpen);
                        setOpenDropdown(null);
                        setOpenSubmenu(null);
                    }}
                >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                </button>
                <div className={`navbar-menu navbar-collapse w-100 pt-3 pb-2 py-lg-0${isMenuOpen ? " is-open" : ""}`} id="navbarNav">
                    <ul className="navbar-nav navbar-nav-hover ms-auto me-auto d-flex align-items-center justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link fnt-clr-txt" to="/" onClick={closeNavigation}>Home</Link>
                        </li>
                        {renderDropdown("about")}
                        {renderDropdown("courses")}
                        {renderDropdown("resources")}
                        <li className="nav-item">
                            <Link className="nav-link fnt-clr-txt" to="/blog" onClick={closeNavigation}>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fnt-clr-txt" to="/contact" onClick={closeNavigation}>Contact Us</Link>
                        </li>
                    </ul>
                    <div className="call-icon">
                        <a className="pulse" href="tel:+917447490744" aria-label="Call Open IT Labz">
                            <i className="fas fa-phone-alt"></i>
                        </a>
                    </div>
                    <ul className="navbar-nav d-lg-block mt-lg-0 mt-3 ms-lg-3">
                        <li className="nav-item">
                            <Link to="/schedule-a-demo" onClick={closeNavigation}><button className="btn btn-lg bg-gradient-success sd md-0">SCHEDULE A DEMO</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
