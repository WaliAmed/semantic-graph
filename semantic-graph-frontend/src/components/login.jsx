import { useEffect, useState, useRef } from "react";
import SubmitButton from "../atoms/submit.button";
import { useGraphContext } from "../context/graph.provider";

const Login = () => {
  const { setLogin, setGuest } = useGraphContext();
  const [pressedKeys, setPressedKeys] = useState([]);
  const inputRef = useRef(null);

  const jsonArrayString = import.meta.env.VITE_APP_PASSWORD_ARRAY;
  const jsonPasswordArray = JSON.parse(jsonArrayString);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;

      if (/^[a-zA-Z0-9.]$/i.test(key)) {
        setPressedKeys((prevKeys) => [...prevKeys, key]);
      }
    };

    const checkSequence = () => {
      if (jsonPasswordArray.includes(pressedKeys.join("").toLowerCase())) {
        setLogin(true);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    checkSequence();

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [pressedKeys, setLogin]);

  const handleTryAgain = (event) => {
    event.preventDefault();
    setPressedKeys([]);
  };

  const handleGuestLogin = () => {
    setGuest(true);
    setLogin(true);
  };

  const openKeyboard = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl custom-blink mb-10">
          Please type your password, I am listening to your keys!
        </h1>

        <form onSubmit={handleTryAgain}>
          <SubmitButton title={"Clear What's Typed?"} />
          <SubmitButton
            onClick={handleGuestLogin}
            type="button"
            title={"Login as a guest?"}
            customClass="ml-5"
          />
        </form>

        <div className="block sm:hidden flex justify-center mt-10">
          <input
            className="hidden"
            ref={inputRef}
            style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
          />
          <SubmitButton
            onClick={openKeyboard}
            type="button"
            title={"Pop up keyboard?"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
