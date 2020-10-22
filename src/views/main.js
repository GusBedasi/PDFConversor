function teste() {
  var filename = document.getElementById('filename').value
  var content = document.getElementById('file').files
  
  console.log(filename, content)

  fetch('http://localhost:3333/convert', {
    method: 'POST',
    body: {
      filename,
      content
    }
  }).then(response => {
    console.log(reponse)
  }).then(response => {
    console.log(response)
  })
}