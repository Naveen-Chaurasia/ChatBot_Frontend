
import Message from './components/Message/Message';
import axios from 'axios';
import AuthContext from "./auth-context";
import React, { Component } from "react";
class ActionProvider extends Component{
    constructor(createChatBotMessage, setStateFunc) {
      super();
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
     // this.l = { message3:null };
     this.state = {
      message3:""
     }
    }

    // new method
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.");
      this.updateChatbotState(greetingMessage);
      console.log(greetingMessage);
    }

    ujjwalFunction()
    {
      const ujjwalmsg=this.createChatBotMessage("asdkjfhkjasdgfkjgDFJS");
      this.updateChatbotState(ujjwalmsg);
    }
  
    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget: "javascriptLinks",
        }
      );
      console.log(typeof(message));
      console.log((message));
      this.updateChatbotState(message);
    }

    handleSpringbootList = () => {
      const message=this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Springboot",
        {
          widget:"SpringbootLinks",
        }
      );

      this.updateChatbotState(message);
    };

    fetchApiMessage=(message2)=>
   {
    // this.setState((state) => {
    //   return { message3: message2} });
this.state.message3=message2;
console.log("____________________________");
console.log(this.state.message3);
     // this.set({message3:message2});
    //const [message1, setmessage1] = useState(message2);
      var m=[];
       axios.get('http://127.0.0.1:5000/chat?query='+message2)
        .then((response)=>{ return  response })
        .then((data)=> {
            const items = data;
            //console.log("##############");
            console.log(typeof((items.data)) )
            console.log(((items.data)) )
            m=(items.data);
            console.log("*************");
            console.log(m);
            //debugger;
            //const message= this.createChatBotMessage(m["Similar Contents"][0]+m["Similar Contents"][1]+m["Similar Contents"][2]);
            const message=this.createChatBotMessage(
              m["BestAnswer"],
              {
                widget:"Message",
              });
           this.updateChatbotState(message);
          // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
           //console.log(typeof(m));
            
          })
        // debugger;
          return (
            <AuthContext.Provider value={{ message1 : this.state.message3}}>
             {/* <Message /> */}
             </AuthContext.Provider>
             
          );



   };
  

    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
        message1:message
      }));
    }
    

    // render() {
    //   return (
    //     <AuthContext.Provider value={{ message1:this.state.message3}}>
    //        <Message />
    //      </AuthContext.Provider>
    //   );
    //  }

  }
  
  export default ActionProvider;