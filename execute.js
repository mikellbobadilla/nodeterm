function accion(argu) {
  const data = []

  if (argu.theme) {
    data.push(`--theme ${argu.theme}`)
    // return 'Theme: ', argu.theme
  }
  if (argu.font) {
    data.push(`--font ${argu.font}`)
    // return 'Font: ', argu.font
  }
  if (argu.opacity) {
    data.push(`--opacity ${argu.opacity}`)
    // return 'Opacity: ', argu.opacity
  }
  if (argu.size) {
    data.push(`--size ${argu.size}`)
    // return 'Size: ', argu.size
  }
  return data
}

module.exports = accion
