// Прокрутка галереи
const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// Функция для определения мобильного устройства
const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

// Функция для получения размера прокрутки
const getScrollStep = () => {
  return window.innerWidth * (isMobile() ? 0.72 : 0.6);
};

// Обновление размера прокрутки при ресайзе
let scrollStep = getScrollStep();
window.addEventListener("resize", () => {
  scrollStep = getScrollStep();
});

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollTo({
    left: scrollContainer.scrollLeft + scrollStep,
    behavior: "smooth",
  });
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollTo({
    left: scrollContainer.scrollLeft - scrollStep,
    behavior: "smooth",
  });
});

document.querySelector(".route-button").addEventListener("click", function () {
  const address = encodeURIComponent(
    "Москва, Новомосковский административный округ, район Коммунарка, квартал № 70, 42, Павильон 16 ряд С 9",
  );
  window.open(
    `https://yandex.ru/maps/?pt=37.532600,55.569000,pm2drm&z=16&rtext=~55.569000,37.532600&rtt=auto&text=${address}`,
    "_blank",
  );
});
// Прокрутка галереи отзывов
const reviewsGallery = document.querySelector(".reviews-gallery");
const backBtnReviews = document.getElementById("backBtnReviews");
const nextBtnReviews = document.getElementById("nextBtnReviews");

// Расстояние прокрутки (больше, чем в third)
const getReviewsScrollStep = () =>
  window.innerWidth * (isMobile() ? 0.82 : 0.62);

let reviewsScrollStep = getReviewsScrollStep();
window.addEventListener("resize", () => {
  reviewsScrollStep = getReviewsScrollStep();
});

// Кнопки
nextBtnReviews.addEventListener("click", () => {
  reviewsGallery.scrollBy({
    left: reviewsScrollStep,
    behavior: "smooth",
  });
});

backBtnReviews.addEventListener("click", () => {
  reviewsGallery.scrollBy({
    left: -reviewsScrollStep,
    behavior: "smooth",
  });
});

// Прокрутка колесиком
reviewsGallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  reviewsGallery.scrollLeft += e.deltaY;
});
// Функция для обновления статуса магазина
function updateStoreStatus() {
  const moscowTime = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    hour: "numeric",
    hour12: false,
  });

  const currentHour = parseInt(moscowTime);
  const isOpen = currentHour >= 9 && currentHour < 21;

  // Обновляем статус для десктопной версии
  const openElement = document.querySelector(".open");
  if (openElement) {
    const statusElement = openElement.querySelector("h1");
    const timeElement = openElement.querySelector("h2");

    if (statusElement && timeElement) {
      statusElement.innerHTML = isOpen
        ? '<span style="color: #000000">Открыто</span>'
        : '<span style="color: #000000">Закрыто</span>';

      timeElement.textContent = isOpen ? "9:00-21:00" : `До 9:00`;
    }
  }

  // Обновляем статус для мобильной версии
  const openMobElement = document.getElementById("openmob");
  if (openMobElement) {
    const spans = openMobElement.querySelectorAll("span");
    if (spans.length >= 2) {
      spans[0].textContent = isOpen ? "9:00-21:00" : "До 9:00";
      spans[1].innerHTML = isOpen
        ? '<span style="color: #000000">Открыто</span>'
        : '<span style="color: #000000">Закрыто</span>';
    }
  }
}

// Вызываем функцию при загрузке страницы
updateStoreStatus();

// Обновляем статус каждую минуту
setInterval(updateStoreStatus, 60000);
