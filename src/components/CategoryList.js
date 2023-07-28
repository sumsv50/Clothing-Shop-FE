import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './CategoryList.css'

export default function CategoryList({ categories, onSelectCategory, isMobile }) {
  const [openId, setOpenId] = React.useState(null);
  const optPros = isMobile ? {
    "data-toggle": "collapse",
    "data-target": "#navbarCollapse"
  } : {}

  const handleClick = (categoryId) => {
    setOpenId(categoryId)
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
      {
        categories.map(category => (
          <>
            <ListItemButton key={category.id} className='category-title-container'>
              <ListItemText
                className='category-title'
                primary={category.title}
                onClick={() => { handleClick(null); onSelectCategory(category.id) }}
                {...optPros}
              />
              {category.child.length
                ? <div className='category-collapse-icon'>
                  {openId === category.id
                    ? <ExpandLess onClick={() => handleClick(null)} />
                    : <ExpandMore onClick={() => handleClick(category.id)} />}
                </div>
                : ""
              }
            </ListItemButton >
            <Collapse in={openId === category.id} timeout="auto" unmountOnExit>
              {
                category.child.map(child => (
                  <List component="div" disablePadding>
                    <ListItemButton {...optPros} className='category-title-container' sx={{ pl: 4 }} onClick={() => { onSelectCategory(child.id) }}>
                      <ListItemText className='category-title' primary={child.title} />
                    </ListItemButton>
                  </List>
                ))
              }
            </Collapse>
          </>
        ))
      }
    </List>
  );
}
