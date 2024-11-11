const elementos = document.querySelectorAll("td");

const diaSem = {
  2: "SEG",
  3: "TER",
  4: "QUA",
  5: "QUI",
  6: "SEX",
  7: "SAB",
};

const horarios = {
  M1: { com: "08:00", ter: "09:00" },
  M2: { com: "09:00", ter: "10:00" },
  M3: { com: "10:00", ter: "11:00" },
  M4: { com: "11:00", ter: "12:00" },
  M5: { com: "12:00", ter: "13:00" },
  T1: { com: "13:00", ter: "14:00" },
  T2: { com: "14:00", ter: "15:00" },
  T3: { com: "15:00", ter: "16:00" },
  T4: { com: "16:00", ter: "17:00" },
  T5: { com: "17:00", ter: "18:00" },
  T6: { com: "18:00", ter: "19:00" },
  T7: { com: "19:00", ter: "20:00" },
  N1: { com: "19:00", ter: "20:00" },
  N2: { com: "20:00", ter: "21:00" },
  N3: { com: "21:00", ter: "22:00" },
  N4: { com: "22:00", ter: "23:00" },
};

const regex = /\b([2-7]{1,5})([MTN])([1-7]{1,7})\b/gm;

elementos.forEach((el) => {
  if (el.textContent.match(regex)) {
    el.innerHTML = el.innerText.replace(regex, (match, dia, turno, hora) => {
      let r = "";
      let inicio = horarios[`${turno}${hora.charAt(0)}`].com;
      let fim = horarios[`${turno}${hora.charAt(hora.length - 1)}`].ter;
      const d2 = dia.split("").map((d) => diaSem[d]);

      d2.forEach((d) => {
        r += `${d} : ${inicio}-${fim} <br>`;
      });

      return r;
    });
  }
});
