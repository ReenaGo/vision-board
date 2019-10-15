import React from 'react';
import {Component} from 'react';
import Canvas from './Canvas';
import { connect } from 'react-redux';
import '../CSS/Template.css'




class Template extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    


    render() {
        
        const canvasjsx = this.props.canvases.map((canvasObj) => {
            return (<Canvas 
                selected = {canvasObj.selected} 
                height = {canvasObj.height} 
                width = {canvasObj.width} 
                border = {canvasObj.border} 
                color = {canvasObj.color} 
                radius = {canvasObj.radius} 
                margin = {canvasObj.margin} 
                key={canvasObj.id} 
                clicked={()=>{this.props.clicked(canvasObj.id)}}/>)
            });
            
        
        return (<div className="templateHolder">  
                    <div className="container" style={{backgroundColor: "#086f54"}}>
                        <div className="firstRow">
                            {canvasjsx[0]} 
                            {canvasjsx[1]}
                        </div>
                        <div>
                            <div>
                                <div className="column1">
                                    <div>
                                        <div>
                                            <div>{canvasjsx[2]}</div>
                                            <div>{canvasjsx[3]}</div>
                                        </div>
                                        <div>
                                            <div>{canvasjsx[4]}</div>
                                            <div>{canvasjsx[5]}</div>
                                        </div>
                                    </div>
                                    <div>{canvasjsx[6]}</div>
                                </div>
                                <div className="column2">
                                    <div>{canvasjsx[7]}</div>
                                    <div>{canvasjsx[8]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
    }


}

export default Template;


















  // canvasClick (event, i) {
    //     const canvasId = this.props.canvases.map((canvas)=>{
    //         const newCanvas = {...canvas};
    //         if (canvas.id == i) {
    //             newCanvas.selected = true;
    //             newCanvas.border = "gray";
    //         } else {
    //             newCanvas.selected = false;
    //             newCanvas.border = "none";

    //         };
    //         return newCanvas
    //     })
    //     this.setState({canvases: canvasId})
    // }