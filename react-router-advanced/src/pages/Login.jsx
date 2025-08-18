import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', true);
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
    </div>
  );
}
