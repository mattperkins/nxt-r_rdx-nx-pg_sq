import Page from '../layouts/page'

export default props => <Page style={S404}>404!!!</Page>

const S404 = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  marginTop: -40,
  fontSize: "20vh",
  color: "red",
  fontWeight: 700,
  fontFamily: "sans-serif"
}