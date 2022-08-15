import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Card,
  CardContent,
  Modal,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Stack,
  Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../src/redux/actions/userAction';
import { getPost } from '../src/redux/actions/postAction';
import { getAlbum } from '../src/redux/actions/albumAction';
import { getPhoto } from '../src/redux/actions/photoAction';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    margin: 10,
  },
};

function App() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  const userData = useSelector((state) => state.userReducer.dataUser);
  const postData = useSelector((state) => state.post.dataPost);
  const albumData = useSelector((state) => state.album.data);
  const photoData = useSelector((state) => state.photo.data);

  useState(() => {
    dispatch(getUser());
  });

  useState(() => {
    dispatch(getPost());
  });

  useState(() => {
    dispatch(getAlbum());
  });

  useState(() => {
    dispatch(getPhoto());
  });

  return (
    <div className="App" style={styles.container}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            setDataModal([]);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              width: '80%',
              height: '60%',
              padding: '20px',
              overflow: 'scroll',
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ marginBottom: '20px' }}
            >
              Detail data :
            </Typography>
            {dataModal && dataModal.length !== 0
              ? dataModal.map((t) => (
                  <>
                    <Typography variant="h6">
                      Title : {t.title ? t.title : ''}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mb: 2 }}>
                      {t.body ? t.body : t.url ? t.url : ''}
                    </Typography>
                  </>
                ))
              : null}
          </Box>
        </Modal>
        <Typography variant="h5">List Data : </Typography>
        <br />
        <Grid container spacing={2} direction="row" display={'flex'}>
          {userData && userData.length !== 0
            ? userData.map((item, i) => {
                let findPost =
                  postData && postData.length !== 0
                    ? postData.filter((x) => x.userId === item.id)
                    : null;
                let findAlbum =
                  albumData && albumData.length !== 0
                    ? albumData.filter((y) => y.userId === item.id)
                    : null;
                let findPhoto =
                  findAlbum && findAlbum.length !== 0
                    ? photoData && photoData.length !== 0
                      ? photoData.filter((j) => j.albumId === findAlbum[0].id)
                      : null
                    : null;
                return (
                  <Grid item xs={3} index={i}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardContent>
                          <Typography variant="subtitle1">
                            name : {item?.name ?? ''}
                          </Typography>
                          <Typography variant="subtitle1">Post :</Typography>
                          {findPost && findPost.length !== 0 ? (
                            <>
                              <Typography variant="subtitle1">
                                {findPost[0].title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {findPost[0].title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                ....
                              </Typography>
                              <Button
                                size="small"
                                color="primary"
                                onClick={() => {
                                  setOpenModal(true);
                                  setDataModal(findPost);
                                }}
                              >
                                See Detail
                              </Button>
                              <br />
                            </>
                          ) : null}
                          <Typography variant="subtitle1">Album :</Typography>
                          {findAlbum && findAlbum.length !== 0 ? (
                            <>
                              <Typography variant="subtitle1">
                                {findAlbum[0].title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                ....
                              </Typography>
                              <Button
                                size="small"
                                color="primary"
                                onClick={() => {
                                  setOpenModal(true);
                                  setDataModal(findAlbum);
                                }}
                              >
                                See Detail
                              </Button>
                              <br />
                            </>
                          ) : null}
                          <Typography variant="subtitle1">Photo :</Typography>
                          {findPhoto && findPhoto.length !== 0 ? (
                            <>
                              <Typography variant="subtitle1">
                                {findPhoto[0].url}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                ....
                              </Typography>
                              <Button
                                size="small"
                                color="primary"
                                onClick={() => {
                                  setOpenModal(true);
                                  setDataModal(findPhoto);
                                }}
                              >
                                See Detail
                              </Button>
                              <br />
                            </>
                          ) : null}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Stack>
    </div>
  );
}

export default App;
