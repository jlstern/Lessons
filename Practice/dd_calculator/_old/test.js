	var selectElem = document.getElementById('select');
	var pElem = document.getElementById('p');

	// When a new <option> is selected
	selectElem.addEventListener('change', function() {
	  var index = selectElem.selectedIndex;
	  // Add that data to the <p>
	  pElem.innerHTML = 'selectedIndex: ' + index;
	});
