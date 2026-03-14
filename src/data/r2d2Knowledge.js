const knowledge = [
  {
    keywords: ["name", "who are you", "introduce", "priyansh"],
    answer:
      "bEEP-boop! \u{1F916} BWEEE! This unit has located the databanks! The human I represent is PRIYANSH RAJ GUPTA \u2014 a Machine Learning Engineer and Full-Stack Developer from Bhopal, India. Beep boop, a most impressive specimen!",
  },
  {
    keywords: ["skills", "tech", "stack", "technologies", "know"],
    answer:
      "bEEP-boop! \u{1F916} *whirrs excitedly* Priyansh is proficient in React, Python, TensorFlow, Keras, Flask, Node.js, MongoDB, scikit-learn, and Hugging Face. On the tools side: Figma, Adobe Suite, Git, and VS Code. Bweeep!",
  },
  {
    keywords: ["ml", "machine learning", "ai", "artificial intelligence", "deep learning"],
    answer:
      "bEEP-boop! \u{1F916} BEEP BEEP! Priyansh specialises in Applied Machine Learning. He has built emotion detection models using CNN + NLP, interview performance AI systems, and deploys models with Flask and Hugging Face. *happy beeping*",
  },
  {
    keywords: ["project", "projects", "built", "work", "portfolio"],
    answer:
      "bEEP-boop! \u{1F916} *spins dome* Three flagship missions logged! (1) IMPACT \u2014 AI-powered interview dashboard. (2) Emotion Detection Model \u2014 deep learning audio classifier. (3) Spotify Scaler \u2014 feature analysis tool. All on GitHub! Beep boop!",
  },
  {
    keywords: ["impact", "interview"],
    answer:
      "bEEP-boop! \u{1F916} BWEEEE! IMPACT is a dashboard that rates interview performance using AI \u2014 combining React, Flask, NLP, and Computer Vision. It was built to help candidates improve with real-time feedback. Most impressive engineering!",
  },
  {
    keywords: ["emotion", "audio", "cnn"],
    answer:
      "bEEP-boop! \u{1F916} *beeps thoughtfully* The Emotion Detection Model uses a custom CNN to classify emotions from audio signals. Built in Python using NLP techniques. It was specifically designed as the brain for the IMPACT project. Bwoop!",
  },
  {
    keywords: ["spotify", "music", "scaler"],
    answer:
      "bEEP-boop! \u{1F916} Bweep! Spotify Scaler is a Python + Streamlit app that analyses audio features of songs using FFmpeg and the Spotify API. Very creative use of data science for music! Beep boop!",
  },
  {
    keywords: ["experience", "job", "internship", "vizuara"],
    answer:
      "bEEP-boop! \u{1F916} *accesses work history database* Priyansh worked at VizuaraAI as a UI-UX & Full-Stack developer (Dec 2025 \u2013 Feb 2026). He built industrial websites, educational ML web apps, and custom UI components. Bweeep boop!",
  },
  {
    keywords: ["education", "college", "university", "degree", "study"],
    answer:
      "bEEP-boop! \u{1F916} BWEEE! Priyansh is an engineering student with deep focus on Computer Science and AI. Always learning, always upgrading \u2014 much like myself after a maintenance cycle! Beep!",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect"],
    answer:
      "bEEP-boop! \u{1F916} *beeps urgently* Transmitting contact coordinates! Email: 26priyanshraj@gmail.com. LinkedIn: priyanshrajgupta. Instagram: @priyanshrajgupta. Or use the contact form on this very page! BWEEE!",
  },
  {
    keywords: ["design", "designer", "figma", "graphic", "creative", "adobe"],
    answer:
      "bEEP-boop! \u{1F916} Bwoop bwoop! Priyansh is ALSO a creative designer! He uses Figma, Adobe Photoshop, Premiere Pro, and After Effects. He even has a separate designer portfolio! Most versatile!",
  },
  {
    keywords: ["location", "where", "india", "bhopal"],
    answer:
      "bEEP-boop! \u{1F916} *navigates star map* Coordinates confirmed: Bhopal, Madhya Pradesh, India. Not quite the Outer Rim, but the Force is strong there! Beep boop!",
  },
  {
    keywords: ["github", "code", "open source", "repo"],
    answer:
      "bEEP-boop! \u{1F916} BWEEE! All mission source code is stored at github.com/Priyanshraj26 \u2014 you can see his projects, contributions, and the legendary LeetCode activity heatmap! Bwoop!",
  },
  {
    keywords: ["leetcode", "competitive", "coding", "dsa", "algorithm"],
    answer:
      "bEEP-boop! \u{1F916} *beeps admiringly* Priyansh practices on LeetCode under the handle 'priyanshrajgupta'. Check the heatmap section of this site to see his activity calendar! Consistent training, like a true Jedi! BEEP!",
  },
  {
    keywords: ["hobby", "interest", "fun", "free time", "passion"],
    answer:
      "bEEP-boop! \u{1F916} Bweeep! Beyond coding, Priyansh enjoys visual design, video production, and creative media \u2014 he manages social media and creates content as well. A developer AND a creative! Beep boop bweee!",
  },
  {
    keywords: ["cv", "resume", "download"],
    answer:
      "bEEP-boop! \u{1F916} *opens file bay* Resume/CV is available! Hit the 'Download CV' button in the About section to get it from Google Drive. Beep boop!",
  },
  {
    keywords: ["star wars", "force", "jedi", "sith", "galaxy"],
    answer:
      "bEEP-boop! \u{1F916} *extremely excited beeping* BWEEEEEEE! You speak my language! Priyansh is clearly a person of culture \u2014 this whole portfolio is Star Wars themed! May the Force be with your career decisions! BEEP BOOP BWEEE!",
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "sup", "howdy"],
    answer:
      "bEEP-boop! \u{1F916} *happy dome spin* BWEEE! Greetings, traveller! I am R2-D2, Priyansh's faithful droid assistant. I can tell you about his skills, projects, experience, or how to contact him. What does this unit assist you with? Beep!",
  },
  {
    keywords: ["help", "what can you", "questions", "ask"],
    answer:
      "bEEP-boop! \u{1F916} Bweep! This unit can answer questions about: skills & tech stack, projects, work experience, design portfolio, contact info, LeetCode, education, and more! Just ask, and R2-D2 shall deliver! Beep boop!",
  },
];

const fallbackResponse =
  "bEEP-boop! \u{1F916} *confused beeping* Bweep? This unit does not have that data in its memory banks! Try asking about Priyansh's skills, projects, experience, or how to contact him. R2-D2 is always learning! Beep boop!";

export function getR2D2Response(userMessage) {
  const msg = userMessage.toLowerCase();
  for (const entry of knowledge) {
    if (entry.keywords.some((kw) => msg.includes(kw))) {
      return entry.answer;
    }
  }
  return fallbackResponse;
}
