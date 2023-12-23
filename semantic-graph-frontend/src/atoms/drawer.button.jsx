import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { useGraphContext } from "../context/graph.provider";

const DrawerButton = ({ customClass }) => {
  const { openDrawer, setOpenDrawer, nodeData } = useGraphContext();
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (nodeData === null || nodeData.nodes.length === 0) {
      const interval = setInterval(() => {
        setIsBlinking((prevIsBlinking) => !prevIsBlinking);
      }, 500);

      return () => {
        clearInterval(interval);
      };
    } else {
      setIsBlinking(false);
    }
  }, [nodeData]);

  return (
    <div className="group relative">
      <div
        title="Drawer"
        onClick={() => setOpenDrawer((drawer) => !drawer)}
        className={`rounded-full p-2 flex justify-center items-center shadow-md cursor-pointer transition-all group-hover:bg-slate-800 ${customClass} ${
          (nodeData === null || nodeData.nodes.length === 0) &&
          isBlinking &&
          !openDrawer
            ? "bg-slate-800"
            : "bg-white"
        }`}
      >
        <FontAwesomeIcon
          icon={faStream}
          className={`transition-all group-hover:translate-x-1 group-hover:text-white
          ${
            (nodeData === null || nodeData.nodes.length === 0) &&
            isBlinking &&
            !openDrawer &&
            "text-white"
          }
          `}
        />
      </div>
    </div>
  );
};

DrawerButton.propTypes = {
  customClass: PropTypes.string,
};

export default DrawerButton;
