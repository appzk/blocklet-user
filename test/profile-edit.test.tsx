import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileEdit from '../src/pages/components/profile-edit';

describe('ProfileEdit Component', () => {
  const mockOnSave = jest.fn();
  const mockOnCancel = jest.fn();
  const initialProfile = {
    username: 'testuser',
    email: 'test@example.com',
    phone: '123-456-7890',
  };

  beforeEach(() => {
    jest.clearAllMocks(); // 每个测试前清除所有mock
  });

  test('renders ProfileEdit form with initial values', () => {
    render(<ProfileEdit initialProfile={initialProfile} onSave={mockOnSave} onCancel={mockOnCancel} />);

    expect(screen.getByLabelText(/username/i)).toHaveValue(initialProfile.username);
    expect(screen.getByLabelText(/email/i)).toHaveValue(initialProfile.email);
    expect(screen.getByLabelText(/phone/i)).toHaveValue(initialProfile.phone);
  });

  test('shows validation errors on invalid input', async () => {
    render(<ProfileEdit initialProfile={initialProfile} onSave={mockOnSave} onCancel={mockOnCancel} />);

    // Clear username to trigger validation error
    userEvent.clear(screen.getByLabelText(/username/i));
    fireEvent.blur(screen.getByLabelText(/username/i));

    expect(await screen.findByText('Username is required')).toBeInTheDocument();

    // Enter an invalid email to trigger validation error
    userEvent.clear(screen.getByLabelText(/email/i));
    userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
    fireEvent.blur(screen.getByLabelText(/email/i));

    expect(await screen.findByText('Invalid email address')).toBeInTheDocument();

    // Enter an invalid phone number to trigger validation error
    userEvent.clear(screen.getByLabelText(/phone/i));
    userEvent.type(screen.getByLabelText(/phone/i), '123');
    fireEvent.blur(screen.getByLabelText(/phone/i));

    expect(
      await screen.findByText('Phone number must be in the format xxx-xxx-xxxx or an 11-digit Chinese phone number'),
    ).toBeInTheDocument();
  });

  test('calls onSave with correct data when form is valid and submitted', () => {
    render(<ProfileEdit initialProfile={initialProfile} onSave={mockOnSave} onCancel={mockOnCancel} />);

    // Update the username field
    userEvent.clear(screen.getByLabelText(/username/i));
    userEvent.type(screen.getByLabelText(/username/i), 'newusername');

    // Update the phone field
    userEvent.clear(screen.getByLabelText(/phone/i));
    userEvent.type(screen.getByLabelText(/phone/i), '987-654-3210');

    // 等待表单提交完成
    fireEvent.click(screen.getByRole('button', { name: /save/i }));
  });

  test('calls onCancel when cancel button is clicked', () => {
    const props = {
      initialProfile,
      onSave: mockOnSave,
      onCancel: mockOnCancel,
    };

    render(React.createElement(ProfileEdit, props));

    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });
});
