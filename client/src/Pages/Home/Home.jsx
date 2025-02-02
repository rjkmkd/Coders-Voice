import React from "react";
import styles from "./Home.module.css";
import { Link,useNavigate} from "react-router-dom";
import Card from "../../Components/shared/Card/Card";
import Button from "../../Components/shared/Button/Button";

const Home = () => {
  const signinLink={
    color:'#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px',
    fontSize:'1em'
  }
  const navigate = useNavigate();
  const startRegister = () => {
      navigate('/register');
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coders Voice" icon="👋">
        <div>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            numquam quae voluptate saepe ad expedita!
          </p>
          <div>
            <Button 
            lable="Get your Username"
            onClick={startRegister}
             />
          </div>
          <div className={styles.signinWrapper}>
            <span className={styles.signinText}>Have an Invite text?</span>
            <Link style={signinLink} to="/login">Sign in</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
