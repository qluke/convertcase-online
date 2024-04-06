"use client";

import {
  Textarea,
  Button,
  Wrap,
  WrapItem,
  Heading,
  Alert,Text,
  AlertIcon,
} from "@chakra-ui/react";

import "@/lib/to-title-case.js";
import { useState, useEffect } from "react";

export default function IndexPages({ dictionary }) {
  const [inputText, setInputText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [isCopied, setIsCopied] = useState(false); // State to track if copied

  useEffect(() => {
    let timer;
    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false); // Reset isCopied after 3 seconds
      }, 3000);
    }
    return () => clearTimeout(timer); // Clear timer when component unmounts or isCopied changes
  }, [isCopied]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.length > 0);
    const lines = text.split(/\r\n|\r|\n/);

    setCharCount(text.length);
    setWordCount(words.length);
    setSentenceCount(sentences.length);
    setLineCount(text ? lines.length : 0);
  };

  const convertText = (convertFunction) => {
    const newText = convertFunction(inputText);
    setInputText(newText);
  };

  const convertToSentenceCase = () => {
    var sentences = inputText.split(/([.!?]\s*|\n)/);
    for (var i = 0; i < sentences.length; i++) {
      sentences[i] = capitalizeFirstLetter(sentences[i]);
    }
    return sentences.join("");
  };

  function capitalizeFirstLetter(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  const convertToLowercase = () => {
    return inputText.toLowerCase();
  };

  const convertToUppercase = () => {
    return inputText.toUpperCase();
  };

  const convertToCapitaliseCase = () => {
    return inputText.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const convertToTitleCase = () => {
    return inputText.toTitleCase();
  };

  const handleDownload = () => {
    const blob = new Blob([inputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "convertcase-online.txt";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputText);
    setIsCopied(true); // Set isCopied to true after successful copy
  };

  const handleClear = () => {
    setInputText("");
    setCharCount(0);
    setWordCount(0);
    setSentenceCount(0);
    setLineCount(0);
  };

  return (
    <div className="justify-center items-center m-auto min-h-screen flex flex-col pt-8 ">
      <div className="py-7">
        <Heading>{dictionary.title}</Heading>
      </div>
      {isCopied && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          {dictionary.alert}
        </Alert>
      )}
      <div className=" flex-wrap gap-2 mb-4">
        <Textarea
          cols="90"
          rows="10"
          maxLength="30000"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-96 h-auto min-h-96 bg-white"
          placeholder={dictionary.placeholder}
          value={inputText}
          onChange={handleInputChange}
          spellCheck="false"
        />
        <Wrap spacing={4} justify='center'>
          <WrapItem>
            <Button
              colorScheme="whatsapp"
              onClick={() => convertText(convertToSentenceCase)}
            >
              {dictionary.sentence_case}
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              colorScheme="whatsapp"
              onClick={() => convertText(convertToCapitaliseCase)}
            >
              {dictionary.capitalise_case}
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              colorScheme="whatsapp"
              onClick={() => convertText(convertToTitleCase)}
            >
              {dictionary.title_case}
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
                colorScheme="whatsapp"
                onClick={() => convertText(convertToLowercase)}
            >
              {dictionary.lower_case}
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
                colorScheme="whatsapp"
                onClick={() => convertText(convertToUppercase)}
            >
              {dictionary.upper_case}
            </Button>
          </WrapItem>
          <br />
          <WrapItem>
            <Button colorScheme="cyan" onClick={handleDownload}>
              {dictionary.download}
            </Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="messenger" onClick={handleCopy}>
              {dictionary.copy}
            </Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="red" onClick={handleClear}>
              {dictionary.clear}
            </Button>
          </WrapItem>
        </Wrap>
      </div>
      <div>
        <Text fontSize='md'>
          {dictionary.character_count}: {charCount} | {dictionary.word_count}:{" "}
          {wordCount} | {dictionary.sentence_count}: {sentenceCount} |{" "}
          {dictionary.line_count}: {lineCount}
        </Text>
      </div>
    </div>
  );
}
