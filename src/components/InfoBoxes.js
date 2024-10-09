import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { global_config, ts_specific_metadata } from "../config";
import { componentMap } from "./componentMap";
import { Suspense } from "react";

export const InfoBoxes = () => {
  const projectName = global_config.projectName;
  const projectComponents = componentMap[projectName];

  if (!projectComponents) {
    return <div>Error: Invalid project type</div>;
  }

  const InfoBoxA = componentMap[projectName]["InfoBoxA"];
  const InfoBoxB = componentMap[projectName]["InfoBoxB"];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EuiFlexGroup>
        {ts_specific_metadata.info_boxes.has_info_box1 && (
          <EuiFlexItem grow={3}>
            <InfoBoxA />
          </EuiFlexItem>
        )}
        {ts_specific_metadata.info_boxes.has_info_box2 && (
          <EuiFlexItem grow={3}>
            <InfoBoxB />
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    </Suspense>
  );
};
