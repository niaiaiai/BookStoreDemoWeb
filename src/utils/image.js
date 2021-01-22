

function getBase64URL(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onloadend = () => {
      resolve(reader.result)
    }
  })
}
export {
  getBase64URL
}