import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Box } from "@chakra-ui/react";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Box
        maxW="15em"
        position="absolute"
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
        padding="4"
        margin="3"
        borderWidth="1px"
        borderRadius="lg"
      >
        Un site qui sert de présentation pour mes travaux en GameDesign
      </Box>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
