
function logApplication(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var position = document.getElementById("position").value;
    
    var fileData = " HotBeans Application\n --------------------\n First Name: " 
    + firstName + "\n Last Name: " + lastName + "\n Phone Number: " + phoneNumber 
    + "\n Email: " + email + "\n Position: " + position + "\n\n Application Date: " 
    + date + "\n Application Time: " + time;

    alert(" > Thank You For Your Application " + firstName);

    var element = document.createElement('a');
    var fileName = firstName + lastName + "HotBeansApplication.txt"
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileData));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

}
