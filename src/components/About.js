import React from 'react'

export const About = () => {
    const divStyle = {
        minHeight: "90vh",
        margin: "10px auto"
    }
    return (
        <div className= "container" style = {divStyle}>
            <h3>
            This is an about Cmponent.
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores, ducimus consectetur, praesentium aliquid, voluptate eum vel iste sed quia itaque suscipit sunt illum explicabo consequatur nesciunt quibusdam? Fugit deleniti cum et porro quo quibusdam?
            </p>
        </div>
    )
}
