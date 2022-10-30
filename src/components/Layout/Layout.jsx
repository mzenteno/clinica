import { Fragment } from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import styles from "./Layout.module.css"

export default function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <Main>
        {props.children}
      </Main>
    </Fragment>
  )
}