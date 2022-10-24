import {
  BottomNavigation,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import Accordian from "../components/Accordian";
import BasicModal from "../components/BasicModal";
import ImageCollage from "../components/ImageCollage";
import cities from "../data.json";

const Img = styled("img")({
  height: "20rem",
  width: 600,
});

export default function Tour() {
  const { id } = useParams();

  return (
    <>
      <Container sx={{ width: 900, my: 8 }}>
        <Typography variant="h3" component="h1">
          Explore the World
        </Typography>
        <Stack direction="row" alignItems="center" mt={3} spacing={1}>
          <Img src={cities[0].tours[`${id - 1}`].image} alt="" />
          <ImageCollage />
        </Stack>
        <Typography variant="h6" component="h4" mt={3}>
          About this ticket
        </Typography>
        <Typography variant="body1" my={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, enim
          magnam quaerat cupiditate pariatur? Id doloribus voluptatibus
          voluptates labore repellat, nisi dolor, in, odit quaerat deleniti
          omnis tempora quis consequatur enim laboriosam maiores ipsam. Ipsa
          placeat non aspernatur nisi?
        </Typography>
        <Accordian />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  );
}
