import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function BasicRating(props: any) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={props.data} />
    </Stack>
  );
}
