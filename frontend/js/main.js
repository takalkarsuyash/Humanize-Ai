let userLoggedIn = false;
let userProfile = null;

function handleCredentialResponse(response) {
  // Decode JWT token to get user info (optional)
  const base64Url = response.credential.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  userProfile = JSON.parse(jsonPayload);
  userLoggedIn = true;
  showAppSection();
}

function showAppSection() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("app-section").style.display = "block";
  document.getElementById("output").textContent = "";
}

function showLoginSection() {
  document.getElementById("login-section").style.display = "block";
  document.getElementById("app-section").style.display = "none";
  userLoggedIn = false;
  userProfile = null;
}

document.getElementById("convertBtn").addEventListener("click", async () => {
  if (!userLoggedIn) {
    alert("Please login first.");
    return;
  }
  const inputText = document.getElementById("gptInput").value.trim();
  if (!inputText) {
    alert("Please enter some GPT language text to convert.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Optionally send user info or token here for backend auth
      },
      body: JSON.stringify({ text: inputText }),
    });

    if (!response.ok) {
      throw new Error("Failed to convert text");
    }

    const data = await response.json();
    document.getElementById("output").textContent = data.convertedText;
  } catch (error) {
    alert("Error: " + error.message);
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  showLoginSection();
  // Optionally revoke token or clear session here
});

// Expose the Google callback globally
window.handleCredentialResponse = handleCredentialResponse;
