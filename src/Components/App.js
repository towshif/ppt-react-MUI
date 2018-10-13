import React, { Fragment, Component } from 'react'
import {Header, Footer} from './Layout'
import Exercises from './Exercises'

export default class extends Component {
  render() {
    return <Fragment>

      <Header />
      <Exercises />
      <Footer />

    </Fragment>
  }
}