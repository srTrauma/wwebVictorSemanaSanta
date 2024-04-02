const items = document.querySelectorAll(".NavElementsMobile");
const mobileUser = document.querySelector(".userMobile");

function changeStatusMobile() {
  items.forEach((item) => {
    item.addEventListener(
      "animationend",
      () => {
        if (item.classList.contains("closing")) {
          item.classList.remove("active");
          item.classList.remove("closing");
          item.classList.add("hidden");
        } else {
        }
      },
      { once: true }
    );

    if (item.classList.contains("active")) {
      item.classList.add("closing");
      setTimeout(() => {
        item.classList.remove("active");
      }, 100);
    } else {
      item.classList.remove("hidden");
      item.classList.add("active");
    }
  });

  mobileUser.addEventListener(
    "animationend",
    () => {
      if (mobileUser.classList.contains("closing")) {
        mobileUser.classList.remove("active");
        mobileUser.classList.remove("closing");
        mobileUser.classList.add("hidden");
      } else {
      }
    },
    { once: true }
  );

  if (mobileUser.classList.contains("active")) {
    mobileUser.classList.add("closing");
    setTimeout(() => {
      mobileUser.classList.remove("active");
    }, 100);
  } else {
    mobileUser.classList.remove("hidden");
    mobileUser.classList.add("active");
  }
}
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".NavBarDesktop");

    if (window.scrollY > 350) {
        navbar.classList.add("fixed-navbar");
    }
    if (window.scrollY < 20) {
        navbar.classList.remove("fixed-navbar");
    }
});

const userElement = document.querySelector('.user');
const submenu = userElement.querySelector('.submenu');

userElement.addEventListener('click', () => { 
        submenu.classList.toggle('hidden');
});
document.addEventListener('click', function(event) {
    const isClickInside = userElement.contains(event.target);

    if (!isClickInside) { 
        submenu.classList.add('hidden');
    }
});


// Obtén los botones y los formularios
const activationButtons = document.querySelectorAll('.botonActivacionCubo');
const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');

// Añade el controlador de eventos a cada botón
activationButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Determina qué formulario es el padre del botón
    const parentForm = this.closest('form');
    
    // Determina qué formulario es el otro
    const otherForm = parentForm === registerForm ? loginForm : registerForm;
    
    // Alterna las clases de los formularios
    parentForm.classList.add('animating');
    otherForm.classList.remove('animating');
  });
});



