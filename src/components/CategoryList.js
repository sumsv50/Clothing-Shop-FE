import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './CategoryList.css'

export default function CategoryList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => { 
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          DANH MỤC SẢN PHẨM
        </ListSubheader>
      }
    >
      <ListItemButton className='category-title-container'>
        <ListItemText className='category-title' primary="ĐỒNG PHỤC BẢO VỆ" />
      </ListItemButton >
      <ListItemButton className='category-title-container'>
        <ListItemText className='category-title' primary="NÓN BẢO HỘ LAO ĐỘNG" />
      </ListItemButton>
      <ListItemButton className='category-title-container' onClick={handleClick}>
        <ListItemText className='category-title' primary="GIÀY BAO HỘ LAO ĐỘNG" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton className='category-title-container' sx={{ pl: 4 }}>
            <ListItemText className='category-title' primary="🔸 Giày bảo hộ NTT" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton className='category-title-container' sx={{ pl: 4 }}>
            <ListItemText className='category-title' primary="🔸 Giày bảo hộ PKL" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
