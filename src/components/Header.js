import React from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { getSelectLang } from "../utils/configSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";
// import logo from "../../src/assets/Netflix_Logo_PMS.png"
const Header = () => {
  const dispatch = useDispatch();

  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageClick=(e)=>{
    console.log(e.target.value)
    dispatch(getSelectLang(e.target.value))
  }

  return (
    <div className=" absolute w-screen px-6 py-1 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="h-20" src={LOGO} alt="NETFLIX"></img>
      <select className="p-2 m-4 bg-gray-900 text-white" onChange={handleLanguageClick}>
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language.identifier} value={language.identifier}>
            {language.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleGptClick}
        className="py-1 px-4 mx-4 my-4 bg-purple-800 text-white rounded-lg"
      >
        GPT Search
      </button>
    </div>
  );
};

export default Header;

// (
//   <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
//   <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
//   {user && (
//     <div className="flex p-2 justify-between">
//       {showGptSearch && (
//         <select
//           className="p-2 m-2 bg-gray-900 text-white"
//           onChange={handleLanguageChange}
//         >
//           {SUPPORTED_LANGUAGES.map((lang) => (
//             <option key={lang.identifier} value={lang.identifier}>
//               {lang.name}
//             </option>
//           ))}
//         </select>
//       )}
//       <button
//         className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
//         onClick={handleGptSearchClick}
//       >
//         {showGptSearch ? "Homepage" : "GPT Search"}
//       </button>
//       <img
//         className="hidden md:block w-12 h-12"
//         alt="usericon"
//         src={user?.photoURL}
//       />
//       <button onClick={handleSignOut} className="font-bold text-white ">
//         (Sign Out)
//       </button>
//     </div>
//   )}
// </div>

// )
