function ItemTable({ items, setItems }) {

  const handleChange = (index, field, value) => {
    const updated = [...items];

    updated[index][field] = value;

    // Calculate Amount automatically
    const qty = Number(updated[index].qty) || 0;
    const rate = Number(updated[index].rate) || 0;

    updated[index].amount = qty * rate;

    setItems(updated);
  };

  const addRow = () => {
    setItems([
      ...items,
      {
        particular: "",
        qty: 1,
        rate: 0,
        amount: 0,
      },
    ]);
  };

  const deleteRow = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <div className="card">

      <h2>Items</h2>

      <table>

        <thead>

          <tr>
            <th>Particulars</th>
            <th>Qty</th>
            <th>Rate (₹)</th>
            <th>Amount (₹)</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {items.map((item, index) => (

            <tr key={index}>

              <td>
                <input
                  type="text"
                  placeholder="Enter Item"
                  value={item.particular}
                  onChange={(e) =>
                    handleChange(index, "particular", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) =>
                    handleChange(index, "qty", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  min="0"
                  value={item.rate}
                  onChange={(e) =>
                    handleChange(index, "rate", e.target.value)
                  }
                />
              </td>

              <td
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ₹ {item.amount}
              </td>

              <td style={{ textAlign: "center" }}>
                <button
                  style={{
                    background: "#dc3545",
                    padding: "8px 12px",
                  }}
                  onClick={() => deleteRow(index)}
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <button onClick={addRow}>
        + Add Item
      </button>

    </div>
  );
}

export default ItemTable;

