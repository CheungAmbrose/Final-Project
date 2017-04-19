function printFunc()
{
	var doc = new jsPDF()
	var input = document.getElementById("primaryHousing").value;
	doc.text("My Demographics", 70,10)
	doc.text("Primary Housing Type: " + input, 10, 20)
	doc.save('test.pdf')
}

window.onload = function() {
    document.getElementById('issuesentence').style.display = 'none';
    document.getElementById('issueentry').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('mydemographics').style.display = 'none';
    document.getElementById('myorganization').style.display = 'none';
    document.getElementById('myissue').style.display = 'none';
    document.getElementById('myengagement').style.display = 'none';
}

function yesnoCheckissue() {
    if (document.getElementById('issq1y').checked) {
        document.getElementById('issuesentence').style.display = 'block';
        document.getElementById('issueentry').style.display = 'block';
    } 
    else if(document.getElementById('issq1n').checked) {
        document.getElementById('issuesentence').style.display = 'none';
        document.getElementById('issueentry').style.display = 'none';
   }
}

function yesnoCheckorg() {
    if (document.getElementById('orgq3y').checked) {
        document.getElementById('contact').style.display = 'block';
    } 
    else if(document.getElementById('orgq3n').checked) {
        document.getElementById('contact').style.display = 'none';
   }
}

function sectionCheck() {
	if (document.getElementById('demographicscheck').checked) {
        document.getElementById('mydemographics').style.display = 'block';
    } else if(!document.getElementById('demographicscheck').checked) {
        document.getElementById('mydemographics').style.display = 'none';
    }

    if(document.getElementById('organizationcheck').checked) {
        document.getElementById('myorganization').style.display = 'block';
    } else if(!document.getElementById('organizationcheck').checked) {
        document.getElementById('myorganization').style.display = 'none';
    }

    if(document.getElementById('issuecheck').checked) {
        document.getElementById('myissue').style.display = 'block';
    } else if(!document.getElementById('issuecheck').checked) {
        document.getElementById('myissue').style.display = 'none';
    }

    if(document.getElementById('engagementcheck').checked) {
        document.getElementById('myengagement').style.display = 'block';
    } else if(!document.getElementById('engagementcheck').checked) {
        document.getElementById('myengagement').style.display = 'none';
    }
}