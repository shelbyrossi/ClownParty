import { Requests} from "./Requests.js"
import { requestForm} from "./RequestForm.js"


// Generating the HTML Representation of return value of ServiceForm function and Requests function to the page
// Interpolating the functions

export const ClownParty = () => {
    return `
        <h1>Clown Party Form</h1>
        
        <section class="serviceForm">
        </section>
        ${requestForm()}

        <section class="reservations">
            <h2>Reservations</h2>
            ${Requests()}
        </section>
    `
}
