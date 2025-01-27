import { Col, Form, Row, Input, Button } from "antd"
import { Route } from "react-router"

function Login() {

    return (
        <Row
            justify='center'
            align='middle'
            style={{
                height: '100vh'
            }}
        >
            <Col span={24} >
                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="user"
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 16, span: 20 }}
                    >
                        <Button type="primary" >Sign in</Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )

}

export default Login
