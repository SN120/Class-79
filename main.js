var student=[];
function submit(){
var name1 = document.getElementById("nos1").value;
var name2 = document.getElementById("nos2").value;
var name3 = document.getElementById("nos3").value;
var name4 = document.getElementById("nos4").value;
student.push(name1);
student.push(name2);
student.push(name3);
student.push(name4);

console.log(student);

document.getElementById("names").innerHTML=student;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function Sort(){
    student.sort();
    console.log(student);
    document.getElementById("names").innerHTML=student;
}