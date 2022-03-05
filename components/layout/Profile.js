import classes from "./Layout.module.css";
import { Box, Avatar } from "@chakra-ui/react";

function Profile(props) {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          size="2xl"
          name="Segun Adebayo"
          src="https://api.lorem.space/image/game?hash=88tlj08h"
        />{" "}
        <h5>présentation</h5>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          padding="3"
          marginBottom="4"
        >
          <p>
            There are many benefits to a joint design and development system.
            Not only does it bring benefits to the design team.
          </p>
        </Box>
      </Box>
    </div>
  );
}

export default Profile;
