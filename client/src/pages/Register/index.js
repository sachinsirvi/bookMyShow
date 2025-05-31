import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

function Register() {
    return (
        <>
            <main className="App-header">
                <h1> Register to BookMyShow</h1>
                <section className="mw-500 text-center px-3">
                    <Form layout="vertical">
                        <Form.Item className="d-block"
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input type="text" placeholder="Enter Name" />
                        </Form.Item>

                        <Form.Item className="d-block"
                            name="email"
                            label="Email"
                            rules={[{ required: true, message: 'Please input your email!' },
                            { type: "email", message: "Please enter valid email" }
                            ]}
                        >
                            <Input type="email" placeholder="Enter Email" />
                        </Form.Item>

                        <Form.Item className="d-block"
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input type="password" placeholder="Enter Password" />
                        </Form.Item>

                        <Form.Item className="d-block">
                            <Button type="primary" block htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>

                    <div>
                        <p>
                            Already Registered? <Link to="/login"> Login Here</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Register;