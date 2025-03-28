document.getElementById("emailForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;

    const response = await fetch("/submit", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" }
    });

    const message = await response.text();
    document.getElementById("responseMessage").textContent = message;
});
