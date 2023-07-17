import React, { useState } from "react";

export default function Form() {
  const [userData, setUserData] = useState({
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(userData);
    if (Object.keys(validationErrors).length === 0) {
      // Formu gönderme işlemi
      console.log("Form submitted:", userData);
      setUserData({
        password: "",
        email: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (data.password.trim() === "") {
      errors.password = "Password is required";
    }

    if (data.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!data.email.includes("@")) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
