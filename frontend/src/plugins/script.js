export const SamplePlugin = {
  install() {
    const rnd = (Math.random() + 1).toString(36).substring(7)
    const url = `http://localhost/scripts/script.js?rnd=${rnd}`

    const script = document.createElement('script')
    script.src = url

    document.body.appendChild(script)
  }
}
