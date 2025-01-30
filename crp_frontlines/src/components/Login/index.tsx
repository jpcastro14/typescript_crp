import { Col, Form, Row, Input, Button, message } from "antd"
import { useNavigate } from "react-router"
import { useAuth } from "../../context/AuthProvider/useAuth"

export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate();

    async function onFinish(values: { email: string, password: string }) {

        try {
            await auth.authenticate(values.email, values.password)
        } catch (error) {
            message.error('Invalid email or password')
        }
    }


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
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ offset: 16, span: 20 }}
                    >
                        <Button type="primary" htmlType="submit" >Sign in</Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )

}

export default Login
