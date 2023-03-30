let eToast: HTMLElement | null = null
export enum ToastLocation {
  top
}

export function showToast(msg: string, location: ToastLocation = ToastLocation.top) {

}


export function init() {
  initToast()
}

function randomId(len: number = 6) {
  return Math.random().toString(36).substring(2, len + 2)
}

function addToastCss() {
  // add css
  const cssContent = `/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
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
  const toastId = randomId()
  eToast = document.createElement("div")
  eToast.setAttribute("id", toastId)
  eToast.setAttribute("data-id", toastId)
  document.body.appendChild(eToast)
  addToastCss();
}
