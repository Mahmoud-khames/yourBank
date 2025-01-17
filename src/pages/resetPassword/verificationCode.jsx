import{  useState ,useRef } from "react";
import { useNavigate, useParams } from "react-router";



const ResetPassword = () => {

  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [block, setBlock] = useState(false);
  const error = useRef(null);
  const navigation = useNavigate();
  const {userId , token } = useParams();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://yourbankapi-mahmoud-khames-mahmoud-khames-projects.vercel.app/api/users/reset-password/${userId}/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
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
        alert("complete your chenge password successfully");
        setTimeout(() => {
          navigation("/login");
        }, 3000);
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
          <h1 className="title">Reset Password</h1>
          <p className="description">
            Please enter your new password to reset your password
          </p>
          <div className="form_input flex-column">
            <input
              type="Password"
              name="Password"
              id="Password"
              placeholder="Enter your New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className="btn text-white-50 " type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
