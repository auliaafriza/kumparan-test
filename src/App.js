import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Card,
  CardContent,
  Modal,
  Typography,
  Button,
  CardActionArea,
  Grid,
  Stack,
  Box,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../src/redux/actions/userAction';
import {
  getPost,
  addPost,
  editPost,
  deletePost,
} from '../src/redux/actions/postAction';
import { getAlbum } from '../src/redux/actions/albumAction';
import {
  getPhoto,
  addPhoto,
  editPhoto,
  deletePhoto,
} from '../src/redux/actions/photoAction';

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
  const [deleteStatus, setDeleteStatus] = useState('');
  const [modif, setModif] = useState('');
  const [modalModif, setModalModif] = useState(false);
  const [modalCrud, setModalCrud] = useState(false);
  const [dataModifPost, setDataModifPost] = useState({
    title: '',
    body: '',
    userId: '',
  });
  const [dataModifPhoto, setDataModifPhoto] = useState({
    albumId: '',
    thumbnailUrl: '',
    title: '',
    url: '',
  });
  const [id, setId] = useState('');
  const userData = useSelector((state) => state.userReducer.dataUser);
  const postData = useSelector((state) => state.post.dataPost);
  const albumData = useSelector((state) => state.album.data);
  const photoData = useSelector((state) => state.photo.data);

  useState(() => {
    dispatch(getUser());
    dispatch(getPhoto());
    dispatch(getPost());
    dispatch(getAlbum());
  });

  const handleDelete = () => {
    if (deleteStatus === 'post') {
      dispatch(deletePost(id));
      setModalModif(false);
    } else {
      dispatch(deletePhoto(id));
      setModalModif(false);
    }
  };

  const handleAdd = () => {
    if (deleteStatus === 'post') {
      if (modif === 'edit') {
        dispatch(editPost(dataModifPost, id));
      } else {
        dispatch(addPost(dataModifPost));
      }
      setModalCrud(false);
    } else {
      if (modif === 'edit') {
        dispatch(editPhoto(dataModifPhoto, id));
      } else {
        dispatch(addPhoto(dataModifPhoto));
      }
      setModalCrud(false);
    }
  };

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

        {/* modal konfirmasi */}
        <Modal
          open={modalModif}
          onClose={() => setModalModif(false)}
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
              width: '30%',
              height: '20%',
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
              Apakah anda yakin ?
            </Typography>
            <Grid container direction={'row'}>
              <Button
                variant="contained"
                onClick={() => handleDelete()}
                sx={{ marginRight: '20px' }}
              >
                Ya
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => setModalModif(false)}
              >
                Tidak
              </Button>
            </Grid>
          </Box>
        </Modal>
        {/* modal crud */}
        <Modal
          open={modalCrud}
          onClose={() => {
            setModalCrud(false);
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
              width: '50%',
              height: '45%',
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
              Form data :
            </Typography>
            {deleteStatus === 'post' ? (
              <>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  sx={{ width: '100%', marginBottom: '20px' }}
                  value={dataModifPost.title}
                  onChange={(e) =>
                    setDataModifPost({
                      ...dataModifPost,
                      title: e.target.value,
                    })
                  }
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Body"
                  sx={{ width: '100%', marginBottom: '20px' }}
                  value={dataModifPost.body}
                  onChange={(e) =>
                    setDataModifPost({
                      ...dataModifPost,
                      body: e.target.value,
                    })
                  }
                  variant="outlined"
                />
              </>
            ) : (
              <>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  value={dataModifPhoto.title}
                  sx={{ width: '100%', marginBottom: '20px' }}
                  onChange={(e) =>
                    setDataModifPhoto({
                      ...dataModifPhoto,
                      title: e.target.value,
                    })
                  }
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Url"
                  value={dataModifPhoto.url}
                  sx={{ width: '100%', marginBottom: '20px' }}
                  onChange={(e) =>
                    setDataModifPhoto({
                      ...dataModifPhoto,
                      url: e.target.value,
                    })
                  }
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Thumbnail Url"
                  value={dataModifPhoto.thumbnailUrl}
                  sx={{ width: '100%', marginBottom: '20px' }}
                  onChange={(e) =>
                    setDataModifPhoto({
                      ...dataModifPhoto,
                      thumbnailUrl: e.target.value,
                    })
                  }
                  variant="outlined"
                />
              </>
            )}
            <Grid container direction={'row'}>
              <Button
                variant="contained"
                onClick={() => handleAdd()}
                sx={{ marginRight: '20px' }}
              >
                Simpan
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => setModalCrud(false)}
              >
                Batal
              </Button>
            </Grid>
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
                              <Grid container direction={'row'} spacing={2}>
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
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => {
                                    setModalCrud(true);
                                    setDeleteStatus('post');
                                    setModif('add');
                                  }}
                                >
                                  Add
                                </Button>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => {
                                    setModalCrud(true);
                                    setDeleteStatus('post');
                                    setId(findPost[0].id);
                                    setModif('edit');
                                    setDataModifPost({
                                      ...dataModifPost,
                                      title: findPost[0].title,
                                      body: findPost[0].body,
                                      userId: findPost[0].userId,
                                    });
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => {
                                    setModalModif(true);
                                    setDataModal(findPost);
                                    setDeleteStatus('post');
                                    setId(findPost[0].id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </Grid>
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
                              <Grid container direction={'row'} spacing={2}>
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
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => {
                                    setModalCrud(true);
                                    setDeleteStatus('photo');
                                    setModif('add');
                                  }}
                                >
                                  Add
                                </Button>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => {
                                    setModalCrud(true);
                                    setDeleteStatus('photo');
                                    setId(findPhoto[0].id);
                                    setModif('edit');
                                    setDataModifPhoto({
                                      ...dataModifPhoto,
                                      title: findPhoto[0].title,
                                      thumbnailUrl: findPhoto[0].thumbnailUrl,
                                      url: findPhoto[0].url,
                                      albumId: findPhoto[0].albumId,
                                    });
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => {
                                    setModalModif(true);
                                    setDataModal(findPost);
                                    setDeleteStatus('photo');
                                    setId(findPhoto[0].id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </Grid>
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
