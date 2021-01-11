import { Form, Input, Button, Checkbox, message } from 'antd';
import React from 'react';
import './index.less'
import { login } from '../../api/login'
import { createHashHistory } from 'history'
const history = createHashHistory();


const Login = () => {
  const onFinish = async (values) => {
    const res = await login(values);
    res.code === "200" && message.success(`login success,name:${res.data.name},password:${res.data.password}`, () => { history.push('/layout/demo') });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h4 className="title">登录入口</h4>
        <Form.Item
          label="账号"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入登录账号！',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入登录密码！',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="remember">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
