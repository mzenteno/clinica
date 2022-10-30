import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"
import { Col, Container, Form } from "react-bootstrap"

export default function Login(props) {
  const [User, SetUser] = useState("")
  const [UserName, SetUserName] = useState("")
  const [Password, SetPassword] = useState("")

  let navigate = useNavigate()

  function SetLogin(e){
     e.preventDefault();

    if (User.length === 0 || Password.length === 0 ){
      alert("Complete los datos faltantes...");
    }

    if (User === "admin" && Password === "admin") {
      SetUserName("Juan Marceno Zenteno")
      navigate("/home")
    } else{
      alert("Error de usuario y/o contraseña...");
      document.getElementById("txtEmail").focus({focusVisible: true})
      document.getElementById("txtEmail").value = ""
      document.getElementById("txtPassword").value = ""
    }
  }

  return (
    <div className={`${styles.pageContent} d-flex align-items-center`}>
      <Container className="d-flex justify-content-center">
        <Col xs={12} sm={12} style={{ maxWidth: "500px" }} >
          <div className={styles.authCard}>
            <div className={styles.logoArea}>
              <img className={styles.logo} src="images/logo.png" />
            </div>
            <h5 className={styles.authTitle}>Zenteno Software </h5>
            <Form >
              <Form.Control className={`${styles.authInput} mb-2 mt-3`} type="email" placeholder="Email adress"/>
              <Form.Control className={`${styles.authInput} mb-2`} type="password" placeholder="Password"/>
              <button className={`btn ${styles.authBtn} mt-2 mb-4`} >Login</button>
            </Form>
            <button className={`btn ${styles.serviceBtn} mt-0 mb-3`}>
              <i className="fab fa-google"></i>
              Login with google
            </button>
            <button className={`btn ${styles.serviceBtn} mb-3`}>
              <i className="fab fa-github"></i>
              Login with github
            </button>

            <p className={`${styles.text} mb-1`}>Forget <a href="" className={styles.textLink}>Password?</a></p>
            <p className={`${styles.text} mb-4`}>Do not hace an account? <a href="" className={styles.textLink}>Sign up</a></p>
          </div>
        </Col>
      </Container>
    </div>
  );
}