import React, { Component } from 'react';

import CONSTANTS from '../constants/constants';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: props.texts,
            images: props.images,
            width: 400,
            height: 300
        };

        this.drawText = this.drawText.bind(this);
        this.drawImage = this.drawImage.bind(this);
        this.setOrientation = this.setOrientation.bind(this);
    }

    setOrientation() {
        const {orientation} = this.props;

        if(orientation.toLowerCase() === CONSTANTS.PORTRAIT.toLowerCase) {
            this.setState({...this.state, width:300, height:400});
        }
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
                ctx.drawImage(img, img.locationX, img.locationY);
            });
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        this.setOrientation();
        this.drawText(ctx);
        this.drawImage(ctx);
    }
    
    render() {
        const {width, height} = this.state;
        return(
            <canvas ref="canvas" width={width} height={height} />
        )
    }
}
export default Canvas