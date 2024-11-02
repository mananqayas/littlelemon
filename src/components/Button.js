function Button({ children, type }) {
  return (
    <button className={type === "secondary" && "btn-secondary"}>
      {children}
    </button>
  );
}
export default Button;
