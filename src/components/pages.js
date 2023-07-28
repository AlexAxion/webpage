import React from 'react';
import Wrapper from "./Calculator/Wrapper";
import Screen from "./Calculator/Screen";
import ButtonBox from './Calculator/ButtonBox'
import Button from './Calculator/Button'
import CalcProvider from "./Calculator/CalcContext";
import photo from './media/Xavier.JPEG';
import {Content1, Content2, Content3} from "./content";
import {page_nav, YouTubeVideo} from './functions';


export function HomePage() {
  return (
    <body id='Homepage'>
    <div class='Homepage'>
      <img class="xavier_photo" src={photo} alt="my" />      
      <div className="content1"><Content1 /> </div>
      <div className="content2"><Content2 /> </div>
      <button className='Button1' onClick={(e) => page_nav('/Calculator')}>Calculator</button>
      <button className='Button3' onClick={(e) => page_nav('/CommunityALI')}>CommunityALI</button>
    
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
      <button className='Button2' onClick={(e) => page_nav('/')}>Home</button>
      
      <YouTubeVideo />
    </div>
  );

};