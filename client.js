// clients are the one that sends requests to the server and receives responses. They can be web browser
// s, mobile apps, or any other software that interacts with the server over a network. Clients typically use HTTP or HTTPS protocols to communicate with the server, sending requests for resources or data and receiving responses in return.
//server are the ones that listen for incoming requests from clients, process those requests, and send back appropriate responses. Servers can be web servers, application servers, or database servers, among others. They handle the business logic, data storage, and other backend operations required to fulfill client requests.



// server = host
// methods types and how it works - get, post, put, delete. patch
//get - -- retrieve
// post ----- create
// put/patch ---- upd3ate
// delete ---- delete

//GET  REQUESTS
// we fetch first
// then after we look for the host eg "http" or "json"
// that is where the "get" functions come in

//client.js..........server.js
//method3 : get
//// respons2e bod3y is2 going to be in 7js2on

const getServerHealth = async () => {
    try{
        const response = await fetch(" http://localhost:8080/health",{
            method : "GET"

        })

        const responseBody = await response.json()
        console.log( responseBody) }
    catch (err) {
        console.log( "Error getting server health", err)
    }
}


getServerHealth()



// post request

const signupUser = async () =>{
    try{
        const response = await fetch (` http://localhost:8082/users`, {
            method: `POST`,
            headers: { 'Content-Type' : 'application/json' } ,
            body : JSON.stringify ({
                userName: `Noel`,
                password: '100mf',
                email: 'noel@gmail.com'

            })
        })
         const responseBody = await response.json()
         console.log (" User Added", responseBody )

    }
    catch (err){
        console.log ( "Error getting server health", err)
    }
}

signupUser()
