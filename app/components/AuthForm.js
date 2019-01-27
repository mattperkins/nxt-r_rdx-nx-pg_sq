import Page from "../layouts/page"
import { Form, Input, Button } from "antd"
import "isomorphic-unfetch"

class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      loginError: false
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      // console.log(values)
      fetch("/signin", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      }).then(async res => {
        res.status !== 200 && this.setState({
          loginError: true
        })
        // serialise response data
        return await res.json()
        // the data is our "token"
      }).then(data => {
        console.log(data)
        if (data.token) {
          localStorage.setItem("fockeyToken", data.token)
        }
      }).catch(err => {
        if (err) this.setState({
          loginError: true
        })
      })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        {/*  */}
        {this.state.loginError && <h1>LOGIN ERROR!</h1>}
        {/*  */}
        <Form.Item>
          {
            getFieldDecorator("email", {
              rules: [{
                required: true, message: "Please enter a valid email"
              }]
            })(
              <Input type="text" name="email" placeholder="Enter Your Email" />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator("password", {
              rules: [{
                required: true, message: "Please enter your password"
              }]
            })(
              <Input name="password" type="password" placeholder="Enter Your Password" />
            )
          }

        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create({ name: "authForm" })(AuthForm)