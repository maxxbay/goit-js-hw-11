export default function scroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
// https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect  --Опис--getBoundingClientRect
// https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior == Поведінка скролу ==
