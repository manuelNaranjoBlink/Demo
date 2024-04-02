import Link from 'next/link'
import { ViewContent } from "../components/ViewContent";

export default () => {

  return (
    <div style={{ padding: "32px", width: "100wh", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Link href="/">Home</Link>
      <ViewContent />
    </div>
  );
}
