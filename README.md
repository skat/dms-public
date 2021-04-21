# dms-public

[Connectivity Guide findes her](dokumenter/ConnectivityGuide.docx)

Changelog from version 1.0.0 to 1.1.1:
* Declaration/ProcedureCategory - Element was added 
* Declaration/Submitter/ID - Removed ID for submitter.
* Declaration/Agent/Address - Temporarily added mandatory address on representative (Agent - 3/19).
* Declaration/GoodsShipment/AdditionalDocument/SequenceNumeric - is added, and is mandatory.
* Declaration/GoodsShipment/AdditionalInformation/SequenceNumeric - is added, and is mandatory.
* Declaration/GoodsShipment/Consignment/GoodsLocation - is now mandatory.
* Declaration/GoodsShipment/CustomsValuation/FreightChargeAmount - If CustomsValuation is filled, then is now mandatory.
* Declaration/GoodsShipment/DomesticDutyTaxParty/SequenceNumeric - SequenceNumeric is added, and is mandatory.
* Declaration/GoodsShipment/PreviousDocument/SequenceNumeric -  is added, and is mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/AdditionalDocument - Temporarily added AdditionalDocument is mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/AdditionalDocument/SequenceNumeric -  is added, and is mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/AdditionalDocument/* -  All subfields under AdditionalDocument are mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/AdditionalInformation/SequenceNumeric -  is added, and is mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/AdditionalInformation/* -  StatementCode and StatementTypeCode are mandatory, if AdditionalInformation is used.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/Commodity/Classification/SequenceNumeric - SequenceNumeric is added, and is mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/DomesticDutyTaxParty/SequenceNumeric - SequenceNumeric is added, and is mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/GovernmentProcedure -  Can now occur 3 times.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/GovernmentProcedure/SequenceNumeric - SequenceNumeric is added, and is mandatory.
* Declaration/GoodsShipment/GovernmentAgencyGoodsItem/PreviousDocument/SequenceNumeric -  is added, and is mandatory.
* Declaration/GoodsShipment/Importer/Address/CountryCode - Temporarily added CountryCode is mandatory.
Download Schemas, and see changelog here: https://github.com/skat/dms-public/releases/ <br/><br/>
See H7 schema documentation: https://skat.github.io/dms-public/h7/ <br/><br/>
See Notification schema documentation: https://skat.github.io/dms-public/notification/ <br/><br/>
See Test-data: https://skat.github.io/dms-public/test-data

