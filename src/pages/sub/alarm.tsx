import { useSetHeaderProps } from '@/models/headerContext';
import { Cancel } from '@mui/icons-material';
import { Box, IconButton, Paper, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

export default function AlarmPage() {
  const setHeaderProps = useSetHeaderProps();
  const [alarms, setAlarms] = useState([
    { id: 1, message: '알람 메세지 입니다~~~~~' },
    { id: 2, message: 'Alarm message 두번째~~~~' },
    { id: 3, message: 'Alarm message 33333333333333333333' },
    {
      id: 4,
      message:
        '알람 메세지 알람 메세지 알람 메세지 알람 메세지 알람 메세지 알람 메세지 알람 메세지 알람 메세지 입니다~~~~~',
    },
  ]);

  const removeAlarm = (id: number) => {
    setAlarms((prev) => prev.filter((alarm) => alarm.id !== id));
  };

  useEffect(() => {
    setHeaderProps({
      pageTitle: 'Alarm',
      backButton: true,
      closeButton: true,
      fnGoBack: undefined,
    });
  }, [setHeaderProps]);

  return (
    <Box>
      <Stack spacing={2}>
        {alarms.map((alarm) => (
          <Paper key={alarm.id} className="alarm-box" elevation={2}>
            {alarm.message}
            <IconButton className="cancel" onClick={() => removeAlarm(alarm.id)}>
              <Cancel />
            </IconButton>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
