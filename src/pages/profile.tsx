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
  id?: number;
  username: string;
  email: string;
  phone: string;
}

function Profile() {
  const defaultId = 1;
  // 假设初始用户数据
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: defaultId,
    username: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(true);
  //   const { session } = useSessionContext();

  const [isEditing, setIsEditing] = useState(false);

  // get data from API
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<{ profile: UserProfile }, any> = await axios.get('/api/profile', {
        params: {
          id: defaultId, // 如果id不存在，则使用默认值defaultId
        },
      });
      setUserProfile(response.data.profile);
    } catch (error) {
      console.error(error);
      setUserProfile({
        id: defaultId,
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

  // write data to API
  const putProfile = (profile: UserProfile) => {
    return axios.put('/api/profile', profile);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (profile: UserProfile) => {
    if (isEmpty(profile.username) || isEmpty(profile.email) || isEmpty(profile.phone)) {
      return;
    }
    try {
      setLoading(true);
      setUserProfile(profile);
      await putProfile({ ...profile, id: defaultId });
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
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <ToastContainer />
      <div className="profile-app">
        <h2>User Profile</h2>
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
    </div>
  );
}
export default Profile;
