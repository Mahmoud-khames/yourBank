import { Bounce, ToastContainer } from "react-toastify";
import { Routers } from "./helper/router";

function App() {
  // const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      <Routers />
    </div>
  );
}

export default App;
