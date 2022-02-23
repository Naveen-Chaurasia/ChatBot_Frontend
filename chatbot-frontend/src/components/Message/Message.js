

import React, { useEffect, useState } from "react";
import "./Message.css";
import axios from 'axios';
import  { useContext } from "react";
import authContext from "../../auth-context";

const Message=()=>
{

    const [list, setList] = useState([]);

    const auth = useContext(authContext);
    console.log("inside message componnet#####################");
    console.log(auth);
    console.log("inside message componnet#####################");
    useEffect(() => {
        let mounted = true;
        axios.get('http://127.0.0.1:5000/chat?query=who is matt asay?')
          .then(items => {
            if(mounted) {
              setList(items.data["SimilarContents"])
            }
          })
        return () => mounted = false;
      }, [])

    const list1=list.map((op)=>(
    
        <li key={op.id} className="link-List-item-url">
         <a 
         href={op.link}
         className="link-list-item-url"
         target="-blank"
         >  
         {op.title}
         </a>
        </li>
    
    ));

    return <ul className="link-list" >{list1} </ul>
};


export default Message;

















// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const Message = () => {
//     const [advice, setAdvice] = useState("");
//     console.log("******Inside Message component*********");
//     useEffect(() => {
//         const url = "http://127.0.0.1:5000/chat?message=who is matt asay?";

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const json = await response.json();
//                 console.log(json);
//                 setAdvice(json);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <Wrapper>
//             <Paragraph>{advice}</Paragraph>
//         </Wrapper>
//     );
// };

// export default Message;

// const Wrapper = styled.div`
//     padding-top: 150px;
//     margin: 0 auto;
// `;

// const Paragraph = styled.h2`
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 20px;
//     line-height: 48px;
//     text-align: center;
// `;








// //////////////////////////////////////////////////


// // import axios from 'axios';
// // import React from 'react';
// // class Message extends React.Component {
    
// //     state = {
// //       messages: []
// //     }

// //     componentDidMount() {
// //       axios.get(`http://127.0.0.1:5000/chat?message=who is matt asay?`)
// //         .then(res => {
// //           console.log("****************") ;
// //           console.log(res.data);
// //           const messages = res.data;
// //           this.setState({ messages});
// //         })
// //     }   

// //  render() {
// //     return (

// //       <h1>***********************************************************
// //       <ul>
// //         {
// //           this.state.mesage
// //             .map(person =>
// //               <li>message</li>
// //               //<li key={person.id}>{person.name}</li>
// //             )
// //         }
// //       </ul>
// //       </h1>
// //     )
// //   }


// //   }
  
// //   export default Message;