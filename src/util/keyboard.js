function hideKeyboard(element) {
  element.readOnly = true; // Force keyboard to hide on input field.
  setTimeout(function () {
    element.blur();  //actually close the keyboard
    // Remove readonly attribute after keyboard is hidden.
    element.readOnly = false;
  }, 100);
}

export { hideKeyboard }