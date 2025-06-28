// components/SearchBar.tsx
import { TextField } from "@mui/material";

type Props = {
  searchQuery: string;
  onSearch: (query: string) => void;
};

const SearchBar = ({ searchQuery, onSearch }: Props) => {
  return (
    <TextField
      label="Search tasks..."
      variant="outlined"
      size="small"
      fullWidth
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default SearchBar;
