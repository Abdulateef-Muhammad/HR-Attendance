const Button = (props) => {
    props = props.data;
  return (
      <button className="block p-2 bg-blue-600 text-white text-center rounded cursor-pointer">
        {props.value}
      </button>
  );
};

export default Button;