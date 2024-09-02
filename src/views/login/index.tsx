import { Button, Card, Checkbox, Form, Input } from "@arco-design/web-react";

import { useRef } from "react";

import "./style/login.modules.less";

export default function Login() {
	const formRef = useRef();
	return (
		<div className="container">
			<div className="login-form">
				<Card style={{ width: 360 }}>
					<Form ref={formRef} layout="vertical">
						<Form.Item label="Username" field="username">
							<Input placeholder="plase enter your name"></Input>
						</Form.Item>
						<Form.Item label="Password" field="password">
							<Input placeholder="please enter your password"></Input>
						</Form.Item>
						<Form.Item>
							<Checkbox>Remenber Password</Checkbox>
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" long>
								Login
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</div>
	);
}
