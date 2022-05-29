const Preview = (props) => {
    return <div id="preview" dangerouslySetInnerHTML={props.previewOutput}></div>;
};

export default Preview;