interface ButtonProps {
  children: any
  className?: string
}

function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className={`bg-black text-white py-4 px-12 font-bold rounded-lg transition-colors hocus:bg-[#0F0F0F] ${
        props.className || ''}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
