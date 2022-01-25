// importing required packages
import React from "react";
// this is a simple conatct page component
// it will be rendered when user visits the root path "/conatct"
function Contact() {
  return (
    <main>
      <h1>Contact Page</h1>
      <div>
        <input type="email" placeholder="Enter Email" />
        <button>Submit</button>
      </div>
    </main>
  );
}
export default Contact;
