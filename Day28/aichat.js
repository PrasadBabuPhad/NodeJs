const  { GoogleGenAI }=  require("@google/genai");

const ai = new GoogleGenAI({apiKey:"AIzaSyCVd0JV3slGBOZ-9FmfF7XPuw13CpMTLiY"});


async function main(msg){
const interaction = await ai.interactions.create({
  model: "gemini-3.5-flash",
  input: msg,
});
 return interaction.output_text;
}

module.exports =main;