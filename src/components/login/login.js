import React from 'react';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { axios , Get } from 'axios'
import "../../style/login.css"
class LoginPage extends React.Component {
  
    render() {
        return (
            <div class="login-page">
<p>login page:</p>

    
      {/* <Get url="http://localhost:3000/users" params={{first_name: "Therese"}}>
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get> */}


            </div>
        )
    }
}

export default LoginPage;