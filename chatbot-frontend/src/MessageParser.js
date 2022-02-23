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

      if(lowerCaseMessage.includes("ujjwal"))
      {
       this.actionProvider.ujjwalFunction();
       //this.actionProvider.fetchApiMessage(message); 
      }
      else
      {
        console.log("******In message parser******")
       const l=this.actionProvider.fetchApiMessage(message);
       console.log(l);
      // debugger;
       
      }
    }
  }
  
  export default MessageParser;
  