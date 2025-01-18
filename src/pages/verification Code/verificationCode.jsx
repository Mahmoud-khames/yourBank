import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const VerificationCode = () => {
  const [code, setCode] = useState("");
  const [Error, setError] = useState("");
  const [block, setBlock] = useState(false);
  const error = useRef(null);
  const navigation = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://yourbankapi.vercel.app/api/users/verifyEmail",
        // "http://localhost:4000/api/users/verifyEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
          }),
        }
      );

      if (response) {
        const data = await response.json();
        setError(data.message);

        console.log(data);
        if (data.Status !== "success") {
          toast.error(data.message);
          setBlock(true);
        } else {
          setBlock(false);
          toast.success("complete your registration successfully");
          navigation("/login");
        }
      }
    } catch (error) {
      console.log(error + "err");
    }
  };
  return (
    <div className="loginPage container position-relative">
      <form className="login__form" method="POST" onSubmit={onSubmit}>
        <div className="form_content">
          {block && (
            <div ref={error} className="Error alert alert-danger" role="alert">
              {Error}
            </div>
          )}
          <h1 className="title">Verification Code</h1>
          <p className="description">
            Welcome back! Please Enter this code on the verification page to
            complete your registration
          </p>
          <div className="form_input flex-column">
            <input
              type="Code"
              name="Code"
              id="Code"
              placeholder="Enter your Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <input
              className="btn text-white-50 "
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerificationCode;
