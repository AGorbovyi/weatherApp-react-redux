import { WeatherBlockProps } from "./types"
import {
  WeatherBar,
  MainBarBlock,
  WeatherContainer,
  WeatherCondition,
  Temperature,
  City,
  Icons,
  IconImg,
  ButtonContainer,
  StandardButton,
} from "./styles"
import Button from "components/Button/Button"

function WeatherBlock({
  name,
  onClick,
  isSearchButton = false,
  isStandardButton = false,
}: WeatherBlockProps) {
  return (
    <WeatherBar>
    <MainBarBlock>
      <WeatherContainer>
        <WeatherCondition>
          <Temperature>18.0</Temperature>
          <City>Colrado</City>
        </WeatherCondition>
        <Icons>
          <IconImg src={} alt=" Weather Icon"></IconImg>
        </Icons>
      </WeatherContainer>
    </MainBarBlock>
    <ButtonContainer>
      <StandardButton>
        <Button name="Save" isStandardButton />
      </StandardButton>
      <StandardButton>
        <Button name="Delete" isStandardButton />
      </StandardButton>
    </ButtonContainer>
  </WeatherBar>
  )
}

export default WeatherBlock
