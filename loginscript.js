function login() {
  // Hardcoded username and password
  var validUsername = 'admin'
  var validPassword = 'admin'

  // Get input values
  var username = document.getElementById('inputusername').value
  var password = document.getElementById('inputpassword').value

  // Check if username and password are correct
  if (username === validUsername && password === validPassword) {
    window.location.assign = 'index.html'
    alert('Welcome' + ' ' + validUsername)
  } else {
    alert('Invalid username or password. Please try again.')
    return false
  }
}
