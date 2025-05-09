### 08-05-2025
* Add the H3 Invalidation and Repayment Test case pair (PDF + XML)
* Add the H6 Invalidation and Repayment Test Case pair (PDF + XML)
* Add the G5 Movement of Goods Under Temporary Storage Test case pair (PDF + XML)

### 07-05-2025
* Add the I1 Invalidation Test case pair (PDF + XML)
* Add the G3 Goods Presentation Test case pair (PDF + XML)
* Added G4 Invalidation Test case and documentation

### 02-05-2025
* Add the H6 Invalidation Test case pair (PDF + XML)
* Updated the Import XML guide, adding correct requirement level for elements, correcting names for erroneous data elements, and adding table for group 14 14.

### 01-05-2025
* Added G4G3 Test Case pair (PDF + XML)

### 28-04-2025
* Updated latitude and longitude from Measure.Content to Text.Content
* Update Import XML guide: Removed CategoryCode, renamed Exporter to Consignor on import guide. 
* Update Temporary Storage XML guide: Added sequence to 19 06 000 000 to conform to WCO

### 25-04-2025
* Updated both TFE02 and TFE release notes (to version 1.4 and 1.20 respectively)

### 24-04-2025
* Updated trader-portal-error-response to be valid according to intended behaviour

### 16-04-2025
* Add the H6 Correction Test case (PDF + XML)

### 15-04-2025
* Updated H6 Amendment XML to adhere to updated XSD

### 14-04-2025
* Add the G4 Standard Test case (PDF + XML)

### 11-04-2025
* Updated standard XML's for H1, H2, H3, H4, H5, H6, I1

### 10-04-2025
* Updated codelists after release.

### 02-04-2025
* Updated H6 Amendment testcase PDF, as well as renamed ImportEORI variable that was causing a conflict
* Updated Release Notes for 6.1.5.2 RC-1 to RC-5.
* Updated XML guide:
* Removed description from the delivery terms tabel
* Add 10236 codelist to Import Codelists

### 01-04-2025
* Updated comment for CustomsValuation in standard and Amendment/correction for: H1, H4, H5, H6 and I1.
* This change was also made in I1 supplementary

### 31-03-2025
* Added AmountType2 to UNQUALIFIEDDATATYPE_6_DMS.xsd
* Fix references for WCO XSD files to be internally consistent
* Removed element CategoryCode from all H and I XSDs

### 28-03-2025
* Added H6_Pre-lodged test case
* Added H6_Standard test case
* Update the pathing of dependencies in the declaration XSD's to match updated structure with GEFEG folder
* Added codelist 11034 to Codelists - Import

### 27-03-2025
* Moved D.E. 14 13 014 000 from Payment to CustomsValuation in the H6 Standard XSD to align with WCO.
* Moved D.E. 14 13 014 000 from Payment to CustomsValuation in the H6 Amendment XSD to align with WCO.
* Update the DMS_DS XSDs
* Update import XML guide 14 08 000 000
* Made the following XSD updates:
* Added CustomsValuation for H6 XSD.
* Removed TransportEquipment from SI level on all XSDs
* Add TransportEquipment to I2PN on GS level
* Made Origin have a MaxOcurr of 2 for H1, H3 and H4
* Changed the maximum allowed elements of TradeTermsLocationNameTextType from 256 to 36. Updating DMS_DS XSD.
* Updating all H and I XSD as they refer to this XSD

### 26-03-2025
* Added sequence to the loadinglocation XSD for the G4 to align with WCO
* Updated the G4G3 XSD to align with WCO by adding a sequence to the loadinglocation
* Modified G5 XSD (to include sequence in ArrivalTransportMeans) to follow updated WCO_TS_DEC XSD
* Modified G3 XSD (to include sequence in ArrivalTransportMeans) to follow updated WCO_TS_DEC XSD

### 25-03-2025
* Update import XML guide with minor changes

### 21-03-2025
* Updated DMS Connectivity Guide to v1.16

### 13-03-2025
* Added code list 50001 (relates to LocationId D.E. 14 01 036 000) to Codelist - import

### 12-03-2025
* Updated H3 test cases; standard, pre-lodged, amendment/correction, to function after the latest deploy

### 10-03-2025
* Updated I1 to include consignor
* Updates to H declarations updating cardinality of certain elements and adding documentation to clarify purpose.
* Updated XSD to make sure element 14 04 014 000 did not have the currencyID attribute.

### 07-03-2025
* Updated Codelist - AES, Global, Import and NCTS.
* Updated Error and warning codes.

### 06-03-2025
* Updated release notes tfe02 to v1.2 to reflect the update on TFE02 the 6th of march.
* Updated H1_Standard, H2_Standard and H3_Standard.

### 14-02-2025
* Added a missing minOccurs="0" in H1 amendment Correction.

### 13-02-2025
* Includes changes to test case PDF's to include more detailed descriptions on authorisations required + minor fixes to outdated text (e.g. mentions of UFE/TFE -> TFE02/TFE01)
* Fixed a bug due to two missing minOccurs="0" in H1 standard.
* Fixed a bug due to two missing minOccurs="0" in H1 standard
* Add README describing release notes.

