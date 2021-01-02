import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }
  ]);
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  // const handleChange = event => {
  //   setData({
  //     ...data, [event.target.name]: event.target.value
  //   })
  // }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 3 })}
            // onChange={event => handleChange(event)}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="luo"
            id="lastName"
            ref={register({ required: true })}
            // onChange={event => handleChange(event)}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">Email*</label>
          <input 
            name="email" 
            id="email"
            ref={register({ required: true })}
            // onChange={event => handleChange(event)}
            />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" data-testid="submit"/>
      </form>
    </div>
  );
};

export default ContactForm;
