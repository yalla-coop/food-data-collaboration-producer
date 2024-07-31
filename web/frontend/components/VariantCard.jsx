function VariantCard({ variant, index }) {
  return (
    <li
      key={variant.id}
      style={{
        border: '1px solid #ddd',
        margin: '10px',
        borderRadius: '8px',
        padding: '10px',
        backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
        listStyleType: 'none',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <p style={{ margin: '10px 0', fontSize: '16px', fontWeight: 'bold' }}>
        <strong>Title:</strong> {variant.title}
      </p>

      <p style={{ margin: '10px 0', fontSize: '16px' }}>
        <strong>Price:</strong> {variant.price}
      </p>

      <p style={{ margin: '10px 0', fontSize: '16px' }}>
        <strong>Inventory Policy:</strong> {variant.inventoryPolicy}
      </p>

      {variant?.inventoryPolicy?.toUpperCase() !== 'CONTINUE' && (
        <p style={{ margin: '10px 0', fontSize: '16px' }}>
          <strong>Inventory Quantity:</strong> {variant.inventoryQuantity}
        </p>
      )}
    </li>
  );
}

export { VariantCard };
