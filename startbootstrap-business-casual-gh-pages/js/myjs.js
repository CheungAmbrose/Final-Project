function printFunc(divName)
{
	// var printContents = document.getElementById(divName).innerHTML;
 //    var originalContents = document.body.innerHTML;

 //    document.body.innerHTML = printContents;

 //    window.print();

 //    document.body.innerHTML = originalContents;

 	window.print()

 	// document.getElementById(divName).print();


	// var doc = new jsPDF()
	// var input = document.getElementById("primaryHousing").value;
	// doc.text("My Demographics", 70,10)
	// doc.text("Primary Housing Type: " + input, 10, 20)
	// doc.save('test.pdf')
}

window.onload = function() {
    document.getElementById('issq1optional').style.display = 'none';
    document.getElementById('issq6optional').style.display = 'none';
    document.getElementById('engq1optional').style.display = 'none';
    document.getElementById('orgq3optional').style.display = 'none';
    document.getElementById('mydemographics').style.display = 'none';
    document.getElementById('myorganization').style.display = 'none';
    document.getElementById('myissue').style.display = 'none';
    document.getElementById('myengagement').style.display = 'none';

    var fbElements = document.getElementsByClassName('fb');
    for (var i = 0, len = fbElements.length; i < len; i++) {
        fbElements[i].style.display = 'none';
    }

    sectionCheck();
}

function yesnoCheckissue() {
    if (document.getElementById('issq1y').checked) {
        document.getElementById('issq1optional').style.display = 'block';
        document.getElementById('issq1fb').style.display = 'none';
    } 
    else if(document.getElementById('issq1n').checked) {
        document.getElementById('issq1optional').style.display = 'none';
        document.getElementById('issq1fb').style.display = 'block';
    }

    if (document.getElementById('issq2y').checked) {
        document.getElementById('issq2optional').style.display = 'block';
        document.getElementById('issq2fb').style.display = 'none';
    } 
    else if(document.getElementById('issq2n').checked) {
        document.getElementById('issq2optional').style.display = 'none';
        document.getElementById('issq2fb').style.display = 'block';
    }

    if (document.getElementById('issq3y').checked) {
        document.getElementById('issq3optional').style.display = 'block';
        document.getElementById('issq3fb').style.display = 'none';
        document.getElementById('issq4').style.display = 'block';
    } 
    else if(document.getElementById('issq3n').checked) {
        document.getElementById('issq3optional').style.display = 'none';
        document.getElementById('issq3fb').style.display = 'block';
        document.getElementById('issq4').style.display = 'none';
    }

    // if (document.getElementById('issq4y').checked) {
    //     document.getElementById('issq4optional').style.display = 'block';
    //     document.getElementById('issq4fb').style.display = 'none';
    // } 
    // else if(document.getElementById('issq4n').checked) {
    //     document.getElementById('issq4optional').style.display = 'none';
    //     document.getElementById('issq4fb').style.display = 'block';
    // }

    if (document.getElementById('issq5y').checked) {
        document.getElementById('issq5optional').style.display = 'block';
        document.getElementById('issq5fb').style.display = 'none';
    } 
    else if(document.getElementById('issq5n').checked) {
        document.getElementById('issq5optional').style.display = 'none';
        document.getElementById('issq5fb').style.display = 'block';
    }

    if (document.getElementById('issq6y').checked) {
        document.getElementById('issq6optional').style.display = 'block';
        document.getElementById('issq6fb').style.display = 'none';
    } 
    else if(document.getElementById('issq6n').checked) {
        document.getElementById('issq6optional').style.display = 'none';
        document.getElementById('issq6fb').style.display = 'block';
    }

    if (document.getElementById('issq7y').checked) {
        document.getElementById('issq7optional').style.display = 'block';
        document.getElementById('issq7fb').style.display = 'none';
    } 
    else if(document.getElementById('issq7n').checked) {
        document.getElementById('issq7optional').style.display = 'none';
        document.getElementById('issq7fb').style.display = 'block';
    }

    if (document.getElementById('issq8y').checked) {
        document.getElementById('issq8optional').style.display = 'block';
        document.getElementById('issq8fb').style.display = 'none';
        document.getElementById('issq9').style.display = 'block';
    } 
    else if(document.getElementById('issq8n').checked) {
        document.getElementById('issq8optional').style.display = 'none';
        document.getElementById('issq8fb').style.display = 'block';
        document.getElementById('issq9').style.display = 'none';
    }

    if (document.getElementById('issq9y').checked) {
        document.getElementById('issq9optional').style.display = 'block';
        document.getElementById('issq9fb').style.display = 'none';
    } 
    else if(document.getElementById('issq9n').checked) {
        document.getElementById('issq9optional').style.display = 'none';
        document.getElementById('issq9fb').style.display = 'block';
    }

    if (document.getElementById('issq10y').checked) {
        document.getElementById('issq10optional').style.display = 'block';
        document.getElementById('issq10fb').style.display = 'none';
    } 
    else if(document.getElementById('issq10n').checked) {
        document.getElementById('issq10optional').style.display = 'none';
        document.getElementById('issq10fb').style.display = 'block';
    }

    if (document.getElementById('issq11y').checked) {
        document.getElementById('issq11optional').style.display = 'block';
        document.getElementById('issq11fb').style.display = 'none';
    } 
    else if(document.getElementById('issq11n').checked) {
        document.getElementById('issq11optional').style.display = 'none';
        document.getElementById('issq11fb').style.display = 'block';
    }

    if (document.getElementById('issq12y').checked) {
        document.getElementById('issq12optional').style.display = 'block';
        document.getElementById('issq12fb').style.display = 'none';
    } 
    else if(document.getElementById('issq12n').checked) {
        document.getElementById('issq12optional').style.display = 'none';
        document.getElementById('issq12fb').style.display = 'block';
    }

    if (document.getElementById('issq13y').checked) {
        document.getElementById('issq13optional').style.display = 'block';
        document.getElementById('issq13fb').style.display = 'none';
    } 
    else if(document.getElementById('issq13n').checked) {
        document.getElementById('issq13optional').style.display = 'none';
        document.getElementById('issq13fb').style.display = 'block';
    }

    if (document.getElementById('issq14y').checked) {
        document.getElementById('issq14optional').style.display = 'block';
        document.getElementById('issq14fb').style.display = 'none';
    } 
    else if(document.getElementById('issq14n').checked) {
        document.getElementById('issq14optional').style.display = 'none';
        document.getElementById('issq14fb').style.display = 'block';
    }

    if (document.getElementById('issq15y').checked) {
        document.getElementById('issq15optional').style.display = 'block';
        document.getElementById('issq15fb').style.display = 'none';
    } 
    else if(document.getElementById('issq15n').checked) {
        document.getElementById('issq15optional').style.display = 'none';
        document.getElementById('issq15fb').style.display = 'block';
    }

    if (document.getElementById('issq16y').checked) {
        document.getElementById('issq16optional').style.display = 'block';
        document.getElementById('issq16fb').style.display = 'none';
    } 
    else if(document.getElementById('issq16n').checked) {
        document.getElementById('issq16optional').style.display = 'none';
        document.getElementById('issq16fb').style.display = 'block';
    }
}

