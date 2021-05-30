import React from "react";

type TextfieldProps = {
    value: string
}

const Textfield: React.FC<TextfieldProps> = ({value}) => (
    <input type={"text"} value={value}/>
)

export default Textfield