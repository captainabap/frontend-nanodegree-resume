var skills = [ 	"ABAP OO", 
				"WebDynpro ABAP", 
				"TDD",
				"Scrum", 
				"Clean Code", 
				"Java" ];
				
var bio = { "name" : "Jörg Brandeis",
			"role" : "Head of ABAP development",
			"contactInfo" : { "mobile" : "#49-1775407426",
							  "email"  : "joerg@brandeis.de",
							  "street" : "Rheindammstrasse 5",
							  "city"   : "Mannheim",
							  "zip"    : "68163" } ,
			"imageURL" : "https://x1.xingassets.com/img/users/0/0/7/9b36e0c5f.3262104,3.140x185.jpg",
			"skills" : skills,
			"welcomeMessage" : "Welcome to my bio" };

			
var work = { "jobs" : [
 { "title" :  "Head of ABAP development",
   "employer" : "zetVisions AG", 
	"dates" :  "2002 - today",
	"city" : "Heidelberg",
	"description": "Fachliche Leitung der ABAP Entwicklung" } ]}
	
/* var education = { };
education["school"] = "Universität Mannheim";
education["duration"] = 5;
education["city"] = "Mannheim";
education["degree"] = "Diplom Wirtschaftsinformatik"; */

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
		},	 { "name" : "Universität Mannheim",
		"city" : "Mannheim",
		"degree" : "Diplom Wirtschaftsinformatik",
		"majors" : ["Wirtschaftsinformatik"]
		}]
}

var onlineCourses = {
	[ {"title" : "JavaScript Crash Course",
		"school" : "Udacity",
		"dates"  : 2014,
		"url"    : "http://www.udacity.com"}
	]
}
	
/*		
$("#header").prepend( HTMLmobile.replace( "%data%", bio.contactInfo.mobile ) );
$("#header").prepend( HTMLemail.replace( "%data%", bio.contactInfo.email ) );
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