import { render, screen, cleanup } from '@testing-library/react';
import { RepositoryCard } from '../components/RepositoryCardView';

describe('RepositoryCardView Tests', () => {

  afterEach(() => {
    cleanup();
  })

  it('renders component', () => {
    render(<RepositoryCard />);
    const linkElement = screen.getByText(/Stars /i);
    expect(linkElement).toBeInTheDocument();
  });

  // test('renders component with one property', () => {
  //   const { queryByTestId, getByTestId } = render(<RepositoryCard description='Jack' />);
  //   //const renderedComponent = render(<RepositoryCard description='Jack' />);
  //   expect(getByTestId(/description/i)).toEqual('<div class="name" data-testid="description">Jack</div>');
  //   expect(queryByTestId(/description/i)).toBeTruthy();
  // });

})
