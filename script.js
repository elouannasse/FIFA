let classatru = document.getElementsByClassName("iteam");
console.log(classatru);
let myposition = document.getElementById("position");
let myajou = document.getElementById("ajou");
let myname = document.getElementById("name");
let myphoto = document.getElementById("photo");
let mynationality = document.getElementById("nationality");
let myflag = document.getElementById("flag");
let myclub = document.getElementById("club");
let mylogo = document.getElementById("logo");
let myrating = document.getElementById("rating");
let mypace = document.getElementById("pace");
let myshooting = document.getElementById("shooting");
let mypassing = document.getElementById("passing");
let mydribbling = document.getElementById("dribbling");
let mydefending = document.getElementById("defending");
let myphysical = document.getElementById("physical");

function createPlayerCard() {
  return `
        <div class="player-card">
            <div style="width: 100px; margin-right: 6px">
                <div style="display: flex; gap: 1px">
                    <div style="display: flex; flex-direction: column; margin-top: 25px">
                        <span style="color: white; font-weight: bold; font-size: 25px">${myrating.value}</span>
                        <span style="color: white; font-weight: bold; font-size: 15px">${myposition.value}</span>
                    </div>
                    <img src="${myphoto.value}" style="width: 60px; height: 60px; margin-top: 15px" alt="${myname.value}" />
                </div>
                <div>
                    <div>
                        <span style="color: white; font-weight: bold; font-size: 19px">${myname.value}</span>
                    </div>
                    <div style="display: flex; gap: 3px">
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">DRI</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${mydribbling.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">DEF</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${mydefending.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">PHY</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${myphysical.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">PAC</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${mypace.value}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center">
                            <span style="color: white; font-weight: bold; font-size: 9px">SHOT</span>
                            <span style="color: white; font-weight: bold; font-size: 9px">${myshooting.value}</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px">
                        <img src="${myflag.value}" style="height: 20px; width: 20px" alt="${mynationality.value}" />
                        <img src="${mylogo.value}" style="height: 20px; width: 20px" alt="${myclub.value}" />
                    </div>
                </div>
            </div>
        </div>
    `;
}

myajou.addEventListener("click", (e) => {
  e.preventDefault();

  let cmPositions = Array.from(classatru).filter(
    (item) => item.getAttribute("jouer_cm") !== null
  );

  for (let i = 0; i < Array.from(classatru).length; i++) {
    let GK = classatru[i].getAttribute("gardien_gk");
    let LB = classatru[i].getAttribute("jouer_LB");
    let CB = classatru[i].getAttribute("jouer_cb");
    let RB = classatru[i].getAttribute("jouer_rb");
    let CM = classatru[i].getAttribute("jouer_cm");
    let LW = classatru[i].getAttribute("jouer_lw");
    let ST = classatru[i].getAttribute("jouer_st");
    let RW = classatru[i].getAttribute("jouer_rw");

    if (myposition.value === "GK" && GK !== null) {
      if (!classatru[i].querySelector(".player-card")) {
        classatru[i].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "LB" && LB !== null) {
      if (!classatru[i].querySelector(".player-card")) {
        classatru[i].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "CB" && CB !== null) {
      if (!classatru[i].querySelector(".player-card")) {
        classatru[i].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "RB" && RB !== null) {
      if (!classatru[i].querySelector(".player-card")) {
        classatru[i].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "CM") {
      if (cmPositions[0] && !cmPositions[0].querySelector(".player-card")) {
        cmPositions[0].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "CDM") {
      if (cmPositions[1] && !cmPositions[1].querySelector(".player-card")) {
        cmPositions[1].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "CAM") {
      if (cmPositions[2] && !cmPositions[2].querySelector(".player-card")) {
        cmPositions[2].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "LW" && LW !== null) {
      if (!classatru[i].querySelector(".player-card")) {
        classatru[i].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "ST" && ST !== null) {
      if (!classatru[i].querySelector(".player-card")) {
        classatru[i].innerHTML = createPlayerCard();
        break;
      }
    } else if (myposition.value === "RW" && RW !== null) {
      if (!classatru[i].querySelector(".player-card")) {
        classatru[i].innerHTML = createPlayerCard();
        break;
      }
    }
  }

  document.getElementById("playerForm").reset();
});
