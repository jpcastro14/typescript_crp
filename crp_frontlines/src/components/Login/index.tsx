import { Col, Form, Row, Input, Button, message } from "antd"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { CreditDiv, NoUserContainer } from "./styles"




export const Login = () => {
    const auth = useAuth()
    async function onFinish(values: { email: string, password: string }) {

        try {
            await auth.authenticate(values.email, values.password)
        } catch (error) {
            message.error('Invalid email or password')
        }
    }

    return (
        <>
            <NoUserContainer>
                <p>Log<b>in</b></p>
                <Row
                >
                    <Form
                        name="basic"
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
                            name="password">
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Sign in</Button>
                        </Form.Item>
                    </Form>
                </Row>
                <CreditDiv>Topaz TELLARUS - Todos os direitos reservados </CreditDiv>
            </NoUserContainer>
        </>
    )

}

export default Login
