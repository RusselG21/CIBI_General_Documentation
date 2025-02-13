---
sidebar_position: 3
---

### URL

- https://creditbureau.cibi.com.ph/uat/service.asmx

### Header Configuration

| Key          | Value                              |
| ------------ | ---------------------------------- |
| Content-Type | `text/xml; charset=utf-8`          |
| SOAPAction   | `\"http://tempuri.org/GET_REPORT\` |

### Request Body (JSON Format)

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GET_REPORT xmlns="http://tempuri.org/">
            <auth_token></auth_token>
            <username></username>
            <product>21</product>
            <request>
                <![CDATA[
                <Request>
                    <CapsApplicant>
                        <firstname>LANIE</firstname>
                        <secondname>G</secondname>
                        <lastname>AVIDA</lastname>
                        <dob>1960-09-25</dob>
                        <gender>2</gender>
                        <CapsAddress>
                            <address_type>R</address_type>
                            <street>BUHISAN BUHISAN PROPER CEBU CITY CEBU</street>
                            <region>REGION VII</region>
                            <province>CEBU</province>
                            <city>CEBU CITY</city>
                        </CapsAddress>
                        <CapsAddress>
                            <address_type>R</address_type>
                            <street>BUHISAN BUHISAN PROPER CEBU CITY CEBU</street>
                            <region>REGION VII</region>
                            <province>CEBU</province>
                            <city>CEBU CITY</city>
                        </CapsAddress>
                        <CapsPhone>
                            <phone_type>MP</phone_type>
                            <phone_number>09197337451</phone_number>
                        </CapsPhone>
                        <CapsPhone />
                    </CapsApplicant>
                    <CapsInquiry>
                        <id_type>SSS</id_type>
                        <id_number>1023456789</id_number>
                        <consent>1</consent>
                    </CapsInquiry>
                </Request>
                ]]>
            </request>
        </GET_REPORT>
    </soap12:Body>
</soap12:Envelope>
```

### Properties Definition

| Parameter    | Type    | Description                               |
| ------------ | ------- | ----------------------------------------- |
| auth_token   | String  | Authentication token for API access       |
| username     | String  | Username of the requester                 |
| product      | Integer | Product code (e.g., 21 for this request)  |
| request      | XML     | The encapsulated request data             |
| firstname    | String  | First name of the applicant               |
| secondname   | String  | Middle name of the applicant              |
| lastname     | String  | Last name of the applicant                |
| dob          | Date    | Date of birth (YYYY-MM-DD)                |
| gender       | Integer | Gender (1 for male, 2 for female)         |
| address_type | String  | Type of address (e.g., R for Residential) |
| street       | String  | Street address                            |
| region       | String  | Region name                               |
| province     | String  | Province name                             |
| city         | String  | City name                                 |
| phone_type   | String  | Type of phone (e.g., MP for mobile)       |
| phone_number | String  | Phone number of the applicant             |
| id_type      | String  | Type of identification (e.g., SSS)        |
| id_number    | String  | Identification number                     |
| consent      | Integer | Consent flag (1 for granted)              |
