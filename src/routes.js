// Lib to deal with PDF conversion
import { toPDF } from './controller/PDFConversor'

// Express Router 
import { Router } from 'express'
const routes = Router()

/* 
  Importa multer e configurações do multer para tratamento 
  de upload de arquivos
*/ 
import multer from 'multer'
import uploadConfig from './config/upload'
const upload = multer(uploadConfig)

routes.post('/convert', upload.any('image') ,toPDF)

export default routes;