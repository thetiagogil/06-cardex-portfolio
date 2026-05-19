import { SettingsButton } from "@/shared/components/settings/SettingsButton";

export const FloatingControls = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      <SettingsButton />
    </div>
  );
};
