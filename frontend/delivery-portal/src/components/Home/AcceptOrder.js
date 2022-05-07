import React from 'react'
import Button from '@mui/material/Button';

function AcceptOrder() {
  return (
    <div>
    <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
  >
    Send reset link
  </Button>
    </div>
  )
}

export default AcceptOrder