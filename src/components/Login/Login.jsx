import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { Col, Container, Form } from "react-bootstrap";
import Modal from "/src/components/portals/Modal";

export default function Login(props) {
  const [ModalParam, SetModalParam] = useState({ isOpen: false, message: "" });
  const [User, SetUser] = useState("");
  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  let navigate = useNavigate();

  function ValidateLogin(e){
    e.preventDefault();

    if (User.length === 0 || Password.length === 0) {
      SetModalParam({ isOpen: true, message: "Complete todos los datos solcitados" });
      return
    }

    if (User === "admin" && Password === "clave") {
      SetUserName("Juan Marceno Zenteno")
      navigate("/home")
    } else{
      SetModalParam({ isOpen: true, message: "Error de usuario y/o contraseña" });
      document.getElementById("txtPassword").value = ""
    }
  }

  return (
    <div className={`${styles.pageContent} d-flex align-items-center`}>
      <Container className="d-flex justify-content-center">
        <Col xs={12} sm={12} style={{ maxWidth: "450px" }} >
          <div className={styles.card}>
            <div className={styles.logoArea}>
              <img className={styles.logo} src="images/logo.png" />
            </div>
            <h5 className={styles.title}>Zenteno Software </h5>
            <Form >
              <Form.Control id="txtUserName" className={`${styles.input} mb-2 mt-3`} type="text" placeholder="User Name" onChange={ (e)=>SetUser(e.target.value) }/>
              <Form.Control id="txtPassword" className={`${styles.input} mb-2`} type="password" placeholder="Password" onChange={ (e)=>SetPassword(e.target.value) }/>
              <button className={`btn ${styles.button} mt-2 mb-4`} onClick={ValidateLogin} >Login</button>
            </Form>
            <p className={`${styles.text} mb-1`}>Forget <a href="" className={styles.textLink}>Password?</a></p>
            <p className={`${styles.text} mb-4`}>Do not hace an account? <a href="" className={styles.textLink}>Sign up</a></p>
          </div>
        </Col>
      </Container>
      <Modal isOpen={ModalParam.isOpen} onClose={() => SetModalParam({isOpen: false, message: ""})} message={ModalParam.message} >aaa</Modal>
    </div>
  );
}