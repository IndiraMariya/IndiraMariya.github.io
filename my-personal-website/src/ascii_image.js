import React, { useEffect, useRef } from 'react';
import flyImage from './images/butt3.png';

const AsciiImage = () => {
  const canvasRef = useRef(null);
  const asciiRef = useRef(null);

  useEffect(() => {
    const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;
    const getFontRatio = () => {
      const pre = document.createElement('pre');
      pre.style.display = 'inline';
      pre.textContent = ' ';

      document.body.appendChild(pre);
      const { width, height } = pre.getBoundingClientRect();
      document.body.removeChild(pre);

      return height / width;
    };

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
    

    const file = flyImage; // Replace with your predetermined file path

    const image = new Image();
    image.onload = () => {
        console.log('Image loaded:', image.width, image.height);
  
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const asciiImage = asciiRef.current;
  
        const [width, height] = clampDimensions(image.width, image.height);
        console.log('Clamped dimensions:', width, height);
  
        canvas.width = width;
        canvas.height = height;
  
        context.drawImage(image, 0, 0, width, height);
        const grayScales = convertToGrayScales(context, width, height);
        console.log('Gray scales:', grayScales);
  
        drawAscii(grayScales, width, asciiImage);
      };
  
      image.onerror = (error) => {
        console.error('Image loading error:', error);
      };
  
      image.src = file;

    const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\' ';
    const rampLength = grayRamp.length;

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
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <pre ref={asciiRef}></pre>
    </div>
  );
};

export default AsciiImage;
