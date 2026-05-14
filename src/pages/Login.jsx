import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { auth, provider } from '../firebase'
import '../styles/style.css'

const LoginForm = () => {
  const [role, setRole] = useState('user')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    localStorage.setItem('role', role);

    if (role === 'admin') {
      navigate('/admin', { replace: true })
    } else {
      navigate('/home', { replace: true })
    }
  }

  const onSubmitFailure = errorMsg => {
    setShowSubmitError(true)
    setErrorMsg(errorMsg)
  }

  const submitForm = async event => {
    event.preventDefault()

    if (!email || !password) {
      onSubmitFailure('Please enter both email and password')
      return
    }

    if (role === 'user') {
      const fakeToken = `${email}-user-token`
      onSubmitSuccess(fakeToken)
      return
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const jwtToken = await userCredential.user.getIdToken()
      onSubmitSuccess(jwtToken)
    } catch (error) {
      onSubmitFailure('Invalid Email or Password')
    }
  }

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const jwtToken = await result.user.getIdToken()
      onSubmitSuccess(jwtToken)
    } catch (error) {
      console.error("Google Login Error:", error);
      onSubmitFailure('Google Login Failed: ' + error.message)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  const savedRole = localStorage.getItem('role')

  if (jwtToken !== undefined) {
    if (savedRole === 'admin') {
      return <Navigate to="/admin" />
    } else {
      return <Navigate to="/home" />
    }
  }

  return (
    <div className="login-body">
      <div className="login-container">
        <h1>Welcome to WorldVista</h1>
        <p className="subtitle">Sign in to continue</p>

        <div className="google-login-wrapper" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', width: '100%' }}>
          <button
            type="button"
            className="google-btn"
            onClick={googleLogin}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '12px' }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
            Continue with Google
          </button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={submitForm}>
          <div className="input-group">
            <label>Login As</label>
            <select
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                setShowSubmitError(false);
              }}
              className="role-select"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {showSubmitError && <p className="error-message" style={{ color: '#ef4444', fontSize: '14px', margin: '0' }}>*{errorMsg}</p>}

          <button type="submit" className="login-btn">Sign in</button>

          <div className="login-footer">
            <a href="#">Forgot password?</a>
            <p>Need an account? <a href="#">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm