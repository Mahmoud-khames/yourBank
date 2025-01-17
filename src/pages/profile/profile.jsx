import { useEffect, useState } from "react";
import nonImage from "../../assets/placeholder.png";
import "./proflie.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../../reducers/authSlice";
export default function Profile() {
  // @ts-ignore
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fristName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    setForm({
      ...form,
      fristName: user.fristName,
      lastName: user.lastName,
      email: user.email,
    });
  }, [user]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const data = await axios.post(
        `https://yourbankapi-mahmoud-khames-mahmoud-khames-projects.vercel.app/api/users/updateUser/${user._id}`,
        {
          fristName: form.fristName,
          lastName: form.lastName,
          email: form.email,
        }
      );
      setLoading(false);
      if (data) {
        dispatch( updateUser(data.data.data))
      }
      console.log(data.data.data , "data#####$%$%^^");
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(user, "user");
  return (
    <div className="container">
      <div className="profile">
 {/*       {/* <div className="image_profile">
           image */}
          {/* <img src={nonImage} alt="image_profile" /> */}
          {/* buttons */}
          {/* <div className="buttons">
            <button className="edit_profile">Edit</button>
            <button className="delete_profile">Delete</button>
          </div>
        </div> */}
        
        <form className="info_profile" onSubmit={handelSubmit}>
          {loading ? (
            <div className="loading text-white">Loading...</div>
          ) : (
            <>
              {/* FristName */}
              <div className="input">
                <label htmlFor="fristName">Frist Name</label>
                <input
                  type="text"
                  name="fristName"
                  id="fristName"
                  onChange={handleChange}
                  value={form.fristName}
                />
              </div>
              {/* LastName */}
              <div className="input">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  value={form.lastName}
                />
              </div>
              {/* email */}
              <div className="input">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={form.email}
                />
              </div>
            </>
          )}

          <div className="buttons">
            <button className="update_profile" type="submit">
              Update
            </button>
            <button className="delete_profile">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}
