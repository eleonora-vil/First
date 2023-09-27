import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import './styles.css'

const Login = () => {
    const [phone, setPhone] = useState('')
    const [verify, setVerify] = useState('')
    const [user, setUser] = useState({})

    function handlecallbackResponse(response) {
        document.getElementById('google').hidden = true
        console.log('Encoded JWT ID Token: ' + response.credential)
        var userObject = jwtDecode(response.credential)
        console.log(userObject)
        setUser(userObject)
    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '590992019533-vg4un67h63tn57dvcldeb69oovkp715r.apps.googleusercontent.com',
            callback: handlecallbackResponse
        })

        google.accounts.id.renderButton(document.getElementById('google'), {
            theme: 'outline',
            size: 'large'
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (phone.length == 0) {
            alert('Please enter your phone number')
        } else if (phone.length < 10) {
            alert('Please enter a valid phone number')
        } else {
            console.log('Hi ' + phone)
            alert('Hi ' + phone)
        }
    }

    return (
        <div className="login-page">
            <div className="login-cover">
                <div className="logo-container">
                    <div className="bica-logo"></div>
                </div>
                <h1>Login</h1>

                <form className="login" onSubmit={handleSubmit}>
                    <input
                        className="userinput"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Phone number"
                    />
                    <input
                        className="userinput"
                        value={verify}
                        onChange={(e) => setVerify(e.target.value)}
                        id="verify"
                        name="verify"
                        type="number"
                        placeholder="Verification code"
                    />
                    <button id="login-btn" type="submit">
                        <b>Login</b>
                    </button>
                </form>

                <p className="suggestion">Or login using</p>

                <div className="alt-login" id="google"></div>
                {Object.keys(user).length !== 0 && (
                    <div>
                        <img className="userimg" src={user.picture} />
                        <h3 style={{ textAlign: 'center' }}>Hi {user.given_name}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
