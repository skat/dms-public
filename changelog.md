### 26-06-2023

* This is the affected changelog regarding EU Emergency changes as promised.
* Change of namespace in Export related xsds
  * Affected B1, B2, B3, B4, C1 and C2
* Path for schemaLocation has been updated with new file name
  * Affected A1, A2 and A3
* Bugfix: Transport Document data element added to IE507-message
  * Affected IE507
* Bugfix: Data type “"FreightPaymentMethodCodeType" has been expanded 
  * Affected DMS_DS
* Bugfix: Data element “Storing Flag” has been added  
  * Affected A1, A2 and A3
* Bugfix: Data element “Itinerary” is now mandatory  
  * Affected A1 and A2
* Bugfix: Data element “TransportContractDocument” is now mandatory  
  * Affected A2
* Bugfix: Reference number under data element “AdditionalReference” is now optional  
  * Affected A1, A2 and A3

### 23-06-2023

* Updated description of Error Element in system guide
* Updated description of Amendment Element in system guide
* Added a chapter describing how to use and lookup codelists
* Added chapter about document upload
* Updated UNLocode in IE507 testcase XML
* XML Guides has been updated for EU Emergency changes
    * The affected XML Guides are the following: Export, Exit and Transit.
    * Split Exit XML Guides into 2 guides, so now there is a guide for IE messages and a guide for standard exit
      declarations.

### 16-06-2023

* Updated XSDs for Export, Exit and Transit to comply with the EU emergency changes. Specifics coming soon
* Changes to Exit declarations, A1 A2, changed GoodsLocation to circumvent bug with Customs office and UN/LOCODE.
  Refinement:Adding Storing Flags, Deleting Comments and refining the values in some elements with no technical
  difference.
* Changes to Exit declaration A3, Added required "quantity" field in PreviousDocument
* Changes to Export declarations, removing AdditionalInformation to better the Functional Test Cases. B1 Pre-lodge
  changes to office to match amendment.
* Changelog added

This is the initial changelog point. From here on changes happening to this github repository, will be described here.