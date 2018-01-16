export class Client
{
  clientName : String; 
  clientAddress : String; 
  emailAddress : String; 
  contactNumber : String; 
  alternateNumber : String; 
  constructor(clientName:string, clientAddress:string, emailAddress:string, contactNumber:string,alternateNumber:string)
  {
      this.clientName=clientName;
      this.clientAddress=clientAddress;
      this.emailAddress=emailAddress;
      this.contactNumber=contactNumber;
      this.alternateNumber=alternateNumber;
  }
}