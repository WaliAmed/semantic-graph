const SubmitButton = ({
  title = false,
  type = false,
  customClass = "",
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      type={type || "submit"}
      className={`bg-slate-600 hover:bg-slate-800 text-white py-2 px-4 rounded transition-all text-xs ${customClass}`}
    >
      {title || "Submit"}
    </button>
  );
};

export default SubmitButton;
