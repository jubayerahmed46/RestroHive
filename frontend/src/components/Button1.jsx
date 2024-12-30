/* eslint-disable react/prop-types */

function Button1({ children, className = "" }) {
  return (
    <button
      className={`py-3 px-5 rounded-lg font-normal uppercase border-b-4 border-black  transition-all duration-200 ${className}`}
    >
      {children}{" "}
    </button>
  );
}

export default Button1;
