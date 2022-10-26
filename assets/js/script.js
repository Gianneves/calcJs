import calculate  from "./calculate.js"
import copyBtn from "./copyBtn.js"
import { handleClearBtn, handleTyping, keyboardPress } from "./keyHandlers.js"
import switcher from "./switcher.js"


document.querySelectorAll('.charKey').forEach((charKeyBtn)=>{
    charKeyBtn.addEventListener('click', keyboardPress)
})

document.getElementById('clear').addEventListener('click', handleClearBtn)
document.getElementById('input').addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('themeSwitcher').addEventListener('click', switcher)
document.getElementById('copyToClipboard').addEventListener('click', copyBtn)

