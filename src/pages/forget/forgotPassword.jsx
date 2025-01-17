import React, {  useState ,useRef } from "react";



const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [Error, setError] = useState("");
  const [block, setBlock] = useState(false);
  const error = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://yourbankapi.vercel.app/api/users/forgotpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      if (response) {
        const data = await response.json();
         setError(data.message);
      console.log(data);
      if (data.Status !== "success") {
        setBlock(true);
      } else {
        setBlock(false);
        alert("Check your email");
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
          <h1 className="title">Reast Password</h1>
          <p className="description">
            Welcome back! Please enter your email address. We will send you a
            link to reset your password.
          </p>
          <div className="form_input flex-column">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input className="btn text-white-50 " type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
