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
    question: "Reaction
