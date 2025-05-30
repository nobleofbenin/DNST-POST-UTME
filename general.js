const generalQuestions = [
  {
    question: "The following are stringed instruments except",
    options: ["violin", "piano", "guitar", "xylophone"],
    answer: "xylophone",
    explanation: "Xylophone is a percussion instrument, not a stringed one."
  },
  {
    question: "If two 2µF capacitors are connected in parallel and then in series with a 4µF capacitor, what is the net capacitance?",
    options: ["0.6µF", "0.4µF", "2.0µF", "1.33µF"],
    answer: "1.33µF",
    explanation: "Parallel: 2 + 2 = 4µF. Then series with 4µF: (4×4)/(4+4) = 2µF."
  },
  {
    question: "The limiting frictional force on a 4kg body on an inclined plane is 20N. What is the angle of inclination?",
    options: ["75°", "60°", "45°", "30°"],
    answer: "60°",
    explanation: "F = mg sinθ ⇒ sinθ = 20 / (4×10) = 0.5 ⇒ θ = 60°"
  },
  {
    question: "Which of the following quantities has the same unit as the product of pressure and volume of a gas?",
    options: ["Power", "Acceleration", "Workdone", "Force"],
    answer: "Workdone",
    explanation: "Pressure × Volume = Nm⁻² × m³ = Nm = Joule (unit of Workdone)."
  },
  {
    question: "What is the expression for centripetal force F on a mass m in circular motion with radius r and angular velocity ω?",
    options: ["mω²", "mrω²", "mω²/r", "m/r²"],
    answer: "mrω²",
    explanation: "F = mrω² for circular motion."
  },
  {
    question: "Efficiency of a cell with internal resistance 3Ω and external resistance 7Ω is:",
    options: ["70%", "30%", "20%", "10%"],
    answer: "70%",
    explanation: "Efficiency = R / (R + r) = 7 / (7+3) = 0.7 = 70%."
  },
  {
    question: "Which compound is not obtained by polymerization?",
    options: ["Plastic", "Polythene", "Petroleum", "Cellulose"],
    answer: "Petroleum",
    explanation: "Petroleum is a natural mixture; not a polymer product."
  },
  {
    question: "215cm³ of H₂ collected from 0.80g zinc-acid mix. Find % of ZnO. (32.5g Zn = 1g H)",
    options: ["15%", "25%", "35%", "45%"],
    answer: "25%",
    explanation: "1g H = 32.5g Zn; 0.215g H ⇒ Zn = 0.215×32.5 = ~7g; compare with 0.8g."
  },
  {
    question: "A measure of the degree of disorderliness in a chemical system is:",
    options: ["enthalpy", "entropy", "free energy", "activation energy"],
    answer: "entropy",
    explanation: "Entropy measures disorder or randomness in a system."
  },
  {
    question: "In redox reaction, oxidation number of Cr changes from:",
    options: ["+7 to +3", "+6 to +3", "-6 to +3", "-2 to +6"],
    answer: "+6 to +3",
    explanation: "Cr changes from +6 in Cr₂O₇²⁻ to +3 in Cr³⁺."
  },
  {
    question: "Which metal dissolves in aqueous sodium hydroxide?",
    options: ["Calcium", "Copper", "Aluminium", "Iron"],
    answer: "Aluminium",
    explanation: "Aluminium reacts with NaOH to form sodium aluminate and hydrogen."
  },
  {
    question: "Which alloy is used for plumbing and welding?",
    options: ["lead and tin", "lead and antimony", "iron and aluminium", "copper and tin"],
    answer: "lead and tin",
    explanation: "Solder (used in plumbing) is made from lead and tin."
  },
  {
    question: "Deficiency of Vitamin B1 causes:",
    options: ["goitre", "beri-beri", "scurvy", "pellagra"],
    answer: "beri-beri",
    explanation: "Vitamin B1 (thiamine) deficiency causes beri-beri."
  },
  {
    question: "Which is NOT a component of guard cells?",
    options: ["Chloroplasts", "Nucleus", "Thin inner wall", "Rough spike"],
    answer: "Rough spike",
    explanation: "Guard cells do not have 'rough spikes'."
  },
  {
    question: "Enzymes for glycolysis are located in the:",
    options: ["mitochondria", "golgi apparatus", "cytoplasm", "nucleus"],
    answer: "cytoplasm",
    explanation: "Glycolysis occurs in the cytoplasm."
  },
  {
    question: "Light is required in photosynthesis to:",
    options: ["oxidize water", "split water", "reduce CO₂", "fix CO₂"],
    answer: "split water",
    explanation: "Light splits water into H and O (photolysis)."
  },
  {
    question: "Diploid chromosome number in humans is:",
    options: ["46", "23", "48", "26"],
    answer: "46",
    explanation: "Humans have 46 chromosomes (23 pairs)."
  },
  {
    question: "Which is NOT part of the continental shelf?",
    options: ["splash zone", "subtidal zone", "intertidal zone", "benthic zone"],
    answer: "benthic zone",
    explanation: "Benthic zone is deep sea; not part of continental shelf."
  },
  {
    question: "Brain part responsible for involuntary actions:",
    options: ["medulla oblongata", "cerebellum", "pineal", "cerebrum"],
    answer: "medulla oblongata",
    explanation: "Medulla controls involuntary actions like heartbeat."
  },
  {
    question: "A curve in velocity-time graph means:",
    options: ["uniform acceleration", "non-uniform acceleration", "uniform velocity", "non-uniform velocity"],
    answer: "non-uniform acceleration",
    explanation: "Curve implies changing acceleration."
  },
  {
    question: "A 1kg ball falls from 3m and rebounds to 2m. Energy loss?",
    options: ["100J", "50J", "10J", "1J"],
    answer: "10J",
    explanation: "Loss = mg(h1 − h2) = 10(3−2) = 10J"
  },
  {
    question: "Projectile with max range of 40m (g=10m/s²), find velocity:",
    options: ["400m/s", "80m/s", "20m/s", "10m/s"],
    answer: "20m/s",
    explanation: "Range R = u² sin(2θ)/g ⇒ u² = Rg = 400 ⇒ u = √400 = 20m/s"
  },
  {
    question: "10kg ball hits wall at 5m/s and rebounds. Impulse?",
    options: ["0", "25Ns", "50Ns", "100Ns"],
    answer: "100Ns",
    explanation: "Impulse = Δmv = 10(5 – (−5)) = 100Ns"
  },
  {
    question: "Wave with y = 20 sin(π/60 t − πx/0.5), velocity?",
    options: ["30m/s", "60m/s", "80m/s", "120m/s"],
    answer: "30m/s",
    explanation: "Wave velocity = λf = (1/2)×60 = 30m/s"
  },
  {
    question: "15cm³ of hydrocarbon combusts with 75cm³ O₂ to give 45cm³ CO₂. Find hydrocarbon:",
    options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    answer: "C₂H₆",
    explanation: "Balanced equation shows C₂H₆ + 3.5O₂ → 2CO₂ + 3H₂O"
  },
  {
    question: "Which reagent distinguishes alkanals from alkanones?",
    options: ["HCN", "NaHCO₃", "Fehling's", "2,4-DNP"],
    answer: "Fehling's",
    explanation: "Fehling’s reagent reacts with aldehydes (alkanals), not ketones."
  },
  {
    question: "Photochlorination of ethanoic acid produces:",
    options: ["CH₃COOCl + HCl", "CH₃COCl + HOCl", "ClCH₂COCl + HCl", "ClCH₂COOH + HCl"],
    answer: "ClCH₂COOH + HCl",
    explanation: "Chlorine substitutes on CH₃ group → ClCH₂COOH."
  },
  {
    question: "Reaction of ethyl ethanoate and ammonia gives:",
    options: ["Aminoethane and ethanol", "Aminomethane and propan-1-ol", "Ethanamide and ethanol", "Methanamide and propan-1-ol"],
    answer: "Ethanamide and ethanol",
    explanation: "Ester + NH₃ → amide + alcohol."
  },
  {
    question: "Effervescence in water occurs with:",
    options: ["Calcium", "Copper", "Sulphur", "Lead"],
    answer: "Calcium",
    explanation: "Calcium reacts with water to release H₂ gas (effervescence)."
  },
  {
    question: "Charring of sugar is due to:",
    options: ["reduction", "hydrolysis", "dehydration", "fermentation"],
    answer: "dehydration",
    explanation: "Dehydration of sugar with acids removes water and chars it."
  },
  {
    question: "How many moles of Zn deposited by 3F electricity? [1F = 96500C]",
    options: ["1.5", "2.3", "3.4", "0.15"],
    answer: "1.5",
    explanation: "Zn²⁺ needs 2F/mol → 3F gives 1.5mol Zn."
  },
  {
    question: "Colours in rainbow are due to:",
    options: ["polarization", "absorption", "refraction", "interference"],
    answer: "refraction",
    explanation: "Light refracted and dispersed by raindrops."
  },
  {
    question: "Coulomb's law in air is:",
    options: ["F = q²/x", "F = q/qx", "F = q²/4πε₀x²", "F = q²/4πx"],
    answer: "F = q²/4πε₀x²",
    explanation: "Coulomb's law: F = kq₁q₂/r² = q²/4πε₀x²"
  },
  {
    question: "Eye defect corrected by converging lens?",
    options: ["myopia", "hypermetropia", "astigmatism", "night blindness"],
    answer: "hypermetropia",
    explanation: "Converging lenses correct long-sightedness (hypermetropia)."
  },
  {
    question: "Which arthropod lacks antennae?",
    options: ["Spider", "Prawn", "Cockroach", "Millipede"],
    answer: "Spider",
    explanation: "Spiders are arachnids and have no antennae."
  },
  {
    question: "Red blood cells in hypertonic solution become:",
    options: ["crenated", "plasmolysed", "haemolysed", "unaffected"],
    answer: "crenated",
    explanation: "Hypertonic solutions cause water loss from cells (crenation)."
  },
  {
    question: "OH⁻ concentration in pH 10 NaOH solution is:",
    options: ["10⁻²", "10⁻⁴", "10⁻³", "10⁻¹"],
    answer: "10⁻⁴",
    explanation: "pOH = 14 – pH = 4 ⇒ [OH⁻] = 10⁻⁴"
  },
  {
    question: "Reagent to remove CO₂ from gas mixture:",
    options: ["aq. KOH", "alkaline pyrogallol", "conc. H₂SO₄", "CaO"],
    answer: "aq. KOH",
    explanation: "KOH absorbs CO₂ forming carbonate."
  },
  {
    question: "Which is not a protozoan?",
    options: ["Amoeba", "Chlamydomonas", "Plasmodium", "Trypanosome"],
    answer: "Chlamydomonas",
    explanation: "Chlamydomonas is an alga, not protozoa."
  },
  {
    question: "Plant with modified leaves to trap animals:",
    options: ["garlic", "cactus", "sundew", "hibiscus"],
    answer: "sundew",
    explanation: "Sundew traps insects with sticky leaves."
  },
  {
    question: "Blood group O father × AB mother. % chance of O child?",
    options: ["0%", "50%", "70%", "100%"],
    answer: "0%",
    explanation: "Group O is recessive; AB × O cannot produce O offspring."
  },
  {
    question: "Air pollutant causing acid rain:",
    options: ["CO", "SO₂", "Smoke", "Dust"],
    answer: "SO₂",
    explanation: "SO₂ + H₂O → H₂SO₄ (acid rain)."
  },
  {
    question: "Moving-coil galvanometer works on:",
    options: ["Induction", "Magnetic effect", "Force on current conductor", "Electrochemical effect"],
    answer: "Force on current conductor",
    explanation: "It uses Lorentz force to deflect the needle."
  },
  {
    question: "In RLC circuit, power consumed is given by:",
    options: ["I²R", "(I²R)/(R² + (XL − XC)²)", "I²/(XL + XC)", "I²XC"],
    answer: "I²R",
    explanation: "Only resistor consumes power in AC circuit: P = I²R."
  },
  {
    question: "Anaerobic respiration excludes:",
    options: ["H₂O and CO₂ as by-products", "No oxygen", "Alcohol or lactic acid", "Occurs in cytoplasm"],
    answer: "H₂O and CO₂ as by-products",
    explanation: "Anaerobic respiration does not produce water as by-product."
  },
  {
    question: "Which does NOT involve meiosis?",
    options: ["Root tip division", "Oogenesis", "Spermatogenesis", "Pollen formation"],
    answer: "Root tip division",
    explanation: "Root tip involves mitosis, not meiosis."
  },
  {
    question: "Organism with homodont dentition?",
    options: ["Agama lizard", "Rat", "Cat", "Man"],
    answer: "Agama lizard",
    explanation: "Homodont: same type of teeth; found in reptiles like Agama."
  }
];
const generalQuestions = [
  {
    question: "Functional unit of kidney is",
    options: ["Henle’s loop", "Bowman’s capsule", "Nephron", "Glomerulus"],
    answer: "Nephron",
    explanation: "The nephron is the basic structural and functional unit of the kidney."
  },
  {
    question: "If secondary consumers decrease, producers will",
    options: [
      "Decrease due to more primary consumers",
      "Decrease then increase",
      "Not be affected",
      "Reach climax population"
    ],
    answer: "Decrease due to more primary consumers",
    explanation: "A decrease in secondary consumers leads to more primary consumers feeding on producers, reducing producer numbers."
  },
  {
    question: "Flower developing into fruit without fertilization is called",
    options: [
      "Asexual reproduction",
      "Sexual reproduction",
      "Cloning",
      "Parthenocarpy"
    ],
    answer: "Parthenocarpy",
    explanation: "Parthenocarpy is fruit development without fertilization."
  }
];
export default generalQuestions;
