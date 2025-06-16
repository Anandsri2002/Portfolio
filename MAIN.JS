 const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const overlayTitle = document.getElementById("overlayTitle");
const overlayInfo = document.getElementById("overlayInfo");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".certificate").forEach(cert => {
  cert.addEventListener("click", () => {
    const img = cert.querySelector("img").src;
    const title = cert.getAttribute("data-title");
    const info = cert.getAttribute("data-info");

    overlayImg.src = img;
    overlayTitle.textContent = title;
    overlayInfo.textContent = info;
    overlay.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
