import React from "react";
import init from "./Init/init";

export default class WebGL extends React.Component {
    componentDidMount() {
        init('webgl')
    }

    render() {
        return <canvas className='canvas' id="webgl"/>
    }
}