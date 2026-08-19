document.querySelectorAll(".view-more-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    const content = this.previousElementSibling;
    content.classList.toggle("an-noi-dung");
    if (content.classList.contains("an-noi-dung")) {
      this.textContent = "View more";
    } else {
      this.textContent = "View less";
    } //Hiện thông tin đổi View more thành View less và ngược lại
  });
});
document.querySelectorAll(".viewmore").forEach(function (div) {
  const button = div.querySelector(".view-more-btn");
  if (button) {
    div.addEventListener("mouseenter", function () {
      button.classList.remove("an-nut");
    }); //Hiện ra khi di chuột vào
    div.addEventListener("mouseleave", function () {
      button.classList.add("an-nut");
    }); // Ẩn đi khi rời chuột đi
  }
});
const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector(".email-input");
const infoBlock = document.querySelector(".thong-tin");
const errorMessage = document.querySelector(".error-message");
const emailBox = document.querySelector(".email-box");

if (submitBtn && emailInput && infoBlock) {
  submitBtn.addEventListener("click", function () {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(emailValue)) {
      // TRƯỜNG HỢP: EMAIL ĐÚNG ĐỊNH DẠNG
      infoBlock.classList.remove("an-thongtin"); //Hiện thông tin
      if (emailBox) emailBox.style.display = "none";
    } else {
      // TRƯỜNG HỢP: EMAIL SAI ĐỊNH DẠNG
      if (errorMessage) {
        errorMessage.textContent =
          "Vui lòng nhập đúng định dạng email (Ví dụ: abc@gmail.com)";
        errorMessage.style.color = "red"; // Đổi chữ hướng dẫn thành màu đỏ cảnh báo
      }
    }
  });
}
