import React from 'react'
import { figmaJSON } from '../api/Api'

const Button = () => {
    const width = figmaJSON.document?.children[0]?.children[0]?.absoluteRenderBounds?.width ?? '500px'
    const height = figmaJSON?.document?.children[0]?.children[0]?.absoluteRenderBounds?.height ?? '500px'
    const r = figmaJSON.document?.children[0]?.children[0]?.backgroundColor.r ?? '255'
    const g = figmaJSON.document?.children[0]?.children[0]?.backgroundColor.g ?? '255'
    const b = figmaJSON.document?.children[0]?.children[0]?.backgroundColor.b ?? '255'
    const a = figmaJSON.document?.children[0]?.children[0]?.backgroundColor.a ?? '255'
    const radius = figmaJSON.document?.children[0]?.children[0]?.cornerRadius ?? '4'
    const paddingLeft = figmaJSON.document?.children[0]?.children[0]?.children[0].paddingLeft ?? '8'
    const paddingRight = figmaJSON.document?.children[0]?.children[0]?.children[0].paddingRight ?? '8'
    const paddingBottom = figmaJSON.document?.children[0]?.children[0]?.children[0].paddingBottom ?? '6'
    const paddingTop = figmaJSON.document?.children[0]?.children[0]?.children[0].paddingTop ?? '6'


    const iconheight = figmaJSON?.document?.children[0]?.children[0]?.children[0].absoluteBoundingBox?.height ?? '64px'
    const iconwidth = figmaJSON?.document?.children[0]?.children[0]?.children[0].absoluteBoundingBox?.width ?? '64px'
    const iconRadius = figmaJSON?.document?.children[0]?.children[0]?.children[0].cornerRadius ?? '100px'
    const iconBgColorR = figmaJSON?.document?.children[0]?.children[0]?.children[0].backgroundColor.r ?? '0.9'
    const iconBgColorG = figmaJSON?.document?.children[0]?.children[0]?.children[0].backgroundColor.g ?? '0.9'
    const iconBgColorB = figmaJSON?.document?.children[0]?.children[0]?.children[0].backgroundColor.b ?? '0.9'
    const iconBgColorA = figmaJSON?.document?.children[0]?.children[0]?.children[0].backgroundColor.a ?? '0.9'
    
const headerText = figmaJSON?.document?.children[0]?.children[0]?.children[0]?.children[0]?.characters
const fontFamily = figmaJSON?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.fontFamily
const fontSize = figmaJSON?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.fontSize
const fontWeight = figmaJSON?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.fontWeight
const lineHeightPx = figmaJSON?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.lineHeightPx
    
    console.log(paddingTop);
    const buttonStyle = {
        height: height,
        width: width,
        backgroundColor: `rgba(${r}00,${g}00,${b}00,${a})`,
        borderRadius: radius,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingRight:paddingRight
    }
    const iconStyle = {
        width: iconwidth,
        iconheight: iconheight,
        borderRadius: iconRadius,
        backgroundColor: `rgba(${iconBgColorR},${iconBgColorG},${iconBgColorB},${iconBgColorA})`,
    }

    const headerStyle = {
        color: 'white',
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeigth: lineHeightPx,
        
    }
    return (
        <button style={buttonStyle}>
            <div style={iconStyle} ></div>
            <h3 style={headerStyle}>{headerText }</h3>
        </button>
    )
}

export default Button