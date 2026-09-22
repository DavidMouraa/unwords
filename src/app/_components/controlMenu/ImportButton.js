import usePlayerStore from "@/store/usePlayerStore"

export default function ImportButton() {
  const { playerContent } = usePlayerStore()

  function handleDownload() {
    const jsonString = JSON.stringify(playerContent, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'historia.json'
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-1 px-1 rounded-sm text-secondary-500 bg-primary-400 hover:bg-primary-300 hover:text-white cursor-pointer"
    >
      Importar
    </button>
  )
}