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
