import React from 'react'
import { Button, Form, Input, Drawer, message } from 'antd'
import { apiUserLogin, apiUserRegister } from '../../api/login'

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showDrawer: false,
		}
	}
	async userLogin(param) {
		try {
			const { data } = await apiUserLogin(param)
			message.success('登录成功！')
			localStorage.username = data.username
			this.props.history.push(`panel/${data.uuid}`)
		} catch (e) {
			message.error(e)
		}
	}
	async userRegister(param) {
		try {
			await apiUserRegister(param)
			message.success('注册成功！')
			this.setState({
				showDrawer: false,
			})
		} catch (e) {
			message.error(e)
		}
	}
	handleLoginFailed(err) {
		message.error(err)
	}
	toggleRegisterForm(showDrawer) {
		this.setState({ showDrawer })
	}

	render() {
		return (
			<div className="login">
				<Form
					name="login"
					labelCol={{ span: 9 }}
					wrapperCol={{ span: 6 }}
					autoComplete="off"
					style={{ marginTop: 150 }}
					onFinish={this.userLogin}
					onFinishFailed={this.handleLoginFailed}>
					<Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
						<Input />
					</Form.Item>
					<Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
						<Input.Password />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 9, span: 6 }}>
						<Button type="primary" htmlType="submit">
							登录
						</Button>
						<Button onClick={() => this.toggleRegisterForm(true)} style={{ marginLeft: 40 }}>注册</Button>
					</Form.Item>
				</Form>

				<Drawer
					width="500px"
					forceRender={true}
					title="注册"
					placement="left"
					onClose={() => this.toggleRegisterForm(false)}
					visible={this.state.showDrawer}>
					<Form
						name="register"
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 16 }}
						onFinish={this.userRegister}
						autoComplete="off"
						style={{ marginTop: 150 }}>
						<Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
							<Input />
						</Form.Item>
						<Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
							<Input.Password />
						</Form.Item>
						<Form.Item label="邮箱" name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
							<Input />
						</Form.Item>
						<Form.Item label="昵称" name="nickname" rules={[{ required: true, message: '请输入昵称' }]}>
							<Input />
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 2, span: 6 }}>
							<Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
								注册
							</Button>
						</Form.Item>
					</Form>
				</Drawer>
			</div>
		)
	}
}

export default Login
