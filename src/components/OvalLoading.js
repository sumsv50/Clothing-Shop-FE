import CircularProgress from '@mui/material/CircularProgress';

function OvalLoading() {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color="inherit" />
    </div>
  );
}

export default OvalLoading;
