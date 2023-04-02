let eToast: HTMLElement | null = null
let id: string | null = null
export enum ToastLocation {
  top
}

export function showToast(msg: string, location: ToastLocation = ToastLocation.top) {
  eToast.innerText = msg;
  eToast.className = "show";
  setTimeout(function() {
    eToast.className = eToast.className.replace("show", "")
  }, 2000);
}


export function init() {
  initToast()
}

function randomId(len: number = 6) {
  return `snackbar-${Math.random().toString(36).substring(2, len + 2)}`
}

function addToastCss() {
  // add css
  const cssContent = `/* The snackbar - position it at the bottom and in the middle of the screen */
#${id} {
  visibility: hidden; /* Hidden by default. Visible on click */
  background-color: rgba(51, 51, 51, 0.7); /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 8px 18px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  transform: translateX(-50%);
  font-size: 18px;
  top: 20%;
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#${id}.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadein {
  from {opacity: 0;}
  to {opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {opacity: 1;}
  to {opacity: 0;}
}

@keyframes fadeout {
  from {opacity: 1;}
  to {opacity: 0;}
}`
  const eStyle = document.createElement('style');
  eStyle.appendChild(document.createTextNode(cssContent))
  document.querySelector('head').appendChild(eStyle)
}

function initToast() {
  id = randomId()
  eToast = document.createElement("div")
  eToast.setAttribute("id", id)
  eToast.setAttribute("data-id", id)
  document.body.appendChild(eToast)
  addToastCss();
}