### 11-02-2025
* Updates to the Following XSDs: 
* All H1-H6 Standard, Correction and Amendment, Invalidation and Repayment, and Repayment Remission XSDs
* The I1 Supplement XSD
* The H7 Standard, Correction and Amendment, and Repayment Remission XSDs
* All XSDs changed in this update has their version number increased to V1.x
* XSDs with V1.0 has not had an update just an increase in version number. XSDs that have been updated has V1.1 
* H7 XSDs changed to use the Vx.x format. V1.2 are unchanged and V1.3 was changed in the last update

### 30-01-2025
* New release notes. They include notes from RC-12 and RC-final.

### 22-01-2025
* Several bugs fixed for various import XSDs
* Made sure the Correction_amendment XSDs corrosponds to the Standard XSDs for each H and I declaration
* Ensured that xmls can be generated from all H and I XSD's

### 20-01-2025
* Moved TAD specification files from NCTS-P5 Printing Guidelines - v.1.4 (18.09.2024) to Printing Guidelines/TAD/v1.4

### 17-01-2025
* Made corrections to the Import Notification XSDs.

### 16-01-2025
* Removed comments from G5 XSD file that were not intended to be uploaded.

### 13-01-2025
* Updated the Import Notification XSDs to be in line with expected responses from DMS.

### 10-01-2025
* Added folder with TAD Printing Guidellines and contingent specification documents
* Made a minor update to DMS_H1_INVALIDATION_AND_REPAYMENT to ease the generation of XML from the schema. No functional change to the XSD.

### 18-12-2024
* Added the Release notes for TFE02 to the release notes folder

### 06-12-2024
* Updated Export XML Guide

### 05-12-2024
* Import Test Cases have been removed due to being out of sync with current environment version. They will be reuploaded at a later date with more up-to-date data.

### 03-12-2024
* Updated Export and Transit XML Guides including their IE counterparts
* Corrections to G4, G4G3 and G5 XSDs
* Created Temporary Storage XML Guide
* Updated import codelists

### 02-12-2024
* Updated DMS ImportExport System Guide

### 29-11-2024
* Minor correction to G3 and G5 XSDs
* Updated NCM and NIM XSDs

### 28-11-2024
* Uploaded G3, G4, G5, NIM and NCM XSDs
* Corrected minor errors in H6 and H2 XSDs

### 26-11-2024
* Updated XSDs for Export and Transit to align with RFC 39

### 19-11-2024
* Updated ImportExport System Guide

### 15-11-2024
* Updated release notes by adding update to XSDs for B1 standard and amendment under release 4.2.10 (See release notes)
* Updated B1 standard and B1 amendment XSD to include TypeCode element under Origin (16 08 000 000)

### 08-11-2024
* Updated XSDs for release 4.2.10 (See release notes)

### 07-11-2024
* Updated Release notes to version 1.18

### 25-10-2024
* Added H2 XSDs
* Added test cases for import - H1, H3, H5, H7, and I2 test cases
* Updated Import XML Guide

### 11-10-2024
* AS4 Gateway - multiple documents in a request created and located in Onboarding Guides

### 09-10-2024
* Minor corrections to Import XML Guide
* Updated Onboarding Guide to v2.1
* Updated Connectivity Guide to v1.15
* Split the DMS System guide into three guides
* Added DMS General System Guide v2.1
* Added DMS Import/Export System Guide v2.1
* Added DMS Transit System Guide v2.1

### 07-10-2024
* Updated Github folder structure
* Added miniguides for software vendors, in-house developers, and economic operators
* Updated Import XML Guide to v1.2
* Updated H1-6 XSDs
* Added Import Codelist

### 13-09-2024
* Added Import XML Guide

### 02-09-2024
* Added XSDs for H1, H3, H4, H5, H6, and I2 EIDR

### 26-08-2024
* Updated the release notes for version 4.2.9

### 06-08-2024
* Added the Customer Portal Guide
* Updated the Test Scenario - Transit to version 1.3

### 16-07-2024
* Updated endpoints and added more detailed instructions to several Testcases
* Updated System Guide
* Updated Connectivity Guide
* Updated Export and Transit XML Guide

### 21-06-2024
* Updated EAD/TAD service section of the system guide
* Removed misleading xsds from the EAD/TAD folder in appendix

### 18-06-2024
* Updated the release notes for version 4.2.8.4 

### 11-06-2024
* Updated System guide to include section about EAD/TAD service
* Added folder with XSDs and XMLs regarding EAD/TAD service

### 29-05-2024
* Updated the C2 Presentation Notification testcase

### 24-05-2024
* Updated Release notes for release 4.2.8.3
* Removed all Online guides as they will be available at toldstyrelsens website henceforth. (See Readme)

### 17-05-2024
* Added missing national codes (incl. VAB codes) in AES-CL213 codelist

