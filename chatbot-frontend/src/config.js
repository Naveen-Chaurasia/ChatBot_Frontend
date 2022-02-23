import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import LearningOptionsSpringboot from "./components/LearningOptionsSpringboot/LearningOptionsSpringboot";
import Message from "./components/Message/Message";
const config = {
  botName: "Bot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to Ask", {
      //widget: "learningOptions",
      
    }),
  ],
  customStyles: {
    botMessageBox: {
     
      backgroundColor: "green",
    },
    chatButton: {
      backgroundColor: "white",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "SpringbootLinks",
      widgetFunc: (props) => <LearningOptionsSpringboot/>,
    },

    {
      widgetName: "Message",
      widgetFunc: (props) => <Message/>,
    },

    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;