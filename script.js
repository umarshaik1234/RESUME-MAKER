function generateResume() {
  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-role").innerText =
    document.getElementById("role").value;

  document.getElementById("r-objective").innerText =
    document.getElementById("objective").value;

  setList("education", "r-education");
  setList("projects", "r-projects");

  document.getElementById("r-skills").innerText =
    document.getElementById("skills").value;
}

function setList(inputId, outputId) {
  let data = document.getElementById(inputId).value.split("\n");
  let ul = document.getElementById(outputId);
  ul.innerHTML = "";

  data.forEach(item => {
    if (item.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = item;
      ul.appendChild(li);
    }
  });
}

function downloadPDF() {
  const resume = document.getElementById("resume");
  html2pdf()
    .set({
      margin: 0.5,
      filename: 'ATS_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    })
    .from(resume)
    .save();
}
