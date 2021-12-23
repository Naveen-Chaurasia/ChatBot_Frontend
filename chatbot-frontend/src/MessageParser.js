// MessageParser starter code in MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      }
      if (lowerCaseMessage.includes("springboot")) {
        this.actionProvider.handleSpringbootList();
      }

      if(lowerCaseMessage.includes("how is ujjwal"))
      {
       this.actionProvider.ujjwalFunction(); 
      }
    }
  }
  
  export default MessageParser;