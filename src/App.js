import Box from "@mui/material/Box";
import { BrowserRouter } from "react-router-dom";
import { styled } from "@mui/system";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

function App() {
  return (
    <BrowserRouter>
      <Box paddingY={6} paddingX={2}>
        <Wrapper>
          <Header />
          <Footer />
        </Wrapper>    
      </Box>
    </BrowserRouter>
  );
}

export default App;