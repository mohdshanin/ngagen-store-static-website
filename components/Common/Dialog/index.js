import React from "react";

import CrossIcon from "components/Common/Icons/Cross";
import styles from "./Dialog.module.css";

function Dialog({ open, handleClose = null, children }) {
  if (!open) return null;

  return (
    <div id="overlay">
      <div className={styles.dialog_container}>
        <div className={styles.dialog}>
          {handleClose && (
            <div className={styles.closeButton}>
              <button
                className={styles.close_icon}
                type="button"
                onClick={handleClose}
              >
                <CrossIcon width="20" height="20" />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
