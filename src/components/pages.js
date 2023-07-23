import Wrapper from "./Calculator/Wrapper";
import Screen from "./Calculator/Screen";
import ButtonBox from './Calculator/ButtonBox'
import Button from './Calculator/Button'
import CalcProvider from "./Calculator/CalcContext";
import React from 'react';
import XavierPhoto from "./Xavierphoto";
import {Content1, Content2} from "./content";
import {Button1, Button2, Button3} from './Buttons';

export function HomePage() {
  return (

    <div className="Homepage">
      
      <XavierPhoto></XavierPhoto>
      <Content1></Content1>
      <Content2></Content2>
      <Button1></Button1>
      <Button3></Button3>
    </div>
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
        <Button2 />
      </ButtonBox>
    </Wrapper>
  </CalcProvider>
  );
};

export function CommunityALI() {
  return (

    <div className="CommunityALI">
      
      <Button2 />
      
      
    </div>
  );

};