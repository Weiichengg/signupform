import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

const onSubmit = (history) => (event) => {
  var custName = event.name;
  window.alert(custName);
  console.log(event);
  history.push("/page2");
};

const buttonHandler = (event) => {
  console.log(event);
  var custName = event.name;
  window.alert(custName);

  window.alert("button clicked");
};

// const Page1 = withRouter(({ history, path, text }) => {
//   const name = useSelector((state) => state.name);
//   const email = "hello"; //useSelector((state) => state.email)

//   return (
//     <Form
//       onSubmit={onSubmit(history)}
//       // validate={validate}
//       render={({ handleSubmit }) => (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>First Name</label>
//             <Field
//               name="name"
//               component="input"
//               placeholder="name"
//               value={name}
//             />
//           </div>
//           <div>
//             <label>First Name</label>
//             <Field
//               name="email"
//               component="input"
//               placeholder="email"
//               value={email}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     />
//   );
// });

const Page1 = withRouter(({ history, path, text }) => {
  return (
    <Form
      onSubmit={onSubmit(history)}
      // validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="name" component="input" placeholder="name" />
          </div>
          <div>
            <label>First Name</label>
            <Field name="email" component="input" placeholder="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
});

export default Page1;

/*
name 
email
next 

password
phone number
back next


back submit
onClick={() => {
            history.push("/page2");
          }}
*/
