import React, { useContext, useEffect } from "react";
import { useGetSWPeople } from "../../hooks/useSWqueries/";
import DashboardWrapper from "../DashBoardWrapper";
import Table from "../molecules/Table";
import { defaultSelectedItem, verifySelectedStatus } from "../utils/helpers";
import peoplePicture from "../../assets/peoplePicture.png";
import Details from "../molecules/Details";
import { AppContext } from "../../Context/Context";

const headers = [
  "Name",
  "Birth year",
  "Gender",
  "Hair Color",
  "Height",
  "Created",
];

const PeoplePage = () => {
  const { data: peopleData } = useGetSWPeople();
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const handleSelected = (data) => {
    const { name, gender, birth_year, height } = data;

    setSelectedItem({
      ...selectedItem,
      image: peoplePicture,
      name,
      gender,
      yearOfBirth: birth_year,
      height,
    });
  };

   useEffect(() => {
    setSelectedItem(defaultSelectedItem)
  },[])
  
  return (
    <DashboardWrapper>
      {verifySelectedStatus(selectedItem) ? (
        <Details
          imageSrc={selectedItem.image}
          name={selectedItem.name}
          gender={selectedItem.gender}
          yearOfBirth={selectedItem.yearOfBirth}
          height={selectedItem.height}
        />
      ) : (
        <Table
          title="People"
          headers={headers}
          tableData={peopleData?.data?.results}
          handleSelected={handleSelected}
        />
      )}
    </DashboardWrapper>
  );
};

export default PeoplePage;