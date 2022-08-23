import React from "react";


const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "-1em",
    marginTop: "1em",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
    width:'100vw'
  };

  return (
    <div style={styles}>
      <p>{msg}</p> 
      
    
     
    </div>
  );
};

export default Message;