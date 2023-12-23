import { useEffect, useState } from "react";
import SubmitButton from "../atoms/submit.button";
import { useGraphContext } from "../context/graph.provider";

const Login = () => {
  const { setLogin, setGuest } = useGraphContext();
  const [pressedKeys, setPressedKeys] = useState([]);

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
            title={"Login as guest?"}
            customClass="ml-5"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
