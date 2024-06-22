import { useDispatch } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import {
  ListItemText,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Grid,
} from "@mui/material";
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title, body, id, date, imageUrls=[] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 15 ? title.slice(0, 15) + "..." : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 15 ? body.slice(0, 15) + "..." : body;
  }, [body]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
