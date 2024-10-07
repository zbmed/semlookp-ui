import { EuiCard } from "@elastic/eui";

export const InfoBox = ({ title, backgroundColor, description }) => {
  return (
    <EuiCard
      title={title}
      description={description}
      style={{
        backgroundColor: backgroundColor,
        minHeight: 150,
      }}
      display="subdued"
    />
  );
};
