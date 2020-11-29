import {
  Socket
} from "phoenix"

let socket = new Socket("ws://localhost:4000/socket", {})

socket.connect()
let channel = socket.channel("store", {})

channel.join()
  .receive("ok", resp => {
    console.log("Joined successfully", resp)
  })
  .receive("error", resp => {
    console.log("Unable to join", resp)
  })

let messagesContainer = document.querySelector("#messages")

channel.on("purchase", payload => {
  let messageItem = document.createElement("p")
  messageItem.innerText = `[${Date()}] ${JSON.stringify(payload)}`
  messagesContainer.appendChild(messageItem)
})

export default socket
