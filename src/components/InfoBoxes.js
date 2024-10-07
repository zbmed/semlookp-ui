import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import {
  infoBoxDescription1,
  infoBoxDescription2,
} from "./InfoBoxesDescriptionsTemplate";
import { useTheme } from "@emotion/react";
import { InfoBox } from "./InfoBox";
import { ts_specific_metadata } from "../config";

export const InfoBoxes = () => {
  const theme = useTheme();
  return (
    <EuiFlexGroup>
      {ts_specific_metadata.info_boxes.show_info_box1 && (
        <EuiFlexItem grow={3}>
          <InfoBox
            title={ts_specific_metadata.info_boxes.info_box1.title}
            backgroundColor={theme.color.infoBoxColor1}
            description={infoBoxDescription1()}
          />
        </EuiFlexItem>
      )}
      {ts_specific_metadata.info_boxes.show_info_box2 && (
        <EuiFlexItem grow={3}>
          <InfoBox
            title={ts_specific_metadata.info_boxes.info_box2.title}
            backgroundColor={theme.color.infoBoxColor2}
            description={infoBoxDescription2()}
          />
        </EuiFlexItem>
      )}
    </EuiFlexGroup>
  );
};
