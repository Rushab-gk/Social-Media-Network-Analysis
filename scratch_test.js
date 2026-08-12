import { lcsWordComparison } from './js/algorithms/stringMatching.js';
import { analyzeSentiment } from './js/algorithms/sentimentNLP.js';

console.log("Testing LCS Word Comparison...");
const text1 = "The Knuth-Morris-Pratt algorithm searches for occurrences of a word.";
const text2 = "The Knuth-Morris-Pratt algorithm looks for instances of a word.";
const lcsRes = lcsWordComparison(text1, text2);
console.log("LCS Similarity Score:", lcsRes.similarity);
console.log("LCS Matched Words:", lcsRes.commonSubsequence);

console.log("\nTesting Sentiment analysis...");
const comment = "We had a very excellent and wonderful day exploring interactive algorithms on this awesome website. Love it!";
const sentimentRes = analyzeSentiment(comment);
console.log("Sentiment final category:", sentimentRes.sentiment);
console.log("Sentiment final score:", sentimentRes.score);
console.log("Sentiment tokens detected:", sentimentRes.breakdown.map(b => b.token));
