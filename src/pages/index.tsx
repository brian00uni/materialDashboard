// material
import { useSetHeaderProps } from '@/models/headerContext';
import { Grid, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// ========= Dashboard ========= //

export default function Main() {
  const setHeaderProps = useSetHeaderProps();

  useEffect(() => {
    setHeaderProps({
      pageTitle: 'Home',
      backButton: false,
      closeButton: false,
      fnGoBack: undefined,
    });
  }, [setHeaderProps]);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid size={12}>
        <Stack direction="row" spacing={2}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
        </Stack>
      </Grid>
      {/* row 1 */}
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h5">MAin</Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>aaa</Grid>

      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid />
        </Grid>
      </Grid>
    </Grid>
  );
}
