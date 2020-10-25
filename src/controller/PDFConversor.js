import PDFDocument from 'pdfkit'
import fs from 'fs';
import Path from 'path'

export function toPDF (request, response) {
  
  // Get files from the request
  const [fileObj] = request.files

  // Get filename by destructing
  const { filename } = fileObj

  // Filename without IMG extension
  const filenameWithoutImgExtension = filename.split('.')[0] + '.pdf'

  // Create a PDF
  const doc = new PDFDocument()
  doc.image(Path.resolve(__dirname, '..', '..', 'uploads', filename), 160, 20, { width: 300 })
  doc.pipe(fs.createWriteStream(`pdf/${filenameWithoutImgExtension}`))
  doc.end()

  // Send PDF file to frontend
  response.attachment(Path.resolve(__dirname, '..', '..', 'pdf', filenameWithoutImgExtension))
}