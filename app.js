/* ===== DATA ===== */
var PASSWORD = "PsiGamma";

var questions = [
  {
    id: "purpose",
    q: "Purpose of Theta Tau:",
    a: "The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship.",
    mode: "exact",
  },
  {
    id: "motto",
    q: "Open Motto of Theta Tau:",
    a: "\u201cWhatsoever thy hand findeth to do, do it with thy might;...\u201d --Ecclesiastes 9:10",
    mode: "exact",
  },
  {
    id: "alphabet",
    q: "Greek Alphabet in Order",
    a: "Alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega",
    mode: "contains",
  },
  { 
    id: "Marshal", 
    q: "Marshal Name", 
    a: "Jack Kristof", 
    mode: "exact" 
  },
  {
    id: "NMEs",
    q: "NME Names (Full name, Full name, Full name... etc.)",
    a: "Sonny Diaz, Kyra Rivera, Pari Pandey, Ethan Nguyen, Jack Ballard, Andres Valdes",
    mode: "contains",
  },
  { 
    id: "1PNM", 
    q: "1st PNM:", 
    a: "Sultan Almotiri",
    mode: "exact" 
  },
  { 
    id: "2PNM", 
    q: "2nd PNM:", 
    a: "Ishaan Anand", 
    mode: "exact" 
  },
  { 
    id: "3PNM", 
    q: "3rd PNM:", 
    a: "Zane Anthony Cortes", 
    mode: "exact" 
  },
  {
    id: "4PNM",
    q: "4th PNM:",
    a: "Bhanu Rishith Reddy Kesavareddy Gari",
    mode: "exact",
  },
  { 
    id: "5PNM", 
    q: "5th PNM:", 
    a: "Helena Eyob Gezahegn", 
    mode: "exact" 
  },
  { 
    id: "6PNM", 
    q: "6th PNM:", 
    a: "Camila Gonzalez", 
    mode: "exact" 
  },
  {
    id: "7PNM",
    q: "7th PNM:",
    a: "Prabal Giridhar Malavalli",
    mode: "exact",
  },
  { 
    id: "8PNM", 
    q: "8th PNM:", 
    a: "Kyla Corinne Martinez", 
    mode: "exact" 
  },
  { 
    id: "9PNM", 
    q: "9th PNM:", 
    a: "Taylor Nicole Malone", 
    mode: "exact" 
  },
  { 
    id: "10PNM", 
    q: "10th PNM:", 
    a: "Luke Michael Montoya", 
    mode: "exact" 
  },
  { 
    id: "11PNM", 
    q: "11th PNM:", 
    a: "Kavya Mishra", 
    mode: "exact" 
  },
  { 
    id: "12PNM", 
    q: "12th PNM:", 
    a: "Alp Ethem Ocal", 
    mode: "exact" 
  },
  {
    id: "13PNM",
    q: "13th PNM:",
    a: "Jennifer Lee Perez Castaneda",
    mode: "exact",
  },
  { 
    id: "14PNM", 
    q: "14th PNM:", 
    a: "Rachel Quan", 
    mode: "exact" 
  },
  { 
    id: "15PNM", 
    q: "15th PNM:", 
    a: "Lucas Orlando Sanchez", 
    mode: "exact" 
  },
  {
    id: "16PNM",
    q: "16th PNM:",
    a: "Kaushik Chandar Venkatesh",
    mode: "exact",
  },
  {
    id: "Flower",
    q: "Official Flower of Theta Tau:",
    a: "Jacqueminot",
    mode: "contains",
  },
  {
    id: "Gem",
    q: "Official Gem of Theta Tau:",
    a: "Dark Red Garnet",
    mode: "contains",
  },
  {
    id: "Colors",
    q: "Official colors of Theta Tau: (Color, Color)",
    a: "Dark Red, Gold",
    mode: "contains",
  },
  {
    id: "Uni",
    q: "Founding University:",
    a: "University of Minnesota",
    mode: "exact",
  },
  { 
    id: "City", 
    q: "Founding City:", 
    a: "Minneapolis", 
    mode: "exact" 
  },
  { 
    id: "State", 
    q: "Founding State:", 
    a: "Minnesota", 
    mode: "exact" 
  },
  {
    id: "Date",
    q: "Founding Date: (Month Day, Year)",
    a: "October 15th, 1904",
    mode: "contains",
  },
  {
    id: "OGName",
    q: "Original name of Theta Tau:",
    a: "Society of Hammer and Tongs",
    mode: "exact",
  },
  {
    id: "Founders",
    q: "Original founders: (Name, Name, etc.)",
    a: "Isaac Baker Hanks, William Murray Lewis, Erich Julius Schrader, Elwin Leroy Vinal",
    mode: "contains",
  },
  {
    id: "DeadOrAlive",
    q: "Are they Alive? (yes/no)",
    a: "No",
    mode: "contains",
  },
  {
    id: "CoatOfArms1",
    q: "What are the 2 objects at the top? (x, y)",
    a: "hammer, tongs",
    mode: "contains",
  },
  {
    id: "CoatOfArms2",
    q: "What is clasping these objects?",
    a: "right hand | hands | hand",
    mode: "multi",
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
    mode: "exact",
  },
  {
    id: "CoatOfArms24",
    q: "What color are these letters",
    a: "black",
    mode: "contains",
  },
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
    id: "ChapterExecutiveCouncil12",
    q: "Name at least one of his duties:",
    a: "aid and advise the E-Council | maintain parliamentary procedure | ensure quorum at meetings",
    mode: "multi",
  },
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
  {
    id: "Regions1",
    q: "Name all 10 Regions (region, region, etc.)",
    a: "Atlantic, Central, Great Lakes, Gulf, Midwest, Mid-Atlantic, Northeast, Northwest, Southeast, Southwest",
    mode: "contains",
  },
  {
    id: "Regions2",
    q: "Who are the regional directors? (Name, Name)",
    a: "Jasdeep Shangari, Saul Manzano",
    mode: "contains",
  },
  {
    id: "Chapters1",
    q: "1st Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Chi, University of Arizona",
    mode: "contains",
  },
  {
    id: "Chapters2",
    q: "2nd Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Delta Gamma, Arizona State University",
    mode: "contains",
  },
  {
    id: "Chapters3",
    q: "3rd Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Epsilon Delta, University of California, San Diego",
    mode: "contains",
  },
  {
    id: "Chapters4",
    q: "4th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Pi Delta, University of California, Irvine",
    mode: "contains",
  },
  {
    id: "Chapters5",
    q: "5th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Sigma Delta, University of California, Riverside",
    mode: "contains",
  },
  {
    id: "Chapters6",
    q: "6th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Upsilon Delta, University of California, Los Angeles",
    mode: "contains",
  },
  {
    id: "Chapters7",
    q: "7th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Kappa Epsilon, University of Southern California",
    mode: "contains",
  },
  {
    id: "Chapters8",
    q: "8th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Xi Epsilon, California State University, Long Beach",
    mode: "contains",
  },
  {
    id: "Chapters9",
    q: "9th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Omicron Epsilon, Northern Arizona University",
    mode: "contains",
  },
  {
    id: "Chapters10",
    q: "10th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Sigma Epsilon, University of California, Santa Barbara",
    mode: "contains",
  },
  {
    id: "Chapters11",
    q: "11th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Phi Epsilon, California State University, Fullerton",
    mode: "contains",
  },
  {
    id: "Chapters12",
    q: "12th Chapter in SW Region: (alphabet, university, city if applicable)",
    a: "Iota Zeta, California Polytechnic State University",
    mode: "contains",
  },
  {
    id: "Requirement1",
    q: "Look at PDF for Requirements. It's too hard to implement it here.",
    a: "N/A",
    mode: "contains",
  },
  {
    id: "Requirement2",
    q: "Name one of the 4 Financial Obligations of Members:",
    a: "Initiation and Badge Fee | Housing Fee | Semester Dues | Liability Insurance",
    mode: "multi",
  },
  {
    id: "Requirement3",
    q: "Name one of the 3 remaining Financial Obligations:",
    a: "Initiation and Badge Fee | Housing Fee | Semester Dues | Liability Insurance",
    mode: "multi",
  },
  {
    id: "Requirement4",
    q: "Name one of the 2 remaining Financial Obligations:",
    a: "Initiation and Badge Fee | Housing Fee | Semester Dues | Liability Insurance",
    mode: "multi",
  },
  {
    id: "Requirement5",
    q: "Name the last Financial Obligation:",
    a: "Initiation and Badge Fee | Housing Fee | Semester Dues | Liability Insurance",
    mode: "multi",
  },
  {
    id: "Other",
    q: "What is the Official Magazine of Theta Tau?",
    a: "The Gear",
    mode: "exact",
  },
  {
    id: "MemberBadge1",
    q: "What colors are on the Member Badge? (Enter: \"Color, Color\")",
    a: "Dark Red, Gold",
    mode: "contains",
  },
  {
    id: "MemberBadge2",
    q: "How many teeth are on the Member Badge? (Enter: \"Number\")",
    a: "24",
    mode: "exact",
  },
  {
    id: "MemberBadge3",
    q: "There are two objects in the center. What object is on the left?",
    a: "tongs",
    mode: "contains",
  },
  {
    id: "MemberBadge4",
    q: "What is the object is on the right?",
    a: "hammer",
    mode: "contains",
  },
  {
    id: "MemberBadge5",
    q: "Is the object on the right \"over\"/\"under\" the object on the left?",
    a: "over",
    mode: "contains",
  },
  {
    id: "MemberBadge6",
    q: "What greek letters are on the top half?",
    a: "Theta Tau",
    mode: "contains",
  },
  {
    id: "MemberBadge7",
    q: "What color are the greek letters on the top half?",
    a: "Gold",
    mode: "contains",
  },
  {
    id: "MemberBadge8",
    q: "What is in the center?",
    a: "Dark Red Garnet",
    mode: "contains",
  },
  {
    id: "MemberBadge9",
    q: "How many pearls are on the member badge? (Enter: \"Number\")",
    a: "12",
    mode: "contains",
  },
  {
    id: "MemberBadge10",
    q: "What are the pearl patterns on the member badge? (Start on the top and go clockwise) (Enter: \"Number Number Number Number\")",
    a: "7 2 2 1",
    mode: "contains",
  },
  {
    id: "CompetingFraternitiesSororities1",
    q: "1st Competing Fraternity/Sorority: (Greek Letters)",
    a: "Alpha Omega Epsilon",
    mode: "exact",
  },
  {
    id: "CompetingFraternitiesSororities2",
    q: "2nd Competing Fraternity/Sorority: (Greek Letters)",
    a: "Alpha Rho Chi",
    mode: "exact",
  },
  {
    id: "CompetingFraternitiesSororities3",
    q: "3rd Competing Fraternity/Sorority: (Greek Letters)",
    a: "Kappa Eta Kappa",
    mode: "exact",
  },
  {
    id: "CompetingFraternitiesSororities4",
    q: "4th Competing Fraternity/Sorority: (Greek Letters)",
    a: "Phi Sigma Rho",
    mode: "exact",
  },
  {
    id: "CompetingFraternitiesSororities5",
    q: "5th Competing Fraternity/Sorority: (Greek Letters)",
    a: "Sigma Phi Delta",
    mode: "exact",
  },
  {
    id: "CompetingFraternitiesSororities6",
    q: "6th Competing Fraternity/Sorority: (Greek Letters)",
    a: "Sigma Rho",
    mode: "exact",
  },
  {
    id: "CompetingFraternitiesSororities7",
    q: "7th Competing Fraternity/Sorority: (Greek Letters)",
    a: "Kappa Theta Pi",
    mode: "exact",
  },
  {
    id: "CompetingFraternitiesSororities8",
    q: "8th Competing Fraternity/Sorority:",
    a: "Triangle",
    mode: "exact",
  },
  {
    id: "DeltaGammaSigDates1",
    q: "What is the colony creation date? (Month Day, Year)",
    a: "October 23, 1993",
    mode: "exact",
  },
  {
    id: "DeltaGammaSigDates2",
    q: "What is the name of the colony?",
    a: "Theta Tau Delta",
    mode: "exact",
  },
  {
    id: "DeltaGammaSigDates3",
    q: "What is the chapter initiation date? (Month Day, Year)",
    a: "May 6, 1995",
    mode: "exact",
  },
  {
    id: "ThetaTauSigDates1",
    q: "When did the chapter desegregate? (Year)",
    a: "1958",
    mode: "exact",
  },
  {
    id: "ThetaTauSigDates2",
    q: "When did the chapter become co-ed? (Year)",
    a: "1977",
    mode: "exact",
  },
  {
    id: "ThetaTauSigDates3",
    q: "When did the chapter get it's first computer? (Year)",
    a: "1983",
    mode: "exact",
  },
];

