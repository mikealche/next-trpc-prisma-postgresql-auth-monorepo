type IStyledButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: IStyledButton) => {
  return (
    <button
      {...props}
      className="py-2 w-full border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all rounded-lg text-white tracking-wider "
    >
      {children}
    </button>
  );
};

export default Button;
