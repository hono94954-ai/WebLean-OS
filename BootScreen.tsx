import { useEffect, useState } from "react";

type Props = {
  onFinish: () => void;
};

export default function BootScreen({ onFinish }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    console.log("BootScreen useEffect running");

    const p1 = setTimeout(() => {
      console.log("phase 1");
      setPhase(1);
    }, 500);

    const p2 = setTimeout(() => {
      console.log("phase 2");
      setPhase(2);
    }, 1500);

    const finish = setTimeout(() => {
      console.log("boot finished");
      onFinish();
    }, 4000);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        console.log("Enter pressed");
        onFinish();
      }
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
      {/* ★ 確認用：一番上に強制表示 */}
      <h1 style={{ position: "absolute", top: 20, left: 20 }}>
        BOOT
      </h1>

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
