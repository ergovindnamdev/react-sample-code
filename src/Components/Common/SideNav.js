import React from 'react';
import { Nav } from "react-bootstrap";
const SideNav = () => {
    return (
        <div className='row SideNavHeight'>
            <Nav className="col-md-12 d-block bg-light sidebar" activeKey="/">
                <Nav.Item  className='mt-4'>
                    <Nav.Link active href="/">Create Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/view-users">View Users</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default SideNav;