import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isEmpty from 'lodash/isEmpty';
import type { AxiosResponse } from 'axios';
import axios from '../libs/api';
import ProfileEdit from './components/profile-edit';
import ProfileView from './components/profile-view';

import './profile.css'; // 引入外部样式表

interface UserProfile {
  id: string;
  username: string;
  email: string;
  phone: string;
}

function Profile() {
  // 假设初始用户数据
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: '1',
    username: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(true);
  //   const { session } = useSessionContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState<UserProfile>(userProfile);

  // Step 3: get data from DID Spaces
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<{ profile: UserProfile }, any> = await axios.get('/api/profile');
      setUserProfile(response.data.profile);
    } catch (error) {
      console.error(error);
      setUserProfile({
        id: '1',
        username: '',
        email: '',
        phone: '',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Step 4: write data to DID Spaces
  const putProfile = (profile: UserProfile) => {
    return axios.put('/api/profile', profile);
  };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setEditProfile({
  //     ...editProfile,
  //     [name]: value,
  //   });
  // };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (isEmpty(editProfile.username) || isEmpty(editProfile.email) || isEmpty(editProfile.phone)) {
      return;
    }
    try {
      setLoading(true);
      setUserProfile(editProfile);
      await putProfile(editProfile);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditProfile(userProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <ToastContainer />
      {isEditing ? (
        <ProfileEdit initialProfile={userProfile} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <ProfileView
          username={userProfile.username}
          email={userProfile.email}
          phone={userProfile.phone}
          loading={loading}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
export default Profile;
