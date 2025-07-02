const express = require("express");
const router = express.Router();

// Enhanced conversion logic to help bypass AI detection tools like ZeroGPT
function convertGptToHuman(text) {
  // Basic replacements
  let converted = text
    .replace(/\bGPT\b/gi, "AI model")
    .replace(/\btoken\b/gi, "word")
    .replace(/\bprompt\b/gi, "question")
    .replace(/\bmodel\b/gi, "system")
    .replace(/\bresponse\b/gi, "answer")
    .replace(/\bparameters\b/gi, "settings")
    .replace(/\bcontext\b/gi, "background")
    .replace(/\boutput\b/gi, "result")
    .replace(/\binput\b/gi, "information")
    .replace(/\btraining data\b/gi, "learning material");

  // Sentence restructuring examples
  converted = converted.replace(
    /(\bAI model\b)/gi,
    "the artificial intelligence system"
  );
  converted = converted.replace(/(\banswer\b)/gi, "the reply provided");
  converted = converted.replace(/(\bquestion\b)/gi, "the inquiry posed");

  // Add some filler phrases to mimic human writing style
  converted = converted.replace(
    /\./g,
    ". However, it is important to note that"
  );
  converted = converted.replace(/\bthe\b/gi, "this");

  // Randomly shuffle some words (simple example)
  converted = converted
    .split(" ")
    .sort(() => 0.5 - Math.random())
    .join(" ");

  return converted;
}

// API endpoint for conversion
router.post("/convert", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const convertedText = convertGptToHuman(text);
  res.json({ convertedText });
});

module.exports = router;
