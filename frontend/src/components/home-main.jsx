import "../styles/reset.css";
import "../styles/home-main.css"; 
import { Link } from "react-router-dom";

export function HomeMain() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="greetings">Hi, there!</p>
            <h1 className="hero-title">Your smarter way to split costs</h1>
            <p className="description">
              Simplify how you share expenses with friends, family, or groups.
              Track, split, and settle costs seamlessly, all in one place. It's
              cost-sharing, made smarter.
            </p>
            <Link to="/login" className="primary-button">
              Log in
            </Link>
          </div>
          <div className="image-container">
            <img
              src={require("../assets/credit-card.png")}
              alt="image of credit card"
            />
          </div>
        </section>
        <section className="feature feature-1">
          <div className="image-container">
            <img src={require("../assets/feature-1.png")} alt="" />
          </div>
          <div className="content">
            <p className="tagline">feature</p>
            <h2 className="heading">Split Smarter, Together</h2>
            <p className="description">
              Effortlessly share expenses with friends or groups. Add
              participants, divide costs the way you want, and settle up without
              any hassle.
            </p>
          </div>
        </section>
        <section className="feature feature-2">
          <div className="content">
            <p className="tagline">feature</p>
            <h2 className="heading">Take Control of Your Expenses</h2>
            <p className="description">
              Track every penny with ease. From past transactions to upcoming
              payments, our tools make managing your finances simple and
              stress-free.
            </p>
          </div>
          <div className="image-container">
            <img src={require("../assets/feature-2.png")} alt="" />
          </div>
        </section>
        <section className="feature feature-3">
          <div className="image-container">
            <img src={require("../assets/feature-3.png")} alt="" />
          </div>
          <div className="content">
            <p className="tagline">feature</p>
            <h2 className="heading">Everything at a Glance</h2>
            <p className="description">
              Stay on top of your expenses with a comprehensive dashboard. View
              balances, track recent transactions, and see exactly what you owe
              or are owed—all in one place.
            </p>
          </div>
        </section>
        <section className="signup">
          <p className="cta">join us today</p>
          <h3>Easily track, split and settle - together</h3>
          <Link to="/sign-up" className="signup-button">
            sign up
          </Link>
        </section>
      </main>
    </>
  );
}
