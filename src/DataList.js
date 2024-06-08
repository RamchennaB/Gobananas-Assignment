import React, { useEffect, useState } from 'react';
import { Table,TableBody, TableCell, TableContainer,TableHead, TableRow, Typography, TextField,Paper,Grid } from '@mui/material';
import { fetchData } from './api';

const DataList = ({ endpoint }) => {
  //Use sate to store the details

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // fetching data from Api

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const result = await fetchData(endpoint);
      setData(result);
    };
    fetchDataFromAPI();
  }, [endpoint]);

  // handling the changes in the search bar
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // filtering search results
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom align="center">
        https://jsonplaceholder.typicode.com/comments
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '20px' }}
          color="primary"
        />
        <TableContainer component={Paper} elevation={3}>
          <Table aria-label="simple table">
            <TableHead>
            <TableRow style={{ backgroundColor: '#6200ea' }}>
                <TableCell style={{ color: '#ffffff' }}>ID</TableCell>
                <TableCell style={{ color: '#ffffff' }}>NAME</TableCell>
                <TableCell style={{ color: '#ffffff' }}>EMAIL</TableCell>
                <TableCell style={{ color: '#ffffff' }}>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
               <TableRow key={item.id} style={item.id % 2 === 0 ? { backgroundColor: '#f3f3f3' } : { backgroundColor: '#ffffff' }}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default DataList;
