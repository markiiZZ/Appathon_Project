import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const columns = [
  { 
      id: 'nct_id', 
      label: 'NCT ID', 
      minWidth: 120,
      align: 'center'
    },
  {
    id: 'elegCheckDrug',
    label: 'Criteria (Drug)',
    minWidth: 120,
    align: 'center',
    
  },
  {
    id: 'elegCheckCond',
    label: 'Criteria (Condition)',
    minWidth: 120,
    align: 'center',
  },
  { 
      id: 'summaryCheckDrug', 
      label: 'Summary (Drug)', 
      minWidth: 100,
      align: 'center'
},
  {
    id: 'summaryCheckCond',
    label: 'Summary (Condition)',
    minWidth: 120,
    align: 'center',
  },

];



const useStyles = makeStyles({
  root: {
    width: '110%',
    height: '1200'
  },
  container: {
    maxHeight: 440
  },
  
  
});

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '80%',
    margin: 'auto'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const classesModal = useStylesModal();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const sentData = (input) =>{
    handleOpen()
    console.log(input)
    
    var resTitle = input[0].brief_title.replaceAll(new RegExp(props.condition, "ig"), "<span style='background-color:powderblue;'>"+props.condition+"</span>");
    resTitle = resTitle.replaceAll(new RegExp(props.drug, "ig"), "<span style='background-color:#ecfe52;'>"+props.drug+"</span>");

    var resSummary = input[0].brief_summary.replaceAll(new RegExp(props.condition, "ig"), "<span style='background-color:powderblue;'>"+props.condition+"</span>");
    resSummary = resSummary.replaceAll(new RegExp(props.drug, "ig"), "<span style='background-color:#ecfe52;'>"+props.drug+"</span>");
    
    var resCriteria = input[0].criteria.replaceAll(new RegExp(props.condition, "ig"), "<span style='background-color:powderblue;'>"+props.condition+"</span>");
    resCriteria = resCriteria.replaceAll(new RegExp(props.drug, "ig"), "<span style='background-color:#ecfe52;'>"+props.drug+"</span>");
    
    document.getElementById('title').innerHTML = resTitle;
    document.getElementById('summary').innerHTML = resSummary;
    document.getElementById('criteria').innerHTML = resCriteria;

    for (var intervention of input[0].intervention){
      var node = document.createElement('li');                                      // Create a <li> node
      var textnode = document.createTextNode(intervention.intervention_name);       // Create a text node
      node.appendChild(textnode);                                                   // Append the text to <li>
      document.getElementById('intervention').appendChild(node);  
    }
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function findTrial(event){
    console.log(event.target.id);
    fetch("http://localhost:3001/trial/"+event.target.id)
      .then(res => res.json())
      .then(
        (result) => {
          sentData(result);
          
        },

        (error) => {
         console.log('error', error)
        }
      )

      
  };


  return (
    <div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize:17, lineHeight:1.2  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(props.data).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.nct_id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if(column.id==="nct_id"){
                        return( <TableCell key={column.id} align={column.align} style={{fontSize:15}}>
                        <button type="button" onClick={findTrial} style={{marginTop:10}} id={value} >{value}</button>
                       </TableCell>);
                    }
                    else{
                        return (
                            <TableCell key={column.id} align={column.align} style={{fontSize:15}}>
                             {value?<span >&#10003;</span>:<span>&#10007;</span>}
                            </TableCell>
                          );
                        
                    }

                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    <div>
    
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classesModal.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
          <Paper style={{maxHeight: '90%', overflow: 'auto'}}>
            <div className={classesModal.paper}>
              <h3>Title:</h3>
              <p id='title'></p>
              <h3>Brief Summary</h3>
              <p id='summary'></p>
              <h3>Elegibility Criteria</h3>
              <p id='criteria'></p>
              <h3>Intervention</h3>
              <ul id = 'intervention'></ul>
            </div>
            </Paper>
          </Fade>
        </Modal>
      
      </div>
      

    </div>
  );
}



