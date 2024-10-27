import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { APP_ROUTES } from "constants/routes";
import { useAppDispatch } from "store/hooks";
import { fetchWeatherData } from "store/redux/WeatherAppSlice";

import {
  PageWrapper,
  SearchForm,
  InputContainer,
  SearchButtonContainer,
  WeatherBar,
  WeatherContainer,
  WeatherCondition,
  Temperature,
  City,
  Icons,
  ButtonContainer,
  StandardButton,
  ErrorMessage, 
} from "./styles";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.city) {
        errors.city = "Stadt ist erforderlich";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await dispatch(fetchWeatherData(values.city)).unwrap();
        setError(null);
      } catch (err: any) {
        setError(err.message || "Fehler beim Abrufen der Wetterdaten");
      }
    },
  });

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <PageWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SearchForm onSubmit={formik.handleSubmit}>
        <InputContainer>
          <Input
            id="search-input"
            name="city"
            placeholder="Stadt eingeben"
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.errors.city}
          />
        </InputContainer>
        <SearchButtonContainer>
          <Button type="submit" name="Suchen" isSearchButton />
        </SearchButtonContainer>
      </SearchForm>
      <WeatherBar>
        <WeatherContainer>
          <WeatherCondition>
            <Temperature onClick={() => handleNavigation("/weathers")}>18.0</Temperature>
            <City onClick={() => handleNavigation("/weathers")}>Colorado</City>
          </WeatherCondition>
          <Icons>Icons</Icons>
        </WeatherContainer>
        <ButtonContainer>
          <StandardButton>
            <Button name="Speichern" isStandardButton />
          </StandardButton>
          <StandardButton>
            <Button name="Löschen" isStandardButton />
          </StandardButton>
        </ButtonContainer>
      </WeatherBar>
    </PageWrapper>
  );
}

export default HomePage;
