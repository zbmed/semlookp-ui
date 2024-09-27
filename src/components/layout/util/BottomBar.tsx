import { useState } from "react";

import {
  EuiBottomBar,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import { ts_specific_metadata } from "../../../config";

export const BottomBar = () => {
  const [toggleIdSelected, setToggleIdSelected] = useState(true);
  return (
    <>
      {toggleIdSelected && (
        <EuiBottomBar>
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem>
              {ts_specific_metadata.active_dev_banner_text}
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                onClick={() => setToggleIdSelected(!toggleIdSelected)}
                color="ghost"
                size="s"
                iconType="cross"
              >
                {"Close"}
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      )}
    </>
  );
};
