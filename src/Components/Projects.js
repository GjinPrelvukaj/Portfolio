import "../tailwind.css";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Image, Stack, Heading, Text, Divider } from "@chakra-ui/react";

import portfolio from "../Images/portfolio.png";
import balkatour from "../Images/balkatour.png";
import sfc from "../Images/project.png";

export default function Skills() {
  return (
    <div id="projects">
      <div
        className="flex items-center justify-center"
        style={{ marginTop: 50 }}
      >
        <Text fontSize={{ base: "4xl", md: "6xl" }}>Explore The Projects</Text>
      </div>
      <div
        className="flex flex-wrap justify-center"
        style={{
          marginTop: 4,
          marginBottom: -4,
          gap: 50,
        }}
      >
        <Card
          style={{ height: "20%", marginTop: "5%" }}
          maxW={{ base: "sm", md: "md", lg: "sm" }}
        >
          <CardBody>
            <Image
              src={portfolio}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Portfolio</Heading>
              <Text>
                Explore my skills and projects in one space. A concise showcase
                of my professional journey.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter style={{ justifyContent: "center" }}>
            <a
              href="#home"
              className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
            >
              Visit
            </a>
          </CardFooter>
        </Card>
        <Card maxW={{ base: "sm", md: "md", lg: "lg" }}>
          <CardBody>
            <Image
              src={balkatour}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">BalkaTour</Heading>
              <Text>
                Contributed significantly to BalkaTour, a standout project in
                Balkathon 4.0 — a testament to innovation and excellence.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter style={{ justifyContent: "center" }}>
            <a
              href="https://github.com/lirikrexhepi/Balkatour"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
            >
              Visit
            </a>
          </CardFooter>
        </Card>
        <Card
          style={{ height: "20%", marginTop: "5%" }}
          maxW={{ base: "sm", md: "md", lg: "sm" }}
        >
          <CardBody>
            <Image
              src={sfc}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Stress Free Corner</Heading>
              <Text>
                Contributed to crafting Stress-Free Corner—an online haven for
                holistic well-being, featuring my expertise in body-oriented
                psychotherapy and counseling psychology.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter style={{ justifyContent: "center" }}>
            <a
              href="https://stressfreecorner.co/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
            >
              Visit
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
