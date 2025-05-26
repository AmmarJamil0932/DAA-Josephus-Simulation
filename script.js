const k = 2;
let paused = false;
let lastIndex = 0;
let eliminationCount = 0;
let people = [];
let n = 0;
let interval = null;

const popSound = new Audio("pop.mp3");
const winSound = new Audio("success.mp3");
winSound.preload = "auto"; 

function startSimulation() {
  clearInterval(interval);
  paused = false;
  lastIndex = 0;
  eliminationCount = 0;
  people = [];
  n = parseInt(document.getElementById("numPeople").value);
  const logPanel = document.getElementById("log");
  logPanel.innerHTML = "<strong>Elimination Log:</strong><br>";

  if (!n || n < 1) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  if (n > 50) {
    alert("Maximum allowed is 50 people.");
    return;
  }

  const container = document.getElementById("circle");
  container.innerHTML = "";

  let radius = 250;
  const centerX = 300;
  const centerY = 300;

  let boxSize = 70;
  if (n > 30) {
    radius = 230;
    boxSize = 40;
  } else if (n > 20) {
    boxSize = 50;
  }

  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n;
    const x = centerX + radius * Math.cos(angle) - 35;
    const y = centerY + radius * Math.sin(angle) - 35;

    const div = document.createElement("div");
    div.className = "person";
    div.style.position = "absolute";
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.lineHeight = `${boxSize}px`;
    div.style.left = `${x - boxSize / 2}px`;
    div.style.top = `${y - boxSize / 2}px`;
    div.style.fontSize = boxSize > 50 ? "16px" : "12px";
    div.innerHTML = `<div class="emoji">👦</div><div class="number">${i + 1}</div>`;
    container.appendChild(div);
    people.push({ index: i, element: div, alive: true });
  }

  if (n === 1) {
    const survivor = people[0];
    survivor.element.classList.add("survivor");
    survivor.element.innerHTML = `<div class="emoji">🎉</div><div class="number">1</div>`;
    survivor.element.style.left = `${centerX - boxSize / 2}px`;
    survivor.element.style.top = `${centerY - boxSize / 2}px`;
    survivor.element.style.zIndex = "10";
    survivor.element.style.transform = "scale(1.2)";
    winSound.currentTime = 0;
    winSound.play().catch(err => console.log("Playback error:", err));

    const survivorEntry = document.createElement("div");
    survivorEntry.className = "log-entry";
    survivorEntry.style.backgroundColor = "#d4fcd4";
    survivorEntry.style.borderColor = "green";
    survivorEntry.textContent = `✅ Survivor: 1`;
    logPanel.appendChild(survivorEntry);
    return;
  }

  runSimulation();
}

function runSimulation() {
  const logPanel = document.getElementById("log");
  interval = setInterval(() => {
    if (paused) return;

    let skipped = 0;
    while (true) {
      lastIndex = lastIndex % n;
      if (people[lastIndex].alive) {
        skipped++;
        if (skipped === k) break;
      }
      lastIndex++;
    }

    const target = people[lastIndex];
    target.alive = false;
    target.element.remove();
    popSound.currentTime = 0;
    popSound.play();

    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.textContent = `❌ Eliminated: ${target.index + 1}`;
    logPanel.appendChild(entry);

    eliminationCount++;

    if (eliminationCount === n - 1) {
      clearInterval(interval);
      const survivor = people.find((p) => p.alive);
      survivor.element.classList.add("survivor");
      survivor.element.innerHTML = `<div class="emoji">🎉</div><div class="number">${survivor.index + 1}</div>`;
      survivor.element.style.left = "300px";
      survivor.element.style.top = "300px";
      survivor.element.style.zIndex = "10";
      survivor.element.style.transform = "scale(1.2)";

      winSound.currentTime = 0;
      winSound.play().catch(err => console.log("Playback error:", err));

      const survivorEntry = document.createElement("div");
      survivorEntry.className = "log-entry";
      survivorEntry.style.backgroundColor = "#d4fcd4";
      survivorEntry.style.borderColor = "green";
      survivorEntry.textContent = `✅ Survivor: ${survivor.index + 1}`;
      logPanel.appendChild(survivorEntry);
    }

    lastIndex++;
  }, 400);
}

function stopSimulation() {
  paused = true;
}

function resumeSimulation() {
  paused = false;
}

document.getElementById("numPeople").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    startSimulation();
  }
});
