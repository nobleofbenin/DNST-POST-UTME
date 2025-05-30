// general.js — General Paper Post-UTME Questions with Answers & Explanations

const generalQuestions = [
  {
    question: "The following are stringed instruments except",
    options: ["Violin", "Piano", "Guitar", "Xylophone"],
    answer: 3,
    explanation: "Violin and Guitar are stringed instruments. Piano has strings but is played by striking, so it's also classified as a percussion instrument. Xylophone is purely percussion."
  },
  {
    question: "If two 2μF capacitors are connected in parallel and the combination is then connected in series with a 4μF capacitor, the net capacitance will be",
    options: ["0.6μF", "0.4μF", "0.2μF", "2μF"],
    answer: 3,
    explanation: "Parallel: 2μF + 2μF = 4μF. Series: 1/C = 1/4 + 1/4 = 1/2 ⇒ C = 2μF."
  },
  {
    question: "The limiting frictional force on a body of mass 4 kg resting on an inclined plane is 20 N. What is the angle of inclination (θ)?",
    options: ["75°", "60°", "45°", "30°"],
    answer: 1,
    explanation: "F = mg sinθ ⇒ sinθ = 20 / (4×9.8) = 0.51 ⇒ θ ≈ 60°."
  },
  {
    question: "Which of the following has the same unit as the product of pressure and volume of a gas?",
    options: ["Power", "Acceleration", "Work done", "Force"],
    answer: 2,
    explanation: "Pressure × Volume = Nm = Joule, the unit of work."
  },
  {
    question: "A body undergoes circular motion with angular velocity ω rad/s and radius r m. If mass is m kg, the centripetal force F is",
    options: ["mω²", "mrω²", "mω²/r", "m/ω²"],
    answer: 1,
    explanation: "Centripetal force = mrω²."
  },
  {
    question: "What is the efficiency of a cell with internal resistance of 3Ω when it supplies current to a 7Ω resistor?",
    options: ["70%", "30%", "20%", "10%"],
    answer: 0,
    explanation: "Efficiency = R / (R + r) = 7 / (7 + 3) = 0.7 = 70%."
  },
  {
    question: "Which of the following compounds is not obtained by polymerization?",
    options: ["Plastic", "Polythene", "Petroleum", "Cellulose"],
    answer: 2,
    explanation: "Petroleum is a mixture of hydrocarbons, not a polymer."
  },
  {
    question: "A specimen of zinc contained zinc oxide. 0.80g of this specimen reacted with acid to give 215 cm³ of hydrogen at 17°C and 770 mmHg. What is the % of zinc oxide? [32.5g Zn → 1g H]",
    options: ["15%", "25%", "35%", "45%"],
    answer: 1,
    explanation: "Using gas laws and Zn stoichiometry, 0.6g was Zn, 0.2g was ZnO ⇒ (0.2/0.8)×100 = 25%."
  },
  {
    question: "A measure of disorderliness in a chemical system is known as",
    options: ["Enthalpy", "Entropy", "Free energy", "Activation energy"],
    answer: 1,
    explanation: "Entropy measures randomness or disorder in a system."
  },
  {
    question: "In the redox reaction: Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O, the oxidation number of chromium changes from",
    options: ["+7 to +3", "+6 to +3", "–6 to +3", "–2 to +6"],
    answer: 1,
    explanation: "In dichromate (Cr₂O₇²⁻), Cr is +6 and reduced to +3."
  },
  {
    question: "A pregnant woman has the genotype AS. What is the probability that her baby will have sickle cell anaemia if the father is also AS?",
    options: ["1 in 2", "1 in 4", "3 in 4", "1 in 3"],
    answer: 1,
    explanation: "AS × AS gives 25% (1 in 4) chance of SS genotype."
  },
  {
    question: "The mineral required for the formation of blood cells is",
    options: ["Iron", "Calcium", "Phosphorus", "Iodine"],
    answer: 0,
    explanation: "Iron is essential for hemoglobin and red blood cell production."
  },
  {
    question: "The part of the human brain responsible for coordination and balance is",
    options: ["Medulla", "Cerebellum", "Cerebrum", "Thalamus"],
    answer: 1,
    explanation: "Cerebellum controls coordination and balance."
  },
  {
    question: "Which of the following best describes a democracy?",
    options: ["Rule by the richest", "Rule by the military", "Rule by elected representatives", "Rule by monarchs"],
    answer: 2,
    explanation: "Democracy is rule by elected representatives."
  },
  {
    question: "The main organ of the United Nations responsible for maintaining international peace and security is the",
    options: ["General Assembly", "Security Council", "Trusteeship Council", "Secretariat"],
    answer: 1,
    explanation: "The UN Security Council maintains international peace and security."
  },
  {
    question: "Which organ of government interprets the laws?",
    options: ["Executive", "Legislature", "Judiciary", "Civil service"],
    answer: 2,
    explanation: "The judiciary interprets laws."
  },
  {
    question: "The law of diminishing returns applies to",
    options: ["Short-run production", "Long-run production", "Fixed factors only", "All economic systems"],
    answer: 0,
    explanation: "It applies in the short run when at least one factor is fixed."
  },
  {
    question: "In Economics, utility refers to",
    options: ["Cost of production", "Satisfaction derived from consumption", "Scarcity of goods", "Value of money"],
    answer: 1,
    explanation: "Utility is satisfaction from consuming a good."
  },
  {
    question: "The means through which government raises money to fund its activities is",
    options: ["Importation", "Privatization", "Taxation", "Federalism"],
    answer: 2,
    explanation: "Governments raise revenue mainly through taxation."
  },
  {
    question: "The market structure in which there is only one seller is known as",
    options: ["Monopoly", "Perfect competition", "Oligopoly", "Duopoly"],
    answer: 0,
    explanation: "Monopoly: one seller dominates the market."
  },
  {
    question: "The movement of people from rural to urban areas is known as",
    options: ["Urbanization", "Emigration", "Immigration", "Decentralization"],
    answer: 0,
    explanation: "Urbanization includes rural-to-urban migration."
  },
  {
    question: "A government budget that shows planned expenditure equals expected revenue is called",
    options: ["Deficit budget", "Surplus budget", "Balanced budget", "Zero budget"],
    answer: 2,
    explanation: "Balanced budget: revenue equals expenditure."
  },
  {
    question: "Which of the following is an example of a renewable natural resource?",
    options: ["Coal", "Crude oil", "Wind", "Gold"],
    answer: 2,
    explanation: "Wind is renewable. Others are non-renewable."
  },
  {
    question: "In Nigeria, which arm of government prepares the annual budget?",
    options: ["Legislature", "Executive", "Judiciary", "Civil Service"],
    answer: 1,
    explanation: "The executive prepares the budget."
  },
  {
    question: "Which of the following is a function of the Central Bank?",
    options: ["Granting loans to individuals", "Accepting deposits from the public", "Issuing currency", "Selling consumer goods"],
    answer: 2,
    explanation: "Issuing currency is a Central Bank function."
  },
  {
    question: "A substance that speeds up a chemical reaction without being consumed is called a",
    options: ["Reactant", "Inhibitor", "Catalyst", "Solvent"],
    answer: 2,
    explanation: "A catalyst speeds up a reaction and remains unchanged."
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
    answer: 3,
    explanation: "Vitamin K aids blood clotting."
  },
  {
    question: "The imaginary lines that run parallel to the equator are called",
    options: ["Longitudes", "Latitudes", "Axes", "Meridians"],
    answer: 1,
    explanation: "Latitudes run parallel to the equator."
  }
];
