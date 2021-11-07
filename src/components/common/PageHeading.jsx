import { createElement } from "react"

const PageHeading = (props) => {
    props = props.data;
    return createElement(props.component, props.props, props.text);
}

export default PageHeading;