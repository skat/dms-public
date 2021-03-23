import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
        <TreeItem nodeId="1" label="Declaration">
          <TreeItem nodeId="2" label="FunctionCode" />
          <TreeItem nodeId="3" label="ReferenceID" />
          <TreeItem nodeId="4" label="ID" />
          <TreeItem nodeId="5" label="TypeCode" />
          <TreeItem nodeId="6" label="GoodsItemQuality" />

          <TreeItem nodeId="8" label="DeclarationOfficeID" />
          <TreeItem nodeId="9" label="TotalGrossMarkedMeasure" />
          <TreeItem nodeId="10" label="Submitter" >
            <TreeItem nodeId="111" label="Name" />
          </TreeItem>
          <TreeItem nodeId="11" label="Agent" >
            <TreeItem nodeId="112" label="Name" />
            <TreeItem nodeId="113" label="ID" />
            <TreeItem nodeId="114" label="FunctionCode" />
          </TreeItem>
          <TreeItem nodeId="12" label="Declarant" >
            <TreeItem nodeId="122" label="Name" />
            <TreeItem nodeId="123" label="ID" />
            <TreeItem nodeId="124" label="Address" />
          </TreeItem>
          <TreeItem nodeId="13" label="Exporter" >
            <TreeItem nodeId="132" label="Name" />
            <TreeItem nodeId="133" label="ID" />
            <TreeItem nodeId="134" label="Address" />
          </TreeItem>
          <TreeItem nodeId="14" label="GoodsShipment" >
            <TreeItem nodeId="142" label="AdditionalDocumentation" />
            <TreeItem nodeId="143" label="AdditionalInformation" />
            <TreeItem nodeId="144" label="Consignment" />
            <TreeItem nodeId="145" label="CustomsValuation" />
            <TreeItem nodeId="146" label="DomesticDutyTaxParty" />
            <TreeItem nodeId="147" label="GovernmentAgencyGoodsItem" />
            <TreeItem nodeId="148" label="Importer" />
            <TreeItem nodeId="149" label="PreviousDocument" />
            <TreeItem nodeId="1499" label="UCR" />
          </TreeItem>
        </TreeItem>
      </TreeView>
  );
}
