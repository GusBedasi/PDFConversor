function sendImg() {
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

  // Send the request to the server
  fetch('http://localhost:3333/convert', {
    method: 'POST',
    body: formData
  }).then(
    cleanFields()
  )
}

function cleanFields(){
  const filename = document.getElementById('filename')
  const file = document.getElementById('file')

  filename.value = '';
  file.value = '';
}