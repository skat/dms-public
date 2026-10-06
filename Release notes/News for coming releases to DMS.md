# News for coming releases to DMS

Here you will find news for coming updates to DMS. The page is specifically aimed for softwaredevelopers either building own customs systems or 3rd party system developers. 
This is for information purposes only and will be updated continuously until the release implementation date. Always refer to the current documentation, including onboarding documents, for guidance.



# New EU validation rules for export messages entered into force across the EU on 1 October 2026.
6 October 2026

As part of the transition to the common European export system (AES Phase 1), the EU is tightening its data quality requirements. The changes mean that a number of formats, including those relating to customs offices and means of transport, are being significantly tightened.  
As the changes have already been activated centrally at EU level, you may experience that your AER (Anticipated Export Record) / IE501 is rejected immediately in another country if the data does not comply with the new standards.  
The changes means that the AES (Export) related XSD’s are generally being updated. In Denmark, the new validation rules are expected to be implemented in DMS with version 2.3.0 (expected to go into production on 24 October 2026), after which declarations containing errors will be rejected directly by the Danish system. The updated XSD’s shall be updated on TFE on 8 October 2026 and also made available on Github at the same time.

In connection with this rollout, you should pay particular attention to the following:

**1. Stricter format requirements for Customs Office codes**  
The format for customs office references is being tightened so that the system will only accept official, structured codes.

**Where:**
The referenceNumber field under SupervisingCustomsOfficeType.

**Before:**
The system accepted free text or numeric values of up to 8 characters (e.g. 12345678).

**Now:**
The value must consist of exactly 8 characters and follow the format: 2 uppercase letters (country code) followed by 6 alphanumeric characters. Country codes must be written in uppercase.

**Example:**
DK123456 is valid. Formats such as Dk123456, dk123456 or 12345678 will be rejected.

**2. Prohibition of leading and trailing spaces in text and ID fields**  
To ensure better data quality, leading and/or trailing spaces are no longer permitted in free-text fields, ID fields, etc.

**Where:**
The rule applies throughout and affects virtually all free-text and ID fields in the export declaration. This includes, among others:  
- Transport IDs: DepartureTransportMeans, ActiveBorderTransportMeans and TransportEquipment  
- Names and addresses: Company names, street names, house numbers and postal codes  
- Goods and package data: Goods descriptions and shipping marks (ShippingMarks)  

**Before:**
Leading or trailing spaces in a field were typically ignored or accepted by the system.

**Now:**
If a value starts or ends with a space, schema validation will fail completely. Internal spaces and hyphens within the code remain fully permitted.

**Example:**
”CONT-123456” or ”CONT 123456” is valid. “ CONT-123456” (with a leading space) or ”CONT-123456 ” (with a trailing space) will be rejected.

**Action:**
It is strongly recommended that System-to-System solutions implement a general and automatic trim() function in their declarations, so that any hidden leading or trailing spaces are automatically removed before the XML file is generated and submitted to DMS.

**3. New technical type names in the XML schema (no impact on data)**  
As part of the update, a large number of fields have been given updated internal technical names in the schema in order to ensure a consistent structure across the EU.

**Where:**
This concerns a large number of SimpleTypes, including fields for addresses, email addresses, container numbers, goods descriptions, reference numbers and sequence numbers. Typically, a numeric suffix (such as "01" or "02") has been removed from the name, or the use of upper- and lower-case letters has been standardised.

**impact:**
The changes are purely cosmetic from a coding perspective. The validation rules themselves and the permitted values for these fields remain 100% unchanged. Data and integrations that were valid before the update remain fully valid after the update.

**Action:**
System-to-System users and software providers must ensure that their systems map to the new names in stypes.xsd. However, there is no need to change the data entered into the fields.

# Release 2.3.0 planned for Production 24 October 2026
***Information below for this release has been updated 23 September 2026***

This releases holds 2 important changes:
  * EU Handling Fee
  * XSD changes
The XSD's are expected to be available for testing on TFE from 24 September 2026. The Handling Fee will be available for testing on TFE in beginning of October. We will update when exact date is known. 


