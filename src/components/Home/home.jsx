import Header from "../Header/header";
import Banner from "../Banner/banner";
import Categories from "./Categories";
import MyPost from "./posts";

import { Grid } from "@mui/material";
function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Banner />
        <Grid container>
          <Grid item lg={3} sm={4} xs={12}>
            <Categories />
          </Grid>
          <Grid container item lg={9} sm={8} xs={12}>
            <div>
              <MyPost />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
