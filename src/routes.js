// Express Router 
import { Router } from 'express'
const routes = Router()

// function to deal with PDF conversion
import { toPDF } from './controller/PDFConversor'

// Function to download the converted file
import { downloadFile } from './controller/Downloader'

/* 
  Importa multer e configurações do multer para tratamento 
  de upload de arquivos
*/ 
import multer from 'multer'
import uploadConfig from './config/upload'
const upload = multer(uploadConfig)

routes.post('/download', downloadFile)
routes.post('/convert', upload.any('image') ,toPDF)
route.get('/', (req, res) => {
  console.log('Teste')
})

export default routes;