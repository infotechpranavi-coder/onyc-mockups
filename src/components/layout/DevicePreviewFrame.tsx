import { Monitor, Smartphone } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

type PreviewMode = "desktop" | "mobile";

const STORAGE_KEY = "onyc-preview-mode";
const MOBILE_FRAME_WIDTH = 412;
const MOBILE_FRAME_HEIGHT = 915;
const MOBILE_DEVICE_LABEL = "Samsung Galaxy S20 Ultra";

export function DevicePreviewFrame({ children }: { children: ReactNode }) {
  const isActualMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<PreviewMode>("desktop");

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "desktop" || stored === "mobile") {
      setMode(stored);
    }
  }, []);

  const setPreviewMode = (next: PreviewMode) => {
    setMode(next);
    sessionStorage.setItem(STORAGE_KEY, next);
  };

  if (!mounted || isActualMobile) {
    return <>{children}</>;
  }

  const isMobilePreview = mode === "mobile";

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-[9999] flex h-12 shrink-0 items-center justify-between border-b border-neutral-600 bg-neutral-800 px-4 text-white shadow-md">
        <span className="text-sm font-medium tracking-wide text-neutral-200">ONYC Mockups</span>

        <div
          className="flex items-center gap-1 rounded-lg bg-neutral-700/80 p-1"
          role="group"
          aria-label="Preview size"
        >
          <PreviewToggleButton
            active={!isMobilePreview}
            label="Desktop"
            icon={<Monitor className="size-4" />}
            onClick={() => setPreviewMode("desktop")}
          />
          <PreviewToggleButton
            active={isMobilePreview}
            label="Mobile"
            icon={<Smartphone className="size-4" />}
            onClick={() => setPreviewMode("mobile")}
          />
        </div>
      </div>

      <div
        className={cn(
          "flex flex-1 justify-center",
          isMobilePreview ? "items-center bg-neutral-400 px-4 py-8" : "bg-white",
        )}
      >
        {isMobilePreview ? (
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-medium text-neutral-700">
              {MOBILE_DEVICE_LABEL} · {MOBILE_FRAME_WIDTH} × {MOBILE_FRAME_HEIGHT}
            </p>
            <div
              className="shrink-0 overflow-x-hidden overflow-y-auto rounded-2xl border border-neutral-500/40 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              style={{
                width: MOBILE_FRAME_WIDTH,
                height: MOBILE_FRAME_HEIGHT,
              }}
            >
              {children}
            </div>
          </div>
        ) : (
          <div className="w-full">{children}</div>
        )}
      </div>
    </div>
  );
}

function PreviewToggleButton({
  active,
  label,
  icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "bg-white text-neutral-900 shadow-sm"
          : "text-neutral-300 hover:bg-neutral-600 hover:text-white",
      )}
    >
      {icon}
      {label}
    </button>
  );
}
