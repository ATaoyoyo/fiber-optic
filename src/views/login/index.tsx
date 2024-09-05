import {
	Button,
	Card,
	Checkbox,
	Form,
	Input,
	Message,
} from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";

import "./style/login.modules.less";

export default function Login() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const login = async () => {
		try {
			await form.validate();
			navigate("/");
		} catch (error) {
			console.log(form.getFieldsError());
			console.log(error)
			Message.error("请输入完整的用户信息!");
		}
	};
	return (
		<div className="login-container">
			<div className="login-form">
				<Card style={{ width: 440 }}>
					<div className="wraper">
						<h2 className="welcome">欢迎登陆</h2>
						<p className="plat-name">光纤线路周界安防预警监测平台</p>
						<Form form={form} layout="vertical">
							<Form.Item
								field="username"
								rules={[{ required: true, message: "请输入用户名" }]}
							>
								<Input placeholder="请输入用户名"></Input>
							</Form.Item>
							<Form.Item
								field="password"
								rules={[{ required: true, message: "请输入密码" }]}
							>
								<Input placeholder="请输入密码"></Input>
							</Form.Item>
							<Form.Item>
								<Checkbox>记住密码</Checkbox>
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit" long onClick={login}>
									登 录
								</Button>
							</Form.Item>
						</Form>
					</div>
				</Card>
			</div>
		</div>
	);
}
