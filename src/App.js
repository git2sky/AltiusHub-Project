import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InvoiceListComponent from './InvoiceListComponent';
import InvoiceDetailComponent from './InvoiceDetailComponent';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
              <List>
                <ListItem button key="Invoices">
                  <ListItemText primary="Invoices" />
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={InvoiceListComponent} />
          <Route path="/invoice/:id" component={InvoiceDetailComponent} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
