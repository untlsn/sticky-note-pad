interface ButtonProps {
  children: any
  className?: string
}

function Button(props: ButtonProps) {
  return (
    <button type="button" className={`bg-black text-white py-4 px-12 font-bold rounded-lg transition-opacity hocus:opacity-90 ${props.className || ''}`}>
      {props.children}
    </button>
  );
}

export default Button;
