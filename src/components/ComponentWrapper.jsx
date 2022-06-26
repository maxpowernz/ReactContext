export default function ComponentWrapper({ children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", backgroundColor: "lightblue" }}>
      {children}
    </div>
  );
}
