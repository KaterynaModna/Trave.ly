import { useState } from "react";

export default function UserForm() {
  const [userData, setUserData] = useState({});

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", userData);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form_wrapper">
        <input
          onChange={onChangeHandler}
          className="form_input"
          type="text"
          id="user_name"
          name="user_name"
          placeholder="First name"
          required
        />
        <input
          onChange={onChangeHandler}
          className="form_input"
          type="tel"
          id="user_phone"
          name="user_phone"
          placeholder="+ 38 (_ _ _) _ _ _   _ _   _ _"
          required
        />
        <input
          onChange={onChangeHandler}
          className="form_input"
          type="email"
          id="user_email"
          name="user_email"
          placeholder="yourmail@gmail.com"
          required
        />
        <button className="form_button" type="submit">
          Book Consultation
        </button>
      </div>
    </form>
  );
}