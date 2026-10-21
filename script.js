const eventDetails = {
  title: 'Boda de Alfredo y Giuliana',
  date: '2027-09-04',
  startTime: '16:00',
  endTime: '23:00',
  location: 'Hotel Parque de Monfragüe, Torrejón el Rubio, Cáceres'
};

const translations = {
  es: {
    navLabel: 'Secciones del sitio', navHome: 'Inicio', navEvent: 'La fiesta', navImportant: 'Importante', navPlaces: '¿Qué hacer por la zona?', navRsvp: 'Confirma tu asistencia',
    languageLabel: 'Cambiar idioma', heroEyebrow: 'Te invitamos a compartir nuestro día', heroTextBefore: 'Celebraremos nuestra boda el', heroTextAfter: 'y queremos que vengas.', countdownLabel: 'Cuenta regresiva para la boda', days: 'Días', hours: 'Horas', minutes: 'Minutos', addToCalendar: 'Añadir al calendario',
    eventEyebrow: 'La fiesta', whereWhen: 'Donde y cuando', dateLabel: 'Fecha', timeLabel: 'Hora', placeLabel: 'Lugar', mapTitle: 'Mapa del lugar de la boda', openHotelMap: 'Abrir ubicación del hotel en Google Maps', hotelAlt: 'Hotel donde se celebrará la boda', dressCodeTitle: 'Código de vestimenta',
    dressCode1: '👔 Venid guapos, pero cómodos.', dressCode2: '🚫 Solo hay una norma: las corbatas están oficialmente prohibidas.', dressCode3: '☀️ Es Extremadura, por mucho que sea septiembre hará calor y bastante, así que no queremos ver a nadie sufriendo.', dressCode4: '🎉 Esto es una celebración para disfrutar, no una prueba de resistencia.',
    importantEyebrow: 'Importante', importantIntro: '💛 Lo más importante será el recuerdo que nos llevaremos de este día.', important1: '🚫💳 No hay número de cuenta, lista de bodas ni esperamos ningún regalo.', important2: '❤️ Lo único que queremos es celebrar este día con la gente que queremos. Bastante regalo es que os animéis a venir hasta el culo del mundo para acompañarnos.',
    placesEyebrow: '¿Qué hacer por la zona?', monfrague: 'Para ver la naturaleza', gameOfThrones: 'Para los fans de Juego de Tronos', hiking: 'Para hacer rutas', adventure: 'Para la aventura (recomendamos probar el barranquismo)', foodTitle: 'Para comer', foodCarouselLabel: 'Carrusel de platos típicos', foodTorta: 'Torta del Casar', foodMigas: 'Migas extremeñas', foodGoatCheese: 'Queso de cabra con pimentón de La Vera', foodCod: 'Bacalao dorado', foodHam: 'Jamón extremeño', foodMorcilla: 'Morcilla de Guadalupe', foodPatatera: 'Morcilla patatera', foodTortaAlt: 'Torta del Casar', foodMigasAlt: 'Plato de migas extremeñas', foodGoatCheeseAlt: 'Queso de cabra con pimentón de La Vera', foodCodAlt: 'Bacalao dorado', foodHamAlt: 'Jamón extremeño', foodSausagesAlt: 'Morcilla de Guadalupe y morcilla patatera, una junto a la otra', rsvpEyebrow: 'Confirma tu asistencia', nameLabel: '(*) Nombre', companionLabel: 'Nombre acompañante', optional: 'Opcional', overnightQuestion: '(*) ¿Pasarás la noche allí?', overnightHelp: 'Las habitaciones van con desayuno incluido. La doble son 84€ y la individual 42€.<br><br>Estos precios son válidos para la noche de la fiesta, tendríamos que consultar precios si alguien quisiera estar alguna noche más.', yes: 'Sí', no: 'No', transportLabel: 'Si saldrás desde Madrid, dinos si quieres que tratemos de encontrarte la manera de ir y volver al Hotel', transportPlaceholder: 'Cuéntanos tu necesidad', dietaryLabel: '¿Tienes alguna intolerancia alimentaria que debamos tener en cuenta?', dietaryPlaceholder: 'Cuéntanos si tienes alguna restricción', submitRsvp: 'Enviar confirmación', successMessage: '✓ ¡Gracias por confirmar tu asistencia! Nos vemos el día de la boda.', fallbackMessage: '✓ ¡Gracias! Tu respuesta ha sido recibida.'
  },
  it: {
    navLabel: 'Sezioni del sito', navHome: 'Inizio', navEvent: 'La festa', navImportant: 'Importante', navPlaces: 'Cosa fare nei dintorni?', navRsvp: 'Conferma la tua presenza',
    languageLabel: 'Cambia lingua', heroEyebrow: 'Ti invitiamo a condividere il nostro giorno', heroTextBefore: 'Celebreremo il nostro matrimonio il', heroTextAfter: 'e vogliamo che tu venga.', countdownLabel: 'Conto alla rovescia per il matrimonio', days: 'Giorni', hours: 'Ore', minutes: 'Minuti', addToCalendar: 'Aggiungi al calendario',
    eventEyebrow: 'La festa', whereWhen: 'Dove e quando', dateLabel: 'Data', timeLabel: 'Ora', placeLabel: 'Luogo', mapTitle: 'Mappa del luogo del matrimonio', openHotelMap: 'Apri la posizione dell’hotel su Google Maps', hotelAlt: 'Hotel dove si celebrerà il matrimonio', dressCodeTitle: 'Dress code',
    dressCode1: '👔 Venite eleganti, ma comodi.', dressCode2: '🚫 C’è una sola regola: le cravatte sono ufficialmente vietate.', dressCode3: '☀️ È l’Estremadura: anche se sarà settembre, farà molto caldo e non vogliamo vedere nessuno soffrire.', dressCode4: '🎉 È una festa da vivere e divertirsi, non una prova di resistenza.',
    importantEyebrow: 'Importante', importantIntro: '💛 La cosa più importante sarà il ricordo che porteremo con noi di questo giorno.', important1: '🚫💳 Non c’è un conto corrente, una lista nozze e non ci aspettiamo regali.', important2: '❤️ Vogliamo solo festeggiare questo giorno con le persone che amiamo. Il regalo più grande è che veniate fin qui per stare con noi.',
    placesEyebrow: 'Cosa fare nei dintorni?', monfrague: 'Per ammirare la natura', gameOfThrones: 'Per i fan di Game of Thrones', hiking: 'Per fare escursioni', adventure: 'Per l’avventura (consigliamo di provare il canyoning)', foodTitle: 'Da mangiare', foodCarouselLabel: 'Carosello dei piatti tipici', foodTorta: 'Torta del Casar', foodMigas: 'Migas dell’Estremadura', foodGoatCheese: 'Formaggio di capra al pimentón de La Vera', foodCod: 'Bacalhau à Brás', foodHam: 'Prosciutto dell’Estremadura', foodMorcilla: 'Morcilla de Guadalupe', foodPatatera: 'Morcilla patatera', foodTortaAlt: 'Torta del Casar', foodMigasAlt: 'Piatto di migas dell’Estremadura', foodGoatCheeseAlt: 'Formaggio di capra al pimentón de La Vera', foodCodAlt: 'Bacalhau à Brás', foodHamAlt: 'Prosciutto dell’Estremadura', foodSausagesAlt: 'Morcilla de Guadalupe e morcilla patatera affiancate', rsvpEyebrow: 'Conferma la tua presenza', nameLabel: '(*) Nome', companionLabel: 'Nome accompagnatore', optional: 'Facoltativo', overnightQuestion: '(*) Passerai la notte lì?', overnightHelp: 'Le camere includono la colazione. La doppia costa 84€ e la singola 42€.<br><br>Questi prezzi sono validi per la notte della festa; dovremmo verificare i prezzi se qualcuno volesse fermarsi qualche notte in più.', yes: 'Sì', no: 'No', transportLabel: 'Se partirai da Madrid, facci sapere se vuoi che proviamo a trovare un modo per andare e tornare in hotel', transportPlaceholder: 'Raccontaci di cosa hai bisogno', dietaryLabel: 'Hai qualche intolleranza alimentare di cui dovremmo tenere conto?', dietaryPlaceholder: 'Raccontaci se hai qualche restrizione', submitRsvp: 'Invia conferma', successMessage: '✓ Grazie per aver confermato la tua presenza! Ci vediamo il giorno del matrimonio.', fallbackMessage: '✓ Grazie! La tua risposta è stata ricevuta.'
  }
};

