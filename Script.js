// Add event listeners to mode selection buttons
document.querySelector('.practice-mode').addEventListener('click', () => {
	// Show practice mode content
	document.querySelector('.practice-mode-content').style.display = 'block';
	// Hide exam mode content
	document.querySelector('.exam-mode-content').style.display = 'none';
});

document.querySelector('.exam-mode').addEventListener('click', () => {
	// Show exam mode content
	document.querySelector('.exam-mode-content').style.display = 'block';
	// Hide practice mode content
	document.query
