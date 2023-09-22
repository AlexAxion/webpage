import React from 'react';
import Wrapper from "./Calculator/Wrapper";
import Screen from "./Calculator/Screen";
import ButtonBox from './Calculator/ButtonBox'
import Button from './Calculator/Button'
import CalcProvider from "./Calculator/CalcContext";
import {Content2, Content3, Content4} from "./content";
import {page_nav, YouTubeVideo, ImageCarousel} from './functions';
import Rust from './media/Rust.jpg';
import cpp from './media/CPP.jpg';
import ASM from './media/ASM.png';
import Reactsym from './media/React.png';
import Snowfall from 'react-snowfall';


export function HomePage() {
  return (
    
    <body id='Homepage'>
    <Snowfall className="snow" snowflakeCount={100} style={{ zIndex: 1000, position: 'fixed', }} />
    <div class='Homepage'>
      <div className="xavier_photo"> <ImageCarousel/> </div> 
      <div className="content1">
      <img className='Code_languages' src={Rust} alt="1" />
      <img className='Code_languages' src={cpp} alt="1" />
      <img className='Code_languages' src={ASM} alt="1" />
      <img className='Code_languages' src={Reactsym} alt="1" />
      <div className="content2"><Content2 /> </div>
      <div className="content4">
      <div className="Email"><Content4 />
      <button className='Button1' onClick={(e) => page_nav('/Calculator')}>Calculator</button>
      <button className='Button3' onClick={(e) => page_nav('/CommunityALI')}>ComALI</button>
      <button className='Button4' onClick={(e) => page_nav('https://github.com/AlexAxion/webpage')}>Github</button>
      
      </div>
      </div>
      
    </div>
    </div>
    </body>
  
  );

};

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export const Calculator = () => {
  return (
    
    <CalcProvider>
    <Wrapper>
      <Screen />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button
            value={btn}
            key={i}
          />
        ))}
        <button className='Button2' onClick={(e) => page_nav('/')}>Home</button>
      </ButtonBox>
    </Wrapper>
  </CalcProvider>
  
  );
};

export function CommunityALI() {
  return (
    <div className="CommunityALI">
      <YouTubeVideo />
      <div className="content3"><Content3 /> </div>
      <button className='Button2' onClick={(e) => page_nav('/')}>Home</button>
      
    </div>
  );

};