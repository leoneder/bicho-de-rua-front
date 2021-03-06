import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import GridCards from './ui/components/cards/GridCards.js';
import Nav1 from './ui/components/NavBar';
import InputForm from './ui/components/InputForm';
import NovoBicho from './ui/components/NovoBicho';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

var setBichoSelecionado=null;
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("leo")

const handleClickOpen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = React.useState(true);
  setBichoSelecionado=1;
  setOpen(true);
};

const handleClose = () => {

};



root.render(
<div>
  
  <Nav1 ></Nav1>
  <button onClick={() => {setBichoSelecionado=1}}>Adicionar novo bicho</button>
  <GridCards title="leonardo"></GridCards>

  <Dialog open={setBichoSelecionado!==null} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
  </div>    
);
