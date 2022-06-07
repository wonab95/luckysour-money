import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../assets/FullLogo.png";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));


export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="" width={"100%"} style={{ marginTop: 0 }} />
      <Typography variant="h6" marginTop={10}>
        Sourblock has the high rewards (10% daily) and lowest fees. 
      </Typography>
      <Typography variant="h6" marginTop={5}>
        ETH CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  ETH MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  LINK MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  BAT MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  BNT MINER
            </Button>
        </Grid>
      </ButtonContainer>
      <Typography variant="h6" marginTop={5}>
        BSC CHAIN: 
      </Typography>
      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  BNB MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  XRP MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  ADA MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  LTC MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  EOS MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  ZIL MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  DOGE MINER
            </Button>
        </Grid>
        <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.location.href=window.location.href;
              }}
              >
                  CAKE MINER
            </Button>
        </Grid>
      </ButtonContainer>
    </Wrapper>
  );
}
