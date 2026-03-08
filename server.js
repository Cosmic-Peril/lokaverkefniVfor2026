const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static("public"));

const disorders = [
{
id: 1,
name: "ADHD",
info: "ADHD, or Attention-Deficit/Hyperactivity Disorder, is a neurodevelopmental condition that affects how the brain processes information and regulates self-control. While often associated with childhood, it is a lifelong trait that influences the brains executive functions—the management system that helps us plan, focus, and manage emotions.",
symptoms: [
"Difficulty focusing",
"Hyperactivity",
"Impulsivity"
]
},

{
id: 2,
name: "Autism",
info: "Autism Spectrum Disorder (ASD) is a lifelong neurodevelopmental condition that affects how people perceive the world and interact with others. Much like ADHD, it is not an illness to be cured, but a different way of brain-wiring. The term spectrum is key: it reflects the fact that while all autistic people share certain core challenges, they are all highly individual. Some may live entirely independently with high-level careers, while others may require significant lifelong support with daily tasks.",
symptoms: [
"Difficulty with social interaction",
"Repetitive behaviors",
"Sensory sensitivity"
]
},

{
id: 3,
name: "Anxiety",
info: "Anxiety Disorder is a chronic mental health condition characterized by persistent, excessive, and unrealistic worry that disrupts daily functioning. Unlike the temporary situational anxiety everyone feels before a big event, a clinical disorder involves a hypersensitive nervous system that remains in a state of high alert even when no immediate threat exists. This often manifests as a cycle of cognitive symptoms—such as intrusive what-if thoughts and difficulty concentrating—paired with physical symptoms like muscle tension, fatigue, and a racing heart. Over time, these disorders can lead to avoidance behaviors, where an individual limits their life experiences to escape the distress of their triggers.",
symptoms: [
"Excessive worrying",
"Restlessness",
"Difficulty sleeping"
]
},

{
id: 4,
name: "Depression",
info: "Depressive Disorder, commonly known as depression, is a complex mental health condition that goes far beyond feelings of temporary sadness or grief. It is a persistent low state that fundamentally alters how a person thinks, feels, and handles daily activities such as sleeping, eating, or working. Biologically, it is often linked to an imbalance of neurotransmitters like serotonin, norepinephrine, and dopamine, which regulate mood and the brain's reward system.",
symptoms: [
"Low mood",
"Loss of interest",
"Fatigue"
]
},

{
id: 5,
name: "OCD",
info: "Obsessive-Compulsive Disorder (OCD) is a chronic mental health condition characterized by a cycle of uncontrollable, recurring thoughts (obsessions) and behaviors (compulsions) that a person feels the urge to repeat over and over. While often trivialized in popular culture as being neat or organized, clinical OCD is a time-consuming and often distressing disorder rooted in the brain's inability to resolve a sense of doubt or danger.",
symptoms: [
"Obsessive thoughts",
"Compulsive behaviors",
"Anxiety"
]
},

{
id: 6,
name: "Bipolar Disorder",
info: "Bipolar Disorder, formerly known as manic depression, is a mental health condition characterized by extreme shifts in mood, energy, and activity levels. Unlike the typical ups and downs most people experience, these shifts involve distinct periods called episodes that can last for days or weeks, significantly impacting a person’s ability to carry out day-to-day tasks.",
symptoms: [
"Manic episodes",
"Depressive episodes",
"Emotional instability"
]
},

{
id: 7,
name: "Schizophrenia",
info: "Schizophrenia is a chronic and often misunderstood brain disorder that affects how a person thinks, feels, and perceives reality. It is not split personality, but rather a split from reality, where the brain has difficulty distinguishing between internal thoughts and external stimuli. This condition usually appears in late adolescence or early adulthood and is believed to be caused by a combination of genetics, brain chemistry (particularly involving dopamine and glutamate), and environmental triggers.",
symptoms: [
"Delusions",
"Hallucinations",
"Disorganized speech"
]
},

{
id: 8,
name: "PTSD",
info: "Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a terrifying event. While it is natural to feel afraid during and after a traumatic situation, most people recover over time. In individuals with PTSD, the body’s fight-or-flight response stays stuck in the on position, causing the brain to remain in a state of constant perceived danger long after the threat has passed.",
symptoms: [
"Flashbacks",
"Nightmares",
"Severe anxiety"
]
},

{
id: 9,
name: "DID",
info: "Dissociative Identity Disorder (DID), formerly known as Multiple Personality Disorder, is a complex mental health condition characterized by a fragmentation of identity. Rather than having multiple personalities in one body, a person with DID has a single identity that has been splintered into two or more distinct personality states, often referred to as alters. This condition is almost always a survival mechanism developed in early childhood (usually before age 9) in response to severe, repetitive, and overwhelming trauma.",
symptoms: [
"Identity confusion",
"Memory gaps",
"Depersonalization"
]
},

{
id: 10,
name: "Borderline Personality Disorder",
info: "Borderline Personality Disorder (BPD) is a mental health condition characterized by a pervasive pattern of instability in emotions, self-image, and interpersonal relationships. At its core, BPD is often described as a disorder of emotional dysregulation. Individuals with BPD experience emotions—particularly anger, sadness, and anxiety—much more intensely and for longer periods than others, making it difficult to return to a stable baseline after an emotional trigger.",
symptoms: [
"Emotional Instability",
"Unstable Relationships",
"Impulsive Behaviors"
]
}
];

app.get("/", (req, res) => {
    res.render("index", { disorders });
});

app.get("/disorder/:id", (req, res) => {

    const disorder = disorders.find(d => d.id == req.params.id);

    res.render("disorder", { disorder });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});