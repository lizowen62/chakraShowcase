import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import { useColorModeValue, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import moment from 'moment';
import { PlusSquareIcon } from '@chakra-ui/icons'

function MeetupItem(props) {
  const bg = useColorModeValue("", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <li className={classes.item}>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <Box
          fontWeight="semibold"
          fontSize="xl"
          position="relative"
          top="3"
          display='flex'
          marginBottom='1em'
          justifyContent='space-evenly'
          opacity="0.7"
        >
          <Tag>
            { moment(props.date).format('HH:MM A DD MM, YYYY') }
          </Tag>
          <p>Made with {props.engine}</p>
        </Box>
        <div className={classes.image}>
          <img src={"http://localhost:3000/" + props.image + ""} />
        </div>
        <div className={classes.badge}>
          <Badge margin='1' borderRadius="full" px="2" colorScheme="teal">
            tag3
          </Badge>
          <Badge margin='1' borderRadius="full" px="2" colorScheme="teal">
            tag3
          </Badge>
          <Badge margin='1' borderRadius="full" px="2" colorScheme="teal">
            tag3
          </Badge>
          <Badge margin='1' borderRadius="full" px="2" colorScheme="teal">
            tag3
          </Badge>
          <div className={classes.titre}>
            <p>{props.name}</p>
          </div>
        </div>
        <Box
          fontWeight="semibold"
          fontSize="xl"
          display="flex"
          justifyContent="center"
        ></Box>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <Button
            colorScheme="teal"
            className={classes.content}
            onClick={onOpen}
            variant="ghost"
          >
            <PlusSquareIcon w={6} h={6} />
          </Button>
        </div>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="xl"
        isCentered
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h3>{props.address}</h3>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>f'eeddz</ModalBody>

          <ModalFooter>date</ModalFooter>
        </ModalContent>
      </Modal>
    </li>
  );
}

export default MeetupItem;
