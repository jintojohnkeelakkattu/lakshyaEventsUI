export class Client
{
  clientName : String; 
  clientAddress : String; 
  emailAddress : String; 
  contactNumber : String; 
  alternateNumber : String; 
  Id:String;
  constructor(Id:string ,clientName:string, clientAddress:string, emailAddress:string, contactNumber:string,alternateNumber:string)
  {
      this.Id=Id;
      this.clientName=clientName;
      this.clientAddress=clientAddress;
      this.emailAddress=emailAddress;
      this.contactNumber=contactNumber;
      this.alternateNumber=alternateNumber;
  }
  
}