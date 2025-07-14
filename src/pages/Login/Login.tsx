import React, { useState } from "react";
import { useAuth } from "../../api/hooks/useAuth";
import { useStore } from "../../zustand/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const { getAuth } = useAuth(); 
  const { setToken } = useStore(); 
  const nav = useNavigate();
  const [error, setError] = useState<string | null>(null);
 
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    const login = { 
      username, 
      password, 
    }; 
    getAuth(login) 
      .then(res => { 
        setToken(res.data.accessToken); 
        nav("/") 
      }) 
      .catch(e => { 
        console.log(e);
        setError("Foydalanuvchi nomi yoki parol noto'g'ri!"); 
      }) 

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Sign in to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="username"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Sign In
          </button>
          {error}
        </form>
      </div>
    </div>
  );
};

export default React.memo(Login);
