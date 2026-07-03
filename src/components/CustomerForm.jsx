function CustomerForm({ customer, setCustomer }) {

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card">

      <h2>Customer Details</h2>

      <div className="grid">

        <input
          name="name"
          placeholder="Customer Name"
          value={customer.name}
          onChange={handleChange}
        />

        <input
          name="vehicle"
          placeholder="Vehicle Number"
          value={customer.vehicle}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={customer.date}
          onChange={handleChange}
        />

        <input
          name="km"
          placeholder="Kilometer"
          value={customer.km}
          onChange={handleChange}
        />

      </div>

    </div>
  );
}

export default CustomerForm;