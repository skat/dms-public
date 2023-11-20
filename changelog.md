### 17-11-2023
* Updated XSDs to reflect PROD update
* Added IE037 Notification XSD

### 10-11-2023
* Added new testcases
	* Controlling and Victualling
* Updated and corrected all Exit IE Testcases
	* IE507, IE547, and IE583
* Updated DMS Online User Manuals
	* Godkendt frembydelse
	* Efterfølgende udførselsangivelse
	* Reeksport fra særlige procedurer
	* Udførsel til passiv forædling

### 03-11-2023
* Updated System Guide
  * Added a table mapping CWM notifications to IE messages in section 12.3.1
  * Figure and table captions and formatting updated for all sections, along with many quality improvements
  * A few readability changes to content in notification section
* Updated Connectivity Guide
  * Added comment about procedureType
* Updated Export XML Guide
  * Updated Location of Goods
* Updated Transit XML Guide
  * Updated Place of Loading/Unloading
* Updated Error and Warning codes
  * Added missing error codes
* Update codelists and removed duplicates

### 30-10-2023
* Fix formatting of Connectivity Guide

### 20-10-2023
* Updated the following XML Guides
  * Transit XML Guide
  * Transit IE XML Guide
  * Exit XML Guide
  * Export XML Guide
* Added new DMS Release notes TFE document
* Added new AS4 header XSDs to help spot errors
  * Added the raw XSDs
  * Added a readMe
  * Found in Onboarding Documents > appendix > as4_header

### 12-10-2023
Added IE582/CC582C XSD notification

### 05-10-2023
* Updated "opret angivlese guide".
* Updated connectivity guide.
* Updated DMS Online User Manuals
  * Updated "Vejledning - Opret B1-angivelse".
  * Updated "Vejledning - Indsend meddelelse ved udpassage (Eksport)".


### 04-10-2023
* Added troubleshooting section to the connectivity guide how to clear certificate link and import certificate to the different web-browsers:
  * Firefox
  * Google Chrome
  * Microsoft Edge
  
### 28-09-2023
* Removed the outdated system guide 1.18, that was accidentally left after latest systemguide update.


### 21-09-2023
* Updated System Guide
  * Added new section describing the Synchronous Messages (section 3.3)
* Added XSDs for the Synchronous Messages
  * The new XSDs can be found under Notification XSDs > SynchronousMessages

### 18-09-2023
* Updated Transit XML Guide
  * Added MCL, HCL and HCI abbreviations to the Glossary
  * Previous Document updated the table, and added MCL, HCL, HCI 
  * Consignor updated the table, and added MCL, HCL, HCI
  
### 15-09-2023
* Updated System Guide
   * Added AS4 Error Messages section
* Updated Export XML Guide
   * Corrected discrepancies in ‘Location of Goods’ and made some of its elements more explicit.
   * Corrected ‘Country of Origin’ and ‘Total Invoice Amount’ elements.
   * SE-number not allowed and DKSEN not used.
   * Removed Inland mode of transport.
   * Corrected the requirement overview of Active Border Transport Means.
   * Fixed country formats.
   * Corrected TransportEquipment.
   * Corrected Representative information.
* Corrected IE906 and IE917 XSDs.

### 07-09-2023
* Updated all links in the "guide" documents after toldst.dk is the new place for TOLDST related things


### 01-09-2023

* Updated trader-portal-common.xsd to newest version
* Uploaded IE035, IE906, IE917 notifcations
* Uploaded DTO messages

* System Guide
    * Changes to section 3.1.3, AS4 notifications
    * Added notification descriptors to transit IE messages
    * IE022, IE140, IE182, IE906, IE917

* Export XML Guide
    * Added changes to reflect C1 Standard and C1 Supplementary optionality difference in the comments

* Brief ManifestReferenceNumber descriptor in IE547 test case PDF. 
* Changes to diagrams in amendment/correction/invalidation Test Cases for Export

* Minor updates to DMS onboarding manuals


### 25-08-2023

* Minor changes to SystemGuide as well as adding IE026 explanation

* Fixes to Exit IE messages.
* Export XML Guide changes to reflect C2 GPR and C2 EIDR optionality differences in the comments

* Test Case PDFs for export (B1-4, C1-2) have been updated with new diagrams and notification pull changes in the test case test steps


### 04-08-2023

* B1 + B1 Amend: Origin/TypeCode deleted
* B2 + B2 Amend: AuhorisationHolder datatype added + Origin/TypeCode deleted
* B3 + B3 Amend: AuhorisationHolder datatype added + Origin/TypeCode deleted
* B4 : AuhorisationHolder datatype added + Origin/TypeCode deleted + CurrencyExchange deleted (bug)
* B4 Amend: AuhorisationHolder datatype added + Origin/TypeCode deleted + Deferred Payment (AdditionalInformation) added
* C1 + C1 Amend + C1 Supplement: AuhorisationHolder datatype added + Origin/TypeCode deleted
* D1 Amend: GuaranteeReference unpacked 
* D2 Amend: GuaranteeReference unpacked 
* A2 Amend: SpecificCircumstance is now minOccurs = 0

* ID6 Ref numbers aligned

* Changes to notification

### 03-08-2023

* Updates to DMS Online User Manuals

* Review process for Export, Exit, Exit IE, Transit, and Transit IE XML Guides have been performed
    * XSD/XML Elements verified
    * XML Examples checked
    * Table element description field reviewed
    * Ensured proper rule code references
    * Ensured proper codelist references
    * Checked ID6 reference numbers, formatting, cardinality, and optionality for elements
    * Verified overall table formatting for each table
     
* Remember to check for the latest version number on your XML Guides following this update

### 31-07-2023

* Updated System Guide to version 1.14


* Updated Connectivity Guide to version 1.7


* Minor XSD changes to cardinality/restrictions within Exit IE Messages. 
    * Will not change XSDs functionally

* Added TypeCode to B2, B3, B4, C1 and their amendments

* Removed TypeCode from Country of Origin from B1, B2, B3, B4, C1 and their amendments

### 18-07-2023

* Minor changes to ID6 reference code in XSDs
* Reupload test case PDF due to code embedded error on GitHub.


### 13-07-2023

* Updated System Guide to version 1.13

### 07-07-2023

* Updated codelists by splitting it into three files, each representing one domaine (transit, export and global) to
  better reflect recent ermis changes

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
