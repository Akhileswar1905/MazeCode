import { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      "https://www.hackerrank.com/x/api/v3/tests/1932137/candidates?limit=100&offset=0",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer b071440abc04e134d53d1fc493015c899e1f4a43579d2f14b85caded916d136c",
        },
      }
    );
    const user = res.data.data.find((user) => user.email === form.email);
    console.log(user);
    if (user) {
      localStorage.setItem("email", form.email);
      localStorage.setItem("report_url", user.report_url);
      navigate("/");
    } else {
      alert("User not found");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="auth_container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <div className="label">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            required
            placeholder="Enter your email id"
            name="email"
          />
        </div>

        <button>Next</button>
        <p>
          Didn't register yet. <Link to={"/auth"}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
