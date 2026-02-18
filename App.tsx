import { useState } from "react";
import BootScreen from "./BootScreen";

export default function App() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <BootScreen onFinish={() => setBooted(true)} />;
  }

  return (
    <div className="home">
      <h2>WebLean OS</h2>
      <p>Home Screen</p>
    </div>
  );
}
