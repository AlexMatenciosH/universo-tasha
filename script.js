const moodToggle = document.querySelector('#moodToggle');
const moodIcon = document.querySelector('#moodIcon');

moodToggle.addEventListener('click', () => {
  const isDay = document.body.classList.toggle('mood-day');
  moodIcon.textContent = isDay ? '☀' : '☾';
  moodToggle.setAttribute('aria-label', isDay ? 'Cambiar a ambiente nocturno' : 'Cambiar a ambiente de día');
  moodToggle.title = isDay ? 'Ambiente de día' : 'Ambiente nocturno';
});

const bubbleStage = document.querySelector('#bubbleStage');
const powerCaption = document.querySelector('#powerCaption');
document.querySelector('#powerButton').addEventListener('click', () => {
  powerCaption.textContent = '¡Una lluvia de destellos para ti!';
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'magic-burst';
    sparkle.textContent = ['✦', '✧', '♡'][i % 3];
    sparkle.style.setProperty('--x', `${5 + Math.random() * 90}%`);
    sparkle.style.setProperty('--y', `${12 + Math.random() * 67}%`);
    sparkle.style.setProperty('--size', `${12 + Math.random() * 17}px`);
    sparkle.style.animationDelay = `${Math.random() * .45}s`;
    bubbleStage.append(sparkle);
    window.setTimeout(() => sparkle.remove(), 1800);
  }
});

const hairHint = document.querySelector('#hairHint');
const hairTouchTargets = document.querySelectorAll('.hair-touch');
const changeHairColor = () => {
  const isGolden = bubbleStage.classList.toggle('golden-hair');
  hairHint.textContent = isGolden ? '¡cabello dorado! toca para volver' : 'toca su cabello ✦ cambia de color';
  hairTouchTargets.forEach(target => target.setAttribute('aria-pressed', String(isGolden)));
}
hairTouchTargets.forEach(target => {
  target.addEventListener('click', changeHairColor);
  target.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      changeHairColor();
    }
  });
});

const looks = [
  {name: 'El vestido de tus sueños ✿', color: 'rosa'},
  {name: 'Un look lila de fantasía ♡', color: 'lila'},
  {name: 'Menta suave para un día bonito ✦', color: 'menta'}
];
const lookCaption = document.querySelector('#lookCaption');
const dressElements = [...document.querySelectorAll('.lookbook-dress')];
document.querySelectorAll('.look-choice').forEach(button => {
  button.addEventListener('click', () => {
    const chosen = Number(button.dataset.look);
    document.querySelectorAll('.look-choice').forEach(choice => choice.classList.toggle('selected', choice === button));
    dressElements.forEach((dress, index) => dress.classList.toggle('active', index === chosen));
    lookCaption.textContent = looks[chosen].name;
  });
});
dressElements[1].classList.add('active');

let blooms = 0;
const gardenStage = document.querySelector('#gardenStage');
const gardenCaption = document.querySelector('#gardenCaption');
document.querySelector('#growGarden').addEventListener('click', () => {
  blooms += 1;
  gardenStage.classList.add('blooming');
  gardenCaption.textContent = blooms === 1 ? '¡Mira cómo despiertan las flores!' : `El jardín ya tiene ${blooms} toques de color ✿`;
  window.setTimeout(() => gardenStage.classList.remove('blooming'), 2200);
});

const nightStage = document.querySelector('.night-stage');
const nightHint = document.querySelector('#nightHint');
document.querySelector('#sunglasses').addEventListener('click', () => {
  const on = nightStage.classList.toggle('glasses-on');
  nightHint.textContent = on ? 'Lentes puestos: modo tranquilidad activado ☾' : 'Toca los lentes o el libro';
});
const pageBook = document.querySelector('#pageBook');
const turnPage = () => {
  nightStage.classList.toggle('page-flip');
  nightHint.textContent = nightStage.classList.contains('page-flip') ? 'Una página nueva, a tu ritmo ✦' : 'Toca los lentes o el libro';
};
document.querySelector('#turnPage').addEventListener('click', turnPage);
pageBook.addEventListener('click', turnPage);
pageBook.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    turnPage();
  }
});
