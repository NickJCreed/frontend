import { generate } from 'stability-ts'

export function generateStability(prompt=undefined, steps=1, seed=undefined) {
  let api = generate({
    prompt: prompt,
    apiKey: process.env.DREAMSTUDIO_API_KEY,
    steps: steps,
    seed: seed
  })
  api.on('image', ({ buffer, filePath }) => {
    console.log('Image', buffer, filePath)
  })

  api.on('end', (data) => {
    return data
    // console.log('Generating Complete', data)
  })

  
}

