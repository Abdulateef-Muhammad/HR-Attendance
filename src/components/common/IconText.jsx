import Text from "./Text";

const IconText = (props) => {
    props = props.data;
    return (
        <div className={`${props.classes}`}>
            <span>{props.icon}</span>
            <Text data={{ text: props.text, classes: "px-2"}} />
        </div>
    )
}

export default IconText;