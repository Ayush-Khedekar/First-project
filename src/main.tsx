import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Web from "./Web";
// import Navigationbar from "./First-Web/Components/Navigationbar";
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import App from "./App.tsx";
// import InputTodo from "./components/InputTodo.tsx";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./components/Home.tsx";
// import Contact from "./components/Contact.tsx";
// import ReactDOM from "react-dom/client";
// import About from "./First-Web/Components/About";
// import Login, { type Input } from "./First-Web/Components/Loginpage";
// import Contact from "./First-Web/Components/Contact";
// import { useState, type JSX } from "react";
// import Practicehooks from "./Practicehooks";
// import Practice2 from "./practice2";
import App2 from "./App2";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
    <App2 />
  </StrictMode>
);

// function ProtectedRoute({
//   children,
//   isLoggedIn,
// }: {
//   children: JSX.Element;
//   isLoggedIn: boolean;
// }) {
//   if (!isLoggedIn) {
//     alert("Please login first.");
//     return <Navigate to="/Login" replace />;
//   }
//   return children;
// }

// function App() {
//   const [inputValue, setInputValue] = useState<Input>({
//     email: "",
//     password: "",
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
//     return localStorage.getItem("isLoggedIn") === "true";
//   });
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       Component: Web,
//       children: [
//         {
//           index: true,
//           element: (
//             <Login
//               inputValue={inputValue}
//               setInputValue={setInputValue}
//               setIsLoggedIn={setIsLoggedIn}
//             />
//           ),
//         },
//         {
//           path: "Login",
//           element: (
//             <Login
//               inputValue={inputValue}
//               setInputValue={setInputValue}
//               setIsLoggedIn={setIsLoggedIn}
//             />
//           ),
//         },
//         {
//           path: "Home",
//           element: (
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <Navigationbar />
//             </ProtectedRoute>
//           ),
//         },
//         {
//           path: "About",
//           element: (
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <About />
//             </ProtectedRoute>
//           ),
//         },
//         {
//           path: "Contact",
//           element: (
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <Contact />
//             </ProtectedRoute>
//           ),
//         },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }
// const root = document.getElementById("root");

// ReactDOM.createRoot(root!).render(<App />);