/* ===== CATEGORIES ===== */
function assignCat(q) {
  var id = q.id;
  if (id === "purpose" || id === "motto") return "Purpose & Motto";
  if (id === "alphabet") return "Alphabet";
  if (id === "Marshal" || id === "NMEs" || /^\d+PNM$/.test(id))
    return "Members";
  if (id === "Flower" || id === "Gem" || id === "Colors") return "Symbols";
  if (
    [
      "Uni",
      "City",
      "State",
      "Date",
      "OGName",
      "Founders",
      "DeadOrAlive",
    ].indexOf(id) !== -1
  )
    return "Founding";
  if (id.indexOf("CoatOfArms") === 0) return "Coat of Arms";
  if (id.indexOf("ChapterExecutiveCouncil") === 0) return "Chapter E-Council";
  if (id.indexOf("GrandExecutiveCouncil") === 0) return "Grand E-Council";
  if (id.indexOf("Flag") === 0) return "Flag";
  if (id === "Regions" || id === "RD") return "Regions";
  if (id.indexOf("Chapters") === 0) return "SW Chapters";
  if (id.indexOf("Financial") === 0) return "Financial";
  if (id.indexOf("MemberBadge") === 0) return "Member Badge";
  if (id.indexOf("CompetingFraternitiesSororities") === 0) return "Competing Fraternities / Sororities";
  if (id.indexOf("DeltaGammaSigDates") === 0) return "Delta Gamma Significant Dates";
  if (id.indexOf("ThetaTauSigDates") === 0) return "Theta Tau Significant Dates";
  if (id.indexOf("Requirement") === 0) return "Requirements of Theta Tau";

  return "Other";
}
questions.forEach(function (q) {
  q.cat = assignCat(q);
});
var CATEGORIES = [];
var seen = {};
questions.forEach(function (q) {
  if (!seen[q.cat]) {
    seen[q.cat] = true;
    CATEGORIES.push(q.cat);
  }
});

