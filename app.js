async function generatePost() {
  const prompt = document.getElementById("prompt").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "⏳ Generating...";

  try {
    // Replace this with your real API endpoint later
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    if (!response.ok) throw new Error("API request failed");

    const data = await response.json();
    outputDiv.innerHTML = `<p><strong>Generated:</strong> ${data.title}</p>`;
  } catch (err) {
    outputDiv.innerHTML = `❌ Error: ${err.message}`;
  }
}
