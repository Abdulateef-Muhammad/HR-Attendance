const Text = (props) => {
    props = props.data;
    return (
        <span className={props.classes} style={props.style}>
            {props.text}
        </span>
    );
}

export default Text;