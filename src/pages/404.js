import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

function Error() {
  return (
    <Layout>
      <main className='error-page'>
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>

        </section>

      </main>
    </Layout>
  )
}

export default Error
