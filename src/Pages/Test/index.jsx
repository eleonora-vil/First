import { Tooltip, Stack, Slider } from '@mui/material'
import React, { useState } from 'react'

export default function Test() {
    const [value, setValue] = useState(0)

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <Tooltip title="Hello">
                <span>World</span>
            </Tooltip>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider aria-label="Volume" value={value} onChange={handleChange} sx={{ width: '100px' }} />
            </Stack>
        </div>
    )
}
