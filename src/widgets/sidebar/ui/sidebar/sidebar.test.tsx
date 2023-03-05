import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/render-with-translation/render-with-translation';
import { Sidebar } from 'widgets/sidebar/ui/sidebar/sidebar';

describe('Testing sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});