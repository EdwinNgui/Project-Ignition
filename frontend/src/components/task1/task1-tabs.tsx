'use client'; //Specific to Next.js (files are server components, but react hooks are client

// MUI imports
import React from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab"
import Box from '@mui/material/Box';

// Defines the object's attribute for each tab panel
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Renders a single tab panel (pass in the props, and renders the component)
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel" // For accessibility: Tab panel 
      hidden={value !== index} // Activates hidden prop if value is not currently selected
      id={`simple-tabpanel-${index}`} //Unique ID based on index
      aria-labelledby={`simple-tab-${index}`} //Link to tab label
      {...other}
    >
      {/* If value exactly selected, then render Box with padding 3 units (sx = style extension */}
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// Accesibility props: (a11y => 11 characters between a and y)
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  // Track tab value
  const [value, setValue] = React.useState(0);

  // Handles tab change on new click
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Box for the tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
        value={value} // Controls which tab is selected
        onChange={handleChange} // On tab click, calls handleChange to update selected value
        // Tracks accessibility
        aria-label="basic tabs example"> 
          {/* Each tab has label and accessibility prop */}
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Shows the content for each matching TabPanel defined by value === index */}
      <CustomTabPanel value={value} index={0}>
        Content One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Content Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Content Three
      </CustomTabPanel>
    </Box>
  );
}