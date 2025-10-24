let date = new Date();
let dYears = date.getFullYear();
let dMounth = date.getMonth();
let dDayWeek = date.getDay();
let dDayMonth = date.getDate();
let dHours = date.getHours();
let dMin = date.getMinutes();

let container = document.getElementById('res');
let dayInf = getDayWeek(dDayWeek);
let monthInf = getMounth(dMounth);

function getDayWeek(dDayWeek) {
  let dayInf;
  switch (dDayWeek) {
    case 0:
      dayInf = 'Domingo';
      return dayInf;
    case 1:
      dayInf = 'Segunda-Feira';
      return dayInf;
    case 2:
      dayInf = 'Terça-Feira';
      return dayInf;
    case 3:
      dayInf = 'Quarta-Feira';
      return dayInf;
    case 4:
      dayInf = 'Quinta-Feira';
      return dayInf;
    case 5:
      dayInf = 'Sexta-Feira';
      return dayInf;
    case 4:
      dayInf = 'Sábado';
      return dayInf;
  }
}

function getMounth(dMounth) {
  let monthInf;
  switch (dMounth) {
    case 0:
      dayInf = 'Janeiro';
      return monthInf;
    case 1:
      monthInf = 'Fevereiro';
      return monthInf;
    case 2:
      monthInf = 'Março';
      return monthInf;
    case 3:
      monthInf = 'Abril';
      return monthInf;
    case 4:
      monthInf = 'Maio';
      return monthInf;
    case 5:
      monthInf = 'Junho';
      return monthInf;
    case 6:
      monthInf = 'Julho';
      return monthInf;
    case 7:
      monthInf = 'Agosto';
      return monthInf;
    case 8:
      monthInf = 'Setembro';
      return monthInf;
    case 9:
      monthInf = 'Outubro';
      return monthInf;
    case 10:
      monthInf = 'Novembro';
      return monthInf;
    case 11:
      monthInf = 'Dezembro';
      return monthInf;
  }
}

container.innerHTML = `${dayInf}, ${dDayMonth} de ${monthInf} de ${dYears}. às ${dHours}:${dMin}`;