function yesnoCheckorg() {
    if (document.getElementById('orgq1y').checked) {
        document.getElementById('orgq1optional').style.display = 'block';
        document.getElementById('orgq1fb').style.display = 'none';
    } 
    else if(document.getElementById('orgq1n').checked) {
        document.getElementById('orgq1optional').style.display = 'none';
        document.getElementById('orgq1fb').style.display = 'block';
    }

    if (document.getElementById('orgq2y').checked) {
        document.getElementById('orgq2optional').style.display = 'block';
        document.getElementById('orgq2fb').style.display = 'none';
    } 
    else if(document.getElementById('orgq2n').checked) {
        document.getElementById('orgq2optional').style.display = 'none';
        document.getElementById('orgq2fb').style.display = 'block';
    }

    if (document.getElementById('orgq3y').checked) {
        document.getElementById('orgq3optional').style.display = 'block';
        document.getElementById('orgq3fb').style.display = 'none';
    } 
    else if(document.getElementById('orgq3n').checked) {
        document.getElementById('orgq3optional').style.display = 'none';
        document.getElementById('orgq3fb').style.display = 'block';
    }
}

function yesnoCheckeng() {
    if (document.getElementById('engq1y').checked) {
        document.getElementById('engq1optional').style.display = 'block';
        document.getElementById('engq1fb').style.display = 'none';
    } 
    else if(document.getElementById('engq1n').checked) {
        document.getElementById('engq1optional').style.display = 'none';
        document.getElementById('engq1fb').style.display = 'block';
    }

    if (document.getElementById('engq2y').checked) {
        document.getElementById('engq2optional').style.display = 'block';
        document.getElementById('engq2fb').style.display = 'none';
    } 
    else if(document.getElementById('engq2n').checked) {
        document.getElementById('engq2optional').style.display = 'none';
        document.getElementById('engq2fb').style.display = 'block';
    }

    if (document.getElementById('engq3y').checked) {
        document.getElementById('engq3optional').style.display = 'block';
        document.getElementById('engq3fb').style.display = 'none';
    } 
    else if(document.getElementById('engq3n').checked) {
        document.getElementById('engq3optional').style.display = 'none';
        document.getElementById('engq3fb').style.display = 'block';
    }

    if (document.getElementById('engq4y').checked) {
        document.getElementById('engq4optional').style.display = 'block';
        document.getElementById('engq4fb').style.display = 'none';
    } 
    else if(document.getElementById('engq4n').checked) {
        document.getElementById('engq4optional').style.display = 'none';
        document.getElementById('engq4fb').style.display = 'block';
    }
}

// function checkAllInput() {
//     document.getElementById('orgq3fbtext').innerHTML = document.getElementById('orgqe').value;
//     document.getElementById('issq1fbtext').innerHTML = document.getElementById('issq1input').value;
//     document.getElementById('engq1fbtext').innerHTML = document.getElementById('engq1input').value;
// }

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
    if ((document.getElementById('demographicscheck').checked) || (document.getElementById('organizationcheck').checked) || (document.getElementById('issuecheck').checked) || (document.getElementById('engagementcheck').checked)) {
    	document.getElementById('printbutton').style.display = 'block';
    	document.getElementById('orginfo').style.display = 'block';
    } else {
    	document.getElementById('printbutton').style.display = 'none';
    	document.getElementById('orginfo').style.display = 'none';
    }
}