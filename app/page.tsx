export default function Home() {
  return (
    <main style={{fontFamily: "system-ui", maxWidth: 900, margin: "60px auto", padding: 24}}>
      <h1>LedgerMatch</h1>
      <p>Stellar payment reconciliation workbench</p>
      <p>A reconciliation engine that matches internal payment records against Stellar transaction and operation data, highlighting missing, duplicated, delayed, or mismatched settlements.</p>
      <p>Network: Testnet development configuration.</p>
    </main>
  );
}
