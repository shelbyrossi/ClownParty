import { getRequests } from "./dataAccess.js"

// exporting and declaring a Requests function
// declaring a variable and assigning the return value of getRequests function
// declaring a convertRequesttoListElement function that iterates through each request object in the Requests array
// return the description of each request object using dot notation 



export const Requests= () => {
    const requests = getRequests()
    const convertRequestToListElement = (request) => {   
            // when user is inputting data, need parameter. pass request data, use in function.
            return `<li>${request.nameofParent} would like to have ${request.nameofChild}'s party on ${request.reservationDate} - ${request.partyAttendance} people.

            </li>
            <button class="reservation__delete"
            id="request--${request.id}">
       Deny
    </button>
</li>`

    }

    // interpolating requests.map - iterating through the requests array and using the covert function as a parameter to generate html of each
    // .join to return new string by concatenating all elements of the array (array returned from .map)

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
       

            </ul>
    `
        
    return html

        }

// returning that html string that was just generated 
// import and interpolate Requests() into SinkRepair.js to invoke the function and show generated html