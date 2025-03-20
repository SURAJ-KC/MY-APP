import { Route, Routes, Link } from 'react-router-dom';  // ✅ No BrowserRouter here
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h2>Visionary Health</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Visionary Health</h1>
      <p>Your AI-powered health consultation platform.</p>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logging in as ${email}`);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Signup() {
  return (
    <div className="signup">
      <h2>Signup</h2>
      <p>Signup form here...</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Consult with AI-powered physicians.</p>
    </div>
  );
}

export default App;
