var form = $('#myForm')

function getFormData() { 
  var firstName = $('#validationServer01').val()
  var lastName = $('#validationServer02').val()
  var dateOfBirth = $('#validationServer03').val()
  
  return {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
  }
}

function onSubmit(event) {
  event.preventDefault()
  var formData = getFormData()
  var formDataString = JSON.stringify(formData, null, 2)
  alert(formDataString)
}

form.on('submit', onSubmit)
