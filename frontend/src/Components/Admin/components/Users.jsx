import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://hospital-appointment-booking-system-6hcp.onrender.com/appointments', {
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('jwt'),
        },
      });
      setAppointments(response.data.all_appointments || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Removed appointments from dependency array to prevent infinite loop

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'user',
      headerName: 'User Name',
      width: 200,
      renderCell: (params) => {
        // Add null check for user
        return params.row.user?.username || 'N/A';
      },
    },
    {
      field: 'doctor',
      headerName: 'Doctor Name',
      width: 200,
      renderCell: (params) => {
        // Add null check for doctor
        return params.row.doctor?.name || 'No Doctor Assigned';
      },
    },
    { 
      field: 'disease', 
      headerName: 'Disease', 
      width: 200,
      renderCell: (params) => {
        return params.row.disease || 'Not specified';
      }
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 200,
      renderCell: (params) => {
        // Add null check for date
        return params.row.date 
          ? moment(params.row.date).format('YYYY-MM-DD')
          : 'No Date';
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => {
        return params.row.status || 'Pending';
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/report/${params.row._id}`)}
        >
          View Report
        </Button>
      ),
    },
  ];

  // Filter out appointments with null data if needed
  const filteredAppointments = appointments.filter(appointment => 
    appointment && appointment._id
  );

  return (
    <div style={{ height: 600, width: '100%', padding: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <h1 style={{ margin: 0 }}>Appointments</h1>
        <Button 
          variant="contained" 
          color="primary"
          onClick={fetchData}
        >
          Refresh Data
        </Button>
      </div>
      
      <DataGrid 
        rows={filteredAppointments} 
        columns={columns} 
        getRowId={(row) => row._id}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Total Appointments: {filteredAppointments.length}
      </div>
    </div>
  );
}