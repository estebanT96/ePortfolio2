//template_4twgt4h
//service_yvoiprl
//bwMxs_krtLUXvQYwF

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_yvoiprl",
      "template_8wha25g",
      event.target,
      "bwMxs_krtLUXvQYwF"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on tapiao.e@outlook.com"
      );
    });
}


