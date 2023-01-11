import React from 'react'
// import { data } from '../api/Api'

const Button = ({ data}) => {
    const width = data.document?.children[0]?.children[0]?.absoluteRenderBounds?.width ?? '500px'
    const height = data?.document?.children[0]?.children[0]?.absoluteRenderBounds?.height ?? '500px'
    const r = data.document?.children[0]?.children[0]?.backgroundColor.r ?? '255'
    const g = data.document?.children[0]?.children[0]?.backgroundColor.g ?? '255'
    const b = data.document?.children[0]?.children[0]?.backgroundColor.b ?? '255'
    const a = data.document?.children[0]?.children[0]?.backgroundColor.a ?? '255'
    const radius = data.document?.children[0]?.children[0]?.cornerRadius ?? '4'
    const paddingLeft = data.document?.children[0]?.children[0]?.children[0].paddingLeft ?? '8'
    const paddingRight = data.document?.children[0]?.children[0]?.children[0].paddingRight ?? '8'
    const paddingBottom = data.document?.children[0]?.children[0]?.children[0].paddingBottom ?? '6'
    const paddingTop = data.document?.children[0]?.children[0]?.children[0].paddingTop ?? '6'

    const iconheight = data?.document?.children[0]?.children[0]?.children[0].absoluteBoundingBox?.height ?? '64px'
    const iconwidth = data?.document?.children[0]?.children[0]?.children[0].absoluteBoundingBox?.width ?? '64px'
    const iconRadius = data?.document?.children[0]?.children[0]?.children[0].cornerRadius ?? '100px'
    const iconBgColorR = data?.document?.children[0]?.children[0]?.children[0].backgroundColor.r ?? '0.9'
    const iconBgColorG = data?.document?.children[0]?.children[0]?.children[0].backgroundColor.g ?? '0.9'
    const iconBgColorB = data?.document?.children[0]?.children[0]?.children[0].backgroundColor.b ?? '0.9'
    const iconBgColorA = data?.document?.children[0]?.children[0]?.children[0].backgroundColor.a ?? '0.9'
    
const headerText = data?.document?.children[0]?.children[0]?.children[0]?.children[0]?.characters
const fontFamily = data?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.fontFamily
const fontSize = data?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.fontSize
const fontWeight = data?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.fontWeight
const lineHeightPx = data?.document?.children[0]?.children[0]?.children[0]?.children[0]?.style?.lineHeightPx


const subHeaderText = data?.document?.children[0]?.children[0]?.children[0]?.children[1]?.characters
const subHeaderfontFamily = data?.document?.children[0]?.children[0]?.children[0]?.children[1]?.style?.fontFamily
const subHeaderfontSize = data?.document?.children[0]?.children[0]?.children[0]?.children[1]?.style?.fontSize
const subHeaderfontWeight = data?.document?.children[0]?.children[0]?.children[0]?.children[1]?.style?.fontWeight
const subHeaderlineHeightPx = data?.document?.children[0]?.children[0]?.children[0]?.children[1]?.style?.lineHeightPx
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
    const subHeader = {
        color: 'white',
        fontFamily: subHeaderfontFamily,
        fontSize: subHeaderfontSize,
        fontWeight: subHeaderfontWeight,
        lineHeigth: subHeaderlineHeightPx
    }
    return (
        <button style={buttonStyle}>
            <div style={iconStyle} ></div>
            <h3 style={headerStyle}>{headerText}</h3>
            <h3 style={subHeader}>{subHeaderText }</h3>
        </button>
    )
}

export default Button