let currentLanguage = 'es';

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Intl.DateTimeFormat(currentLanguage === 'it' ? 'it-IT' : 'es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(year, month - 1, day));
}

function toGoogleCalendarDate(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function getTimeRemaining() {
  const target = new Date(`${eventDetails.date}T${eventDetails.startTime}:00`);
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: false
  };
}

function updateCountdown() {
  const remaining = getTimeRemaining();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');

  if (daysEl) daysEl.textContent = String(remaining.days).padStart(2, '0');
  if (hoursEl) hoursEl.textContent = String(remaining.hours).padStart(2, '0');
  if (minutesEl) minutesEl.textContent = String(remaining.minutes).padStart(2, '0');
}

const dateLabel = document.getElementById('event-date');
const dateDetail = document.getElementById('event-date-detail');
const locationLabel = document.getElementById('event-location');
const mapFrame = document.getElementById('map-frame');
const calendarMenuButton = document.getElementById('calendar-menu-btn');
const calendarOptions = document.getElementById('calendar-options');
const googleCalendarButton = document.getElementById('google-calendar-btn');
const appleCalendarButton = document.getElementById('apple-calendar-btn');
const navLinks = Array.from(document.querySelectorAll('.topbar__nav a[href^="#"]'));
const sections = Array.from(document.querySelectorAll('main .section'));
const introEnvelope = document.getElementById('intro-envelope');
const openInvitationButton = document.getElementById('open-invitation');
const fallingFlowers = document.getElementById('falling-flowers');
const fallingFlowerTemplates = Array.from(document.querySelectorAll('template[id^="falling-flower-"]'));
const topbar = document.querySelector('.topbar');
const languageSwitcher = document.getElementById('language-switcher');
const languageButtons = Array.from(document.querySelectorAll('[data-language]'));

