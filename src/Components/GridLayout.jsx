import React from "react";
// import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const sizes = {
  space: {
    px: "1px",
    32: "8rem",
  },
};

const GridLayout = () => {
  return (
    <div>
      <Center w="100%" bgColor="hsl(0, 0%, 81%)">
        <Grid
          w="90%"
          maxW="1080px"
          my="11rem"
          templateColumns="repeat(5,1fr)"
          gap={10}
        >
          <GridItem
            rowSpan={1}
            colSpan={3}
            bgColor=" hsl(263, 55%, 52%)"
            bgImage="url('../src/images/bg-pattern-quotation.svg')"
            borderRadius="5px"
            bgRepeat="no-repeat"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum
              sit tempora! Rem tenetur doloribus provident ipsum quam odio
              officiis nemo unde atque tempora ab nesciunt earum nostrum, porro
              molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quae veniam unde harum, minus minima necessitatibus est
              magni voluptatem animi modi?
            </p>
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
