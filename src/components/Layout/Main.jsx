import styles from "./Main.module.css";

export default function Main(props) { 
  return (
      <main id="main" className={`${styles.main}`} >
        {props.children}        
    </main>   
  )
}