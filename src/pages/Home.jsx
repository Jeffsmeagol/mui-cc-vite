import { Container, Grid, Typography } from "@mui/material";

import TourCard from "../components/TourCard";
import cities from "../data.json";

const Home = () => {
  return (
    <>
      <Container sx={{ my: 5 }}>
        {cities.map(({ name, tours, id }, idx) => (
          <>
            <Typography variant="h4" component="h2" mt={5} mb={3} key={idx}>
              Top {name} Tours
            </Typography>
            <Grid container spacing={5}>
              {tours.map((tour, idx) => (
                <TourCard tour={tour} key={idx} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
};

export default Home;
