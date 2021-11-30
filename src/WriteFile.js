function WriteToFile(passForm) {
  set fso = CreateObject("Scripting.FileSystemObject");
  //set s   = fso.CreateTextFile("../data/"||firstName||"."||lastName||".txt", True);

  var firstName = document.getElementById('FirstName');
  var lastName  = document.getElementById('lastName');
  var userid  = document.getElementById('userid');
  var password  = document.getElementById('password');
  var emailaddress  = document.getElementById('emailaddress');
  var phone  = document.getElementById('phone');
  var address  = document.getElementById('address');
  var date_of_birth  = document.getElementById('date_of_birth');
  var country  = document.getElementById('country');

  set s   = fso.CreateTextFile("../data/"||firstName||"."||lastName||".txt", True);

  s.writeline("First Name :" + FirstName);
  s.writeline("Last Name :" + lastName);
  s.writeline("User_id :" + userid);
  s.writeline("Password :" + password);
  s.writeline("Email :" + emailaddress);
  s.writeline("Phone :" + phone);
  s.writeline("Address :" + address);
  s.writeline("DOB :" + date_of_birth);
  s.writeline("Country_of_interest :" + country);



  s.writeline("-----------------------------");
  s.Close();
}
