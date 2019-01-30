export class Contact {

id:string;
name:string;
birthdate:string;
companyName:string;
city:string;
country:string;
street:string;
state:string;
zipCode:string;
emailAddress:string;
isFavorite:boolean;
homePhoneNumber:string;
workPhoneNumber:string;
mobilePhoneNumber:string;
smallImageURL:string;
largeImageURL:string;


constructor(name:string,
            birthdate:string,
            companyName:string,
            city:string,
            country:string,
            street:string,
            state:string,
            zipCode:string,
            emailAddress:string,
            isFavorite:boolean,
            homePhoneNumber:string,
            workPhoneNumber:string,
            mobilePhoneNumber:string,
            smallImageURL:string,
            largeImageURL:string){


this.name = name;
this.birthdate = birthdate;
this.companyName = companyName;
this.city = city;
this.country = country;
this.street = street;
this.state  = state;
this.zipCode = zipCode;
this.emailAddress = emailAddress;
this.isFavorite = isFavorite;
this.homePhoneNumber = homePhoneNumber;
this.workPhoneNumber = workPhoneNumber;
this.mobilePhoneNumber = mobilePhoneNumber;
this.smallImageURL = smallImageURL;
this.largeImageURL = largeImageURL;

            }

}