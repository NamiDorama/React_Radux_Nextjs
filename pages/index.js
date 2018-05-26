import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    console.log(`data: ${data}`)

    return {
      data: data
    }
  }

  render() {
    console.log(this.props.data)
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="description" content="Free Web tutorials"/>
          <meta name="keywords" content="HTML,CSS,XML,JavaScript"/>
        </Head>
        <p>Hello world!</p>
      </div>
    )
  }
}
