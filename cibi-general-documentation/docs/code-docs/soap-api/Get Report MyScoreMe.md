---
sidebar_position: 2
---

# 🖥️ Get Report myScoreME

### Header Configuration

| Key          | Value                              |
| ------------ | ---------------------------------- |
| Content-Type | `text/xml; charset=utf-8`          |
| SOAPAction   | `\"http://tempuri.org/GET_REPORT\` |

### Request Body (JSON Format)

```json
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                 xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GET_REPORT xmlns="http://tempuri.org/">
            <auth_token></auth_token>
            <username></username>
            <product>17</product>
            <request>
                <![CDATA[
                <Request>
                    <CapsApplicant>
                        <firstname>JOYCE</firstname>
                        <secondname>RAMAN</secondname>
                        <lastname>ASSUNCION</lastname>
                        <dob>1986-05-21</dob>
                        <gender>2</gender>
                        <CapsAddress>
                            <address_type>R</address_type>
                            <street>B 17 L 16 P 2 MARYCRIS HOMES BUCANDALA 3 CITY OF IMUS CAVITE</street>
                            <region>REGION IV-A</region>
                            <province>CAVITE</province>
                            <city>IMUS CITY</city>
                        </CapsAddress>
                        <CapsAddress>
                            <address_type>R</address_type>
                            <street>B 17 L 16 P 2 MARYCRIS HOMES BUCANDALA 3 CITY OF IMUS CAVITE</street>
                            <region>REGION IV-A</region>
                            <province>CAVITE</province>
                            <city>IMUS CITY</city>
                        </CapsAddress>
                        <CapsPhone>
                            <phone_type>MP</phone_type>
                            <phone_number>9373041240</phone_number>
                        </CapsPhone>
                        <CapsPhone />
                    </CapsApplicant>
                    <CapsInquiry>
                        <id_type>SSS</id_type>
                        <id_number>9667751048</id_number>
                        <applicant_type>M</applicant_type>
                        <external_reference>LoanApplicati34324231231aaa2aa31</external_reference>
                        <credit_purpose>HO</credit_purpose>
                        <type>IN</type>
                        <financed_amount>2000000</financed_amount>
                        <instalment>20000</instalment>
                        <terms>120</terms>
                        <terms_freq>M</terms_freq>
                        <consent>1</consent>
                    </CapsInquiry>
                </Request>
                ]]>
            </request>
        </GET_REPORT>
    </soap12:Body>
</soap12:Envelope>

```

### Parameters Definition

| Parameter          | Type    | Description                                              |
| ------------------ | ------- | -------------------------------------------------------- |
| auth_token         | String  | Authentication token for API access                      |
| username           | String  | Username of the requester                                |
| product            | Integer | Product identifier (e.g., 17 for a specific use case)    |
| request            | XML     | The encapsulated request data                            |
| firstname          | String  | First name of the applicant                              |
| secondname         | String  | Middle name of the applicant                             |
| lastname           | String  | Last name of the applicant                               |
| dob                | Date    | Date of birth (YYYY-MM-DD)                               |
| gender             | Integer | Gender identifier (1 for Male, 2 for Female)             |
| address_type       | String  | Type of address (e.g., 'R' for residential)              |
| street             | String  | Street address of the applicant                          |
| region             | String  | Region of the applicant's residence                      |
| province           | String  | Province of the applicant's residence                    |
| city               | String  | City of the applicant's residence                        |
| phone_type         | String  | Type of phone (e.g., 'MP' for mobile phone)              |
| phone_number       | String  | Phone number of the applicant                            |
| id_type            | String  | Type of identification (e.g., 'SSS' for social security) |
| id_number          | String  | Identification number of the applicant                   |
| applicant_type     | String  | Type of applicant (e.g., 'M' for main applicant)         |
| external_reference | String  | External reference ID for tracking                       |
| credit_purpose     | String  | Purpose of credit (e.g., 'HO' for home loan)             |
| type               | String  | Inquiry type (e.g., 'IN' for inquiry)                    |
| financed_amount    | Integer | Amount being financed                                    |
| instalment         | Integer | Monthly installment amount                               |
| terms              | Integer | Number of terms for repayment                            |
| terms_freq         | String  | Frequency of terms (e.g., 'M' for monthly)               |
| consent            | Integer | Consent flag (1 for given, 0 for not given)              |

---
