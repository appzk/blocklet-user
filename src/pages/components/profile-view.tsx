/**
 * Displays the user's profile information.
 * @param {ProfileViewProps} props - The props for the ProfileView component.
 * @param {string} username - The user's username.
 * @param {string} email - The user's email address.
 * @param {string} phone - The user's phone number.
 * @param {boolean} loading - Whether the profile is still loading.
 * @param {function} onEdit - A function to call when the user wants to edit their profile.
 * */

interface ProfileViewProps {
  username: string;
  email: string;
  phone: string;
  loading: boolean;
  onEdit: () => void;
}

function ProfileView({ username, email, phone, onEdit, loading }: ProfileViewProps) {
  return (
    <div className="profile-fields">
      <div className="profile-field">
        <label htmlFor="username">Username:</label>
        <span id="username">{username}</span>
      </div>
      <div className="profile-field">
        <label htmlFor="email">Email:</label>
        <span id="email">{email}</span>
      </div>
      <div className="profile-field">
        <label htmlFor="phone">Phone:</label>
        <span id="phone">{phone}</span>
      </div>
      <div className="profile-buttons">
        <button type="button" onClick={onEdit} disabled={loading}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default ProfileView;
