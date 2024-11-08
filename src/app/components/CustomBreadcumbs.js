import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Typography from "@mui/joy/Typography";

const CustomBreadCumbs = ({ data }) => {
  return (
    <Breadcrumbs aria-label="breadcrumbs">
      {[...data].map((item, index) => (
        <Typography
          key={index}
          level="body-md"
          sx={{
            cursor: "pointer",
            color: data.length === index + 1 ? "#3b82f6" : "#555",
          }}
        >
          {item}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadCumbs;
