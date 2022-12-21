import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import SideBar from './SideBar'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}> {/* On small devices its a column view on medium and up devices its a row view*/}
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}}}> {/* On small devices view will be auto on medium and higher devices it will be 92vh ---- borderRight creates the line that divides the sidebar and the videos*/}
        <SideBar />
        <Typography 
          className="copyright"
          variant="body2" sx={{ mt: 1.5, color: '#fff'}}
        >
          &#169;Copyright 2022 Orelso
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white'}}>
         New <span style={{ color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed