import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./Store/authStore";

const LoginSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [login, setLogin] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      password.length <= 8 &&
      confirmPassword.length <= 8 &&
      password === confirmPassword
    ) {
      let url;
      if (login) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJk5HBSTF13gu8GutDkjuUhS9z37gH5C8";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJk5HBSTF13gu8GutDkjuUhS9z37gH5C8";
      }
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed";
              if (data.error.message) {
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          if (login) {
            console.log(data.idToken);
            const regex = /[.@]/g;
            const emailId = data.email.replace(regex, "");
            // console.log(emailId,data.email)

            dispatch(
              authActions.login({
                email: emailId,
                token: data.idToken,
              })
            );
            navigate("/Landing");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      if (password !== confirmPassword) {
        alert("Password and confirm password did not match");
      } else if (password.length <= 8 && confirmPassword.length <= 8) {
        alert("Please enter at least 8 characters");
      }
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const switchAuthHandler = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={submitHandler}
        className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-3xl mb-4 text-center text-white">
          {login ? "Login" : "Sign up"}
        </h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Example@gmail.com"
            value={email}
            onChange={emailHandler}
            required
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-300">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
            required
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-300">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
            required
            className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {login ? "Login" : "Sign up"}
        </button>
        <h4
          type="button"
          onClick={switchAuthHandler}
          className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer mt-4"
        >
          {login
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </h4>
      </form>
    </div>
  );
};

export default LoginSignIn;
