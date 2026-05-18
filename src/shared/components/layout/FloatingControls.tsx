import { SettingsButton } from "@/shared/components/settings/SettingsButton";

export const FloatingControls = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <SettingsButton />
    </div>
  );
};
