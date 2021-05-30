import React from "react";

type ButtonProps = {
    value: string
    onClick: ()=>void
}
const Button:React.FC<ButtonProps> = ({value,
                                      onClick}) => (
    <button type={"button"} onClick={onClick}>{value}</button>
)

export default  Button