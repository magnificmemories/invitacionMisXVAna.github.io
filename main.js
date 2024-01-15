// Definir la fecha y hora del evento (puedes personalizar esto)
const eventDate = new Date('2024-03-02T16:00:00').getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Calcular días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar la cuenta regresiva en el elemento con id "countdown"
  
  const divDaysParty = document.createElement('div');
  divDaysParty.classList.add('div-days-party');
  const pDaysParty = document.createElement('p');
  
  daysToParty.innerHTML = ''
  pDaysParty.innerHTML = `
  ${days} 
  `;
  
  divDaysParty.appendChild(pDaysParty);
  daysToParty.appendChild(divDaysParty);

  /////////////////////////////////////////

  const divHoursParty = document.createElement('div');
  divHoursParty.classList.add('div-hours-party');
  const pHoursParty = document.createElement('p');
  
  hoursToParty.innerHTML = ''
  pHoursParty.innerHTML = `
  ${hours} 
  `;
  
  divHoursParty.appendChild(pHoursParty);
  hoursToParty.appendChild(divHoursParty);

  /////////////////////////////////////////
  
  const divMinutesParty = document.createElement('div');
  divMinutesParty.classList.add('div-minutes-party');
  const pMinutesParty = document.createElement('p');
  
  minutesToParty.innerHTML = ''
  pMinutesParty.innerHTML = `
  ${minutes} 
  `;
  
  divMinutesParty.appendChild(pMinutesParty);
  minutesToParty.appendChild(divMinutesParty);

  //////////////////////////////////////////

  const divSecondsParty = document.createElement('div');
  divSecondsParty.classList.add('div-seconds-party');
  const pSecondsParty = document.createElement('p');
  
  secondsToParty.innerHTML = ''
  pSecondsParty.innerHTML = `
  ${seconds} 
  `;
  
  divSecondsParty.appendChild(pSecondsParty);
  secondsToParty.appendChild(divSecondsParty);
  
  // document.getElementById('countdown').innerHTML =
  //   `${days}Días ${hours}Horas ${minutes}Minutos ${seconds}Segundos`;

  // Si la cuenta regresiva ha terminado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(countdown);
    pDaysParty.innerHTML = '00';
    pHoursParty.innerHTML = '00'
    pMinutesParty.innerHTML = '00'
    pSecondsParty.innerHTML = '00'
  }
}, 1000);
