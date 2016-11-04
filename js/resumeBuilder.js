/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
        "name" : "Christiaan Quyn",
        "role" : "Front-End Developer",
        "contacts" : {
            "mobile" : "+94 777549947",
            "email": "christianq010@gmail.com",
            "github": "christianq010",
            "location": "Colombo, Sri Lanka"
        },
        "welcomeMessage": "Hi, I'm passionate about developing software and creating interesting user experiences",
        "skills": ["HTML5", "CSS3", "Javascript", "PHP"],
        "bioPic": "images/fry.jpg"
}
bio.display = function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedContactMobile);
    var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedContactEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

    }

};

var education = {
    "schools" : [
        {
            "name" : "BCAS City Campus",
            "location" : "Colombo",
            "degree" : "BEng",
            "majors" : ["Telecommunication Engineering", "Electronic Engineering"],
            "dates" : "2016-2019",
            "courses" : ["BTEC Diploma in Engineering Foundations", "HND in Telecom Eng"],
            "url" : "http://courses.wlv.ac.uk/course.asp?code=MA006H31UVD"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "SMARDT-Powerpax Factory",
            "school" : "SMARDT-Powerpax Training Facility",
            "dates" : "07-2015",
            "url" : "N/A"
        }
    ]
}
education.display = function () {
    for(school in education.schools){
        //create a new div for schools in Education section
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    for (onlineCourse in education.onlineCourses) {
        //append Online Courses in Education section
        $("#education").append(HTMLonlineClasses);
        //repeated so Online Courses appears Below Main Education
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineCourseDates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineUrl);
    }
};

var work = {
    "jobs": [
        {
            "employer": "Lanka Energy Conservation",
            "title": "Trainee Engineer",
            "description": "Trainee Mechanical Engineer for HVAC Equipment",
            "dates" : "2015-present",
            "location": "Colombo, Sri Lanka"
        },
        {
            "employer": "Cinnamon Grand Hotel",
            "title": "Engineering Apprentice",
            "description": "Engineering Maintenance / Technician",
            "dates" : "2014-2015",
            "location": "Colombo, Sri Lanka"
        }
    ]
}
work.display = function () {
    for(job in work.jobs){
        //create a new div for work section
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

var projects = {
    "projects": [
        {
            "title": "SMARDT Installations",
            "dates": "2015-2016",
            "description": "Installation of Chillers at Sites",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
}
projects.display = function () {
    for (project in projects.projects){

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

    //International Names
    function inName(name) {
        name = name.trim().split(" ");
        console.log(name);

        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0, 1).toUpperCase() +
            name[0].slice(1).toLowerCase();

        var intName = name[0] + " " + name[1];

        return intName();
    }
    $("#main").append(internationalizeButton);

bio.display();
education.display();
work.display();
projects.display();


    //Google Maps
    $("#mapDiv").append(googleMap);