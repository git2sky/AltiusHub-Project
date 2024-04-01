import React from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function InvoiceDetailComponent() {
  const { id } = useParams();

  const [invoice, setInvoice] = React.useState({
    id: '',
    date: '',
    invoiceNumber: 0,
    customerName: '',
    billingAddress: '',
    shippingAddress: '',
    GSTIN: '',
    items: [],
    billSundrys: [],
    totalAmount: 0,
  });


  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(invoice);
  };

  return (
    <div>
      <TextField
        name="date"
        label="Date"
        value={invoice.date}
        onChange={handleFieldChange}
        fullWidth
        required
      />
      <TextField
        name="invoiceNumber"
        label="Invoice Number"
        type="number"
        value={invoice.invoiceNumber}
        onChange={handleFieldChange}
        fullWidth
        required
      />
      <TextField
        name="customerName"
        label="Customer Name"
        value={invoice.customerName}
        onChange={handleFieldChange}
        fullWidth
        required
      />
      <TextField
        name="billingAddress"
        label="Billing Address"
        value={invoice.billingAddress}
        onChange={handleFieldChange}
        fullWidth
        required
      />
      <TextField
        name="shippingAddress"
        label="Shipping Address"
        value={invoice.shippingAddress}
        onChange={handleFieldChange}
        fullWidth
        required
      />
      <TextField
        name="GSTIN"
        label="GSTIN"
        value={invoice.GSTIN}
        onChange={handleFieldChange}
        fullWidth
        required
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
}

export default InvoiceDetailComponent;