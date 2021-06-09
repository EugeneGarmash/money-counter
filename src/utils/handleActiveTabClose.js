const handleActiveTabClose = (shouldFire) => {
  console.log('🚀 ~ file: handleActiveTabClose.js ~ line 2 ~ handleActiveTabClose ~ shouldFire', shouldFire);

  if (!shouldFire) {
    window.onbeforeunload = () => {};
    document.onkeydown = () => {};
    return;
  }

  window.onbeforeunload = function (e) {
    e.preventDefault(); // Cancel the event
    e.returnValue = 'Really want to quit the game?'; // Chrome requires returnValue to be set
  };

  // Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
  document.onkeydown = function (e) {
    e = e || window.event;//Get event
    if (!e.ctrlKey) return;
    var code = e.which || e.keyCode; //Get key code

    switch (code) {
        case 83://Block Ctrl+S
        case 87://Block Ctrl+W -- Not work in Chrome and new Firefox
          e.preventDefault();
          e.stopPropagation();
          break;
        default:
          break;
    }
  };

}

export default handleActiveTabClose;