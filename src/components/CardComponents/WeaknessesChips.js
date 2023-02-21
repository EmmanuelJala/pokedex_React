import Chip from "@mui/material/Chip";
import { v4 as uuid } from "uuid";

function WeaknessesChips({ data, info }) {
  const result = data.map((item) => (
    <Chip
      key={uuid()}
      sx={{
        bgcolor: info.bgColor[info.name.indexOf(item)],
        color: info.fgColor[info.name.indexOf(item)],
        fontSize: 14,
      }}
      label={item}
    />
  ));
  return <>{result}</>;
}

export default WeaknessesChips;
