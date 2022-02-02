import React from 'react';
import 'antd/dist/antd.css';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';

import { PageHeader, Button } from 'antd';
const { SubMenu } = Menu;

const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate("/login", { replace: true });
    }

    const handlesignupButton = () => {
        navigate("/signup", { replace: true });
    }

    return (
        <>
            <PageHeader
                ghost={false}
                className="site-page-header"
                // onBack={() => null}
                title="React CRM"
                onBack={() => window.history.back()}
                extra={[
                    <Button key="1" type="primary" onClick={handleLoginButton}>
                        LOGIN
                    </Button>     
                ]}
                extra={[
                    <Button key="1" type="primary" onClick={handlesignupButton}>
                     LOGIN
                 </Button>
                ]}
            />
        </>
    )
}

export default Navbar;
