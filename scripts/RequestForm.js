
import { sendRequest } from "./dataAccess.js"

export const requestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendance">Attendance</label>
            <input type="number" name="attendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Party Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
           <label class="label" for="reservationLength">Duration of Party</label>
           <input type="number" name="reservationLength" class="input" />
       </div>
        <div class="field">
        <label class="label" for="reservationDate">Reservation Date</label>
        <input type="date" name="reservationDate" class="input" />
         </div>
        <button class="button" id="submitRequest">Submit</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields querySelector searches document
        const childName = document.querySelector("input[name='childName']").value
        const parentName = document.querySelector("input[name='parentName']").value
        const attendance = document.querySelector("input[name='attendance']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const resLength = document.querySelector("input[name='reservationLength']").value
        const resDate = document.querySelector("input[name='reservationDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
           nameofParent: parentName,
            nameofChild: childName,
            partyAttendance: attendance,
            addressofParty: partyAddress,
            reservationLength: resLength,
            reservationDate: resDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})
