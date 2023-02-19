// http request or webhook

// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


let answer = await lib.openai.playground['@0.0.4'].completions.create({
  model: `text-davinci-003`,
  prompt: [
    `${context.params.submission || `How  to calculate the carbon emissions associated with my own driving in Canada`}`
  ],
  max_tokens: 500,
  temperature: 1,
  top_p: 1,
  n: 1,
  echo: false,
  presence_penalty: 0,
  frequency_penalty: 0,
  best_of: 1
});
return answer;