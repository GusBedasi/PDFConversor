async function sendImg() {
  // Take the user desired filaname
  var filename = document.getElementById('filename').value

  // Take the file
  var file = document.getElementById('file').files[0]

  // Check if there's a file
  if (file == undefined) {
    // Pop up an alert to warn the user
    Swal.fire({
      title: 'Erro!',
      text: 'A conversão não pode ser feita, pois não há arquivos selecionados',
      icon: 'error',
      confirmButtonText: 'Ok'
    })

    return
  }

  let extension = null

  if(file.name.split('.').length > 2) {
    // Ensure that the last index is the one used
    const lastArrayIndex = file.name.split('.').length - 1
    // Take the file extension
    extension = '.' + file.name.split('.')[lastArrayIndex]
  } else {
    // Take the file extension
    extension = '.' + file.name.split('.')[1]
  }

  // Create a formData to send the filename, file and file extension to the server
  const formData = new FormData();
  formData.append('file', file, filename + extension);

  const { pfdExtension, originalExtension } = await (await fetch('http://localhost:3333/convert', {
    method: 'POST',
    body: formData
  })).json()

  console.log(pfdExtension, originalExtension)

  downloadFile(pfdExtension, originalExtension)
  cleanFields()
}

async function downloadFile(pfdExtension, originalExtension) {

  // Get the file to download 
  const downloadFile = await fetch('http://localhost:3333/download', {
    headers: { 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({filename: pfdExtension, originalFilename: originalExtension}),
  })

  // Create an Anchor to trigger the download event
  const downloadFileBlob = await downloadFile.blob()
  const urlToDownload = window.URL.createObjectURL(downloadFileBlob)
  const downloadAnchor = document.createElement('a')
  downloadAnchor.style.display = 'none'
  downloadAnchor.href = urlToDownload
  downloadAnchor.download = pfdExtension
  document.body.appendChild(downloadAnchor)
  downloadAnchor.click() 
  window.URL.revokeObjectURL(urlToDownload);
}

// Clean the input fields
function cleanFields(){
  const filename = document.getElementById('filename')
  const file = document.getElementById('file')

  filename.value = '';
  file.value = '';
}