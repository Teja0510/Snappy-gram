import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { AlternateEmail, AlternateEmailSharp, CameraFront, DateRange, EmojiEmotions, Image, PersonAdd } from '@mui/icons-material';




const StyledModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}))
const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'

}))

const Add = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                    <Typography variant='h6' color='gray' textAlign='center'> Create Post</Typography>
                    <UserBox>
                        <Avatar
                            src="https://c.ndtvimg.com/2022-01/m4sb7bag_kartik-aaryan_625x300_25_January_22.jpg"
                            alt=""
                            height={30}
                            width={30}
                        />
                        <Typography fontWeight={500} variant="span">Kartik Aryan</Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        fullWidth

                        multiline
                        rows={3}
                        placeholder="Whats on Your Mind"
                        variant="standard"
                    />

                    <Stack direction='row' gap={2} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <AlternateEmailSharp color="secondary" />
                        <PersonAdd color="error" />
                        <Image color="success" />

                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Post</Button>
                        <Button width='100px'><DateRange/></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>

        </>
    )
}

export default Add
