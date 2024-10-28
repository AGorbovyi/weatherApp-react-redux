import { useAppSelector, useAppDispatch } from "store/hooks"

// import {
//   employeeSliceSelectors,
//   employeeSliceActions,
// } from "store/redux/employeeApp/employeeSlice"
// import { Employee } from "store/redux/employeeApp/types"

import Button from "components/Button/Button"

import { WeatherIconRain } from "assets"
import {
  PageWrapper,
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

function Weather() {
  // const dispatch = useAppDispatch()

  // const deleteAllEmployees = () => {
  //   dispatch(employeeSliceActions.deleteAllEmployees())
  // }

  // const employeeInitialState = useAppSelector(employeeSliceSelectors.employees)
  // const employeeCards = employeeInitialState.map((employee: Employee) => {
  //   const deleteEmployee = () => {
  //     dispatch(employeeSliceActions.deleteEmployee({ id: employee.id }))
  //   }
  //   return (
  //     <PageWrapper>
  //       <CardWrapper>
  //         <CardLabel>
  //           <LabelName>Name:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>Surname:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>Age:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>Job Position:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <Button isDeleteVariant name="Delete" onClick={} />
  //       </CardWrapper>
  //     </PageWrapper>
  //   )
  // })
  return (
    <PageWrapper>
      <WeatherBar>
        <MainBarBlock>
          <WeatherContainer>
            <WeatherCondition>
              <Temperature>18.0</Temperature>
              <City>Colrado</City>
            </WeatherCondition>
            <Icons>
              <IconImg src={WeatherIconRain} alt=" Weather Icon"></IconImg>
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

      <ButtonContainer>
        <Button
          name=" Delete all cards"
          // onClick={}
          isBlueButton
        />
      </ButtonContainer>
    </PageWrapper>
  )
}

export default Weather
