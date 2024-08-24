/**
 * 编辑个人资料组件
 * @param {ProfileEditProps} props - 组件属性
 * @param {Object} props.initialProfile - 初始个人资料
 * @param {string} props.initialProfile.username - 用户名
 * @param {string} props.initialProfile.email - 邮箱
 * @param {string} props.initialProfile.phone - 电话
 * @param {Function} props.onSave - 保存按钮点击事件处理函数
 * @returns {JSX.Element} - 编辑个人资料表单
 * */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './profile-edit.css'; // 引入外部样式表

interface ProfileEditProps {
  initialProfile: {
    username: string;
    email: string;
    phone: string;
  };
  onSave: (values: { username: string; email: string; phone: string }) => void;
  onCancel: () => void;
}

function ProfileEdit({ initialProfile, onSave, onCancel }: ProfileEditProps) {
  const formik = useFormik({
    initialValues: initialProfile,
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username cannot be longer than 20 characters')
        .required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string()
        .matches(
          /^(\d{3}-\d{3}-\d{4}|\d{11})$/,
          'Phone number must be in the format xxx-xxx-xxxx or an 11-digit Chinese phone number',
        )
        .required('Phone number is required'),
    }),
    onSubmit: (values: { username: string; email: string; phone: string }) => {
      onSave(values);
    },
  });

  return (
    <form className="profile-fields" onSubmit={formik.handleSubmit}>
      <div className="profile-field">
        <div className="label-input-wrapper">
          <label htmlFor="username" className="control-label">
            Username:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            maxLength={20}
            minLength={3}
          />
        </div>
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
      </div>
      <div className="profile-field">
        <div className="label-input-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div className="profile-field">
        <div className="label-input-wrapper">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
        {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      </div>
      <div className="profile-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProfileEdit;
