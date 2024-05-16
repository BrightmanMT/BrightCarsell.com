document.addEventListener("DOMContentLoaded", function() {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const chatInput = document.querySelector(".chat-input textarea");

    chatbotToggler.addEventListener("click", function() {
        chatbot.classList.toggle("show");
    });

    // Function to handle sending message
    function sendMessage(message) {
        appendMessage(message, "outgoing");
        // Here you can add logic to generate a response based on the user's message
        generateResponse(message);
    }

    // Function to generate a response
    function generateResponse(message) {
        let response;
        // Convert the user's message to lowercase for case-insensitive matching
        const lowercaseMessage = message.toLowerCase();

        // Check for different questions or keywords and generate appropriate responses
        if (lowercaseMessage.includes("how are you")) {
            response = "I'm doing well, thank you! How can I assist you?";
        } else if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
            response = "Hello! How can I help you today?";
        } else if (lowercaseMessage.includes("bye")) {
            response = "Goodbye! Have a great day!";
        } else if (lowercaseMessage.includes("aditya educational institutions")) {
            response = "Aditya Educational Institutions has a rich history of providing quality education since 1984. Is there anything specific you'd like to know about them?";
        } else if (lowercaseMessage.includes("courses") || lowercaseMessage.includes("academics")) {
            response = "Aditya Educational Institutions offer courses and academics from KG to PG. Is there a particular course you are interested in?";
        } else if (lowercaseMessage.includes("visionary") || lowercaseMessage.includes("founder")) {
            response = "Shri N. Sesha Reddy, a visionary and prominent educationist, founded Aditya Educational Institutions in 1984. Do you want to know more about their vision?";
        } else if (lowercaseMessage.includes("brightman mutumwapavi")) {
            response = "Hello Brightman! It's great to meet you. Pursuing a Bachelor's degree in Data Science and being a coder sounds like an exciting journey! Creating your own chatbot as a project of passion shows your dedication and skills. If you have any questions or need assistance with anything, feel free to ask!";
        } else {
            response = "I'm not sure how to respond to that. Can you please be more specific?";
        }

        // Append the response to the chatbox
        appendMessage(response, "incoming");
    }

    // Function to append message to chatbox
    function appendMessage(message, type) {
        const li = document.createElement("li");
        li.classList.add("chat", type);
        li.innerHTML = `<span class="material-symbols-outlined">smart_toy</span>
                        <p>${message}</p>`;
        chatbox.appendChild(li);
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to bottom
    }

    // Event listener for sending message
    document.getElementById("send-btn").addEventListener("click", function() {
        const message = chatInput.value.trim();
        if (message !== "") {
            sendMessage(message);
            chatInput.value = "";
        }
    });

    // Event listener for pressing Enter key
    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const message = chatInput.value.trim();
            if (message !== "") {
                sendMessage(message);
                chatInput.value = "";
            }
        }
    });
});
