import multer from 'multer'
import Path from 'path'

export default {
  storage: multer.diskStorage({
    destination: Path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`

      cb(null, fileName)
    }
  })
}