import React from "react";

const Bluetoken = (props) => {
    const n =parseInt(props.num);
    return (
        <>
            {[...Array(n)].map((e, i) => {
                return <div class="div-blue">{props.prefix.toUpperCase()}{i}</div>
            })}
        </>
    )
}

export default Bluetoken;