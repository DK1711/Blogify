import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email,LinkedIn } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Divyam Kashyap</Typography>
        <Text variant="h5">
          I'm a Full Stack Developer based in India.My major interest is MERN
          stack development.
          <br />
          If you are interested, you can view some of my projects here
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/divkp"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Text>
        <Text variant="h5" style={{display:'flex', alignItems:'center'}}>
          Need something built or simply want to have chat? Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.linkedin.com/in/divyam-5430b4227/"
              color="inherit"
              target="_blank"
            >
              <LinkedIn />
            </Link>
          </Box>
          or send me an Email
          <Link
            href="mailto:divyamkp23@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
