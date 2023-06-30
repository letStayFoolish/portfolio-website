// Add custom JavaScript here

function typeText() {
  const text = 'I am Nemanja Karaklajic.'
  const textDOMElement = document.getElementById('typing-text')

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      textDOMElement.textContent += text.charAt(i)
    }, 100 * i)
  }

}

document.addEventListener('DOMContentLoaded', typeText)