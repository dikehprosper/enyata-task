import React, { useContext, useEffect } from "react";
import DashboardWrapper from "../DashBoardWrapper";
import CardList from "../organisms/CardList";
import Table from "../molecules/Table";
import { useGetSWFilms } from "../../hooks/useSWQueries.js";
import overViewPicture from "../../assets/overViewPicture.png";
import Details from "../molecules/Details";
import { defaultSelectedItem, verifySelectedStatus } from "../utils/helpers";
import { AppContext } from "../../Context/Context";

const headers = [
  "Film Title",
  "Release Date",
  "Director",
  "Producer",
  "Episode ID",
  "Character",
];
const cardData = [
  {
    title: "Films",
    backgroundColor: "#a9ffe0",
    total: 200,
    update: 20,
  },
  {
    title: "Starships",
    backgroundColor: "#a9c1ff",
    total: 200,
    update: 20,
  },
  {
    title: "People",
    backgroundColor: "#ffa9ec",
    total: 200,
    update: 20,
  },
  {
    title: "Species",
    backgroundColor: "#fdffa9",
    total: 200,
    update: 20,
  },
];

const OverviewPage = () => {
  const { data: filmsData } = useGetSWFilms();
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const handleSelected = (data) => {
    const { title, release_date, producer, director } = data;
    setSelectedItem({
      ...selectedItem,
      image: overViewPicture,
      title,
      releaseDate: release_date,
      producer,
      director,
    });
  };
  
  useEffect(() => {
   setSelectedItem(defaultSelectedItem)
 },[])


  return (
    <>
      <DashboardWrapper>
        {verifySelectedStatus(selectedItem) ? (
          <Details
            imageSrc={selectedItem.image}
            title={selectedItem.title}
            producer={selectedItem.producer}
            director={selectedItem.director}
            releaseDate={selectedItem.releaseDate}
          />
        ) : (
          <>
            <CardList items={cardData} total={filmsData?.data?.count} />
            <Table
              title="Films"
              headers={headers}
              tableData={filmsData?.data?.results}
              handleSelected={handleSelected}
            />
          </>
        )}
        
      </DashboardWrapper>
    </>
  );
};

export default OverviewPage;