var work = { 
	"jobs" : [ { 	"employer" 		: "zetVisions AG", 
					"title" 		: "Head of ABAP development",
					"dates" 		: "2002 - today",
					"city" 			: "Heidelberg",
					"description"	: "Fachliche Leitung der ABAP Entwicklung. Führung des Entwicklungsteams, Architektur der Anwendung, Definition und Optimierung des Entwicklungsprozesses, Fortbildung des Entwicklerteams," +  
									"Zertifizierung der Produkte, Planung und Koordination der Entwicklungsinfrastruktur. Technischer Ansprechpartner für das Produktmanagement und Sales. " },
			{ 		"employer" 		: "BIT Institut", 
					"title" 		:  "HiWi",
					"dates" 		:  "2000 - 2002",
					"city" 			: "Mannheim",
					"description"	: "Softwareevaluation, Usability Tests, Installation der Oracle Applications. Seminarleiter für das Seminar 'Customizing eines ERP Systems für den Mittelstand' "+
									  "am Beispiel der Oracle SMB Suite. Analyse von SAP Business One " }]};
	
var skills = [	"ABAP OO", 
				"WebDynpro ABAP", 
				"TDD",
				"Scrum", 
				"Clean Code", 
				"Java" ];
		
var bio = { "name" : "Jörg Brandeis",
			"role" : "Head of ABAP development",
			"welcomeMessage" : "Welcome to my bio",
			"contacts" : { "mobile" : "#49-1775407426",
						   "email"  : "joerg@brandeis.de",
						   "location" : "68163 Mannheim, Rheindammstrasse 5"} ,
			"imageURL" : "https://x1.xingassets.com/img/users/0/0/7/9b36e0c5f.3262104,3.140x185.jpg",
			"skills" : skills };

			
var education = {
	 "schools" :  [
		{ "name" : "Neckarschule",
		"city" : "Heidelberg",
		"degree" : "",
		"majors" : ["Deutsch", "Mathe", "Sachkunde"]
		},
		{ "name" : "Hölderlin Gymnasium",
		"city" : "Heidelberg",
		"degree" : "Abitur",
		"majors" : ["Mathe", "Physik"]
		},	 
		{ "name" : "Universität Mannheim",
		"city" : "Mannheim",
		"degree" : "Diplom Wirtschaftsinformatik",
		"majors" : ["Wirtschaftsinformatik"]
		}],
		
	"course": [ {"title" : "JavaScript Crash Course",
				"school" : "Udacity",
				"dates"  : 2014,
				"url"    : "http://www.udacity.com"}
				,
				{"title" : "iPhone / iPad Entwickler Seminar",
				"school" : "Kress",
				"dates"  : 2012,
				"url"    : "http://www.objectiveceeds.com"}
	]
}


var projects = {
"project" : [ { "title" : "zetControl @ IBG"},{"title":"Daimler"}]
}

projects.display = function( ){
		$("#projects").append( HTMLprojectStart);
	for ( counter in projects.project ){
		$("#projects").append( HTMLprojectTitle.replace("%data%",projects.project[counter]));
	}
}

projects.display( );

	function displayWork(){
		$("#workExperience").append( HTMLworkStart );
			for ( job in work.jobs){		
				$("#workExperience").append( HTMLworkEmployer.replace( "%data%", work.jobs[job].employer ) + HTMLworkTitle.replace( "%data%", work.jobs[job].title  ));

				$("#workExperience").append( HTMLworkDates.replace( "%data%", work.jobs[job].dates ));
				$("#workExperience").append( HTMLworkLocation.replace( "%data%", work.jobs[job].city ));
				$("#workExperience").append( HTMLworkDescription.replace( "%data%", work.jobs[job].description ));
			}
	}
	displayWork( );
	function logClicks( x, y ){
	console.log( x);
	}
	
	$(document).click(function(loc){
		logClicks(loc.pageX, loc.pageY);
	});
	$("#mapDiv").append(googleMap);
		
$("#header").prepend( HTMLmobile.replace( "%data%", bio.contacts.mobile ) );
$("#header").prepend( HTMLemail.replace( "%data%", bio.contacts.email ) );
$("#header").prepend( HTMLheaderRole.replace( "%data%", bio.role ) );
$("#header").prepend( HTMLheaderName.replace( "%data%", bio.name ) );
$("#header").prepend( HTMLbioPic.replace( "%data%", bio.imageURL ) );

$("#education").append( HTMLschoolStart );
$("#education").append( HTMLschoolName.replace( "%data%", education.schools[0].name ) );
$("#education").append( HTMLschoolDegree.replace( "%data%", education.degree ) );
$("#education").append( HTMLschoolLocation.replace( "%data%", education.city ) );

$("#workExperience").append( HTMLworkStart );
$("#workExperience").append( HTMLworkEmployer.replace( "%data%", work.employer ));
$("#workExperience").append( HTMLworkTitle.replace( "%data%", work.position ));
$("#workExperience").append( HTMLworkLocation.replace( "%data%", work.city ));
$("#workExperience").append( HTMLworkDescription.replace( "%data%", work.description ));
/*
var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>"; */