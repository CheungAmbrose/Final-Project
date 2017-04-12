function printFunc()
{
	var doc = new jsPDF()
	var input = document.getElementById("primaryHousing").value;
	doc.text("My Demographics", 70,10)
	doc.text("Primary Housing Type: " + input, 10, 20)
	doc.save('test.pdf')
}