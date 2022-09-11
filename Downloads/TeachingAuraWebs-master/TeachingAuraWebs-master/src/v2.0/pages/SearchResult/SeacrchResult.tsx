import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ListCard from "../../components/ListCard/ListCard";
import GridCard from "../../components/GridCard/GridCard";
import { ReactComponent as AuraIcon } from "../../.././assets/image/SVG/Group.svg";
import { ReactComponent as SearchIcon } from "../../.././assets/image/SVG/searchIcon.svg";
import { ReactComponent as FilerIcon } from "../../.././assets/image/SVG/filterIcon.svg";
import CourseIc from "../../.././icon/drawable/CourseIc";
import InstituteIc from "../../.././icon/drawable/InstituteIc";

import { Close } from "@mui/icons-material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import styles from "./SearchResult.module.scss";

const SearchResult = () => {
  const n = 10;
  const m = 12;
  const [view, setView] = useState("Grid");
  const [activeBar, setActiveBar] = useState("Course");
  return (
    <div className={styles.page}>
      <NavBar />

      {/* filer */}
      <div className={styles.filerBar}>
        <AuraIcon style={{ height: "60px", width: "60px" }} />
        <div className={styles.searchBar}>
          <form className={styles.form}>
            <input type="text" placeholder="Search for course or institute" />
          </form>
          <Close className={styles.closeIcon} />
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.filter}>
          <FilerIcon style={{ height: "20px" }} />
        </div>

        <div>
          <FormControl
            fullWidth
            variant="standard"
            hiddenLabel
            className={styles.filter}
            style={{ width: "120px" }}
          >
            <Select
              onChange={(e) => console.log(e.target.value)}
              value={"Sort"}
              style={{
                padding: "4px 22px",
                color: "#000000",
                fontSize: "18px",
                fontWeight: "200",
              }}
            >
              <MenuItem value={"Top Rated"}>Top Rated</MenuItem>
              <MenuItem value={"Sort"}>Sort</MenuItem>
              <MenuItem value={"Best"}>Best</MenuItem>
              <MenuItem value={"Filter"}>Filter</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl
            fullWidth
            variant="standard"
            hiddenLabel
            className={styles.filter}
            style={{ width: "120px" }}
          >
            <Select
              onChange={(e) => setView(e.target.value)}
              value={view}
              style={{
                padding: "4px 22px",
                color: "#000000",
                fontSize: "18px",
                fontWeight: "200",
              }}
            >
              <MenuItem value={"Grid"}>Grid</MenuItem>
              <MenuItem value={"List"}>List</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {/* filer */}

      {/* Institute and Course */}
      <div className={styles.insOrCors}>
        <div
          className={activeBar === "Course" ? styles.active : ""}
          onClick={() => setActiveBar("Course")}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <CourseIc color={activeBar === "Course" ? "#2697fe" : "#676767"} />
            Course
          </div>
        </div>
        <div
          className={activeBar === "Institute" ? styles.active : ""}
          onClick={() => setActiveBar("Institute")}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <InstituteIc
              color={activeBar === "Institute" ? "#2697fe" : "#676767"}
            />
            Institute
          </div>
        </div>
      </div>

      {view === "List" ? (
        <div className={styles.list}>
          {[...Array(n)].map((e, i) => (
            <ListCard
              title="UX Design course"
              about="Build the essential skills you need to launch a career in UX Design. Start learning today! Learn how to solve real-world UX problems through hands-on labs, assessments, and videos. Stand Out to Employers. A Path to In-Demand Jobs...."
              imgUrl="https://picsum.photos/220/150?random=10"
              link="https://picsum.photos/220/150?random=10"
              price={i % 2 ? 50 : null}
              stars={3}
              rating={531}
              courseType="Recorded Ofline"
            />
          ))}
        </div>
      ) : (
        <div className={styles.grid}>
          {[...Array(m)].map((e) => (
            <GridCard
              title="UX Design course"
              about="Build the essential skills you need to launch a career in UX Design. Start learning today! Learn how to solve real-world UX problems through hands-on labs, assessments, and videos. Stand Out to Employers. A Path to In-Demand Jobs...."
              imgUrl="https://picsum.photos/220/150?random=10"
              link="https://picsum.photos/220/150?random=10"
              price={50}
              stars={4.3}
              rating={531}
              courseType="Online"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
