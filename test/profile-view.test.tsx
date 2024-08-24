// ProfileView.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileView from '../src/pages/components/profile-view';

describe('ProfileView', () => {
  const mockOnEdit = jest.fn();

  const props = {
    username: 'JohnDoe',
    email: 'john@example.com',
    phone: '123-456-7890',
    onEdit: mockOnEdit,
    loading: false,
  };

  it('renders profile information correctly', () => {
    render(<ProfileView {...props} />);

    // Check if the username is rendered correctly
    expect(screen.getByText('Username:')).toBeInTheDocument();
    expect(screen.getByText('JohnDoe')).toBeInTheDocument();

    // Check if the email is rendered correctly
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();

    // Check if the phone number is rendered correctly
    expect(screen.getByText('Phone:')).toBeInTheDocument();
    expect(screen.getByText('123-456-7890')).toBeInTheDocument();
  });

  it('calls onEdit when the edit button is clicked', () => {
    render(React.createElement(ProfileView, props));

    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });
});
