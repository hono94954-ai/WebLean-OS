import { useEffect, useState } from "react";

type Props = {
  onFinish: () => void;
};

export default function BootScreen({ onFinish }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const p1 = setTimeout(() => setPhase(1), 500);
    const p2 = setTimeout(() => setPhase(2), 1500);
    const finish = setTimeout(onFinish, 4000);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") onFinish();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(finish);
      window.removeEventListener("keydown", handleKey);
    };
  }, [onFinish]);

  return (
    <div className="boot-screen">
      <div className={`glow ${phase >= 1 ? "expand" : ""}`} />

      {phase >= 2 && (
        <>
          <h1 className="logo">WebLean OS</h1>
          <p className="status">Initializing...</p>
        </>
      )}

      <button className="skip" onClick={onFinish}>
        Skip ▶
      </button>
    </div>
  );
}
