import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Badge,
  Flex,
  HStack,
  Container,
  Heading,
  VStack,
  Stack,
  Icon,
  useColorModeValue,
  Link,
  SimpleGrid,
  chakra,
  Text,
  VisuallyHidden,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  ButtonGroup,
  InputGroup,
  InputLeftElement,
  Textarea,
  Wrap,
  WrapItem,
  Center,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUser,
} from "react-icons/fi";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ExternalLinkIcon } from '@chakra-ui/icons';
const IMAGE =
  "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9";



interface LinkItemProps {
  name: string;
  icon: IconType;
}
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
  { name: "User", icon: FiUser },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("yellow.500", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("yellow.500", "gray.800")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Anime By Me
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.800",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("gray.800", "gray.400")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("neutral:800", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          <Link>Anime By Me</Link>
        </Text>
        <FormControl >
          <Input placeholder="Search" />
        </FormControl>
        <Stack direction="row" spacing={7} align="center" px="10px">
          <Button colorScheme="yellow" variant="solid">
            <Link href='https://chakra-ui.com'>Search</Link>
          </Button>
        </Stack>

        <HStack spacing={{ base: "0", md: "6" }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Ayush Nigam</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>

                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
      <div class="row">
        <div class="column1">
          <Center py={6} pr={0} pl={250}>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              w={{ sm: "100%", md: "1100px" }}
              height={{ sm: "476px", md: "20rem" }}
              direction={{ base: "column", md: "row" }}
              bg={useColorModeValue("gray:800", "gray.900")}
              boxShadow={"2xl"}
              padding={4}
            >
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={
                    "https://i.pinimg.com/564x/67/a6/70/67a67031d994bb56c610be1c0722d84d.jpg"
                  }
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Carry Minati
                </Heading>
                <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                  @carryminati
                </Text>
                <Text
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Actor, Youtuber, Roaster.
                </Text>
                <Stack
                  align={"center"}
                  justify={"center"}
                  direction={"row"}
                  mt={6}
                >
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    #video
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    #daily_life
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    #blogging
                  </Badge>
                </Stack>

                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"red.500"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(210 76 69 / 48%), 0 10px 10px -5px rgb(210 76 69 / 43%)"
                    }
                    _hover={{
                      bg: "gray.800",
                    }}
                    _focus={{
                      bg: "yellow.500",
                    }}
                  >
                    Like
                  </Button>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"yellow.500"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(205 160 70 / 48%), 0 10px 10px -5px rgb(205 160 70 / 43%)"
                    }
                    _hover={{
                      bg: "gray.800",
                    }}
                    _focus={{
                      bg: "yellow.500",
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Center>
        </div>
        <Center py={6} pr={0} pl={250}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "1100px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray:800", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={"https://www.smfigure.com/public/uploads/news-1006.webp"}
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Gagan Chaudhary
              </Heading>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                @ganikgagan
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Actor, Youtuber, Auto-Vlogger.
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #video
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #daily_life
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #blogging
                </Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"red.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(210 76 69 / 48%), 0 10px 10px -5px rgb(210 76 69 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Like
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"yellow.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(205 160 70 / 48%), 0 10px 10px -5px rgb(205 160 70 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
        <Center py={6} pr={0} pl={250}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "1100px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray:800", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  "https://pbs.twimg.com/profile_images/1518873097415585794/2LMxeuKx_400x400.jpg"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Triggered Insaan
              </Heading>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                @Triggeredinsaan
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              ></Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #video
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #daily_life
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #blogging
                </Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"red.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(210 76 69 / 48%), 0 10px 10px -5px rgb(210 76 69 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Like
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"yellow.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(205 160 70 / 48%), 0 10px 10px -5px rgb(205 160 70 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
        <Center py={6} pr={0} pl={250}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "1100px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray:800", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={
                  "https://www.theindianwire.com/wp-content/uploads/2019/06/Mostly-Sane-Featured-image-1200x1520.png"
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Mostlysane
              </Heading>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                @mostlysane
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              ></Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #video
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #daily_blogging
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                ></Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"red.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(210 76 69 / 48%), 0 10px 10px -5px rgb(210 76 69 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Like
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"yellow.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(205 160 70 / 48%), 0 10px 10px -5px rgb(205 160 70 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
        <Center py={6} pr={0} pl={250}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "1100px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("gray:800", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={"https://dhruvrathee.com/images/dr-vlogs.jpg"}
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Dhruv Rathee
              </Heading>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                @dhruvrathi
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              ></Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #video
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #educationalvideos
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                ></Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"red.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(210 76 69 / 48%), 0 10px 10px -5px rgb(210 76 69 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Like
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"yellow.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(205 160 70 / 48%), 0 10px 10px -5px rgb(205 160 70 / 43%)"
                  }
                  _hover={{
                    bg: "gray.800",
                  }}
                  _focus={{
                    bg: "yellow.500",
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </div>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        pl={200}
        pb={0}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Anime By Me. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      <div class="form">
        
      </div>
    </>
    

  );
};