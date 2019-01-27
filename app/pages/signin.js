import Page from '../layouts/page'
import AuthForm from '../components/AuthForm';

const Signin = (props) => (
  <Page style={centerCenter}>
    <AuthForm />
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