if (fallingFlowers && fallingFlowerTemplates.length) {
  const flowerCount = 15;

  for (let index = 0; index < flowerCount; index += 1) {
    const flower = document.createElement('span');
    flower.className = 'falling-flower';
    const template = fallingFlowerTemplates[index % fallingFlowerTemplates.length];
    flower.append(template.content.cloneNode(true));
    flower.style.setProperty('--flower-left', `${Math.random() * 100}%`);
    flower.style.setProperty('--flower-size', `${32 + Math.random() * 32}px`);
    flower.style.setProperty('--flower-duration', `${25 + Math.random() * 25}s`);
    flower.style.setProperty('--flower-delay', `${-Math.random() * 40}s`);
    flower.style.setProperty('--flower-drift', `${Math.random() * 180 - 90}px`);
    flower.style.setProperty('--flower-angle', `${Math.random() * 360}deg`);
    fallingFlowers.append(flower);
  }
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : 'es';
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === 'it' ? 'Matrimonio di Alfredo e Giuliana' : 'Boda de Alfredo y Giuliana';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = dictionary[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', dictionary[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = dictionary[element.dataset.i18nTitle];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = dictionary[element.dataset.i18nAlt];
  });

  if (dateLabel) dateLabel.textContent = formatDate(eventDetails.date);
  if (dateDetail) dateDetail.textContent = formatDate(eventDetails.date);
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

const foodCarouselSection = document.getElementById('comer');
const foodCarouselToggle = foodCarouselSection && foodCarouselSection.querySelector('.food-subsection__summary');
const foodCarouselContent = foodCarouselSection && foodCarouselSection.querySelector('.food-subsection__content');
const foodCarousel = foodCarouselSection && foodCarouselSection.querySelector('.food-carousel');
let foodCarouselCloseTimer = 0;

