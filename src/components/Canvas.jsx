import React, { Component } from 'react';

import CONSTANTS from '../constants/constants';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: props.texts,
            images: props.images,
            width: props.orientation.toLowerCase() === CONSTANTS.PORTRAIT.toLowerCase() ? 500 : 700,
            height: props.orientation.toLowerCase() === CONSTANTS.PORTRAIT.toLowerCase() ? 700 : 500,
        };

        this.drawText = this.drawText.bind(this);
        this.drawImage = this.drawImage.bind(this);
    }

    drawText(ctx) {
        let {texts} = this.state;

        if(texts.length > 0) {
            texts.forEach((text) => {
                ctx.font = text.fontType + ' ' + text.fontSize + 'px ' + text.fontName;
                ctx.fillText(text.text, text.locationX, text.locationY);
            });
        }
    }

    drawImage(ctx) {
        let {images} = this.state;
        if(images.length > 0) {
            images.forEach((img) => {
                let image = new Image();
                image.onload = function(){
                    ctx.drawImage(image, img.locationX, img.locationY); // Or at whatever offset you like
                };
                image.src = img.imgUrl;
            });
        }
    }

    componentDidMount() {
        console.log(this.props);
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        this.drawText(ctx);
        this.drawImage(ctx);
    }
    
    render() {
        let {width, height} = this.state;
        return(
            <canvas className="card-canvas" ref="canvas" width={width} height={height} />
        )
    }
}
export default Canvas