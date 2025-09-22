// emailjs.init('bwMxs_krtLUXvQYwF'); // call once after SDK loads
let contrastToggle = false;

function toggleDarkMode() {
  contrastToggle = !contrastToggle;
  contrastToggle
    ? document.body.classList.add("dark-theme")
    : document.body.classList.remove("dark-theme");
}

function contact(e) {
  e.preventDefault();
  const form = e.target;
  const contactPanel = form.closest(".modal__contact");
  const loadingOverlay = contactPanel.querySelector(".modal__overlay--loading");
  const successOverlay = contactPanel.querySelector(".modal__overlay--success");

  contactPanel.querySelector(".modal__contact > h2")?.classList.add("hidden");
  form.classList.add("hidden"); // 👈 hide immediately
  loadingOverlay?.classList.add("modal__overlay--visible"); // optional spinner

  emailjs
    .sendForm("service_yvoiprl", "template_8wha25g", form, "bwMxs_krtLUXvQYwF")
    .then(() => {
      loadingOverlay?.classList.remove("modal__overlay--visible");
      successOverlay?.classList.add("modal__overlay--visible");
      form.reset();
    })
    .catch(() => {
      loadingOverlay?.classList.remove("modal__overlay--visible");
      form.classList.remove("hidden"); //
      alert(
        "The email service is temporarily unavailable. Please contact me directly on tapiao.e@outlook.com"
      );
    });
}

const toggleModal = () => {
  document.body.classList.add("modal--open");
  // reset state every time you open
  const m = document.querySelector(".modal__contact");
  m.querySelector(".modal__contact--form")?.classList.remove("hidden");
  m.querySelector("h2")?.classList.remove("hidden");
  m.querySelector(".modal__overlay--loading")?.classList.remove(
    "modal__overlay--visible"
  );
  m.querySelector(".modal__overlay--success")?.classList.remove(
    "modal__overlay--visible"
  );
};
const closeModal = () => document.body.classList.remove("modal--open");
