import Path from 'path'

export function downloadFile(request, response) {

  const { filename } = request.body

  response.download(Path.resolve(__dirname, '..', '..', 'pdf', filename), (err) => {
    if (err) {
      console.error(err)
    }else {
      console.log(`Download Feito ${filename}`)
    }
  })

}