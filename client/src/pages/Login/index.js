import React from 'react';
import { Form, Button, Input } from 'antd';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <main className="App-header">
                <h1>Login to BookMyShow</h1>
                <section className="mw-500 text-center px-3">
                    <Form layout='vertical'>
                        {/* email */}
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' },
                                {type: "email", message: "Please enter valid email"}
                            ]}
                        >
                            <Input type='text' placeholder='Enter Email' />
                        </Form.Item>
                        {/* password */}
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input type='password' placeholder='Enter Password' />
                        </Form.Item>
                        {/* Button */}
                        <Form.Item>
                            <Button
                                type="primary"
                                block
                                htmlType="submit"
                                style={{ fontSize: "1rem", fontWeight: "600" }}
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>

                    <div>
                        <p>
                            New User? <Link to="/register">Register Here</Link>
                        </p>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Login;