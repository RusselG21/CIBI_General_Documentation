---
sidebar_position: 2
---

# 🖥️ Get Report KYC

### URL

- https://creditbureau.cibi.com.ph/uat/service.asmx

### Header Configuration

| Key          | Value                              |
| ------------ | ---------------------------------- |
| Content-Type | `text/xml; charset=utf-8`          |
| SOAPAction   | `\"http://tempuri.org/GET_REPORT\` |

### Request Body (XML Format)

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GET_REPORT xmlns="http://tempuri.org/">
            <auth_token></auth_token>
            <username></username>
            <product>10</product>
            <request>
                <![CDATA[
                <Request>
                    <CapsApplicant>
                        <firstname>LANIE</firstname>
                        <secondname>G</secondname>
                        <lastname>AVIDA</lastname>
                        <dob>1960-09-25</dob>
                    </CapsApplicant>
                </Request>
                ]]>
            </request>
        </GET_REPORT>
    </soap12:Body>
</soap12:Envelope>
```

### Parameters Definition

| Parameter  | Type    | Description                         |
| ---------- | ------- | ----------------------------------- |
| auth_token | String  | Authentication token for API access |
| username   | String  | Username of the requester           |
| product    | Integer | Product code (10 for KYC)           |
| request    | XML     | The encapsulated request data       |
| firstname  | String  | First name of the applicant         |
| secondname | String  | Middle name of the applicant        |
| lastname   | String  | Last name of the applicant          |
| dob        | Date    | Date of birth (YYYY-MM-DD)          |

---
