import React, { useState } from "react";
import SidePanel from "../../components/SidePanel/SidePanel";
import DashboardNavBar from "../../components/Dashboard/DashboardNavBar/DashboardNavBar";
import BatchList from "../../components/Batches/BatchList";
import { AddOutlined } from "@mui/icons-material";
import styles from "./Batches.module.scss";
import AddBranchModal from "../../components/Batches/AddBranchModal";

const Batches = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [batches, setBatches] = useState([]);

  return (
    <>
      <SidePanel page={"batches"} />
      <DashboardNavBar
        page="Dashboard"
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />

      <div className={styles.rightSide}>
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={styles.addBatch}
        >
          <AddOutlined /> Add batch
        </button>
        <AddBranchModal
          batches={batches}
          setBatches={setBatches}
          open={isOpen}
          onClose={() => setIsOpen((isOpen) => !isOpen)}
        />
        <div className={styles.mainbar}>
          <div className={styles.mainbarWrapper}>
            {batches.map((batch) => (
              <BatchList
                setBatches={setBatches}
                batches={batches}
                key={batch.id}
                batch={batch}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Batches;
