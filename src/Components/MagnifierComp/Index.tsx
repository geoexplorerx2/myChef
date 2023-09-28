import React, { useState } from 'react'
import { useSelector } from 'react-redux';
const Index = ({
    src,
    width,
    height,
    magnifierHeight = 200,
    magnifieWidth = 200,
    zoomLevel = 2
}: {
    src: string;
    width?: string;
    height?: string;
    magnifierHeight?: number;
    magnifieWidth?: number;
    zoomLevel?: number;
}) => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    let Name = (useSelector((state: any) => state.NameSlice.name))
    console.log(Name.payload)

    return (
        <div
            style={{
                position: "relative",
                height: height,
                width: width
            }}
        >
            <div
                className='relative'
                style={{ height: height, width: width }}
                onMouseEnter={(e) => {
                    // update image size and turn-on magnifier
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setSize([width, height]);
                    setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                    // update cursor position
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();

                    // calculate cursor position on the image
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                }}
                onMouseLeave={() => {
                    // close magnifier
                    setShowMagnifier(false);
                }}
            >
                <img src={src} alt={"img"} />
                <div className="absolute w-[70px] flex justify-start top-[120px] left-[160px] text-xs font-bold text-black z-50 overflow-hidden">
                    <span className="w-full break-all ">{Name.payload}</span>
                </div>
            </div>


            {/* <div
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",

                    // prevent maginier blocks the mousemove event of img
                    pointerEvents: "none",
                    // set size of magnifier
                    height: `${magnifierHeight}px`,
                    width: `${magnifieWidth}px`,
                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifieWidth / 2}px`,
                    opacity: "1", // reduce opacity so you can verify position
                    border: "1px solid lightgray",
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                        }px`,

                    //calculete position of zoomed image.
                    backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
            ></div> */}
        </div>
    );
}

export default Index