### 16-05-2024
* Changed the location and name of the error codes excel sheets with codes from DDNXA/DDNTA Appendix Q2

### 15-05-2024
* Update Export XML Guide and Exit XML Guide with more EU formatting restrictions that were left out in the previous change
* Added a minor correction and a footnote to hotfix release notes 2.5
* Updated release notes for R4.2.8.2

### 13-05-2024
* Correction to B1-B4, C1-C2, A1-A2 XSDs
  * Updated regex restrictions for datatypes
* Update Export XML Guide and Exit XML Guide with EU formatting restrictions
* Hotfix release notes added
  * 2.1-2.7

### 30-04-2024
* Correction to AES codelist CL213
* Added SE-number Guide
* Updated B1-Guide
* Added A1-Guide for DMS Online

### 26-04-2024
* Updated AES Codelists CL213, CL214, CL754

### 24-04-2024
* Updated System Guide
* Added a missing XML line to several testcases

### 19-04-2024
* Updated Transit and Export XML Guide

### 12-04-2024
* Added Transit Examples (DMS Online User Manuals)
* Updated codelists with missing document codes (e.g. Y793 etc.)

### 08-04-2024
* Updated release notes for release 4.2.8

### 22-03-2024
* Updated Exit IE examples with correct recipient

### 19-03-2024
* Added Transit IE034 Test Case

### 15-03-2024
* Updated System guide
* Updated AES, NCTS and GLOBAL codelists
   * Missing codelist GLOBAL-CL141 has been added
   * Codelists now include Valid From and To
   * Value "######" will change to correct datetime when you expand the column
   * Value "Null" means there is no current expiry or start date (depending on the column)
* Updated Release Notes with new release date for TFE/UFE

### 12-03-2024
* Updated Certificate Miniguide
* Updated Connectivity Guide
* Updated System Guide
* Added new release notes
* Added example of request to new MRN status service 
   * Placed in OnboardingDocuments/appendix
* Hotfix: release notes ref 17516 updated

### 05-03-2024
* Updated Certificate Miniguide with additional slides for better user experience.
* Added B1 Guide and general guide for parties and y-codes.
* Updated incorrect links in XML guide.

### 04-03-2024
* Updated Certificate Miniguide.

### 29-02-2024
* Updated Export XML Guide

### 22-02-2024
* Updated Connectivity Guide.
* Uploaded Certificate Miniguide.

### 20-02-2024
* Update XML Guides
    * Removed deprected SKAT links
	* Updated Export XML tables: Border Transport and AdmissionUse.. Application

### 14-02-2024
* Renamed trader-portal-response xsd example

### 13-02-2024
* Updated CC035C.XSD format to be consistent with the others

### 09-02-2024
* Updated Transit D2 testcases
	* Updated entirety of D2 testcases
	* Made minor corrections to D1 Standard testcase

### 06-02-2024
* Minor correction to Victualling testcase

### 02-02-2024
* Updated Exit IE, Transit IE and Transit XML Guides
	* Updated the messageSender/Recipient fields
* Updated Export XML Guide

### 30-01-2024
* Updated Transit D1 testcases

### 25-01-2024
* Updated System guide and Connectivity Guide
* Added ARC Guide

### 19-01-2024
* Added release notes v1.8

### 18-01-2024
* Updated Transit and Transit IE XML Guides with CommunicationLanguage clarification
* Added printing guidelines for EAD and TAD
    * Can be found in the new folder "Printing Guidelines"
* Updated XSDs according to AS4 update on 17th of January
    * The "TFE XSD updates - 11012024" package is now on PROD, so this file has been removed

### 16-01-2024
* Updated Exit XML Guide

### 15-01-2024
* Updated DMS Online User Manuals file structure
* Commented out the "presentationOfTheGoodsDateAndTime" field.

### 11-01-2024
* Updated release notes to v1.5

### 29-12-2023
* Updated Transit IE testcases

### 28-12-2023
* Updated Centralized Clearance testcase

### 19-12-2023
* Updated release notes to v1.6
    * Fix regarding SE Number has been corrected
* Updated Validation rules and Error codes list
* Updated Export XML Guide
* Updated Exit XML Guide

### 15-12-2023
* Updated release notes to v1.5

### 12-12-2023
* Updated AES codelists to reflect version 4.2.5.2

### 06-12-2023
* Updated release notes for version 4.2.5.2

### 01-12-2023
* Updated release notes for version 4.2.5.1
* Updated B3 Testcase XMLs
* Updated Invalidation testcases to accommodate invalidation notification in pre-lodge flows

### 29-11-2023
* Update DMS Online XML examples

### 23-11-2023
* Updated/corrected testcases
    * A1-3, B3 standard, B4 standard
* Updated release notes for version 4.2.5

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

* Added troubleshooting section to the connectivity guide how to clear certificate link and import certificate to the
  different web-browsers:
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

* Test Case PDFs for export (B1-4, C1-2) have been updated with new diagrams and notification pull changes in the test
  case test steps

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
