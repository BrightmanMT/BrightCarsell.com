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
        // Here  am addin logic to generate a response
        generateResponse(message);
    }

    // Function to generate a response
    function generateResponse(message) {
        let response;
        // handle the case of lower cases by the users
        const lowercaseMessage = message.toLowerCase();

        // Check for different questions or keywords and generate appropriate responses
         if (lowercaseMessage.includes("how are you")) {
            response = "I'm doing well, thank you! How can I assist you?";
        } else if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
            response = "Hello! How can I help you today?";
        } else if (lowercaseMessage.includes("bye")) {
            response = "Goodbye! Have a great day!";
        } else if (lowercaseMessage.includes("Car cost and warranty offer")) {
            response = "Car prizes starts from 100 000 usd, it depends on which brand do you prefer and also your budget. We offer 20 years warranty services and if anything happens to the car within this period of time you are free to return the car?";
        } else if (lowercaseMessage.includes("availabe") || lowercaseMessage.includes("time conduct")) {
            response = "We are available 24/7 on this mobile number +263784151721. We open from monday to saturday time 9 am to 6 pm?";
        } else if (lowercaseMessage.includes("founder") || lowercaseMessage.includes("legal")) {
            response = "The founder of this company is Brightman Mutumwapavi who recently resides in Andhra Pradesh India. The company opperates under legal recognition from GVT ?";
        } else if (lowercaseMessage.includes("brightman mutumwapavi")) {
            response = "Brightman worked so hard to open this company!.Now he is pursuing a Bachelor's degree in Data Science and being a coder sounds like an exciting journey! Creating his own chatbots as a project of passion shows his dedication and skills. If you have any questions or need assistance with anything, feel free to ask!";
        } else {
            response = "I'm not sure how to respond to that. Can you please be more specific?";
        }


        
        appendMessage(response, "incoming");
    }

    
    function appendMessage(message, type) {
        const li = document.createElement("li");
        li.classList.add("chat", type);
        li.innerHTML = `<span class="material-symbols-outlined">smart_toy</span>
                        <p>${message}</p>`;
        chatbox.appendChild(li);
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to bottom
    }

    // sending message
    document.getElementById("send-btn").addEventListener("click", function() {
        const message = chatInput.value.trim();
        if (message !== "") {
            sendMessage(message);
            chatInput.value = "";
        }
    });

    // pressing Enter key
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
