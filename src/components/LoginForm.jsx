import { useState } from "react";
import { supabase } from "../supabase";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <section className=" mx-auto bg-background py-8">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-heading text-3xl font-bold text-transparent">
          Log In Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 grid gap-4">
            <div className="max-w-sm">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-bold"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                className="block w-full rounded-md bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="max-w-sm">
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-md bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="max-w-sm">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="block w-full rounded-md bg-secondary px-4 py-3 text-sm focus:border-accent-500 focus:ring-accent-500"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button
                className="mt-4 cursor-pointer rounded-lg bg-secondary px-4 py-2 transition duration-300 hover:bg-accent-500
           focus:bg-accent-500"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
