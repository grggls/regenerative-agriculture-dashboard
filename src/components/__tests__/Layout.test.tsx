import { render, screen } from '@testing-library/react';
import { Layout } from '../Layout';

describe('Layout', () => {
  it('renders the navigation title', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    expect(screen.getByText('Regenerative Landwirtschaft')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});