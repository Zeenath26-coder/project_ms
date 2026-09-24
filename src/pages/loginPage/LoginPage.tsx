import houseimage from "../../assests/house1.jpg";
import LoginForm from "../../components/auth/LoginForm";
import "./login-page.css";

const Login = () => {
  return (
    <main className="login-page">
      <section className="brand-panel">
        <div className="image-overlay"></div>
        <div className="brand-content">
          <div className="brand-name">
            <span className="brand-dot"></span>
            <span className="brand-title">ZESTATE</span>
            <span className="brand-divider">•</span>
            <span className="brand-subtitle">PROPERTY MANAGEMENT</span>
          </div>

          <div className="brand-message">
            <span>INTERNAL SYSTEM</span>
            <h2>
              Manage your
              <br />
              properties with ease.
            </h2>
            <p>
              A centralized workspace for managing properties, availability and
              operations.
            </p>
          </div>
        </div>

        <div className="building-wrapper">
          <img src={houseimage} alt="property" className="property-image"></img>
        </div>

        <div className="image-footer">
          <span>© ZESTATE</span>
        </div>
      </section>

      <section className="form-panel">
        <div className="login-container">
          <div className="login-heading">
            <span className="access">Internal Access</span>
            <h1>Welcome back</h1>
            <p>Sign in to your ZESTATE account to continue</p>
          </div>
          <LoginForm></LoginForm>
        </div>
      </section>
    </main>
  );
};

export default Login;
