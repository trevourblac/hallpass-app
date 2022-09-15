import * as React from 'react';
import Svg, { Path, Rect, Line } from 'react-native-svg';

const SplashLogo = (props) => (
  <Svg
    width={66}
    height={70}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.520264 0.75269V69.2473H15.0342V14.201H30.8783V0.75269H0.520264Z"
      fill="white"
    />
    <Path
      d="M65.031 0.75269V69.2473H50.5171V14.201H34.673V0.75269H65.031Z"
      fill="white"
    />
    <Path d="M24.0477 24.8387H41.5036V57.2043H24.0477V24.8387Z" fill="white" />
    <Path
      d="M14.4828 13.3198L24.3492 26.1155M14.4828 69.4759L24.3492 56.6802M51.0685 13.3198L41.2021 26.1155M51.0685 69.4759L41.2021 56.6802M0.520264 0.75269V69.2473H15.0342V14.201H30.8783V0.75269H0.520264ZM65.031 0.75269V69.2473H50.5171V14.201H34.673V0.75269H65.031ZM24.0477 24.8387H41.5036V57.2043H24.0477V24.8387Z"
      stroke="white"
    />
    
  </Svg>
);

export default SplashLogo;
