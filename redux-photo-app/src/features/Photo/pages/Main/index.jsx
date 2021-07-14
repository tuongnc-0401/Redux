import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoRemoveClick = (photo) => {
      const photoId = photo.id;
      const action =removePhoto(photoId);
      dispatch(action);

  }

  const handlePhotoEditClick = (photo) => {
      const editPhotoUrl = `/photos/${photo.id}`
      history.push(editPhotoUrl)
  }
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <PhotoList 
        photoList={photos} 
        onPhotoRemoveClick={handlePhotoRemoveClick}
        onPhotoEditClick={handlePhotoEditClick}
        />
      
      </Container>
    </div>
  );
}

export default MainPage;