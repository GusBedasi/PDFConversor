import Path from 'path'
import fs from 'fs'
import { promisify } from 'util'

const promisedUnlink = promisify(fs.unlink)

export async function downloadFile(request, response) {

  const { filename, originalFilename } = request.body

  response.download(Path.resolve(__dirname, '..', '..', 'pdf', filename), (err) => {
    if (err) {
      console.error(err)
    }
  })

  setTimeout(async () => {
    
    try {
      await promisedUnlink(Path.resolve(__dirname, '..', '..', 'pdf', filename))
      await promisedUnlink(Path.resolve(__dirname, '..', '..', 'uploads', originalFilename))
    } catch (err) { 
      console.error(err)
    }
  }, 200)
}