async function getMessage() {
  const res = await fetch("https://server-test-u7kz.onrender.com/message");
  const json = await res.json();

  console.log(json);
  const p = document.getElementById("message");
  p.textContent = json.message;
}

getMessage();
