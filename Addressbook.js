const contact =0;

// methord of input of contact;:
function getContact(){
    let firstname;
    let lastname;
    let address;
    let city;
    let state;
    let zip;
    let phoneNumber;
    let mailId;
    
    function getfirstname(firstname){
        this.firstname = firstname;
        function firstname() {
            var regex = "[A-Z][a-z]*";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return firstName;
    }
    function getlastname(lastname){
        this.lastname = lastname;
        function lastname() {
            var regex = "[A-Z]+([ '-][a-zA-Z]+)*";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return lastname;

    }
    function getaddress(address){
        this.address = address;
        function address() {
            var regex = "^[#.0-9a-zA-Z\s,-]+$";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return address;
    }
    function getcity(){
        this.city =city;
        function city() {
            var regex = "^[a-zA-Z',.\s-]{1,25}$";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return city;
    }
    function getstate(state){
        this.state = state;
        function state() {
            var regex = "[A-Z][a-z]*";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return state;
    }
    function getzip(zip){
        this.zip = zip;
        function zip() {
            var regex = "/(^\d{5}$)|(^\d{5}-\d{4}$)";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return zip;
    }
    function getphoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
        function phoneNumber() {
            var regex =  "/^\d{10}$/";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return phoneNumber;
    }
    function getmailId (mailId){
        this.mailId = mailId;
        function mailId() {
            var regex =  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;";
            var ctrl =  document.getElemetnById(id);
            return regex.test(ctrl.value);
        }
        return mailId;
    }

    function getInputcontact(temp) {
        
		this.firstname=temp.firstname;
		this.lastname=temp.lastname;
        this.address=temp.address;
		this.city=temp.city;
		this.state=temp.state;
		this.zip=temp.zip;
		this.phoneNumber=temp.phoneNumber;
		this.emailId=temp.emailId;
    }
    function getInputcontact() {
		return "temp [firstname=" + firstname + ", lastname=" + lastname + ", address=" + address + ", city=" + city
				+ ", state=" + state + ", zip=" + zip + ", phone=" + phoneNumber + ", emailId=" + emailId +"]";
	}
    
}


function addcontact(temp)
{	
   
    
    console.log("Enter First name:");		
    temp.setFirstName(prompt.next());
    
    console.log("Enter last name:");		
    temp.setLastName(prompt.next());
    
    console.log("Enter your address:");
    temp.setAddress(prompt.next());
    
    console.log("Enter your city:");
    temp.setCity(prompt.next());
    
    console.log("Enter your state:");
    temp.setState(prompt.next());
    
    console.log("Enter your ZIP code:");
    temp.setZip(prompt.next());
    
    console.log("Enter your phone number:");
    temp.setPhoneNumber(prompt.next());
    
    console.log("Enter your emailid:");
    temp.setEmailId(prompt.next());

    contact.add(temp);
}

    function editcontact()
	{
		var temp=null;
		console.log("Enter the First Name of the record u want to Edit");
		temp=prompt.next();
		if(contact.isEmpty())
		{
			console.log("No records to edit");
			return;
		}
		
			for(let i=0; i<contact.size(); i++)
			{
				if(book.get(i).getfirstname().equals(temp))
				{
					
					
					console.log(temp);
					console.log("Enter First name:", firstname);
					temp.setfirstName(prompt.next());
					console.log("Enter last name:", lastName);
					temp.setlastname(prompt.next());
					console.log("Enter your address:", address);
					temp.setaddress(prompt.next());
					console.log("Enter your city:", city);
					temp.setcity(prompt.next());
					console.log("Enter your state:", state);
					temp.setstate(prompt.next());
					console.log("Enter your ZIP code:", zip);
					temp.setzip(prompt.next());
					console.log("Enter your phone number", phoneNumber);
					temp.setphoneNumber(prompt.next());
					console.log("Enter your Email", mailId);
					temp.setemailId(prompt.next());
					contact.remove(i);
					contact.add(i, Info);
					break;
				}
				
			}
    }
    function deletecontact()
	{
		var temp=null;
		console.log("Enter the First Name of the record u want ot delete");
		temp=prompt.next();
		if(contact.isEmpty())
		{
			console.log("No records to delete");
			return;
		}
		for(let i=0;i<book.size();i++)
		{
			if(contact.get(i).getfirstname().equals(temp))
			{
				contact.remove(i);
				break;
			}
		}

        function displaycontact()
        {
            for(let i=0;i<contact.size();i++)
            {
                console.log(contact.get(i));
            }
        }

        // main function starts here
      console.log("Welcome to address book program");

      let userInput;
	  let userChoice;


      do {
        console.log("1.Add record");
        console.log("2.Edit record");
        console.log("3.Delete record");
        console.log("4.Display record");
        userInput = prompt.nextInt();
        switch(userInput)
        {
            case 1:
                addressService.add();
                break;
            case 2:
                addressService.edit();
                break;
            case 3:
                addressService.delete();
                break;			
            case 4:
                addressService.display();
                break;
            default:System.out.println("Invalid option");
        }
        
        console.log("press 1 to start \n press 0 to disconnect");
        userChoice=prompt.nextInt();
    }while(userChoice==1);

}
    
