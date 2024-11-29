document.addEventListener("DOMContentLoaded", () => {
  // Définition des éléments du formulaire
  const formElements = {
    position: document.getElementById("position"),
    name: document.getElementById("name"),
    photo: document.getElementById("photo"),
    nationality: document.getElementById("nationality"),
    flag: document.getElementById("flag"),
    club: document.getElementById("club"),
    logo: document.getElementById("logo"),
    rating: document.getElementById("rating"),
    pace: document.getElementById("pace"),
    shooting: document.getElementById("shooting"),
    passing: document.getElementById("passing"),
    dribbling: document.getElementById("dribbling"),
    defending: document.getElementById("defending"),
    physical: document.getElementById("physical"),
    btnn: document.getElementById("btnn"),
    btn1: document.getElementsByClassName("btn1"),
    btn2: document.getElementsByClassName("btn2"),
  };

  function createPlayerCard(data) {
    return `
        <div id="btnn">
            <button class="btn1">🖊️</button>
            <button class="btn2">🗑️</button>
        </div>
        <div class="player-card">
            <div style="width: 100px; margin-right: 6px">
                <div style="display: flex; gap: 1px">
                    <div style="display: flex; flex-direction: column; margin-top: 25px">
                        <span style="color: white; font-weight: bold; font-size: 25px">${data.rating.value}</span>
                        <span style="color: white; font-weight: bold; font-size: 15px">${data.position.value}</span>
                    </div>
                    <img src="${data.photo.value}" style="width: 60px; height: 60px; margin-top: 15px" alt="${data.name.value}" />
                </div>
                <div>
                    <div>
                        <span style="color: white; font-weight: bold; font-size: 19px">${data.name.value}</span>
                    </div>
                    <div style="display: flex; gap: 3px">
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">Dribble</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${data.dribbling.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">Défense</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${data.defending.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">Physique</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${data.physical.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">Vitesse</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${data.pace.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">Tir</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${data.shooting.value}</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px">
                        <img src="${data.flag.value}" style="height: 20px; width: 20px" alt="${data.nationality.value}" />
                        <img src="${data.logo.value}" style="height: 20px; width: 20px" alt="${data.club.value}" />
                    </div>
                </div>
            </div>
        </div>
    `;
  }

  document.getElementById("playerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    if (formElements.position.value === "CB") {
      const cbElements = document.querySelectorAll(".iteam[jouer_cb]");
      for (let cb of cbElements) {
        if (!cb.querySelector(".player-card")) {
          cb.innerHTML = createPlayerCard(formElements);
          break;
        }
      }
      e.target.reset();
      return;
    }

    if (["CM", "CDM", "CAM"].includes(formElements.position.value)) {
      const positionMapping = { CM: 0, CDM: 1, CAM: 2 };
      const index = positionMapping[formElements.position.value];
      const cmElements = document.querySelectorAll(".iteam[jouer_cm]");

      if (!cmElements[index].querySelector(".player-card")) {
        cmElements[index].innerHTML = createPlayerCard(formElements);
      }
      e.target.reset();
      return;
    }

    const positionMapping = {
      GK: "gardien_gk",
      LB: "jouer_LB",
      RB: "jouer_rb",
      LW: "jouer_lw",
      ST: "jouer_st",
      RW: "jouer_rw",
    };

    const position = formElements.position.value;
    const attribute = positionMapping[position];

    if (attribute) {
      const element = document.querySelector(`.iteam[${attribute}]`);
      if (element && !element.querySelector(".player-card")) {
        element.innerHTML = createPlayerCard(formElements);
      }
    }

    e.target.reset();
  });
});
