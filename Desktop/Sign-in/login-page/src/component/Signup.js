import React from "react";
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import "./signup.css";

const Signup = () => {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const handleClick = () => {
    let firstName = document.querySelector("#firstname");
    let lastName = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let fName = firstName.value;
    let lName = lastName.value;
    let eMail = email.value;
    let pWord = password.value;

    if (fName == "" || lName == "" || eMail == "" || pWord == "") {
      swal({
        title: "Error",
        text: "Please fill in the missing field",
        icon: "warning",
        buttons: {cancel: true},
      });
    } else {
      swal({
        title: `Hi ${fName}`,
        text: "your data has been successfully submitted",
        icon: "success",
        button: "Ok",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="info" id="info">
          <h1>
            Learn to code by <br /> watching others
          </h1>
          <p>
            See how experienced developers solve problems in real-time.
            <br /> Watching scripted tutorials is great, but understanding how{" "}
            <br />
            developers think is invaluable.
          </p>
        </div>
        <div className="form-container">
          <button className="btn-1">
            <p>
              <span>Try it free 7 days</span> then $20/mo. thereafter
            </p>
          </button>
          <div className="side" id="side">
            <form
              id="validateForm"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <br />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="firstName"
                id="firstName"
                {...register("firstname", {
                  required: "FirstName cannot be empty",
                })}
              />
              <br />
              <span className="error-block">{errors.firstname?.message}</span>
              <br />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="lastName"
                id="lastName"
                {...register("lastname", {
                  required: "LastName cannot be empty",
                })}
              />
              <br />
              <span className="error-block">{errors.lastname?.message}</span>
              <br />
              <input
                type="email"
                name="emailaddress"
                placeholder="Email Address"
                className="emailAddress"
                id="emailAddress"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Looks like this is not an email",
                  },
                })}
              />
              <br />
              <span className="error-block">{errors.email?.message}</span>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="password"
                id="password"
                {...register("password", {
                  required: "Password cannot be empty",
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                    message:
                      "Must contain at least one number, one uppercase and lowercase letter, a symbol and at least 8 or more characters",
                  },
                })}
              />
              <br />
              <span className="error-block">{errors.password?.message}</span>
              <br />
              <button type="submit" id="btn" onClick={handleClick}>
                CLAIM YOUR FREE TRIAL
              </button>
              <p>
                By clicking the button you are agreeing to the{" "}
                <span> Terms and Services</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
