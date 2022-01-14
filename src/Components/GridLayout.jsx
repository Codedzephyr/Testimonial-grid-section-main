import React from "react";
import Daniel from "../images/image-daniel.jpg";
import Jonathan from "../images/image-jonathan.jpg";
import Kira from "../images/image-kira.jpg";
import Patrick from "../images/image-patrick.jpg";
import Jeanette from "../images/image-jeanette.jpg";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const GridLayout = () => {
  return (
    <div>
      <Center w="100%" bgColor="hsl(0, 0%, 81%)">
        <Grid
          w="95%"
          maxW="1200px"
          templateColumns="repeat(5,1fr)"
          gap="20px"
          my="2rem"
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
              <Box flex="8">
                <Text mt="0.4rem" color=" hsl(0, 0%, 100%)">
                  Daniel Clifford
                </Text>
                <Text mt="0.2rem" color=" hsl(0, 0%, 100%)" opacity="50%">
                  Verified Graduate
                </Text>
              </Box>
            </Flex>
            <Text
              mt="1.6rem"
              ml="0.2rem"
              color=" hsl(0, 0%, 100%)"
              fontWeight="600"
            >
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </Text>
            <Text
              mt="1.8rem"
              ml="0.2rem"
              color=" hsl(0, 0%, 100%)"
              fontFamily="'Barlow Semi Condensed', sans-serif"
              fontWeight="500"
              lineHeight="1.4"
            >
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </Text>
          </GridItem>
          <GridItem bgColor="hsl(217, 19%, 35%)" borderRadius="5px" p="1.3em">
            <Flex>
              <Center flex="1" w="100%">
                <Image src={Jonathan} borderRadius="50%" alt="Daniel-avatar" />
              </Center>
              <Box flex="8">
                <Text mt="0.4rem" ml="0.6rem" color=" hsl(0, 0%, 100%)">
                  Jonathan Walters
                </Text>
                <Text
                  mt="0.2rem"
                  ml="0.6rem"
                  color=" hsl(0, 0%, 100%)"
                  opacity="50%"
                >
                  Verified Graduate
                </Text>
              </Box>
            </Flex>
            <Text
              mt="1.3rem"
              ml="0.2rem"
              lineHeight="1.3"
              color=" hsl(0, 0%, 100%)"
              fontWeight="600"
              fontFamily="'Barlow Semi Condensed', sans-serif"
            >
              The team was very supportive and kept me motivated
            </Text>
            <Text
              mt="0.8rem"
              ml="0.2rem"
              color=" hsl(0, 0%, 100%)"
              fontSize="0.9rem"
              lineHeight="1.4"
              fontFamily="'Barlow Semi Condensed', sans-serif"
            >
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </Text>
          </GridItem>
          <GridItem
            rowSpan={2}
            bgColor="hsl(0, 0%, 100%)"
            borderRadius="5px"
            p="1.3em"
          >
            <Flex gap={6}>
              <Center flex="1" w="100%">
                <Image src={Kira} borderRadius="50%" alt="Daniel-avatar" />
              </Center>
              <Box flex="8">
                <Text mt="0.4rem" ml="0.4rem" color="hsl(219, 29%, 14%)">
                  Kira Whittle
                </Text>
                <Text
                  mt="0.2rem"
                  ml="0.4rem"
                  color="hsl(219, 29%, 14%)"
                  opacity="50%"
                >
                  Verified Graduate
                </Text>
              </Box>
            </Flex>
            <Text
              mt="1.3rem"
              ml="0.2rem"
              color="hsl(219, 29%, 14%)"
              fontWeight="600"
              fontFamily="'Barlow Semi Condensed', sans-serif"
            >
              Such a life-changing experience. Highly recommended!
            </Text>
            <Text
              mt="0.8rem"
              ml="0.2rem"
              color="hsl(219, 29%, 14%)"
              opacity="70%"
              fontWeight="600"
              fontSize="0.75rem"
              lineHeight="1.4"
              fontFamily="'Barlow Semi Condensed', sans-serif"
            >
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </Text>
          </GridItem>
          <GridItem bgColor="hsl(0, 0%, 100%)" borderRadius="5px" p="1.3em">
            <Flex>
              <Center flex="1" w="100%">
                <Image src={Jeanette} borderRadius="50%" alt="Daniel-avatar" />
              </Center>
              <Box flex="8">
                <Text mt="0.4rem" color="hsl(219, 29%, 14%)">
                  Jeanette Harmon
                </Text>
                <Text mt="0.2rem" color="hsl(219, 29%, 14%)" opacity="50%">
                  Verified Graduate
                </Text>
              </Box>
            </Flex>
            <Text
              mt="1.6rem"
              ml="0.2rem"
              color="hsl(219, 29%, 14%)"
              fontWeight="600"
            >
              An overall wonderful and rewarding experience
            </Text>
            <Text
              mt="1.8rem"
              ml="0.2rem"
              color="hsl(219, 29%, 14%)"
              fontFamily="'Barlow Semi Condensed', sans-serif"
              fontWeight="500"
              lineHeight="1.4"
              fontSize="0.75rem"
            >
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </Text>
          </GridItem>
          <GridItem
            colSpan={3}
            bgColor="hsl(219, 29%, 14%)"
            borderRadius="5px"
            p="1.3em"
          >
            <Flex>
              <Center flex="1" w="100%">
                <Image src={Patrick} borderRadius="50%" alt="Daniel-avatar" />
              </Center>
              <Box flex="8">
                <Text mt="0.4rem" color=" hsl(0, 0%, 100%)">
                  Patrick Abrams
                </Text>
                <Text mt="0.2rem" color=" hsl(0, 0%, 100%)" opacity="50%">
                  Verified Graduate
                </Text>
              </Box>
            </Flex>
            <Text
              mt="1.6rem"
              ml="0.2rem"
              color=" hsl(0, 0%, 100%)"
              fontWeight="600"
              fontSize="18px"
            >
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </Text>
            <Text
              mt="1.8rem"
              ml="0.2rem"
              color=" hsl(0, 0%, 100%)"
              fontFamily="'Barlow Semi Condensed', sans-serif"
              fontWeight="500"
              fontSize="0.75rem"
              lineHeight="1.4"
            >
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </Text>
          </GridItem>
        </Grid>
      </Center>
    </div>
  );
};

export default GridLayout;
