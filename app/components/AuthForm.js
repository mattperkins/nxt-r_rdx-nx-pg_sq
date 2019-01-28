import Page from "../layouts/page"
import { Form, Input, Button } from "antd"
import "isomorphic-unfetch"
import { LOGIN, REGISTER } from "../pages/signin";

// Additional Registration Form Fields
const RegisterFields = props => (
  <>
    <Form.Item>
      {props.getFieldDecorator("firstName", {
        rules: [
          {
            required: true,
            message: "Please enter your first name"
          }
        ]
      })(<Input name="firstName" placeholder="First Name" />
      )}
    </Form.Item>

    <Form.Item>
      {props.getFieldDecorator("lastName", {
        rules: [
          {
            required: true,
            message: "Please enter your last name"
          }
        ]
      })(<Input name="lastName" placeholder="Last Name" />
      )}
    </Form.Item>
  </>
)

// Component
class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      loginError: false,
      success: false
    }
    this.view = {
      login: {
        path: "/signin",
        name: "Login"
      },
      register: {
        path: "/signup",
        name: "Register"
      }
    }
    // LOGIN === imported variables from pages/signin.js
    if (this.props.view === LOGIN) this.vManager = this.view.login
    else this.vManager = this.view.register
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      // console.log(values)
      fetch(this.vManager.path, {
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
        // login/registered successful
        this.setState({ success: true })
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

        {this.state.loginError && <h1>LOGIN ERROR!</h1>}
        {this.state.success && (
          <p>{this.vManager.name} successful!</p>
        )}
        {/* Inserts additional form fields if@ register route path */}
        {this.props.view === REGISTER && (
          <RegisterFields getFieldDecorator={getFieldDecorator} />
        )}

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
            {this.vManager.name}
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create({ name: "authForm" })(AuthForm)