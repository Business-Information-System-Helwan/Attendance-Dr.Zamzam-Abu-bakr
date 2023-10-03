// location Info
{
  const allowedAreas = [
    { lat: 30.071711712194215, lon: 31.220952436284982 }, // Giza, Egypt
    // Add more allowed areas as needed
  ];

  const resultParagraph = document.getElementById('result');
  const result1Paragraph = document.getElementById('result1');
  const rotateMessage = document.querySelector('.rotate-message');
  const closeRotateMessageButton = document.getElementById('closeRotateMessage');


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = { lat: position.coords.latitude, lon: position.coords.longitude };

        // Check if user's location is within allowed areas
        const isLocationAllowed = allowedAreas.some(area =>
          Math.abs(userLocation.lat - area.lat) < 0.005 && Math.abs(userLocation.lon - area.lon) < 0.005
        );

        if (isLocationAllowed) {
          resultParagraph.textContent = '😊 مرحبا بك يمكنك تسجيل حضورك 😊';
          closeRotateMessageButton.removeAttribute('disabled');
          document.addEventListener('DOMContentLoaded', function () {
            const rotateMessage = document.querySelector('.rotate-message');
            const closeRotateMessageButton = document.getElementById('closeRotateMessage');
            
            closeRotateMessageButton.addEventListener('click', function () {
              rotateMessage.style.display = 'none';
            });
            });          

        } else {
          resultParagraph.textContent = 'غير مسموح لك بتسجيل حضورك لعدم تواجدك بالكلية';
        }
      },
      () => {
        result1Paragraph.textContent = 'حدث خطأ اثناء محاولة الحصول علي موقعك تأكد من تفعيل الموقع من الهاتف وان المتصفح يحصل علي صلاحية الموقع' ;
        resultParagraph.textContent = 'An error occurred while trying to get your Location make sure the Location is activated from the phone and the browser gets the validity of the Location' ;
      }
    );
  } else {
    resultParagraph.textContent = 'Geolocation is not supported by your browser.';
  }
}
  //end of script

// sscript for rotate-message but.
{
  document.addEventListener('DOMContentLoaded', function () {
    const rotateMessage = document.querySelector('.rotate-message');
    const closeRotateMessageButton = document.getElementById('closeRotateMessage');
  
    closeRotateMessageButton.addEventListener('click', function () {
      rotateMessage.style.display = 'none';
    });
  });
}
  //end of script
   
// Generate a random code based on the current date lec1
{
  const givenCodes = [
    "1E7LC9E3C21",
    "1L5EC2L9C7E",
    "1C8LE6E4C2L",
    "19E3C7L1ELC",
    "1L2CE8ELC6E",
    "1C4LE9E5L1C",
    "1E7C3L8C9LE",
    "1L6EC1E8C3C",
    "1C5LE9E2L1E",
    "1E4LC7C1LE9"
      ];

  const codeElement = document.getElementById('random-code');
  if (codeElement) {
    const randomIndex = Math.floor(Math.random() * givenCodes.length);
    codeElement.textContent = givenCodes[randomIndex];
  }
}

// Generate a random code based on the current date lec2
{
  const givenCodes = [
    " 22E9C23L7C1 ",
    " 22E5L7C2CE9 ", 
    " 22L8E4C6E2C ",
    " 22C7L3NE9E1 ",
    " 22E8C6E2LC7 ",
    " 22L4CE5E9C1 ",
    " 22C7E9L3CL8 ",
    " 22C6E1E8LC3 ",
    " 22C5E1LE9E2 ",
    " 22LE7C1CE94 ",
      ];

  const codeElement = document.getElementById('random-code-1');
  if (codeElement) {
    const randomIndex = Math.floor(Math.random() * givenCodes.length);
    codeElement.textContent = givenCodes[randomIndex];
  }
}

// Generate a random code based on the current date lec3        
{
  const givenCodes = [
    "32E9C7L23C1" ,
    "32E5LC7E29C" ,
    "32L4E6C8E2C" ,
    "32E1C7NL39E" ,
    "32E8C6E72LC" ,
    "32C4E9E15CL" ,
    "32L3C79CE8L" , 
    "32L1E3C86EC" ,
    "32E9LC5E21E" ,
    "32C1E7CE94L" ,
      ];

  const codeElement = document.getElementById('random-code-2');
  if (codeElement) {
    const randomIndex = Math.floor(Math.random() * givenCodes.length);
    codeElement.textContent = givenCodes[randomIndex];
  }
}
    
// Generate a random code based on the current date lec4
{
  const givenCodes = [
    "43E9C21LC7",
    "43E5LC72CE9",
    "43L6E8C4E2",
    "43E1CN7EL93",
    "43E8C7E26LC",
    "43C5E1E94LC",
    "43L3CE79CE8",
    "43L1E6C2E8C",
    "43E9L5CE12",
    "43C8CE719EL",
  ];

  const codeElement = document.getElementById('random-code-3');
  if (codeElement) {
    const randomIndex = Math.floor(Math.random() * givenCodes.length);
    codeElement.textContent = givenCodes[randomIndex];
  }
}

// date collect
{
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

if ((currentHour === 8 && currentMinute >= 0) || (currentHour > 8 && currentHour < 10) || (currentHour === 10 && currentMinute <= 30)) {
document.getElementById("Lec1").style.display = "block";
} else if ((currentHour === 10 && currentMinute > 30) || (currentHour > 10 && currentHour < 13)) {
document.getElementById("Lec2").style.display = "block";
} else if ((currentHour === 13 && currentMinute >= 0) || (currentHour > 13 && currentHour < 15) || (currentHour === 15 && currentMinute <= 30)) {
document.getElementById("Lec3").style.display = "block";
} else if ((currentHour === 15 && currentMinute > 30) || (currentHour > 15 && currentHour < 18) || (currentHour === 18 && currentMinute <= 30)) {
document.getElementById("Lec4").style.display = "block";
} else {
document.getElementById("DayEnd").style.display = "block";
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
}
// end of script


// day date lec1
{ 
const currentDateElement = document.getElementById('currentDate');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

currentDateElement.textContent = formattedDate;
}
// end of script


// day date lec2
{ 
const currentDateElement = document.getElementById('currentDate-1');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

currentDateElement.textContent = formattedDate;
}
// end of script

// day date lec3
{ 
const currentDateElement = document.getElementById('currentDate-2');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

currentDateElement.textContent = formattedDate;
}
// end of script

// day date lec4
{ 
const currentDateElement = document.getElementById('currentDate-3');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

currentDateElement.textContent = formattedDate;
}
// end of script

function submitForm() {
  // Get the user's Arabic name and student ID
  const arabicName = document.getElementById('arabicName').value;
  const studentID = document.getElementById('studentID').value;

  // Display the success message
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';

  // You can also clear the form fields here if needed
  document.getElementById('arabicName').value = '';
  document.getElementById('studentID').value = '';
  
  // Display the user's information for each lecture with dir="rtl"
  document.getElementById('userInputDisplay1').innerHTML = `<div dir="rtl">مرحبا ${arabicName} 😃 ID ${studentID}</div>`;
  document.getElementById('userInputDisplay2').innerHTML = `<div dir="rtl">مرحبا ${arabicName} 😃 ID ${studentID}</div>`;
  document.getElementById('userInputDisplay3').innerHTML = `<div dir="rtl">مرحبا ${arabicName} 😃 ID ${studentID}</div>`;
  document.getElementById('userInputDisplay4').innerHTML = `<div dir="rtl">مرحبا ${arabicName} 😃 ID ${studentID}</div>`;
}
