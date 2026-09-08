# News for coming releases to DMS

Here you will find news for coming updates to DMS. The page is specifically aimed for softwaredevelopers either building own customs systems or 3rd party system developers. 


# Release 2.3.0 planned for Production 24 October 2026
This releases holds 2 important changes:
  * EU Handling Fee
  * XSD changes
The XSD's are expected to be available for testing on TFE from 24 September 2026. The Handling Fee will be available for testing on TFE in beginning of October. We will update when exact date is known. 


### EU Handling Fee
This version is that DMS will support the new EU Handling Fee which will be introduced by 1 November 2026. The Handling Fee is a fee that shall be added all B2C declarations regardsless of value. The document [DMS - Customs duty on low value consignments and general B2C handling fee](https://github.com/skat/dms-public/tree/master/Onboarding%20Documents/Onboarding%20Guides) describes the changes in details. Pay attention to that prelodged declarations regarding B2C lodged prior to 1 November 2026 has to be updated if they are presented after 1 November 2026 to avoid errors on presentation. 

### XSD-Changes
Below is listed the XSD-changes introduced in this version. Note that there might be updates to the descriptions of below changes:

* ***Changes to WriteOffPackagingQuantityQuantityType in DMS_DS_v1.9.xsd***
This change affects declarations B and C and Applications 4C and 8F. Fraction digits are being changed from 0 to 6, and total digits are increased from 8 to 22. See below:  
Changed from:    
<xs:simpleContent>  
<xs:restriction base="udt:QuantityType">  
<xs:totalDigits value="8"/>  
<xs:fractionDigits value="0"/>  
</xs:restriction>  
</xs:simpleContent>   
To:  
<xs:simpleContent>  
<xs:restriction base="udt:QuantityType">  
<xs:totalDigits value="22"/>  
<xs:minInclusive value="0"/>  
<xs:fractionDigits value="6"/>  
</xs:restriction>  
</xs:simpleContent>  
  
* ***Allow 9999 goods items to be submitted in the XSDs***
The elements listed below will have their cardinality increased from x999 to x9999. Note that although these elements also appear in Export AS4 XSDs (B* and C*), these will not be updated in the AS4 XSDs i.e. they will remain as they are prior to this change.     
TransportEquipment (DE 19 07 000 000), GoodsReference (19 07 044 000), GovernmentAgencyGoodsItem, ConsignmentItem (House and Master Item), HouseConsignment.  
/*/GoodsShipment/Consignment/**TransportEquipment** (DE 19 07 000 000)  
Applies to H* and I*  
This element is already x9999 in the AS4 XSDs (at least as of R2.1.1)  
/*/GoodsShipment/Consignment/TransportEquipment/**Goodsreference** (19 07 044 000)  
Applies to H* and I*  
/*/GoodsShipment/**GoodsShipmentItem**  
Applies to H* and I*  
In the AS4 XSDs, this is named "GovernmentAgencyGoodsItem"  
/*/Consignment/ConsignmentItem  
Applies to G*  
Also known as Master Item  
/*/Consignment/HouseConsignment/ConsignmentItem  
Applies to G*  
This is also known as House Item  
Additionally, the following element will have its cardinality increased from x9999 to x99999:  
/*/Consignment/HouseConsignment  
Applies to G*  

* ***Allowing isRetrospective on G4G3 and G5 declaration by adding Extensions element***
A retrospective declaration is submitted after the goods have arrived and is only being used in specific business scenarios. Retrospective declarations should contain an acceptance date that is backdated. Use ‘isRetrospective’ in the Key element to submit a retrospective declaration. It only applies to a G4G3 declaration. A G4 declaration is a pre-lodge and cannot be retrospective. See the example below:  
<ns2:Extensions>  
<ext:SequenceNumeric>1</ext:SequenceNumeric>  
<ext:Key>isRetrospective</ext:Key>  
<ext:Value>0</ext:Value>  
<ext:DataType>text</ext:DataType>  
</ns2:Extensions>  

* ***Update to Export GPRs and A1 Invalidations***  
This change affects the following endpoints:  
DMS.Export.Declaration.Amend.Goodspresented and DMS.Export.Exit.Declaration.Invalidate  
The change includes making GovernmentAgencyGoodsItem mandatory for Export GPRs submitted through AS4  
This change also includes making ChangeReason mandatory for A1 invalidations  
  

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
