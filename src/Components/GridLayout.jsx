import React from "react";
import Daniel from "../images/image-daniel.jpg";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const GridLayout = () => {
  return (
    <div>
      <Center w="100%" bgColor="hsl(0, 0%, 81%)">
        <Grid
          w="90%"
          maxW="1080px"
          my="7rem"
          templateColumns="repeat(5,1fr)"
          gap={10}
        >
          <GridItem
            rowSpan={1}
            colSpan={3}
            bgColor=" hsl(263, 55%, 52%)"
            bgImage="url('../src')"
            borderRadius="5px"
            bgRepeat="no-repeat"
            p="1.3em"
          >
            <Flex>
              <Center flex="1" w="100%">
                <Image src={Daniel} borderRadius="50%" alt="Daniel-avatar" />
              </Center>
              <Box flex="7">
                <Text mt="0.4rem"> Daniel Clifford</Text>
                <Text mt="0.2rem"> Daniel Clifford</Text>
              </Box>
            </Flex>
            <Text mt = "0.8rem">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </Text>
          </GridItem>
          <GridItem bgColor="hsl(217, 19%, 35%)" borderRadius="5px">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum
              sit tempora! Rem tenetur doloribus provident ipsum quam odio
              officiis nemo unde atque tempora ab nesciunt earum nostrum, porro
              molestiae.
            </p>
          </GridItem>
          <GridItem rowSpan={2} bgColor="hsl(0, 0%, 100%)" borderRadius="5px">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum
              sit tempora! Rem
            </p>
          </GridItem>
          <GridItem bgColor="hsl(0, 0%, 100%)" borderRadius="5px">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum
              sit tempora! Rem tenetur doloribus provident ipsum quam odio
              officiis nemo unde atque tempora ab nesciunt earum nostrum, porro
              molestiae.
            </p>
          </GridItem>
          <GridItem colSpan={3} bgColor="hsl(219, 29%, 14%)" borderRadius="5px">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum
              sit tempora! Rem tenetur doloribus provident ipsum quam odio
              officiis nemo unde atque tempora ab nesciunt earum nostrum, porro
              molestiae.
            </p>
          </GridItem>
        </Grid>
      </Center>
    </div>
  );
};

export default GridLayout;