/* ===== STATE ===== */
var STORAGE_KEY = "tt-study-progress-v3";
var progress = loadProgress();
var currentFilter = "All";
var hideMastered = false;
var shuffled = false;

function loadProgress() {
  try {
    var r = localStorage.getItem(STORAGE_KEY);
    if (r) return JSON.parse(r);
  } catch (e) {}
  return {};
}
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
function getProgress(id) {
  return progress[id] || { answered: false, correct: false, mastered: false };
}
function setProgress(id, u) {
  progress[id] = {};
  var prev = getProgress(id);
  for (var k in prev) progress[id][k] = prev[k];
  for (var k2 in u) progress[id][k2] = u[k2];
  saveProgress();
}

/* ===== ANSWER CHECKING ===== */
function normalizeLoose(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[\u201c\u201d""']/g, "")
    .replace(/[\u2014\u2013]/g, "-")
    .replace(/[^a-z0-9\s\-,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeStrict(s) {
  return (s || "")
    .replace(/[\u201c\u201d""']/g, "")
    .replace(/[\u2014\u2013]/g, "-")
    .replace(/[^a-zA-Z0-9\s\-,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsWholePhrase(haystack, needle) {
  var phrase = normalize(needle);
  if (!phrase) return false;
  var pattern = new RegExp(
    "(^|\\s|,)" + escapeRegex(phrase).replace(/ /g, "\\s+") + "(?=$|\\s|,)",
  );
  return pattern.test(haystack);
}

function normalize(s) {
  return normalizeLoose(s);
}

function isCorrect(userInput, answer, mode) {
  mode = (mode || "exact").toLowerCase();

  if (!userInput || !userInput.trim()) return false;

  if (mode === "exact") {
    return normalizeStrict(userInput) === normalizeStrict(answer);
  }

  if (mode === "contains") {
    var u = normalizeLoose(userInput);
    var a = normalizeLoose(answer);
    return (
      a.split(",").every(function (p) {
        return u.indexOf(p.trim()) !== -1;
      }) || u.indexOf(a) !== -1
    );
  }

  if (mode === "multi") {
    var u2 = normalizeLoose(userInput);
    return answer.split("|").some(function (opt) {
      return u2 === normalizeLoose(opt);
    });
  }

  return false;
}

/* ===== DOM REFS ===== */
var elGate = document.getElementById("gate");
var elApp = document.getElementById("app");
var elPw = document.getElementById("pw");
var elMsg = document.getElementById("msg");
var elList = document.getElementById("list");
var elSearch = document.getElementById("search");
var elCount = document.getElementById("countPill");
var elProgress = document.getElementById("progressBar");
var elFill = document.getElementById("progressFill");
var elFilters = document.getElementById("filters");
var elHideToggle = document.getElementById("hideToggle");

/* ============================================================
   GATE CANVAS — embers, rings, light streaks
   ============================================================ */
var gCanvas = document.getElementById("gateCanvas");
var gCtx = gCanvas.getContext("2d");
var gParticles = [];
var gRings = [];
var gStreaks = [];
var gateAnimId = null;

function resizeGate() {
  gCanvas.width = window.innerWidth;
  gCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeGate);
resizeGate();

// Ember particles — rise upward with gentle sway
function spawnEmber() {
  gParticles.push({
    x: Math.random() * gCanvas.width,
    y: gCanvas.height + 10,
    r: 1 + Math.random() * 2.5,
    vx: (Math.random() - 0.5) * 0.6,
    vy: -(0.4 + Math.random() * 1.2),
    life: 1,
    decay: 0.002 + Math.random() * 0.004,
    color: Math.random() > 0.4 ? "gold" : "red",
  });
}

// Expanding rings from center
function spawnRing() {
  gRings.push({
    x: gCanvas.width / 2 + (Math.random() - 0.5) * 100,
    y: gCanvas.height / 2 + (Math.random() - 0.5) * 60,
    r: 10,
    maxR: 150 + Math.random() * 200,
    life: 1,
    decay: 0.004 + Math.random() * 0.003,
    color: Math.random() > 0.5 ? "gold" : "red",
  });
}

// Light streaks — slow diagonal lines
function spawnStreak() {
  var fromLeft = Math.random() > 0.5;
  gStreaks.push({
    x: fromLeft ? -50 : gCanvas.width + 50,
    y: Math.random() * gCanvas.height,
    len: 80 + Math.random() * 160,
    speed: (fromLeft ? 1 : -1) * (0.3 + Math.random() * 0.8),
    angle: fromLeft
      ? -0.2 + Math.random() * 0.4
      : Math.PI + (-0.2 + Math.random() * 0.4),
    life: 1,
    decay: 0.003 + Math.random() * 0.003,
    width: 0.5 + Math.random() * 1.5,
  });
}

var gateFrame = 0;
function animateGate() {
  gateFrame++;
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

  // Spawn particles periodically
  if (gateFrame % 3 === 0) spawnEmber();
  if (gateFrame % 90 === 0) spawnRing();
  if (gateFrame % 50 === 0) spawnStreak();

  // Draw embers
  var goldRGB = "214,178,94";
  var redRGB = "178,31,45";
  gParticles = gParticles.filter(function (p) {
    return p.life > 0;
  });
  gParticles.forEach(function (p) {
    p.x += p.vx + Math.sin(gateFrame * 0.02 + p.x * 0.01) * 0.3;
    p.y += p.vy;
    p.life -= p.decay;
    var rgb = p.color === "gold" ? goldRGB : redRGB;
    var alpha = Math.max(0, p.life * 0.7);
    // Glow
    gCtx.beginPath();
    gCtx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
    gCtx.fillStyle = "rgba(" + rgb + "," + alpha * 0.15 + ")";
    gCtx.fill();
    // Core
    gCtx.beginPath();
    gCtx.arc(p.x, p.y, Math.max(0.5, p.r * p.life), 0, Math.PI * 2);
    gCtx.fillStyle = "rgba(" + rgb + "," + alpha + ")";
    gCtx.fill();
  });

  // Draw rings
  gRings = gRings.filter(function (r) {
    return r.life > 0;
  });
  gRings.forEach(function (ring) {
    ring.r += (ring.maxR - ring.r) * 0.015;
    ring.life -= ring.decay;
    var rgb = ring.color === "gold" ? goldRGB : redRGB;
    var alpha = Math.max(0, ring.life * 0.3);
    gCtx.beginPath();
    gCtx.arc(ring.x, ring.y, Math.max(1, ring.r), 0, Math.PI * 2);
    gCtx.strokeStyle = "rgba(" + rgb + "," + alpha + ")";
    gCtx.lineWidth = 1.5 * ring.life;
    gCtx.stroke();
  });

  // Draw streaks
  gStreaks = gStreaks.filter(function (s) {
    return s.life > 0;
  });
  gStreaks.forEach(function (s) {
    s.x += Math.cos(s.angle) * s.speed;
    s.y += Math.sin(s.angle) * s.speed;
    s.life -= s.decay;
    var alpha = Math.max(0, s.life * 0.25);
    var ex = s.x + Math.cos(s.angle) * s.len;
    var ey = s.y + Math.sin(s.angle) * s.len;
    var grad = gCtx.createLinearGradient(s.x, s.y, ex, ey);
    grad.addColorStop(0, "rgba(214,178,94,0)");
    grad.addColorStop(0.5, "rgba(214,178,94," + alpha + ")");
    grad.addColorStop(1, "rgba(214,178,94,0)");
    gCtx.beginPath();
    gCtx.moveTo(s.x, s.y);
    gCtx.lineTo(ex, ey);
    gCtx.strokeStyle = grad;
    gCtx.lineWidth = s.width;
    gCtx.stroke();
  });

  gateAnimId = requestAnimationFrame(animateGate);
}

// Start gate animation immediately
animateGate();

// Stop gate animation after login (performance)
function stopGateAnim() {
  if (gateAnimId) {
    cancelAnimationFrame(gateAnimId);
    gateAnimId = null;
  }
}

/* ===== EVENT DELEGATION on elList ===== */
elList.addEventListener("click", function (e) {
  var panel = e.target.closest(".panel");
  if (!panel) return;
  var itemId = panel.dataset.id;
  var item = null;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id === itemId) {
      item = questions[i];
      break;
    }
  }
  if (!item) return;

  if (e.target.closest(".master-star")) {
    toggleMastered(itemId, panel, panel.querySelector(".master-star"));
    return;
  }
  if (e.target.closest(".btn-sm")) {
    var reveal = panel.querySelector(".reveal");
    var btn = e.target.closest(".btn-sm");
    var showing = reveal.style.display === "block";
    reveal.style.display = showing ? "none" : "block";
    btn.textContent = showing ? "Show" : "Hide";
    return;
  }
  if (e.target.closest(".btn:not(.btn-sm)")) {
    checkAnswer(panel, item);
    return;
  }
});

elList.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;
  var input = e.target.closest(".ansInput");
  if (!input) return;
  var panel = input.closest(".panel");
  if (!panel) return;
  var item = null;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id === panel.dataset.id) {
      item = questions[i];
      break;
    }
  }
  if (!item) return;
  e.preventDefault();
  checkAnswer(panel, item);
});

/* ===== CHECK ANSWER ===== */
function checkAnswer(panel, item) {
  var input = panel.querySelector(".ansInput");
  var reveal = panel.querySelector(".reveal");
  var status = panel.querySelector(".status");
  var showBtn = panel.querySelector(".btn-sm");

  if (!input.value.trim()) {
    input.style.borderColor = "rgba(214,178,94,.8)";
    panel.classList.remove("shake");
    void panel.offsetWidth;
    panel.classList.add("shake");
    setTimeout(function () {
      input.style.borderColor = "";
      panel.classList.remove("shake");
    }, 400);
    return;
  }

  var ok = isCorrect(input.value, item.a, item.mode || "exact");
  input.classList.remove("correct", "wrong");
  panel.classList.remove("state-correct", "state-wrong", "shake");
  reveal.classList.remove("reveal-ok", "reveal-bad");
  setProgress(item.id, { answered: true, correct: ok });

  if (ok) {
    input.classList.add("correct");
    panel.classList.add("state-correct");
    status.innerHTML =
      '<span class="icon ok"><i class="fas fa-check"></i></span> Correct';
    reveal.style.display = "block";
    reveal.classList.add("reveal-ok");
    if (showBtn) showBtn.textContent = "Hide";
    toast("Correct!", "ok");
    var tc = 0;
    for (var k in progress) {
      if (progress[k].correct) tc++;
    }
    if (tc === 1) confetti(40);
    else if (tc % 10 === 0) confetti(60);
  } else {
    input.classList.add("wrong");
    panel.classList.add("state-wrong");
    void panel.offsetWidth;
    panel.classList.add("shake");
    status.innerHTML =
      '<span class="icon bad"><i class="fas fa-xmark"></i></span> Not quite';
    reveal.style.display = "block";
    reveal.classList.add("reveal-bad");
    if (showBtn) showBtn.textContent = "Hide";
    toast("Not quite \u2014 answer revealed", "bad");
  }
  updateStats();
}

/* ===== MASTERY ===== */
function toggleMastered(id, panel, star) {
  var p = getProgress(id);
  var newState = !p.mastered;
  setProgress(id, { mastered: newState });
  if (newState) {
    panel.classList.add("state-mastered");
    star.classList.add("active");
    star.title = "Unmark as mastered";
    toast("Marked as mastered", "info");
  } else {
    panel.classList.remove("state-mastered");
    star.classList.remove("active");
    star.title = "Mark as mastered";
  }
  var tm = 0;
  for (var k in progress) {
    if (progress[k].mastered) tm++;
  }
  if (tm === questions.length && newState) {
    setTimeout(function () {
      toast("All questions mastered!", "info");
    }, 600);
    confetti(100);
  }
  if (hideMastered && newState)
    setTimeout(function () {
      render();
    }, 400);
  updateStats();
}

/* ===== FILTERING ===== */
function getFiltered() {
  var items = questions.slice();
  if (shuffled)
    items.sort(function () {
      return Math.random() - 0.5;
    });
  if (currentFilter === "Mastered") {
    items = items.filter(function (q) {
      return getProgress(q.id).mastered;
    });
  } else if (currentFilter === "Unanswered") {
    items = items.filter(function (q) {
      return !getProgress(q.id).answered;
    });
  } else if (currentFilter !== "All") {
    items = items.filter(function (q) {
      return q.cat === currentFilter;
    });
  }
  var term = normalize(elSearch.value);
  if (term)
    items = items.filter(function (q) {
      return (
        normalize(q.q).indexOf(term) !== -1 ||
        normalize(q.a).indexOf(term) !== -1
      );
    });
  if (hideMastered)
    items = items.filter(function (q) {
      return !getProgress(q.id).mastered;
    });
  return items;
}

/* ===== RENDER FILTERS ===== */
function renderFilters() {
  elFilters.innerHTML = "";
  elFilters.appendChild(mkPill("All"));
  elFilters.appendChild(mkPill("Mastered"));
  elFilters.appendChild(mkPill("Unanswered"));
  // Separator
  var sep = document.createElement("div");
  sep.className = "filter-sep";
  elFilters.appendChild(sep);
  CATEGORIES.forEach(function (cat) {
    elFilters.appendChild(mkPill(cat));
  });
}
function mkPill(cat) {
  var pill = document.createElement("button");
  pill.className = "filter-pill" + (cat === currentFilter ? " active" : "");
  pill.textContent = cat;
  pill.role = "tab";
  pill.setAttribute("aria-selected", cat === currentFilter);
  pill.addEventListener("click", function () {
    currentFilter = cat;
    renderFilters();
    render();
  });
  return pill;
}

/* ===== RENDER CARDS ===== */
function render() {
  var items = getFiltered();
  elCount.textContent =
    items.length + " card" + (items.length !== 1 ? "s" : "");
  if (items.length === 0) {
    elList.innerHTML =
      '<div class="empty-state"><i class="fas fa-ghost"></i><p>No questions match your filters.</p></div>';
    updateStats();
    return;
  }
  elList.innerHTML = "";
  items.forEach(function (item, i) {
    var p = getProgress(item.id);
    var panel = document.createElement("div");
    panel.className = "panel";
    panel.dataset.id = item.id;
    panel.setAttribute("role", "listitem");
    panel.style.animationDelay = Math.min(i * 25, 500) + "ms";

    if (p.mastered) panel.classList.add("state-mastered");
    else if (p.answered && p.correct) panel.classList.add("state-correct");
    else if (p.answered && !p.correct) panel.classList.add("state-wrong");

    var star = document.createElement("button");
    star.className = "master-star" + (p.mastered ? " active" : "");
    star.innerHTML = '<i class="fas fa-star"></i>';
    star.title = p.mastered ? "Unmark as mastered" : "Mark as mastered";
    star.setAttribute("aria-label", star.title);

    var qDiv = document.createElement("div");
    qDiv.className = "q";
    qDiv.textContent = item.q;

    var row = document.createElement("div");
    row.className = "row";

    var input = document.createElement("input");
    input.className = "ansInput";
    input.placeholder = "Type your answer\u2026";
    input.setAttribute("aria-label", item.q);

    var btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Check";

    var showBtn = document.createElement("button");
    showBtn.className = "btn btn-sm";
    showBtn.textContent = "Show";

    var status = document.createElement("div");
    status.className = "status";
    if (p.answered) {
      status.innerHTML = p.correct
        ? '<span class="icon ok"><i class="fas fa-check"></i></span> Correct'
        : '<span class="icon bad"><i class="fas fa-xmark"></i></span> Not quite';
    }

    var reveal = document.createElement("div");
    reveal.className = "reveal";
    reveal.textContent = "Answer: " + item.a;

    if (p.answered && p.correct) {
      input.classList.add("correct");
      reveal.style.display = "block";
      reveal.classList.add("reveal-ok");
      showBtn.textContent = "Hide";
    } else if (p.answered && !p.correct) {
      input.classList.add("wrong");
      reveal.style.display = "block";
      reveal.classList.add("reveal-bad");
      showBtn.textContent = "Hide";
    }

    row.appendChild(input);
    row.appendChild(btn);
    row.appendChild(showBtn);
    panel.appendChild(star);
    panel.appendChild(qDiv);
    panel.appendChild(row);
    panel.appendChild(status);
    panel.appendChild(reveal);
    elList.appendChild(panel);
  });
  updateStats();
}

/* ===== STATS ===== */
function updateStats() {
  var vals = [];
  for (var k in progress) vals.push(progress[k]);
  var correct = 0,
    wrong = 0,
    mastered = 0,
    answered = 0;
  for (var i = 0; i < vals.length; i++) {
    if (vals[i].mastered) mastered++;
    if (vals[i].answered) {
      answered++;
      if (vals[i].correct) correct++;
      else wrong++;
    }
  }
  document.getElementById("statTotal").textContent = questions.length;
  document.getElementById("statCorrect").textContent = correct;
  document.getElementById("statWrong").textContent = wrong;
  document.getElementById("statMastered").textContent = mastered;
  var pct = questions.length > 0 ? (answered / questions.length) * 100 : 0;
  elFill.style.width = pct + "%";
}

/* ===== TOAST ===== */
function toast(msg, type) {
  var container = document.getElementById("toasts");
  var el = document.createElement("div");
  el.className = "toast " + (type || "info");
  var icons = {
    ok: "fa-circle-check",
    bad: "fa-circle-xmark",
    info: "fa-circle-info",
  };
  el.innerHTML =
    '<i class="fas ' +
    (icons[type] || icons.info) +
    '"></i><span>' +
    msg +
    "</span>";
  container.appendChild(el);
  setTimeout(function () {
    el.classList.add("out");
    el.addEventListener("animationend", function () {
      el.remove();
    });
  }, 2200);
}

/* ===== CONFETTI ===== */
var confettiCanvas = document.getElementById("confetti");
var cCtx = confettiCanvas.getContext("2d");
var confettiParts = [];
var confettiRunning = false;
function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeConfetti);
resizeConfetti();
function confetti(count) {
  var colors = [
    "#d6b25e",
    "#b21f2d",
    "#ffecec",
    "#e8c36a",
    "#d44a56",
    "#f0ddb0",
  ];
  for (var i = 0; i < count; i++) {
    confettiParts.push({
      x: Math.random() * confettiCanvas.width,
      y: -10 - Math.random() * 60,
      w: 4 + Math.random() * 6,
      h: 8 + Math.random() * 10,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
      decay: 0.003 + Math.random() * 0.004,
    });
  }
  if (!confettiRunning) {
    confettiRunning = true;
    animConfetti();
  }
}
function animConfetti() {
  cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParts = confettiParts.filter(function (p) {
    return p.life > 0;
  });
  if (confettiParts.length === 0) {
    confettiRunning = false;
    return;
  }
  confettiParts.forEach(function (p) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.08;
    p.rot += p.vr;
    p.life -= p.decay;
    cCtx.save();
    cCtx.translate(p.x, p.y);
    cCtx.rotate((p.rot * Math.PI) / 180);
    cCtx.globalAlpha = Math.max(0, p.life);
    cCtx.fillStyle = p.color;
    cCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    cCtx.restore();
  });
  requestAnimationFrame(animConfetti);
}

/* ===== GATE LOGIN ===== */
document.getElementById("unlock").addEventListener("click", function () {
  if (elPw.value === PASSWORD) {
    elGate.classList.add("hidden");
    elApp.classList.remove("hidden");
    elProgress.classList.remove("hidden");
    stopGateAnim(); // Stop canvas for performance
    renderFilters();
    render();
  } else {
    elMsg.textContent = "Wrong password.";
    elPw.style.borderColor = "rgba(231,76,60,.8)";
    setTimeout(function () {
      elPw.style.borderColor = "";
    }, 800);
  }
});
elPw.addEventListener("keydown", function (e) {
  if (e.key === "Enter") document.getElementById("unlock").click();
});

/* ===== SEARCH ===== */
elSearch.addEventListener("input", function () {
  render();
});

/* ===== SHUFFLE ===== */
document.getElementById("shuffleBtn").addEventListener("click", function () {
  shuffled = !shuffled;
  this.classList.toggle("active", shuffled);
  render();
});

/* ===== RESET ===== */
var resetTimer = null;
document.getElementById("resetBtn").addEventListener("click", function () {
  var btn = this;
  if (btn.dataset.confirm === "true") {
    progress = {};
    localStorage.removeItem(STORAGE_KEY);
    btn.dataset.confirm = "false";
    btn.classList.remove("active");
    if (resetTimer) {
      clearTimeout(resetTimer);
      resetTimer = null;
    }
    toast("All progress has been reset", "info");
    render();
  } else {
    btn.dataset.confirm = "true";
    btn.classList.add("active");
    toast("Click again to confirm reset", "bad");
    resetTimer = setTimeout(function () {
      btn.dataset.confirm = "false";
      btn.classList.remove("active");
      resetTimer = null;
    }, 3000);
  }
});

/* ===== HIDE MASTERED ===== */
elHideToggle.addEventListener("click", function () {
  hideMastered = !hideMastered;
  this.classList.toggle("on", hideMastered);
  this.setAttribute("aria-checked", hideMastered);
  render();
});
elHideToggle.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    elHideToggle.click();
  }
});

/* ===== FOCUS ===== */
elPw.focus();
