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
      <TreeItem nodeId="1" label="Resources" >
        <TreeItem nodeId="2" label="Schemas" >
          <TreeItem nodeId="21" label={<a href="https://skat.github.io/dms-public/h7/">H7</a>} />
          <TreeItem nodeId="21" label={<a href="https://skat.github.io/dms-public/notification/">Notification</a>} />

        </TreeItem>
        <TreeItem nodeId="3" label="Test Data" >
          <TreeItem nodeId="31" label={<a href="https://skat.github.io/dms-public/test-data/">Eori numbers</a>} />
        </TreeItem>

      </TreeItem>
        <TreeItem nodeId="6" label="Test examples" >
          <TreeItem nodeId="7" label="Amend examples" >
            <TreeItem nodeId="71" label={<a href="https://skat.github.io/dms-public/test-data/">Init_sub_amend</a>} />
            <TreeItem nodeId="72" label={<a href="https://skat.github.io/dms-public/test-data/">senario_1_amend_success</a>} />
            <TreeItem nodeId="73" label={<a href="https://skat.github.io/dms-public/test-data/">senario_1_amend_syntax_error</a>} />
            <TreeItem nodeId="74" label={<a href="https://skat.github.io/dms-public/test-data/">senario_2_amend_field_error</a>} />
            <TreeItem nodeId="75" label={<a href="https://skat.github.io/dms-public/test-data/">senario_2_amend_value_error</a>} />
            <TreeItem nodeId="76" label={<a href="https://skat.github.io/dms-public/test-data/">senario_3_amend_manual_amend</a>} />
            <TreeItem nodeId="77" label={<a href="https://skat.github.io/dms-public/test-data/">senario_4_amend_auto_amend</a>} />
            <TreeItem nodeId="78" label={<a href="https://skat.github.io/dms-public/test-data/">senario_5_amend_change_VAT</a>} />
          </TreeItem>
          <TreeItem nodeId="8" label="Correction examples" >
            <TreeItem nodeId="81" label={<a href="https://skat.github.io/dms-public/test-data/">Init_sub_corr</a>} />
            <TreeItem nodeId="82" label={<a href="https://skat.github.io/dms-public/test-data/">senario_1_corr_success</a>} />
            <TreeItem nodeId="83" label={<a href="https://skat.github.io/dms-public/test-data/">senario_1_corr_syntax_error</a>} />
          </TreeItem>
        </TreeItem>
      </TreeView>
  );
}
