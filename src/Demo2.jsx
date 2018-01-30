import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Divider from 'material-ui/Divider';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import PriorityHighIcon from 'material-ui-icons/PriorityHigh';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

const ALERT_COLORS = { danger: '#D91C35' };

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: 'inline-flex',
    alignSelf: 'center',
  },
  summaryContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  expansionPanelDetails: {
    width: '100%',
  },
  actionRow: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  actionRowButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  editButton: {
    marginRight: theme.spacing.unit * 2,
  },
  deleteButton: {
  },
  deleteButtonExpanded: {
    // borderBottom: `${theme.spacing.unit * 2}px solid`,
    '&:after': {
      width: 0,
      height: 0,
      borderLeft: `${theme.spacing.unit * 2}px solid transparent`,
      borderRight: `${theme.spacing.unit * 2}px solid transparent`,
      borderBottom: `${theme.spacing.unit * 2}px solid ${theme.palette.grey['800']}`,
      position: 'absolute',
      content: "''",
      left: '35%',
      top: '100%',
      clear: 'both',
      transition: 'border-bottom-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    '&:hover': {
      '&:after': {
        'border-bottom-height': '0px',
      },
    },
  },
  deleteButtonFailed: {
    // borderBottom: `${theme.spacing.unit * 2}px solid`,
    // transition: 'border-bottom-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
    '&:after': {
      width: 0,
      height: 0,
      borderLeft: `${theme.spacing.unit * 2}px solid transparent`,
      borderRight: `${theme.spacing.unit * 2}px solid transparent`,
      borderBottom: `${theme.spacing.unit * 2}px solid ${
        theme.palette.grey['300']
      }`,
      position: 'absolute',
      content: "''",
      left: '35%',
      top: '100%',
      clear: 'both',
      // transition:
      //   'border-bottom-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
    },
  },
  confirmationPanel: {
    backgroundColor: theme.palette.grey['800'],
    '&:before': {
      backgroundColor: 'transparent',
    },
  },
  confirmationPanelDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
  },
  confirmDeleteButton: {
    marginRight: theme.spacing.unit,
  },
  deleteFailedChip: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginLeft: 0,
  },
  deleteFailedChipIcon: {
    color: '#E00909',
  },
});

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteConfirmationPanelExpanded: false,
    };

    this.toggleDeleteConfirmationPanel = this.toggleDeleteConfirmationPanel.bind(
      this
    );
  }

  toggleDeleteConfirmationPanel() {
    this.setState({
      deleteConfirmationPanelExpanded: !this.state
        .deleteConfirmationPanelExpanded,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <ExpansionPanel expanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Title</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.expansionPanelDetails}>
            <Typography>
              Content
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.actionRow}>
              <div className={classes.actionRowButtons}>
                <Button className={classes.editButton} raised>Edit</Button>
                <Button
                  raised
                  className={classNames(classes.deleteButton, {
                    [classes.deleteButtonExpanded]: this.state
                      .deleteConfirmationPanelExpanded,
                  })}
                  onClick={this.toggleDeleteConfirmationPanel}
                >
                  Delete
                </Button>
              </div>
            </div>

            <ExpansionPanel
              expanded={this.state.deleteConfirmationPanelExpanded}
              className={classNames(classes.confirmationPanel)}
            >
              <ExpansionPanelDetails
                className={classes.confirmationPanelDetails}
              >
                <Fragment>
                  <Button raised onClick={this.toggleDeleteConfirmationPanel} className={classes.confirmDeleteButton}>Confirm</Button>
                  <Button raised onClick={this.toggleDeleteConfirmationPanel}>Cancel</Button>
                </Fragment>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(Demo);