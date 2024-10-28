import { ButtonProps } from "./types"
import {  WeatherBar,
  MainBarBlock,
  WeatherContainer,
  WeatherCondition,
  Temperature,
  City,
  Icons,
  IconImg,
  ButtonContainer,
  StandardButton, } from "./styles"

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
  disabled = false,
  isSearchButton = false,
  isStandardButton = false,
}: ButtonProps) {
  return 
  // (
  //   <WeatherBar>
  //   <MainBarBlock>
  //     <WeatherContainer>
  //       <WeatherCondition>
  //         <Temperature>18.0</Temperature>
  //         <City>Colrado</City>
  //       </WeatherCondition>
  //       <Icons>
  //         <IconImg src={WeatherIconRain} alt=" Weather Icon"></IconImg>
  //       </Icons>
  //     </WeatherContainer>
  //   </MainBarBlock>
  //   <ButtonContainer>
  //     <StandardButton>
  //       <Button name="Save" isStandardButton />
  //     </StandardButton>
  //     <StandardButton>
  //       <Button name="Delete" isStandardButton />
  //     </StandardButton>
  //   </ButtonContainer>
  // </WeatherBar>
  // )
}

export default Button
