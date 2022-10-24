import { AccessTime } from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Rating,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Img = styled("img")({
  width: "100%",
  height: "5rem",
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <Link to={`${tour.id}`}>
        <Paper elevation={3}>
          <Img src={tour.image} alt="" />
          <Box px={1}>
            <Typography component="h2" variant="subtitle1">
              {tour.name}
            </Typography>
            <Stack direction="row" alignItems="flex-end" spacing={0.5}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="subtitle2">{tour.duration} hours</Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-end" spacing={0.5} pt={3}>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography variant="body2">{tour.rating}</Typography>
              <Typography variant="body2">
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Stack>
            <Typography variant="h6" component="h3">
              From C ${tour.price}
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default TourCard;
