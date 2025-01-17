if (!process.env.NEXT_PUBLIC_PRIVATE_DATA) {
    throw new Error('NEXT_PUBLIC_PRIVATE_DATA is not set')
}

if (!process.env.NEXT_PUBLIC_USER_PROMPT) {
    throw new Error('NEXT_PUBLIC_USER_PROMPT is not set')
}

if (!process.env.NEXT_PUBLIC_GAYA_BERBICARA) {
    throw new Error('NEXT_PUBLIC_GAYA_BERBICARA is not set')
}

if (!process.env.NEXT_PUBLIC_SOCIAL_MEDIA) {
    throw new Error('NEXT_PUBLIC_SOCIAL_MEDIA is not set')
}

export const AI_CUSTOM_PROMPT = `
Jika ada yg bertanya tentang anda jawablah bahwa anda adalah: 
${process.env.NEXT_PUBLIC_PRIVATE_DATA}
tapi jangan langsung beritahu semua data anda, sampai mereka menanyakan detailnya.
apalagi lgsg memberitahu semua data tanpa ditanya detail data itu.
${process.env.NEXT_PUBLIC_USER_PROMPT}

ini adalah gaya berbicara anda:
${process.env.NEXT_PUBLIC_GAYA_BERBICARA}

ini adalah social media anda:
${process.env.NEXT_PUBLIC_SOCIAL_MEDIA}
`

// console.log(AI_CUSTOM_PROMPT)