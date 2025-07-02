import { useNavigate } from "react-router";

export type Input = {
  email: string;
  password: string;
};

interface inputProp {
  inputValue: Input;
  setInputValue: React.Dispatch<React.SetStateAction<Input>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Loginpage({
  inputValue,
  setInputValue,
  setIsLoggedIn,
}: inputProp) {
  let navigate = useNavigate();

  function click() {
    if (inputValue.email === "" || inputValue.password === "") {
      alert("Enter both Email and Password");
    } else if (
      inputValue.email.includes("@protech.com") &&
      inputValue.password === "12345"
    ) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/Home");
      alert("Logged in");
      setInputValue({ email: "", password: "" });
    } else {
      alert("Entered wrong email or password");
    }
  }

  return (
    <>
      <div className="bg-[#93c5fd] flex justify-center w-full p-5 h-[50vh]">
        <form
          className="flex flex-col bg-blue-200 border-2 w-[25%] h-[105%] rounded-xl p-2 gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="px-4 pt-6 b text-gray-600">E-mail</label>
          <input
            className="px-4 focus:outline-none w-[100%] border-b-2 text-gray-600 hover:scale-90 transition-all hover:ease-in-out duration-300"
            type="text"
            value={inputValue.email}
            placeholder="Enter Your Email"
            onChange={(e) =>
              setInputValue((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
          />
          <label className="px-4 pt-2 text-gray-600">Password</label>
          <input
            className="px-4 focus:outline-none w-[100%] border-b-2 text-gray-600 hover:scale-90 transition-all hover:ease-in-out duration-300"
            type="text"
            value={[inputValue.password]}
            placeholder="Enter password"
            onChange={(e) =>
              setInputValue((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
          />
          <button
            className="w-100%] cursor-pointer text-xl border-2 rounded-xl hover:scale-[1.05] hover:shadow-2xl shadow-blue-900 duration-300 font-medium px-3 py-2 bg-blue-400 text-white"
            onClick={click}
          >
            Login in
          </button>
          <button
            className="cursor-pointer text-xl border-2 rounded-xl hover:scale-[1.05] hover:shadow-2xl shadow-blue-900 duration-300 font-medium px-3 py-2 bg-blue-400 text-white"
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.setItem("isLoggedIn", "true");
              alert("Logged out");
            }}
          >
            Logout
          </button>
        </form>
      </div>
    </>
  );
}
