import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [loding, setLoding] = useState(false);

  // useForm hook from react-hook-form for form handling
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    try {
      setLoding(true);
      // Simulate a registration API call
      setTimeout(() => {
        setLoding(false);
        toast.success("Registration successful!");
      }, 2000);
    } catch (error) {
      setLoding(false);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <h1 className="text-blue-700 dark:text-blue-300 text-3xl font-bold mb-10">
        Linked Posts
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 flex flex-col gap-4 w-3/4 ring-2 ring-blue-50 dark:ring-blue-950 rounded-lg shadow-lg shadow-blue-50 dark:shadow-blue-950"
      >
        <h4 className="text-blue-700 dark:text-blue-300 text-xl">
          Register now
        </h4>
        {/* name */}
        <input
          type="text"
          name="name"
          placeholder="Type your name.."
          className="input input-md w-full *:focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 "
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Name must be less than 20 characters",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Name must contain only letters and spaces",
            },
          })}
        />
        {/* email */}
        <input
          name="email"
          type="email"
          placeholder="Type your email.."
          className="input input-md w-full *:focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 "
          {...register("name", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email not valide",
            },
          })}
        />
        {/* password */}
        <input
          name="password"
          type="password"
          placeholder="Type your password.."
          className="input input-md w-full *:focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 "
          {...register("name", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must be less than 20 characters",
            },
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message:
                "Password must contain at least one letter and one number",
            },
          })}
        />
        {/* rePassword */}
        <input
          name="rePassword"
          type="password"
          placeholder="confirm password"
          className="input input-md w-full *:focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 "
          {...register("name", {
            required: {
              value: true,
              message: "Confirm password is required",
            },
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {/* dateOfBirth */}
        <input
          name="dateOfBirth"
          type="date"
          placeholder="Select date"
          className="input w-full *:focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 "
          {...register("name", {
            required: {
              value: true,
              message: "Date of birth is required",
            },
            validate: (value) => {
              const today = new Date();
              const selectedDate = new Date(value);
              return (
                today - selectedDate >= 18 ||
                "Date of birth cannot be in the future"
              );
            },
          })}
        />
        {/* gender */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              className="radio radio-sm *:focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 "
              {...register("gender", {
                required: {
                  value: true,
                  message: "gender is required",
                },
              })}
              checked="checked"
            />
            <label for="">Male</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              className="radio radio-md *:focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 "
              {...register("gender", {
                required: {
                  value: true,
                  message: "gender is required",
                },
              })}
              checked="checked"
            />
            <label for="">Female</label>
          </div>
        </div>
        {/* submit button */}
        <button className="btn btn-primary btn-md">Register</button>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 dark:text-blue-400">
            {loding ? (
              <Circles
                height="80"
                width="80"
                color="blue" 
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Login"
            )}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
