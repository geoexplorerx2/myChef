import React, { useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

const Index = ({
  src,
  width,
  height,
  magnifierHeight = 200,
  magnifieWidth = 200,
  zoomLevel = 2,
}: {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseEnter = useCallback((e: any) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setImageSize({ width, height });
    setShowMagnifier(true);
  }, []);

  const handleMouseMove = useCallback((e: any) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setPosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowMagnifier(false);
  }, []);

  const name = useSelector((state: any) => state.InfoSlice?.name);
  const color = useSelector((state: any) => state.InfoSlice?.color);
  const dir = useSelector((state: any) => state.InfoSlice?.dir);
  console.log('Direction::', dir.payload)
  const formattedName = useMemo(() => name.payload, [name]);

  return (
    <div
      style={{
        position: 'relative',
        height,
        width,
      }}
    >
      <div
        className="relative"
        style={{ height, width }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img src={src} alt="img" />
        <div
          style={{ color: color.payload }}
          className={`absolute w-[60px] flex justify-start ${dir.payload===0?'top-[120px] left-[170px]':'top-[120px] left-[100px]'} text-xs font-bold text-black z-50 overflow-hidden`}
        >
          <span className="w-full break-all">{formattedName}</span>
        </div>
      </div>

      {/* <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          top: `${position.y - magnifierHeight / 2}px`,
          left: `${position.x - magnifieWidth / 2}px`,
          opacity: '1',
          border: '1px solid lightgray',
          backgroundColor: 'white',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
          backgroundPositionX: `${-position.x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-position.y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div> */}
    </div>
  );
};

export default Index;
