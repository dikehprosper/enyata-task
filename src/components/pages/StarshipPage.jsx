import React, { useContext, useEffect } from "react";
import { useGetSWStarships } from "../../hooks/useSWQueries";
import DashboardWrapper from "../DashBoardWrapper";
import Table from "../molecules/Table";
import { defaultSelectedItem, verifySelectedStatus } from "../utils/helpers";
import starshipPicture from "../../assets/starshipPicture.png";
import Details from "../molecules/Details";
import { AppContext } from "../../Context/Context";

const headers = ["Name", "Model", "Class", "Passengers", "Length", "Character"];

const StarshipsPage = () => {
  const { data: starshipsData } = useGetSWStarships();
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const handleSelected = (data) => {
    const { name, model, passengers } = data;
    setSelectedItem({
      ...selectedItem,
      image: starshipPicture,
      name,
      model,
      passengers,
      pilots: "Dior, Kingley, Jamal",
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
          model={selectedItem.model}
          passengers={selectedItem.passengers}
          pilots={selectedItem.pilots}
        />
      ) : (
        <Table
          title="Starships"
          headers={headers}
          tableData={starshipsData?.data?.results}
          handleSelected={handleSelected}
        />
      )}
    </DashboardWrapper>
  );
};

export default StarshipsPage;