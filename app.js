// ✅ CHANGE THIS PASSWORD
const PASSWORD = "PsiGamma";

// ✅ ADD/EDIT QUESTIONS HERE
// Optional: set "mode" to "exact" or "contains" or "multi"
const questions = [
  // Purpose
  {
    id: "purpose",
    q: "Purpose of Theta Tau:",
    a: "The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship.",
    mode: "exact",
  },
  // Motto
  {
    id: "motto",
    q: "Open Motto of Theta Tau:",
    a: "“Whatsoever thy hand findeth to do, do it with thy might;...” --Ecclesiastes 9:10",
    mode: "exact",
  },
  // Alphabets
  {
    id: "alphabet",
    q: "Greek Alphabet in Order",
    a: "Alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega",
    mode: "contains",
  },
  // Marshal + NME Names
  { id: "Marshal", q: "Marshal Name", a: "Jack Kristof", mode: "contains" },
  {
    id: "NMEs",
    q: "NME Names (Full name, Full name, Full name... etc.)",
    a: "Sonny Diaz, Kyra Rivera, Pari Pandey, Ethan Nguyen, Jack Ballard, Andres Valdes",
    mode: "contains",
  },
  // PNM Names
  { id: "1PNM", q: "1st PNM:", a: "Sultan Almotiri", mode: "contains" },
  { id: "2PNM", q: "2nd PNM:", a: "Ishaan Anand", mode: "contains" },
  { id: "3PNM", q: "3rd PNM:", a: "Zane Anthony Cortes", mode: "contains" },
  { id: "4PNM", q: "4th PNM:", a: "Bhanu Rishith Reddy Kesavareddy Gari", mode: "contains" },
  { id: "5PNM", q: "5th PNM:", a: "Helena Eyob Gezahegn", mode: "contains" },
  { id: "6PNM", q: "6th PNM:", a: "Camila Gonzalez", mode: "contains" },
  { id: "7PNM", q: "7th PNM:", a: "Prabal Giridhar Malavalli", mode: "contains" },
  { id: "8PNM", q: "8th PNM:", a: "Kyla Corrine Martinez", mode: "contains" },
  { id: "9PNM", q: "9th PNM:", a: "Taylor Nicole Malone", mode: "contains" },
  { id: "10PNM", q: "10th PNM:", a: "Luke Michael Montoya", mode: "contains" },
  { id: "11PNM", q: "11th PNM:", a: "Kavya Mishra", mode: "contains" },
  { id: "12PNM", q: "12th PNM:", a: "Alp Ethem Ocal", mode: "contains" },
  { id: "13PNM", q: "13th PNM:", a: "Jennifer Lee Perez Castaneda", mode: "contains" },
  { id: "14PNM", q: "14th PNM:", a: "Rachel Quan", mode: "contains" },
  { id: "15PNM", q: "15th PNM:", a: "Lucas Orlando Sanchez", mode: "contains" },
  { id: "16PNM", q: "16th PNM:", a: "Kaushik Chandar Venkatesh", mode: "contains" },
  // Flower
  { id: "Flower", q: "Official Flower of Theta Tau:", a: "Jacqueminot", mode: "contains" },
  // Gem
  { id: "Gem", q: "Official Gem of Theta Tau:", a: "Dark Red Garnet", mode: "contains" },
  // Official Color
  { id: "Colors", q: "Official colors of Theta Tau: (Color, Color)", a: "Dark Red, Gold", mode: "contains" },
  // University Questions
  { id: "Uni", q: "Founding University:", a: "University of Minnesota", mode: "contains" },
  { id: "City", q: "Founding City:", a: "Minneapolis", mode: "contains" },
  { id: "State", q: "Founding State:", a: "Minnesota", mode: "contains" },
  { id: "Date", q: "Founding Date: (Month Day, Year)", a: "October 15th, 1904", mode: "contains" },
  // OG Name
  { id: "OGName", q: "Original name of Theta Tau:", a: "Society of Hammer and Tongs", mode: "exact" },
  // Founder Questions
  {
    id: "Founders",
    q: "Original founders: (Name, Name, etc.)",
    a: "Isaac Baker Hanks, William Murray Lewis, Erich Julius Schrader, Elwin Leroy Vinal",
    mode: "contains",
  },
  { id: "DeadOrAlive", q: "Are they Alive? (yes/no)", a: "No", mode: "contains" },
  // Hand + Sleeve
  {
    id: "CoatOfArms1",
    q: "What are the 2 objects at the top? (x, y)",
    a: "hammer, tongs",
    mode: "contains",
  },
  {
    id: "CoatOfArms2",
    q: "What is clasping these objects?",
    a: "hands",
    mode: "contains",
  },
  {
    id: "CoatOfArms3",
    q: "What object is on the left?",
    a: "tongs",
    mode: "contains",
  },
  {
    id: "CoatOfArms4",
    q: "What object is on the right?",
    a: "hammer",
    mode: "contains",
  },
  {
    id: "CoatOfArms5",
    q: "Whats under the thing clasping these objects?",
    a: "sleeve",
    mode: "contains",
  },
  // Torsade
  {
    id: "CoatOfArms6",
    q: "Where is the torsade under?",
    a: "sleeve",
    mode: "contains",
  },
  {
    id: "CoatOfArms7",
    q: "How many stripes are in the torsade? (number)",
    a: "11",
    mode: "contains",
  },
  {
    id: "CoatOfArms8",
    q: "What colors are alternating in the torsade? (x, y)",
    a: "Dark red, Gold",
    mode: "contains",
  },
  // Gears
  {
    id: "CoatOfArms9",
    q: "What objects are on top half of the shield?",
    a: "gears",
    mode: "contains",
  },
  {
    id: "CoatOfArms10",
    q: "How many teeth do they have? (number)",
    a: "26",
    mode: "contains",
  },
  {
    id: "CoatOfArms11",
    q: "How many spokes do they have? (number)",
    a: "4",
    mode: "contains",
  },
  {
    id: "CoatOfArms12",
    q: "Is there a circle in the middle of this object? (yes/no)",
    a: "yes",
    mode: "contains",
  },
  // Bridge
  {
    id: "CoatOfArms13",
    q: "What object is on the bottom half of the shield?",
    a: "bridge",
    mode: "contains",
  },
  {
    id: "CoatOfArms14",
    q: "How many arches does this object have? (number)",
    a: "3",
    mode: "contains",
  },
  {
    id: "CoatOfArms15",
    q: "How many bricks does this object have? (number +/- number)",
    a: "151 +/- 1",
    mode: "contains",
  },
  {
    id: "CoatOfArms16",
    q: "What color is this object?",
    a: "grey | gray | light gray | light grey",
    mode: "multi",
  },
  {
    id: "CoatOfArms17",
    q: "How many ripples? (number +/- number)",
    a: "33 +/- 1",
    mode: "contains",
  },
  // Shield
  {
    id: "CoatOfArms18",
    q: "What color is the top half background of the shield?",
    a: "Red",
    mode: "contains",
  },
  {
    id: "CoatOfArms19",
    q: "What color is the bottom half background of the shield?",
    a: "Gold",
    mode: "contains",
  },
  // Ribbon
  {
    id: "CoatOfArms20",
    q: "What object is under the shield?",
    a: "Ribbon",
    mode: "contains",
  },
  {
    id: "CoatOfArms21",
    q: "What color is this objects background?",
    a: "Gold",
    mode: "contains",
  },
  {
    id: "CoatOfArms22",
    q: "How many folds does this object have? (number)",
    a: "3",
    mode: "contains",
  },
  {
    id: "CoatOfArms23",
    q: "What letters are written on it?",
    a: "Theta.Tau.",
    mode: "Exact",
  },
  {
    id: "CoatOfArms24",
    q: "What color are these letters",
    a: "black",
    mode: "contains",
  },
  //Chapter Executive Council
  {
    id: "ChapterExecutiveCouncil1",
    q: "Who's the Regent?",
    a: "Roen Wainscoat",
    mode: "exact",
  },
  {
    id: "ChapterExecutiveCouncil2",
    q: "Name at least one of his duties:",
    a: "preside over all meetings | initiate new members | appoint committees",
    mode: "multi",
  },
  {
    id: "ChapterExecutiveCouncil3",
    q: "Who's the Vice Regent?",
    a: "Kyler Eenhuis",
    mode: "exact",
  },
  {
    id: "ChapterExecutiveCouncil4",
    q: "Name at least one of his duties:",
    a: "preside over meetings in absence of the regent | oversee committees | maintain room reservations | is property manager",
    mode: "multi",
  },
  {
    id: "ChapterExecutiveCouncil5",
    q: "Who's the scribe?",
    a: "Evan Swarup",
    mode: "exact",
  },
  {
    id: "ChapterExecutiveCouncil6",
    q: "Name at least one of his duties:",
    a: "record minutes at all meetings | register all visitors | correspondent to the Grand Executive Council",
    mode: "multi",
  },
  {
    id: "ChapterExecutiveCouncil7",
    q: "Who's the Treasurer?",
    a: "Brooke Kubosh",
    mode: "exact",
  },
  {
    id: "ChapterExecutiveCouncil8",
    q: "Name at least one of her duties:",
    a: "collect dues and fees | maintain chapter financial records",
    mode: "multi",
  },
  {
    id: "ChapterExecutiveCouncil9",
    q: "Who's the Corresponding Secretary?",
    a: "Matthew Heinsen",
    mode: "exact",
  },
  {
    id: "ChapterExecutiveCouncil10",
    q: "Name at least one of his duties:",
    a: "chapter correspondent to The Gear | maintain alumni records | author of chapter newsletter",
    mode: "multi",
  },
  {
    id: "ChapterExecutiveCouncil11",
    q: "Who's the Regent Emiritus?",
    a: "Robert Morones",
    mode: "exact",
  },
  {
    id: "ChaptercontainsExecutiveCouncil12",
    q: "Name at least one of his duties:",
    a: "aid and advise the E-Council | maintain parliamentary procedure | ensure quorum at meetings",
    mode: "multi",
  },
  //Grand Executive Council
  {
    id: "GrandExecutiveCouncil1",
    q: "Who's the Grand Regent?",
    a: "David Parker",
    mode: "exact",
  },
  {
    id: "GrandExecutiveCouncil2",
    q: "Who's the Grand Vice Regent?",
    a: "Lindsey Carr",
    mode: "exact",
  },
  {
    id: "GrandExecutiveCouncil3",
    q: "Who's the Grand Scribe?",
    a: "Dan McConnell",
    mode: "exact",
  },
  {
    id: "GrandExecutiveCouncil4",
    q: "Who's the Grand Treasurer?",
    a: "Benjamin Ladick",
    mode: "exact",
  },
  {
    id: "GrandExecutiveCouncil5",
    q: "Who's the Grand Marshal?",
    a: "Keyannah Holloway",
    mode: "exact",
  },
  {
    id: "GrandExecutiveCouncil6",
    q: "Who's the Grand Inner Guard?",
    a: "Andrew Blanchard",
    mode: "exact",
  },
  {
    id: "GrandExecutiveCouncil7",
    q: "Who's the Grand Outer Guard?",
    a: "Jean-Marc Cassier",
    mode: "exact",
  },
  {
    id: "GrandExecutiveCouncil8",
    q: "Who's the National Delegate?",
    a: "Kaitlynn Rahn | Keegan Dykstra",
    mode: "multi",
  },
  {
    id: "GrandExecutiveCouncil9",
    q: "Who's the other National Delegate?",
    a: "Keegan Dykstra | Kaitlynn Rahn",
    mode: "multi",
  },
    //Flag
  {
    id: "Flag1",
    q: "What Color is on the top left and bottom right corner?",
    a: "Dark Red",
    mode: "contains",
  },
  {
    id: "Flag2",
    q: "What color is on the top right and bottom left corner?",
    a: "Gold",
    mode: "contains",
  },
  {
    id: "Flag3",
    q: "What's on the top left corner?",
    a: "Coat of Arms",
    mode: "contains",
  },
  {
    id: "Flag4",
    q: "What's on the bottom right corner?",
    a: "Theta Tau",
    mode: "contains",
  },
  {
    id: "Flag5",
    q: "What color is the object on the bottom right corner?",
    a: "Gold",
    mode: "contains",
  },
//Regions of Theta Tau
  {
    id: "Regions",
    q: "Name all 10 Regions (region, region, etc.)",
    a: "Atlantic, Central, Great Lakes, Gulf, Midwest, Mid-Atlantic, Northeast, Northwest, Southeast, Southwest",
    mode: "contains",
  },
//Southwest regional directors
  {
    id: "RD",
    q: "Who are the regional directors? (Name, Name)",
    a: "Jasdeep Shangari, Saul Manzano",
    mode: "contains",
  },
//Chapters in Southwest Region
  {
    id: "Chapters1",
    q: "1st Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Chi, University of Arizona",
    mode: "exact",
  },
  {
    id: "Chapters2",
    q: "2nd Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Delta Gamma, Arizona State University",
    mode: "exact",
  },
  {
    id: "Chapters3",
    q: "3rd Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Epsilon Delta, University of California, San Diego",
    mode: "exact",
  },
  {
    id: "Chapters4",
    q: "4th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Pi Delta, University of California, Irvine",
    mode: "exact",
  },
  {
    id: "Chapters5",
    q: "5th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Sigma Delta, University of California, Riverside",
    mode: "exact",
  },
  {
    id: "Chapters6",
    q: "6th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Upsilon Delta, University of California, Los Angeles",
    mode: "exact",
  },
  {
    id: "Chapters7",
    q: "7th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Kappa Epsilon, University of Southern California",
    mode: "exact",
  },
  {
    id: "Chapters8",
    q: "8th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Xi Epsilon, California State University, Long Beach",
    mode: "exact",
  },
  {
    id: "Chapters9",
    q: "9th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Omicron Epsilon, Northern Arizona University",
    mode: "exact",
  },
  {
    id: "Chapters10",
    q: "10th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Sigma Epsilon, University of California, Santa Barbara",
    mode: "exact",
  },
  {
    id: "Chapters11",
    q: "11th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Phi Epsilon, California State University, Fullerton",
    mode: "exact",
  },
  {
    id: "Chapters12",
    q: "12th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Iota Zeta, California Polytechnic State University",
    mode: "exact",
  },
  

  // Add more: { id:"x", q:"Question", a:"Answer", mode:"exact" }
];