const initializeFoodCarousel = () => {
  if (!foodCarousel || foodCarouselToggle.getAttribute('aria-expanded') !== 'true' || foodCarousel.dataset.initialized === 'true') return;
  foodCarousel.dataset.initialized = 'true';

  const originalItems = Array.from(foodCarousel.querySelectorAll('.food-item'));
  const originalItemCount = originalItems.length;
  const makeFoodItemCopies = () => {
    const copies = document.createDocumentFragment();

    originalItems.forEach((item) => {
      const copy = item.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.querySelector('img').alt = '';
      copy.querySelector('img').removeAttribute('data-i18n-alt');
      copies.append(copy);
    });

    return copies;
  };

  foodCarousel.querySelector('.food-carousel__track').prepend(makeFoodItemCopies());
  foodCarousel.querySelector('.food-carousel__track').append(makeFoodItemCopies());
  const foodItems = Array.from(foodCarousel.querySelectorAll('.food-item'));
  let foodCarouselFrame = 0;
  let foodCarouselSettleTimer = 0;

  const findClosestFoodItemIndex = () => {
    const carouselCenter = foodCarousel.getBoundingClientRect().left + foodCarousel.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    foodItems.forEach((item, index) => {
      const itemCenter = item.getBoundingClientRect().left + item.getBoundingClientRect().width / 2;
      const distance = Math.abs(carouselCenter - itemCenter);

      if (distance < closestDistance) {
        closestIndex = index;
        closestDistance = distance;
      }
    });

    return closestIndex;
  };

  const updateFoodCarousel = () => {
    foodCarouselFrame = 0;
    const closestIndex = findClosestFoodItemIndex();

    foodItems.forEach((item, index) => {
      item.classList.toggle('is-active', index === closestIndex);
    });
  };

  const settleFoodCarousel = () => {
    window.clearTimeout(foodCarouselSettleTimer);
    const closestIndex = findClosestFoodItemIndex();
    const copyStart = foodItems[originalItemCount].offsetLeft;
    const copyDistance = foodItems[originalItemCount * 2].offsetLeft - copyStart;

    if (closestIndex < originalItemCount) {
      foodCarousel.scrollTo({ left: foodCarousel.scrollLeft + copyDistance, behavior: 'instant' });
    } else if (closestIndex >= originalItemCount * 2) {
      foodCarousel.scrollTo({ left: foodCarousel.scrollLeft - copyDistance, behavior: 'instant' });
    }

    updateFoodCarousel();
  };

  foodCarousel.addEventListener('scroll', () => {
    if (!foodCarouselFrame) foodCarouselFrame = requestAnimationFrame(updateFoodCarousel);
    window.clearTimeout(foodCarouselSettleTimer);
    foodCarouselSettleTimer = window.setTimeout(settleFoodCarousel, 180);
  }, { passive: true });

  foodCarousel.addEventListener('scrollend', settleFoodCarousel);
  foodItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('is-active')) return;

      const carouselCenter = foodCarousel.getBoundingClientRect().left + foodCarousel.clientWidth / 2;
      const itemCenter = item.getBoundingClientRect().left + item.getBoundingClientRect().width / 2;
      foodCarousel.scrollBy({ left: itemCenter - carouselCenter, behavior: 'smooth' });
    });
  });

  const initialItem = foodItems[originalItemCount + 1] || foodItems[0];
  if (initialItem) {
    foodCarousel.scrollLeft = initialItem.offsetLeft - (foodCarousel.clientWidth - initialItem.offsetWidth) / 2;
  }
  updateFoodCarousel();
};

if (foodCarouselSection && foodCarouselToggle && foodCarouselContent) {
  foodCarouselToggle.addEventListener('click', () => {
    const isOpening = foodCarouselToggle.getAttribute('aria-expanded') !== 'true';
    foodCarouselToggle.setAttribute('aria-expanded', String(isOpening));
    window.clearTimeout(foodCarouselCloseTimer);

    if (isOpening) {
      foodCarouselContent.hidden = false;
      foodCarouselContent.inert = false;
      foodCarouselContent.setAttribute('aria-hidden', 'false');
      requestAnimationFrame(() => {
        foodCarouselContent.classList.add('is-open');
        requestAnimationFrame(initializeFoodCarousel);
      });
      return;
    }

    foodCarouselContent.classList.remove('is-open');
    foodCarouselContent.inert = true;
    foodCarouselContent.setAttribute('aria-hidden', 'true');
    foodCarouselCloseTimer = window.setTimeout(() => {
      if (foodCarouselToggle.getAttribute('aria-expanded') === 'false') {
        foodCarouselContent.hidden = true;
      }
    }, 350);
  });
}

// If the intro envelope exists and is visible on load, hide the topbar underneath it
if (topbar && introEnvelope && !introEnvelope.classList.contains('is-hidden')) {
  topbar.style.visibility = 'hidden';
  topbar.setAttribute('aria-hidden', 'true');
}

