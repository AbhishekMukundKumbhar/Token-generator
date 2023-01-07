import React from "react";

const Redtoken = (props) => {
    const n =parseInt(props.num);
    return (
        <>
            {[...Array(n)].map((e, i) => {
                return <div class="div-red">{props.prefix.toUpperCase()}{i}</div>
            })}
        </>
    )
}

export default Redtoken;