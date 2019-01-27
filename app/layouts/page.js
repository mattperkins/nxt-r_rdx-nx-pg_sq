import * as React from 'react'

const Page = ({ style, children }) => (
  <>
    <main style={style}>
      {children}
    </main>
  </>
)

export default Page