if (sections.length) {
  sections.forEach((section) => section.classList.add('is-hidden'));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          entry.target.classList.add('is-hidden');
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

if (introEnvelope && openInvitationButton) {
  openInvitationButton.addEventListener('click', () => {
    openInvitationButton.disabled = true;
    openInvitationButton.classList.add('is-opening');

    const targetSection = document.getElementById('inicio');

    const handleEnd = () => {
      if (fallingFlowers) {
        fallingFlowers.classList.add('falling-flowers--background');
        document.body.append(fallingFlowers);
      }

      if (topbar) {
        topbar.style.visibility = '';
        topbar.removeAttribute('aria-hidden');
      }
      if (languageSwitcher) languageSwitcher.hidden = false;

      introEnvelope.classList.add('is-hidden');
      introEnvelope.style.pointerEvents = 'none';

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.location.hash = '#inicio';
      }
    };

    const finishHide = (event) => {
      if (event.propertyName === 'opacity') {
        introEnvelope.style.display = 'none';
        introEnvelope.removeEventListener('transitionend', finishHide);
      }
    };

    openInvitationButton.addEventListener('animationend', handleEnd, { once: true });
    introEnvelope.addEventListener('transitionend', finishHide);
  });
}

if (calendarMenuButton && calendarOptions) {
  calendarMenuButton.addEventListener('click', () => {
    const isOpen = calendarOptions.classList.toggle('is-open');
    calendarOptions.setAttribute('aria-hidden', String(!isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!calendarMenuButton.contains(event.target) && !calendarOptions.contains(event.target)) {
      calendarOptions.classList.remove('is-open');
      calendarOptions.setAttribute('aria-hidden', 'true');
    }
  });
}

function updateActiveNavLink() {
  const offset = 140;
  let currentSectionId = 'inicio';
  let found = false;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom > offset) {
      currentSectionId = section.id;
      found = true;
      break;
    }
  }

  if (!found) {
    const scrollPosition = window.scrollY + offset;
    const passed = sections.filter((s) => scrollPosition >= s.offsetTop);
    if (passed.length) currentSectionId = passed[passed.length - 1].id;
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentSectionId}`;
    link.classList.toggle('active', isActive);
  });
}

updateActiveNavLink();
window.addEventListener('scroll', updateActiveNavLink, { passive: true });
window.addEventListener('resize', updateActiveNavLink);

applyLanguage(currentLanguage);
if (locationLabel) locationLabel.textContent = eventDetails.location;
if (mapFrame) {
  mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(eventDetails.location)}&t=k&output=embed`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

if (googleCalendarButton) {
  googleCalendarButton.addEventListener('click', () => {
    const [year, month, day] = eventDetails.date.split('-').map(Number);
    const start = new Date(year, month - 1, day, 16, 0, 0);
    const end = new Date(year, month - 1, day, 23, 0, 0);

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: eventDetails.title,
      dates: `${toGoogleCalendarDate(start)}/${toGoogleCalendarDate(end)}`,
      details: '¡Celebremos juntos este día tan especial!',
      location: eventDetails.location
    });

    window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank', 'noopener');
  });
}

if (appleCalendarButton) {
  appleCalendarButton.addEventListener('click', () => {
    const [year, month, day] = eventDetails.date.split('-').map(Number);
    const start = new Date(year, month - 1, day, 16, 0, 0);
    const end = new Date(year, month - 1, day, 23, 0, 0);

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Boda Alfredo y Giuliana//ES',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `DTSTART:${toGoogleCalendarDate(start)}`,
      `DTEND:${toGoogleCalendarDate(end)}`,
      `SUMMARY:${eventDetails.title}`,
      `DESCRIPTION:¡Celebremos juntos este día tan especial!`,
      `LOCATION:${eventDetails.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'boda-alfredo-giuliana.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

// Manejo del formulario RSVP personalizado
const rsvpForm = document.getElementById('rsvp-form');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formMessage = document.getElementById('form-message');
    const formData = new FormData(rsvpForm);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string' && value.trim()) {
        params.append(key, value.trim());
      }
    }

    params.append('fvv', '1');
    params.append('pageHistory', '0');
    params.append('fbzx', String(Date.now()));

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSccIc2ln390UYhCY-Lxf2u6XkvrkQuvxLt0rCMpqnwwmS4WZA/formResponse', {
        method: 'POST',
        body: params,
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      });

      formMessage.textContent = translations[currentLanguage].successMessage;
      formMessage.classList.add('success');
      formMessage.classList.remove('error');
      rsvpForm.reset();

      setTimeout(() => {
        formMessage.classList.remove('success');
      }, 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      formMessage.textContent = translations[currentLanguage].fallbackMessage;
      formMessage.classList.add('success');
      formMessage.classList.remove('error');
      rsvpForm.reset();
    }
  });
}
