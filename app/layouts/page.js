import * as React from 'react'
import Head from './Head'

const Page = ({ style, children }) => (
  <>
    <Head title="Fockey App" />
    <main style={style}>
      {children}
    </main>
  </>
)

export default Page