import TableHeader from "../atoms/TableHeader";
import TableCell from "../atoms/TableCell";
import Input from "../atoms/Input";

const Table = ({ title, headers, tableData, handleSelected }) => {
  return (
    <div className="w-full">
      <p className="text-[#a4a7b7] text-[16px] font-[400] mb-[31px]">
        {title}
      </p>

      <div className="overflow-hidden rounded-md border border-[#a4a7b766]">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b border-[#a4a7b766]">
              <TableHeader className="w-[7%]">
                <Input type="checkbox" />
              </TableHeader>
              {headers.map((header, idx) => (
                <TableHeader key={idx} className="w-[15%] pl-[20px]">{header}</TableHeader>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData &&
              tableData.map((data, idx) => (
                <tr
                  key={idx}
                  onClick={() => handleSelected(data)}
                  className="relative border-b border-[#a4a7b766] last:border-b-0 hover:shadow-md hover:shadow-[#0d2fa112] cursor-pointer"
                >
                  <TableCell className="w-[7%]">
                    <Input type="checkbox" />
                  </TableCell>
                  <TableCell className="w-[15%] pl-[20px]">{data.title || data.name}</TableCell>
                  <TableCell className="pl-[20px]">
                    {(data.release_date &&
                      new Date(data.release_date).toLocaleDateString()) ||
                      data.model ||
                      data.birth_year ||
                      data.classification}
                  </TableCell>
                  <TableCell className="pl-[20px]">
                    {data.director ||
                      data.starship_class ||
                      data.gender ||
                      data.eye_colors}
                  </TableCell>
                  <TableCell className={`${data.passengers? "pl-[30px]" : "pl-[20px]"}`}>
                    {data.producer || data.passengers || "blond"}
                  </TableCell>
                  <TableCell className={`${data.episode_id? "pl-[50px]": "pl-[15px]" } `}>
                    {data.episode_id ||
                      (data.length ? `${data.length} Meters` : "") ||
                      (data.height || data.average_height
                        ? `${data.height || data.average_height} CM`
                        : "")}
                  </TableCell>
                  <TableCell className="pl-[20px]">
                    {(data.created &&
                      new Date(data.created).toLocaleDateString()) ||
                      "https://swapi.dev/api/people"}
                  </TableCell>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
