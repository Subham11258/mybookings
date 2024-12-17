
import { Button, Form, Input } from 'antd';

export default function Login() {
    return(
    <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
            <section className="left-section">
                <h1>Login to mybookings</h1>
            </section>
            <section className="right-section">
                <Form
                    layout='vertical'>

                    <Form.Item
                        label="Email"
                        name="email"
                        className="d-block"
                        rules={[
                            {
                                required: true,
                                message: 'Email is required!',
                            },
                        ]}
                    >
                        <Input 
                        id="email" 
                        type="text" 
                        placeholder="Enter your Email"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        className="d-block"
                        rules={[
                            {
                                required: true,
                                message: 'Password is required!',
                            },
                        ]}
                    >
                        <Input id="password" type="password" placeholder="Enter your password!" />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </main>
    </header>)
}