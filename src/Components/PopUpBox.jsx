import { useContext } from "react";
import MethodsContext from "../Context/MethodsContext";
import donePic from "../assets/images/Enthusiastic-amico.svg";
import failPic from "../assets/images/Feeling-sorry-rafiki.svg";

const PopUpBox = ({ msg, type, className, button, isPrompt, isOpen }) => {
  const { handlePopUpBox } = useContext(MethodsContext);
  const handlePopUp = () => {
    handlePopUpBox();
  };
  return (
    <>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        }  bg-black text-font p-5 min-w-150 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        {
            (type === "done") ? (
              <img src={donePic} alt="done" className="w-50 mx-auto" />
            ) : (
              <img src={failPic} alt="fail" className="w-50 mx-auto" />
            )
        }
        <div>
          <h1 className={`text-center mb-3 text-xl`}>{msg}</h1>
          <input
            type="text"
            className={`${
              isPrompt ? "block" : "hidden"
            } border-1 border-iconic w-100 p-2 my-2`}
          />
          <button
            className="py-2 px-4 bg-iconic text-font rounded-sm mx-auto block   "
            onClick={handlePopUp}
          >
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default PopUpBox;
