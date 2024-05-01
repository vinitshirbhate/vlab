import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-white">
            Sign Up
          </h1>

          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name "
                className="w-full input input-bordered  h-10"
              />
            </div>

            <div>
              <label className="label p-2 ">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <Link
              to={"/"}
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
              href="#"
            >
              Already have an account?
            </Link>

            <div className="flex justify-center items-center mt-2   ">
              <button
                onClick={() => {
                  navigate("/main");
                }}
                type="button"
                className="text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
