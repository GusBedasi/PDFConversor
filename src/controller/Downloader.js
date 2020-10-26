import Path from 'path'
import fs from 'fs'

export async function downloadFile(request, response) {

  const { filename } = request.body

  response.download(Path.resolve(__dirname, '..', '..', 'pdf', filename), (err) => {
    if (err) {
      console.error(err)
    }
  })
  
  // Delete PDF file
  /* fs.unlink(Path.resolve(__dirname, '..', '..', 'pdf', filename), (err) => {
    if (err) {
      console.error(err)
    }
  }) */
}