// ---------- answer checking helpers ----------
const normalize = (s) =>
  (s || "")
    .toLowerCase()
    .replace(/[“”"']/g, "")
    .replace(/[\u2014\u2013]/g, "-")
    .replace(/[^a-z0-9\s\-\,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function isCorrect(userInput, answer, mode = "exact") {
  const u = normalize(userInput);
  const a = normalize(answer);

  if (!u) return false;

  if (mode === "contains") {
    // user must include the key answer phrase(s)
    // works well for longer official definitions
    return (
      a.split(",").every((part) => u.includes(part.trim())) || u.includes(a)
    );
  }

  if (mode === "multi") {
    // allow multiple accepted answers separated by |
    const options = answer.split("|").map((x) => normalize(x));
    return options.some((opt) => u === opt);
  }

  // exact
  return u === a;
}

// ---------- UI ----------
const elGate = document.getElementById("gate");
const elApp = document.getElementById("app");
const elPw = document.getElementById("pw");
const elMsg = document.getElementById("msg");
const elList = document.getElementById("list");
const elSearch = document.getElementById("search");
const elCount = document.getElementById("countPill");

function filtered() {
  const term = normalize(elSearch.value);
  if (!term) return questions;
  return questions.filter(
    (x) => normalize(x.q).includes(term) || normalize(x.a).includes(term),
  );
}

function render(items) {
  elList.innerHTML = "";
  elCount.textContent = `${items.length} card(s)`;

  items.forEach((item) => {
    const panel = document.createElement("div");
    panel.className = "panel";

    const q = document.createElement("div");
    q.className = "q";
    q.textContent = item.q;

    const row = document.createElement("div");
    row.className = "row";

    const input = document.createElement("input");
    input.className = "ansInput";
    input.placeholder = "Type your answer…";

    const btn = document.createElement("button");
    btn.textContent = "Check";

    const revealBtn = document.createElement("button");
    revealBtn.textContent = "Show";
    revealBtn.className = "smallBtn";

    const status = document.createElement("div");
    status.className = "status";

    const reveal = document.createElement("div");
    reveal.className = "reveal";
    reveal.textContent = `Answer: ${item.a}`;

    function mark(correct) {
      input.classList.remove("correct", "wrong");
      input.classList.add(correct ? "correct" : "wrong");
      status.textContent = correct ? "✅ Correct" : "❌ Not quite";
    }

    function check() {
      const ok = isCorrect(input.value, item.a, item.mode || "exact");
      mark(ok);
      // keep answer hidden by default; user can click Show if they want
    }

    btn.addEventListener("click", check);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") check();
    });

    revealBtn.addEventListener("click", () => {
      reveal.style.display =
        reveal.style.display === "none" || !reveal.style.display
          ? "block"
          : "none";
      revealBtn.textContent =
        reveal.style.display === "block" ? "Hide" : "Show";
    });

    row.appendChild(input);
    row.appendChild(btn);
    row.appendChild(revealBtn);

    panel.appendChild(q);
    panel.appendChild(row);
    panel.appendChild(status);
    panel.appendChild(reveal);

    elList.appendChild(panel);
  });
}

document.getElementById("unlock").addEventListener("click", () => {
  if (elPw.value === PASSWORD) {
    elGate.classList.add("hidden");
    elApp.classList.remove("hidden");
    render(questions);
  } else {
    elMsg.textContent = "Wrong password.";
  }
});

elPw.addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("unlock").click();
});

elSearch.addEventListener("input", () => render(filtered()));

document.getElementById("reload").addEventListener("click", () => {
  window.location.reload();
});

