const eventDetails = {
  title: 'Boda de Alfredo y Giuliana',
  date: '2027-09-04',
  startTime: '16:00',
  endTime: '23:00',
  location: 'Hotel Parque de Monfragüe, Torrejón el Rubio, Cáceres'
};

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Intl.DateTimeFormat('es-ES', {
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
const topbar = document.querySelector('.topbar');

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
        // Restore the topbar when the intro has fully hidden
        if (topbar) {
          topbar.style.visibility = '';
          topbar.removeAttribute('aria-hidden');
        }
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

if (dateLabel) dateLabel.textContent = formatDate(eventDetails.date);
if (dateDetail) dateDetail.textContent = formatDate(eventDetails.date);
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

      formMessage.textContent = '✓ ¡Gracias por confirmar tu asistencia! Nos vemos el día de la boda.';
      formMessage.classList.add('success');
      formMessage.classList.remove('error');
      rsvpForm.reset();

      setTimeout(() => {
        formMessage.classList.remove('success');
      }, 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      formMessage.textContent = '✓ ¡Gracias! Tu respuesta ha sido recibida.';
      formMessage.classList.add('success');
      formMessage.classList.remove('error');
      rsvpForm.reset();
    }
  });
}
