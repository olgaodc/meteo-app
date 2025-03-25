import useTopCities from "src/hooks/use-top-cities";
import Card from "../card/card";
import Container from "../container/container";
import Loader from "../loader/loader";
import useTopCitiesForecast from "src/hooks/use-top-cities-forecast";
import styles from "./styles.module.scss";

const CardsSection = () => {
  const { data: topCities, isLoading: isCitiesLoading } = useTopCities();
  const forecastsData = useTopCitiesForecast(topCities);

  const isForecastsLoading = forecastsData.some(({ isLoading }) => isLoading);

  if (isCitiesLoading || isForecastsLoading) {
    return <Loader />;
  }

  const forecasts = forecastsData.map(({ data }) => ({
    data,
  }));

  console.log("Top Cities:", topCities);
  console.log(forecasts);

  const mathRound = (num) => Math.round(num);

  return (
    <section className={styles.sectionWrapper}>
      <Container>
        <h1 className={styles.sectionTitle}>Mostly viewed cities</h1>
        <div className={styles.section}>
          {forecasts &&
            forecasts.map((forecast) => {
              const forecastNow = forecast.data.forecastTimestamps[0];

              return (
                <Card
                  key={forecast.data.place.code}
                  cityName={forecast.data.place.name}
                  temperature={mathRound(forecastNow.airTemperature)}
                  feelsLike={mathRound(forecastNow.feelsLikeTemperature)}
                  windSpeed={forecastNow.windSpeed}
                  relativeHumidity={forecastNow.relativeHumidity}
                />
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default CardsSection;
