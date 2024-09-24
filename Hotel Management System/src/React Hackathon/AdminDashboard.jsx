import React, { useState } from 'react';
import './AdminDashboard.css'; // Custom CSS
import Carosel1 from '../assets/Images/CaroselImg.jpg';
import {
  People as PeopleIcon,
  ExitToApp as ExitToAppIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Grid } from '@mui/material'; // Import MUI components

const AdminDashboard = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [navbarOpen, setNavbarOpen] = useState(false); // State to track navbar toggle

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Mock data for statistics
  const stats = {
    totalBookings: 150,
    totalRevenue: 12000,
    totalRooms: 50,
    availableRooms: 20,
  };

  // Recent activity log (mock data)
  const recentActivities = [
    { action: 'New Booking Created', date: '2024-09-22' },
    { action: 'Room Service Updated', date: '2024-09-21' },
    { action: 'Customer Added', date: '2024-09-20' },
  ];

  // Define your colors
 // Define your colors
const colors = {
  primary: '#003366',  // Primary color
  secondary: '#dc3545', // Secondary color (for logout button)
  background: '#f0f0f0', // Lighter gray background color for the dashboard
  cardBackground: 'white', // Card background color
  white: '#ffffff', // White color for text
};


  return (
    <div className="dashboard-container" style={{ background: colors.background }}>
      {/* Top Navbar */}
      <AppBar position="static" style={{ background: colors.primary }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Hotel Management System
          </Typography>
          <Button color="inherit" onClick={toggleNavbar}>
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>

      {/* Overlay */}
      {navbarOpen && <div className="overlay show" onClick={toggleNavbar}></div>}

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${navbarOpen ? 'open' : ''}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              onClick={() => toggleDropdown('userManagement')}
              className={`nav-link dropdown-toggle ${openDropdown === 'userManagement' ? 'active' : ''}`}
              href="#!"
            >
              <PeopleIcon /> Management
            </a>
            <ul className={`dropdown-menu ${openDropdown === 'userManagement' ? 'show' : ''}`}>
              <li><Link to="/admin" className="dropdown-item">Admin</Link></li>
              <li><Link to="/manager" className="dropdown-item">Manager</Link></li>
              <li><Link to="/staff" className="dropdown-item">Staff</Link></li>
              <li><Link to="/customer" className="dropdown-item">Customer</Link></li>
            </ul>
          </li>
          <button className="btn logout-button" style={{ backgroundColor: colors.secondary }}>
            <ExitToAppIcon /> Logout
          </button>
        </ul>
      </div>

      {/* Main Content */}
      <div className="carousel-container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Carosel1} className="d-block w-100 carousel-image" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <Link to="/room">
                  <button className="btn btn-primary" style={{ background: colors.primary }}>
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Greeting Section */}
      <div style={{ padding: '20px', background: colors.background }}>
        <Typography variant="h4" align="center">Welcome, Admin!</Typography>
      </div>

      {/* Quick Statistics Section */}
      <Grid container spacing={3} style={{ padding: '20px' }}>
        {Object.entries(stats).map(([key, value]) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Card sx={{color:'white', background:'white'}}>
              <CardContent>
                <Typography sx={{color :'black'}} variant="h5">{key === 'totalRevenue' ? `$${value}` : value}</Typography>
                <Typography color="textSecondary">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activities Section */}
      <div style={{ padding: '20px', background: colors.background }}>
        <Typography variant="h5" align="center">Recent Activities</Typography>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>
              {activity.action} - {activity.date}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer style={{ background: colors.primary, color: colors.white, padding: '20px 0', marginTop: 'auto', position: 'relative', bottom: 0, width: '100%' }}>
        <div className="container">
          <Typography variant="body1" align="center">
            © 2024 Hotel Management System. All Rights Reserved.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Link to="/about" style={{ color: colors.white, textDecoration: 'none', margin: '0 15px' }}>
              About Us
            </Link>
            <Link to="/contact" style={{ color: colors.white, textDecoration: 'none', margin: '0 15px' }}>
              Contact
            </Link>
            <Link to="/privacy" style={{ color: colors.white, textDecoration: 'none', margin: '0 15px' }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
