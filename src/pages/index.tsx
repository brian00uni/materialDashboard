// material
import { useSetHeaderProps } from '@/models/headerContext';
import { AddBusiness } from '@mui/icons-material';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';

// ========= Dashboard ========= //

export default function Main() {
  const setHeaderProps = useSetHeaderProps();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('index-page');

    setHeaderProps({
      pageTitle: '',
      backButton: false,
      closeButton: false,
      fnGoBack: undefined,
    });
    return () => {
      root.classList.remove('index-page');
    };
  }, [setHeaderProps]);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid size={12} gap={5}>
        <Card>
          <CardContent>
            <AddBusiness fontSize="large" />
            <Typography variant="body2">텍스트 내용 내용 내용~~~ 블라 블라 블라</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* row 1 */}
      <Grid sx={{ mb: -2.25 }} size={5}>
        <Button variant="contained">Button</Button>
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
