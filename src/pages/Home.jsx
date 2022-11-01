import { Container, Grid, Typography } from "@mui/material";

import TourCard from "../components/TourCard";
import cities from "../data.json";

const Home = () => {
  return (
    <>
      <Container sx={{ my: 5 }}>
        {cities.map(({ name, tours, id }) => (
          <>
            <Typography key={id} variant="h4" component="h2" mt={5} mb={3}>
              Top {name} Tours
            </Typography>
            <Grid key={id+1} container spacing={5}>
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} cityId={id} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
};

export default Home;
