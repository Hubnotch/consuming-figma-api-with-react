// import axios from 'axios';
import './App.css';
import fetchData from './api/Api';
import { useEffect, useState } from 'react';

function App() {
  const dara = [{
    "document": {
      "id": "0:0",
      "name": "Document",
      "type": "DOCUMENT",
      "scrollBehavior": "SCROLLS",
      "children": [
        {
          "id": "0:1",
          "name": "Page 1",
          "type": "CANVAS",
          "scrollBehavior": "SCROLLS",
          "children": [
            {
              "id": "1:10",
              "name": "Asset Button",
              "type": "FRAME",
              "scrollBehavior": "SCROLLS",
              "blendMode": "PASS_THROUGH",
              "children": [
                {
                  "id": "1:11",
                  "name": "Icons / Standard / portfolio",
                  "type": "FRAME",
                  "scrollBehavior": "SCROLLS",
                  "blendMode": "PASS_THROUGH",
                  "children": [
                    {
                      "id": "1:12",
                      "name": "building 1",
                      "type": "FRAME",
                      "scrollBehavior": "SCROLLS",
                      "blendMode": "PASS_THROUGH",
                      "children": [
                        {
                          "id": "1:13",
                          "name": "Vector",
                          "type": "VECTOR",
                          "scrollBehavior": "SCROLLS",
                          "blendMode": "PASS_THROUGH",
                          "absoluteBoundingBox": {
                            "x": -99.250,
                            "y": 34.0,
                            "width": 24.0,
                            "height": 24.0
                          },
                          "absoluteRenderBounds": {
                            "x": -99.250,
                            "y": 34.0,
                            "width": 24.0,
                            "height": 24.0
                          },
                          "constraints": {
                            "vertical": "SCALE",
                            "horizontal": "SCALE"
                          },
                          "fills": [
                            {
                              "blendMode": "NORMAL",
                              "type": "SOLID",
                              "color": {
                                "r": 0.14509804546833038,
                                "g": 0.60784316062927246,
                                "b": 0.61176472902297974,
                                "a": 1.0
                              }
                            }
                          ],
                          "strokes": [],
                          "strokeWeight": 21.333333969116211,
                          "strokeAlign": "INSIDE",
                          "styles": {
                            "fill": "1:5"
                          },
                          "effects": []
                        }
                      ],
                      "absoluteBoundingBox": {
                        "x": -99.250,
                        "y": 34.0,
                        "width": 24.0,
                        "height": 24.0
                      },
                      "absoluteRenderBounds": {
                        "x": -99.250,
                        "y": 34.0,
                        "width": 24.0,
                        "height": 24.0
                      },
                      "preserveRatio": true,
                      "constraints": {
                        "vertical": "SCALE",
                        "horizontal": "SCALE"
                      },
                      "clipsContent": true,
                      "background": [
                        {
                          "blendMode": "NORMAL",
                          "visible": false,
                          "type": "SOLID",
                          "color": {
                            "r": 1.0,
                            "g": 1.0,
                            "b": 1.0,
                            "a": 1.0
                          }
                        }
                      ],
                      "fills": [
                        {
                          "blendMode": "NORMAL",
                          "visible": false,
                          "type": "SOLID",
                          "color": {
                            "r": 1.0,
                            "g": 1.0,
                            "b": 1.0,
                            "a": 1.0
                          }
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1.0,
                      "strokeAlign": "INSIDE",
                      "backgroundColor": {
                        "r": 0.0,
                        "g": 0.0,
                        "b": 0.0,
                        "a": 0.0
                      },
                      "effects": []
                    }
                  ],
                  "absoluteBoundingBox": {
                    "x": -119.0,
                    "y": 14.0,
                    "width": 64.0,
                    "height": 64.0
                  },
                  "absoluteRenderBounds": {
                    "x": -119.0,
                    "y": 14.0,
                    "width": 64.0,
                    "height": 64.0
                  },
                  "preserveRatio": true,
                  "constraints": {
                    "vertical": "TOP",
                    "horizontal": "LEFT"
                  },
                  "clipsContent": true,
                  "background": [
                    {
                      "blendMode": "NORMAL",
                      "type": "SOLID",
                      "color": {
                        "r": 0.95686274766921997,
                        "g": 0.98039215803146362,
                        "b": 0.98039215803146362,
                        "a": 1.0
                      }
                    }
                  ],
                  "fills": [
                    {
                      "blendMode": "NORMAL",
                      "type": "SOLID",
                      "color": {
                        "r": 0.95686274766921997,
                        "g": 0.98039215803146362,
                        "b": 0.98039215803146362,
                        "a": 1.0
                      }
                    }
                  ],
                  "strokes": [],
                  "cornerRadius": 100.0,
                  "strokeWeight": 1.0,
                  "strokeAlign": "INSIDE",
                  "backgroundColor": {
                    "r": 0.95686274766921997,
                    "g": 0.98039215803146362,
                    "b": 0.98039215803146362,
                    "a": 1.0
                  },
                  "styles": {
                    "fills": "1:4"
                  },
                  "effects": []
                },
                {
                  "id": "1:14",
                  "name": "Frame 307",
                  "type": "FRAME",
                  "scrollBehavior": "SCROLLS",
                  "blendMode": "PASS_THROUGH",
                  "children": [
                    {
                      "id": "1:15",
                      "name": "Single Asset",
                      "type": "TEXT",
                      "scrollBehavior": "SCROLLS",
                      "blendMode": "PASS_THROUGH",
                      "absoluteBoundingBox": {
                        "x": -203.0,
                        "y": 102.0,
                        "width": 232.0,
                        "height": 22.0
                      },
                      "absoluteRenderBounds": {
                        "x": -127.83778381347656,
                        "y": 107.65999603271484,
                        "width": 81.998992919921875,
                        "height": 14.742004394531250
                      },
                      "constraints": {
                        "vertical": "TOP",
                        "horizontal": "LEFT"
                      },
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0.0,
                      "fills": [
                        {
                          "blendMode": "NORMAL",
                          "type": "SOLID",
                          "color": {
                            "r": 0.070588238537311554,
                            "g": 0.070588238537311554,
                            "b": 0.070588238537311554,
                            "a": 1.0
                          }
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1.0,
                      "strokeAlign": "OUTSIDE",
                      "styles": {
                        "fill": "1:6",
                        "text": "1:7"
                      },
                      "effects": [],
                      "characters": "Single Asset",
                      "style": {
                        "fontFamily": "Noto Sans JP",
                        "fontPostScriptName": null,
                        "fontWeight": 700,
                        "textAutoResize": "HEIGHT",
                        "fontSize": 14.0,
                        "textAlignHorizontal": "CENTER",
                        "textAlignVertical": "TOP",
                        "letterSpacing": 0.0,
                        "lineHeightPx": 22.0,
                        "lineHeightPercent": 108.52407073974609,
                        "lineHeightPercentFontSize": 157.14285278320312,
                        "lineHeightUnit": "PIXELS"
                      },
                      "layoutVersion": 3,
                      "characterStyleOverrides": [],
                      "styleOverrideTable": {},
                      "lineTypes": [
                        "NONE"
                      ],
                      "lineIndentations": [
                        0
                      ]
                    },
                    {
                      "id": "1:16",
                      "name": "Fill-out our online form",
                      "type": "TEXT",
                      "scrollBehavior": "SCROLLS",
                      "blendMode": "PASS_THROUGH",
                      "absoluteBoundingBox": {
                        "x": -203.0,
                        "y": 132.0,
                        "width": 232.0,
                        "height": 20.0
                      },
                      "absoluteRenderBounds": {
                        "x": -163.91641235351562,
                        "y": 136.67399597167969,
                        "width": 154.04586791992188,
                        "height": 11.522003173828125
                      },
                      "constraints": {
                        "vertical": "TOP",
                        "horizontal": "LEFT"
                      },
                      "layoutAlign": "STRETCH",
                      "layoutGrow": 0.0,
                      "fills": [
                        {
                          "blendMode": "NORMAL",
                          "type": "SOLID",
                          "color": {
                            "r": 0.46274510025978088,
                            "g": 0.45882353186607361,
                            "b": 0.48235294222831726,
                            "a": 1.0
                          }
                        }
                      ],
                      "strokes": [],
                      "strokeWeight": 1.0,
                      "strokeAlign": "OUTSIDE",
                      "styles": {
                        "fill": "1:8",
                        "text": "1:9"
                      },
                      "effects": [],
                      "characters": "Fill-out our online form",
                      "style": {
                        "fontFamily": "Noto Sans JP",
                        "fontPostScriptName": null,
                        "fontWeight": 400,
                        "textAutoResize": "HEIGHT",
                        "fontSize": 14.0,
                        "textAlignHorizontal": "CENTER",
                        "textAlignVertical": "CENTER",
                        "letterSpacing": 0.250,
                        "lineHeightPx": 20.0,
                        "lineHeightPercent": 98.658248901367188,
                        "lineHeightPercentFontSize": 142.85714721679688,
                        "lineHeightUnit": "PIXELS"
                      },
                      "layoutVersion": 3,
                      "characterStyleOverrides": [],
                      "styleOverrideTable": {},
                      "lineTypes": [
                        "NONE"
                      ],
                      "lineIndentations": [
                        0
                      ]
                    }
                  ],
                  "absoluteBoundingBox": {
                    "x": -203.0,
                    "y": 102.0,
                    "width": 232.0,
                    "height": 50.0
                  },
                  "absoluteRenderBounds": {
                    "x": -203.0,
                    "y": 102.0,
                    "width": 232.0,
                    "height": 50.0
                  },
                  "constraints": {
                    "vertical": "TOP",
                    "horizontal": "LEFT"
                  },
                  "clipsContent": false,
                  "background": [
                    {
                      "blendMode": "NORMAL",
                      "visible": false,
                      "type": "SOLID",
                      "color": {
                        "r": 1.0,
                        "g": 1.0,
                        "b": 1.0,
                        "a": 1.0
                      }
                    }
                  ],
                  "fills": [
                    {
                      "blendMode": "NORMAL",
                      "visible": false,
                      "type": "SOLID",
                      "color": {
                        "r": 1.0,
                        "g": 1.0,
                        "b": 1.0,
                        "a": 1.0
                      }
                    }
                  ],
                  "strokes": [],
                  "strokeWeight": 1.0,
                  "strokeAlign": "INSIDE",
                  "backgroundColor": {
                    "r": 0.0,
                    "g": 0.0,
                    "b": 0.0,
                    "a": 0.0
                  },
                  "layoutMode": "VERTICAL",
                  "counterAxisSizingMode": "FIXED",
                  "itemSpacing": 8.0,
                  "counterAxisAlignItems": "CENTER",
                  "effects": []
                }
              ],
              "absoluteBoundingBox": {
                "x": -219.0,
                "y": -32.0,
                "width": 264.0,
                "height": 248.0
              },
              "absoluteRenderBounds": {
                "x": -219.0,
                "y": -32.0,
                "width": 264.0,
                "height": 248.0
              },
              "constraints": {
                "vertical": "TOP",
                "horizontal": "LEFT"
              },
              "clipsContent": false,
              "background": [
                {
                  "blendMode": "NORMAL",
                  "type": "SOLID",
                  "color": {
                    "r": 1.0,
                    "g": 1.0,
                    "b": 1.0,
                    "a": 1.0
                  }
                }
              ],
              "fills": [
                {
                  "blendMode": "NORMAL",
                  "type": "SOLID",
                  "color": {
                    "r": 1.0,
                    "g": 1.0,
                    "b": 1.0,
                    "a": 1.0
                  }
                }
              ],
              "strokes": [
                {
                  "blendMode": "NORMAL",
                  "type": "SOLID",
                  "color": {
                    "r": 0.80000001192092896,
                    "g": 0.80000001192092896,
                    "b": 0.80000001192092896,
                    "a": 1.0
                  }
                }
              ],
              "cornerRadius": 4.0,
              "strokeWeight": 1.0,
              "strokeAlign": "INSIDE",
              "backgroundColor": {
                "r": 1.0,
                "g": 1.0,
                "b": 1.0,
                "a": 1.0
              },
              "styles": {
                "fills": "1:2",
                "strokes": "1:3"
              },
              "effects": []
            }
          ],
          "backgroundColor": {
            "r": 0.11764705926179886,
            "g": 0.11764705926179886,
            "b": 0.11764705926179886,
            "a": 1.0
          },
          "prototypeStartNodeID": null,
          "flowStartingPoints": [],
          "prototypeDevice": {
            "type": "NONE",
            "rotation": "NONE"
          }
        }
      ]
    },
    "components": {},
    "componentSets": {},
    "schemaVersion": 0,
    "styles": {
      "1:5": {
        "key": "e93681dd4a4253df630e5e933b4d0076c7f84d84",
        "name": "Primary/Green 100%",
        "styleType": "FILL",
        "remote": true,
        "description": ""
      },
      "1:4": {
        "key": "0a114139ed0b13595f36f366d3215d8d29915a56",
        "name": "Primary/Green 5%",
        "styleType": "FILL",
        "remote": true,
        "description": ""
      },
      "1:6": {
        "key": "1422438bd30d5b8702fdcaa5fb5433791838a773",
        "name": "Black",
        "styleType": "FILL",
        "remote": true,
        "description": ""
      },
      "1:7": {
        "key": "0c950b99c0fa6fc3a617b4cbad0df443389755fc",
        "name": "Button",
        "styleType": "TEXT",
        "remote": true,
        "description": ""
      },
      "1:8": {
        "key": "d3b2e04772b30ea8ff96a85f78a6d0f328af8616",
        "name": "Gray 1",
        "styleType": "FILL",
        "remote": true,
        "description": ""
      },
      "1:9": {
        "key": "27da304d5703b613739eaabde66edfb449420aa2",
        "name": "Paragraph 2",
        "styleType": "TEXT",
        "remote": true,
        "description": ""
      },
      "1:2": {
        "key": "a2eb4cc739b17705d907c82a309da5a70fbac2b0",
        "name": "White",
        "styleType": "FILL",
        "remote": true,
        "description": ""
      },
      "1:3": {
        "key": "fa4b64d0428fdebeb694660db3b4772bde5dc7ae",
        "name": "Gray 2",
        "styleType": "FILL",
        "remote": true,
        "description": ""
      }
    },
    "name": "Dexla - Figma Converter Test",
    "lastModified": "2023-01-09T13:02:14Z",
    "thumbnailUrl": "https://s3-alpha.figma.com/thumbnails/0865b92d-995f-4c09-9ccd-0b19d5321ec9?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWCS43CWNU7%2F20230108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230108T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=360a447bce88758dc813187b1b376f8dc551f18619be9c02ea1bdd3dccccc9f5",
    "version": "2841829341",
    "role": "owner",
    "editorType": "figma",
    "linkAccess": "view"
  }]
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const figmaApiResponse = fetchData()
    setData(figmaApiResponse)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Came here</h1>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
