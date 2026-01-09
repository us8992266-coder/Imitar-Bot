const submitIcon = document.getElementById("img2");
const chatSection = document.getElementById("chatSection");
const userInput = document.getElementById("input");
const clearChat = document.getElementById("cleatChatBtn");
const faceImage = document.getElementById("img1");

mainStorage();

// BOT SEND HANDLER FUNCTIONS

// BOT TIMER FUNCTION

function timerFn(vlaue) {
  setTimeout(() => {
    botSendFn(vlaue);
  }, 1000);
}

// END BOT TIMER FUNCTION

function botSendFn(uChatvalue) {
  const imitarElement = document.createElement("div");
  const para = document.createElement("p");

  imitarElement.className = "botChat";
  para.textContent = uChatvalue;

  imitarElement.appendChild(para);

  chatSection.appendChild(imitarElement);

  storeFn();
}

// END BOT SEND HANDLER FUNCTIONS

// CLEAR CHAT SECTION FUNCTIONS

function clearChatHandler() {
  localStorage.removeItem("data");
  getMainStorage();
}

clearChat.addEventListener("click", clearChatHandler);

// END CLEAR CHAT SECTION FUNCTIONS 

// USER INPUT FUNCTIONS

function sendHanler() {
  if (userInput.value == "") {
    return;
  } else {
    const userDiv = document.createElement("div");
    const userPara = document.createElement("p");

    userDiv.className = "userChat";
    const userInputValue = (userPara.textContent = userInput.value);

    userDiv.appendChild(userPara);

    chatSection.appendChild(userDiv);

    userInput.value = "";

    timerFn(userInputValue);
    storeFn();
  }
}

submitIcon.addEventListener("click", sendHanler);
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendHanler();
  }
});

// FACE ICON IMAGE HANDLER 
const backDrop = document.getElementById("backdrop");

faceImage.addEventListener("click", () => {
  backDrop.style.display = "block";
});

backDrop.addEventListener("click", () => {
  backDrop.style.display = "none";
})

// END FACE ICON IMAGE HANDLER 

submitIcon.addEventListener("mouseenter", () => {
  const submitDiv = document.getElementById("sub");
  submitDiv.style.display = "block";
});

submitIcon.addEventListener("mouseleave", () => {
  const submitDiv = document.getElementById("sub");
  submitDiv.style.display = "none";
});

// END USER INPUT FUNCTIONS



// STORE CHAT SECTION FUNCTIONS

function mainStorage() {
  localStorage.setItem("main", chatSection.innerHTML);
}

function storeFn() {
  localStorage.setItem("data", chatSection.innerHTML);
}

// END STORE CHAT SECTION FUNCTIONS

// GET STORE ITEMS FUNCTION

function getMainStorage() {
  const mainContent = (chatSection.innerHTML = localStorage.getItem("main"));
  return mainContent;
}

function getItemsFn() {
  const value = localStorage.getItem("data");
  const mainContent = (chatSection.innerHTML = value);
  return mainContent;
}

// END GET STORE ITEMS FUNCTION

// LOAD CHECK FUNCTION

onload = () => {
  if (chatSection.innerHTML == "") {
    getMainStorage();
  } else {
    getItemsFn();
  }
};

onload();

// END LOAD CHECK FUNCTION
