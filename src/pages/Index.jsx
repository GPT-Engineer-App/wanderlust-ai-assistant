import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, Avatar, IconButton, Image } from "@chakra-ui/react";
import { FaPaperPlane, FaHotel, FaPlane, FaMapMarkedAlt } from "react-icons/fa";

const messagesData = [
  { sender: "bot", text: "Welcome to Wanderlust AI! Tell me about your dream vacation." },
  { sender: "user", text: "I want to visit Paris." },
  { sender: "bot", text: "Great choice! Do you have any specific dates in mind?" },
];

const Index = () => {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Got it! Let me find the best options for you." }]);
      }, 1000);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Wanderlust AI
        </Text>
        <Box width="100%" height="60vh" overflowY="auto" border="1px solid #ccc" borderRadius="md" padding={4}>
          {messages.map((msg, index) => (
            <HStack key={index} justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"} width="100%" marginY={2}>
              {msg.sender === "bot" && <Avatar name="Wanderlust AI" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGFzc2lzdGFudCUyMGF2YXRhcnxlbnwwfHx8fDE3MTU3NTU5NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" />}
              <Box bg={msg.sender === "user" ? "blue.100" : "gray.100"} borderRadius="md" padding={3} maxWidth="70%">
                <Text>{msg.text}</Text>
              </Box>
              {msg.sender === "user" && <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTczMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />}
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSend} />
        </HStack>
        <HStack spacing={4} marginTop={4}>
          <Button leftIcon={<FaHotel />} colorScheme="teal" variant="solid">
            Book Hotel
          </Button>
          <Button leftIcon={<FaPlane />} colorScheme="teal" variant="solid">
            Book Flight
          </Button>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="teal" variant="solid">
            Book Activity
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
