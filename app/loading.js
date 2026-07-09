// A valid React functional component
export default function Loading() {
  // You can put any loading indicator here, e.g., a spinner
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Loading...</h1>
      {/* Optional: Add a CSS spinner or image */}
    </div>
  );
}
