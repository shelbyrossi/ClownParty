const applicationState = {
    requests: [],
    reservations: [],
    employees: []
    
}

// THIS MODULE WILL MANAGE THE APPLICATION STATE
// fetch - pulling data from internet into your own application 
// sent as Json incoded STRING filled with characters looking like JS 


// set value of API to fetch site
// .then method invokes function (as argument) response promise 
// const parsedData = response.json() return parsedData - returning PROMISE PARSING -> constructs JS value from JSON string 
// another .then that takes a function (dataneeded)and include the rest

// fetch("") 
// .then(
// (response) => {
//         const parsedData = response.json()
//     }
// )
// .then(
//     (dataneeded) => {}
// )

// fetching and storing external data using JSON in the application 




//  FETCHING REQUESTS 
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        // parsing the JSON data into JS^ returning promise .then again for function of actual data
        .then(
            (clownRequests) => {
                // Store the external state in application state
                applicationState.requests = clownRequests
            }
        )
}

// defining and exporting a function getRequests that returns a copy of the requests state from above 

export const getRequests= () => {
    return applicationState.requests.map(requests => ({ ...requests}))
}


// FETCHING RESERVATIONS

export const fetchResevations = () => {
    return fetch(`${API}/reservations`)
    .then(response => response.json())
    .then (
        (clownReservations) => {
            applicationState.reservations = clownReservations
        }
    )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservations => ({...reservations}))
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}






const mainContainer = document.querySelector("#container")

export const sendRequest = (userClownRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userClownRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

