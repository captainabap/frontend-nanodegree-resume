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

			
			
$("#header").prepend( HTMLmobile.replace( "%data%", bio.contactInfo.mobile ) );
$("#header").prepend( HTMLemail.replace( "%data%", bio.contactInfo.email ) );
$("#header").prepend( HTMLheaderRole.replace( "%data%", bio.role ) );
$("#header").prepend( HTMLheaderName.replace( "%data%", bio.name ) );
$("#header").prepend( HTMLbioPic.replace( "%data%", bio.imageURL ) );

			