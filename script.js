document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const slides = document.querySelectorAll(".swiper-slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const pagination = document.querySelector(".swiper-pagination");

  let index = 0;
  const totalSlides = slides.length;

  // Создание точек пагинации
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.dataset.index = i;
    pagination.appendChild(dot);
  });

  const dots = document.querySelectorAll(".swiper-pagination span");
  updatePagination();

  function updateSwiper() {
    swiperWrapper.style.transform = `translateX(-${index * 100}%)`;
    updatePagination();
  }

  function updatePagination() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateSwiper();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSwiper();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      index = parseInt(e.target.dataset.index);
      updateSwiper();
    });
  });

  // Автопрокрутка (необязательно)
  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSwiper();
  }, 4000);
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.querySelector(".modal-content img");
  const images = document.querySelectorAll(".img-modal"); // Все изображения с этим классом
  const closeBtn = document.querySelector(".close");

  // Скрываем модальное окно при загрузке страницы
  modal.style.display = "none";

  if (modal && modalImg && closeBtn) {
      // Добавляем обработчик клика для всех изображений с классом .img-modal
      images.forEach(img => {
          img.addEventListener("click", function () {
              modal.style.display = "flex";
              modalImg.src = "./img/open-modal.png"; // Всегда открывает одно и то же изображение
          });
      });

      // Закрытие модального окна при клике на кнопку "×"
      closeBtn.addEventListener("click", function () {
          modal.style.display = "none";
      });

      // Закрытие при клике вне изображения
      modal.addEventListener("click", function (e) {
          if (e.target === modal) {
              modal.style.display = "none";
          }
      });
  }
});