### EU Handling Fee
This version is that DMS will support the new EU Handling Fee which will be introduced by 1 November 2026. The Handling Fee is a fee that shall be added all B2C declarations regardsless of value. The document [DMS - Customs duty on low value consignments and general B2C handling fee](https://github.com/skat/dms-public/tree/master/Onboarding%20Documents/Onboarding%20Guides) describes the changes in details. Pay attention to that prelodged declarations regarding B2C lodged prior to 1 November 2026 has to be updated if they are presented after 1 November 2026 to avoid errors on presentation. 

### XSD-Changes
Below is listed the XSD-changes introduced in this version. Note that there might be updates to the descriptions of below changes:

* ***Changes to WriteOffPackagingQuantityQuantityType in DMS_DS_v1.9.xsd***
This change affects declarations B and C and Applications 4C and 8F. Fraction digits are being changed from 0 to 6, and total digits are decreased from 22 to 8. See below:  
Changed from:  
<<xs:simpleContent>>  
<xs:restriction base="udt:QuantityType">  
<xs:totalDigits value="22"/>  
<xs:minInclusive value="0"/>  
<xs:fractionDigits value="6"/>  
</xs:restriction>  
</xs:simpleContent>   
To:  
<<xs:simpleContent>>  
<xs:restriction base="udt:QuantityType">  
<xs:totalDigits value="8"/>    
<xs:fractionDigits value="0"/>  
</xs:restriction>  
</xs:simpleContent>  
  
* ***Allow 9999 goods items to be submitted in DMS***
The elements listed below will have their cardinality increased from x999 to x9999.  
TransportEquipment (DE 19 07 000 000), GoodsReference (19 07 044 000), GovernmentAgencyGoodsItem, ConsignmentItem (House and Master Item), HouseConsignment.  
Additionally, Consignment/HouseConsignment will have its cardinality increased from x9999 to x99999.  
While these were accepted in previous XSD validations, values above x999 would result in an error in DMS. This has been fixed and the cardinality of the elements above will be increased

* ***Allowing isRetrospective on G4G3 and G5 declaration by adding Extensions element***
Adding a fix to allow submission of retrospective G4G3 and G5 declaration. Namespace EDS_EXTENSIONS.xsd has been added to G4G3 and G5 XSD. Use ‘isRetrospective’ in Key element to submit a retrospective declaration. A G4 declaration is a pre-lodge and cannot be retrospective. See the example illustrated below:
<<ns2:Extensions>>  
<<ext:SequenceNumeric>1</ext:SequenceNumeric>  
<<ext:Key>isRetrospective</ext:Key>  
<<ext:Value>0</ext:Value>  
<<ext:DataType>text</ext:DataType>  
</ns2:Extensions>  

* ***Update to Export GPRs and A1 Invalidations***  
This change affects the following endpoints:
DMS.Export.Declaration.Amend.Goodspresented and DMS.Export.Exit.Declaration.Invalidate  

  A1 Invalidation ChangeReasonCode and ChangeReasonText types are being changed in DMS_A1_INVALIDATION.xsd:
  ChangeReasonCode Type is changed from Code.Content to AmendmentChangeReasonCodeContent.
  ChangeReasonText type is changed from Text.Content to AmendmentChangeReasonTextContent.

  Additionally, the elements ”writeOff” (complex) and “line_2” will be added under Previous Document (12 01) on goods item level for A1 and A2 XSD.

  For Export C2PN, GovernmentAgencyGoodsItem will be removed from the XSD. 
  

# Release 2.2.7 planned for Production 12 September 2026
There are not any big changes and no changes to XSDs. We would like to inform of a few minor updates that will be included in the new version as those changes may affect you implementation of business rules. The changes are expected to be available on the test environment TFE from 3 September 2026. 

These are the changes: 

### DMS Import:
FT-42269 – Supporting documents containing Y-codes that are not allowed
Supporting Document (12 03 002 000) relates to Codelist 10275, which contains several Y-codes. From 12 September 2026, Y128 will be the only Y-code allowed in this field. Other codes are still allowed. Y-codes must, in general, be stated in Additional Reference (12 04 002 000). We expect Codelist 10275 to be updated. The DMS Import XML Guide has been updated.

### DMS Export:
WO0000001528530 - Rejection of declarations with "0" in TariffQuantity/Number of supplementary units (18 02 001 000)
A value of “0” (zero) in TariffQuantity/Number of supplementary units (18 02 001 000) will result in a rejection. Pre-lodged declarations lodged prior to 12 September 2026 may be corrected prior to Goods Presentation, but will, if presented after 12 September, be rejected if the value is “0”. Pre-lodged declarations lodged after 12 September will receive a non-rejecting warning, but will be rejected if the value is “0” at the time of presentation.

### DMS Transit:
TRA-4565 – Providing both EORI-number and Name and Address for HolderOfTheTransitProcedure is not allowed
It was erroneously allowed to provide both an EORI number and Name and Address for HolderOfTheTransitProcedure. If you adhere to our DMS Transit XML Guide, which already states that it is either EORI or Name/Address, you may not be affected. This error may possibly only have affected users of DMS Online.
