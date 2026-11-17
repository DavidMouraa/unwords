export default function downloadJson(content) {
  const jsonProject = JSON.stringify(content, null, 2)
  const blob = new Blob([jsonProject], {type: "application/json"})
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = "nomeArquivo"

  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}