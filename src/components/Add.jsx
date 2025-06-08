import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Add = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Tooltip 
      onClick={() => setModalOpen(true)}
      title={"Add Post"} sx={{position: "fixed", bottom: 20, left: {xs: 'calc(50% - 25px)', md: 30}}}>
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} sx={{width: 450, height: 350, py: 1, px: 3, borderRadius: "10px", border: "none"}}>
          <Typography variant="h5" textAlign={"center"} color="primary" sx={{py: 1, borderBottomColor: 'primary', borderBottomWidth: 1, borderBottomStyle: 'solid'}}>
              Create Post
          </Typography>
          <Box sx={{display: "flex", alignItems: "center", gap: 1, mt: 3}}>
            <Avatar sx={{width: 40, height: 40}} alt="Saba" src="https://img.freepik.com/premium-vector/girl-character-vector_101266-28463.jpg" />
            <Typography variant='span' fontWeight={500}>Saba</Typography>
          </Box>
          <TextField
            placeholder="what's on your mind?..."
            multiline
            rows={3}
            // variant="standard"
            sx={{width: '100%', marginTop: 1, borderColor: "gray",}}
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary"/>
            <ImageIcon color="secondary" />
            <VideocamIcon color="success" />
            <PersonAddAltIcon color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained">
            <Button>POST</Button>
            <Button sx={{width: "100px"}} variant="outlined">
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
    
  )
}

export default Add