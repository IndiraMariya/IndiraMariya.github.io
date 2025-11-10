import React, { useEffect, useRef } from 'react';

const AsciiImage = ({ file }) => {
  const canvasRef = useRef(null);
  const asciiRef = useRef(null);

  useEffect(() => {
    const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

    const MAXIMUM_WIDTH = 80;
    const MAXIMUM_HEIGHT = 80;

    const clampDimensions = (width, height) => {
      const rectifiedWidth = Math.floor(getFontRatio() * width);

      if (height > MAXIMUM_HEIGHT) {
        const reducedWidth = Math.floor((rectifiedWidth * MAXIMUM_HEIGHT) / height);
        return [reducedWidth, MAXIMUM_HEIGHT];
      }

      if (width > MAXIMUM_WIDTH) {
        const reducedHeight = Math.floor((height * MAXIMUM_WIDTH) / rectifiedWidth);
        return [MAXIMUM_WIDTH, reducedHeight];
      }

      return [rectifiedWidth, height];
    };

    const getCharacterForGrayScale = grayScale => grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];

    const drawAscii = (grayScales, width, asciiImage) => {
      const ascii = grayScales.reduce((asciiImage, grayScale, index) => {
        let nextChars = getCharacterForGrayScale(grayScale);
        if ((index + 1) % width === 0) {
          nextChars += '\n';
        }

        return asciiImage + nextChars;
      }, '');

      asciiImage.textContent = ascii;
    };

    const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\' ';
    const rampLength = grayRamp.length;

    const getFontRatio = () => {
      const pre = document.createElement('pre');
      pre.style.display = 'inline';
      pre.textContent = ' ';

      document.body.appendChild(pre);
      const { width, height } = pre.getBoundingClientRect();
      document.body.removeChild(pre);

      return height / width;
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const asciiImage = asciiRef.current;

    const image = new Image();
    image.onload = () => {
      console.log('Image loaded:', image.width, image.height);

      const [width, height] = clampDimensions(image.width, image.height);
      console.log('Clamped dimensions:', width, height);

      canvas.width = width;
      canvas.height = height;

      context.drawImage(image, 0, 0, width, height);
      const grayScales = convertToGrayScales(context, width, height);
      console.log('Gray scales:', grayScales);

      drawAscii(grayScales, width, asciiImage);
    };

    image.onerror = error => {
      console.error('Image loading error:', error);
    };

    image.src = file;
  }, [file]);

  const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;

  const convertToGrayScales = (context, width, height) => {
    const imageData = context.getImageData(0, 0, width, height);
    const grayScales = [];

    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];

      const grayScale = toGrayScale(r, g, b);
      imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;

      grayScales.push(grayScale);
    }

    context.putImageData(imageData, 0, 0);

    return grayScales;
  };

  return (
    <div className="ascii-image-container">
      <canvas ref={canvasRef} className="ascii-image-canvas"></canvas>
      <pre ref={asciiRef} className="ascii-image"></pre>
    </div>
  );
};

export default AsciiImage;