function skillsMember()
{
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var projectsList = document.getElementById("projectsList");
    var contactList = document.getElementById("contactList");

    member.style.backgroundColor = "#f1f1f1";
    skills.style.backgroundColor = "#fff";
    projects.style.backgroundColor = "#f1f1f1";
    contact.style.backgroundColor = "#f1f1f1";

    memberList.style.display = "block";
    skillsList.style.display = "none";
    projectsList.style.display = "none";
    contactList.style.display = "none";
}