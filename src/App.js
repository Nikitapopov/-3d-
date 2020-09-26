import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import WebGL from "./WebGL";

function App() {
    let [translateX, setTranslateX] = useState(0);
    let [translateY, setTranslateY] = useState(0);
    let [rotateX, setRotateX] = useState(0);
    let [rotateY, setRotateY] = useState(0);
    let [rotateZ, setRotateZ] = useState(0);
    let [scaleX, setScaleX] = useState(1);
    let [scaleY, setScaleY] = useState(1);

    return (
        <section className='wrapper'>
            <WebGL/>
            <div className='sliders'>
                <div className={'slider'}>
                    <p>x</p>
                    <input id="translateX" min={-1} max={1} step={0.1} type="range" value={translateX}
                           onChange={(event) => {
                               setTranslateX(event.target.value)
                           }}/>
                    <p>{translateX}</p>
                </div>
                <div className={'slider'}>
                    <p>y</p>
                    <input id="translateY" min={-1} max={1} step={0.1} type="range" value={translateY} onChange={(event) => {
                        setTranslateY(event.target.value)
                    }}/>
                    <p>{translateY}</p>
                </div>
                <div className={'slider'}>
                    <p>x angle</p>
                    <input id="rotateX" min={-180} max={180} type="range" value={rotateX} onChange={(event) => {
                        setRotateX(event.target.value)
                    }}/>
                    <p>{rotateX}</p>
                </div>
                <div className={'slider'}>
                    <p>y angle</p>
                    <input id="rotateY" min={-180} max={180} type="range" value={rotateY} onChange={(event) => {
                        setRotateY(event.target.value)
                    }}/>
                    <p>{rotateY}</p>
                </div>
                <div className={'slider'}>
                    <p>z angle</p>
                    <input id="rotateZ" min={-180} max={180} type="range" value={rotateZ} onChange={(event) => {
                        setRotateZ(event.target.value)
                    }}/>
                    <p>{rotateZ}</p>
                </div>
                <div className={'slider'}>
                    <p>x scale</p>
                    <input id="scaleX" min={0} max={3} step={0.1} type="range" value={scaleX} onChange={(event) => {
                        setScaleX(event.target.value)
                    }}/>
                    <p>{scaleX}</p>
                </div>
                <div className={'slider'}>
                    <p>y scale</p>
                    <input id="scaleY" min={0} max={3} step={0.1} type="range" value={scaleY} onChange={(event) => {
                        setScaleY(event.target.value)
                    }}/>
                    <p>{scaleY}</p>
                </div>
            </div>
        </section>
    );
}

export default App;
