import Page from '../layouts/page'
import AuthForm from '../components/AuthForm';

export const LOGIN = "login"
export const REGISTER = "register"

const Signin = (props) => (
  <Page style={centerCenter}>
    <AuthForm view={LOGIN} />
  </Page>
)

const centerCenter = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  marginTop: -40
}
export default Signin