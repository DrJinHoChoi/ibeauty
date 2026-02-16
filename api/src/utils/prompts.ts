interface MakeupOptions {
  styleId: string
  intensity: number
  skinTone?: string
  lipColor?: string
  eyeshadowColor?: string
  customPrompt?: string
}

const stylePrompts: Record<string, string> = {
  daily: 'Apply natural daily Korean makeup with light foundation, groomed natural eyebrows, MLBB lip tint, and subtle peachy blush. Keep the look fresh, dewy, and minimal.',
  office: 'Apply professional Korean office makeup with even matte foundation, subtle contour, natural brown eyeshadow, thin precise eyeliner, groomed eyebrows, and muted rose lip color.',
  party: 'Apply glamorous Korean party makeup with flawless full-coverage foundation, sculpted contour and highlight, dramatic smoky eyeshadow with shimmer, bold winged eyeliner, volumized mascara, vibrant red or berry lips, and glowing blush.',
  wedding: 'Apply elegant Korean wedding makeup with luminous flawless skin, soft contour, champagne and rose gold eyeshadow, delicate eyeliner, natural lash-enhancing mascara, soft pink lips, and radiant blush.',
  natural: 'Apply very subtle no-makeup Korean makeup with sheer tinted moisturizer, lightly groomed natural eyebrows, and a nude lip balm. The result should look like naturally beautiful bare skin.',
  glam: 'Apply full glamorous Korean makeup with flawless high-coverage dewy foundation, dramatic sculpted contour, deep smoky eyeshadow with glitter, thick winged eyeliner, dramatic lashes, bold arched eyebrows, deep red lips, and sculpted blush.',
  date: 'Apply sweet romantic Korean date makeup with dewy luminous skin, soft pink eyeshadow, subtle brown eyeliner, curled lashes, gradient cherry lip tint, and adorable peach blush.',
  interview: 'Apply clean professional Korean interview makeup with natural semi-matte foundation, subtle contour, well-groomed straight eyebrows, thin natural brown eyeliner, and understated MLBB lip color.',
}

export function buildMakeupPrompt(options: MakeupOptions): string {
  let prompt = stylePrompts[options.styleId] || stylePrompts.daily

  // Adjust intensity
  if (options.intensity < 30) {
    prompt += ' Keep the makeup very subtle and barely noticeable.'
  } else if (options.intensity > 70) {
    prompt += ' Make the makeup more vivid and prominent.'
  }

  if (options.lipColor) {
    prompt += ` Use ${options.lipColor} hex color for the lip color.`
  }
  if (options.eyeshadowColor) {
    prompt += ` Use ${options.eyeshadowColor} hex color tones for the eyeshadow.`
  }
  if (options.skinTone) {
    prompt += ` The person has ${options.skinTone} skin tone - match the makeup accordingly.`
  }

  prompt += " IMPORTANT: Preserve the person's exact facial features, expression, and identity. Only add makeup - do not change face shape, hair, clothing, or background. The result should look like a real photograph."

  if (options.customPrompt) {
    prompt += ` Additional request: ${options.customPrompt}`
  }

  return prompt
}
