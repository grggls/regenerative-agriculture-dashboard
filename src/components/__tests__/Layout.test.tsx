import { render, screen } from '@testing-library/react';
import { Layout } from '../Layout';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

// Setup a test i18n instance
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    resources: {
      en: {
        translation: {
          'nav.title': 'Regenerative Agriculture',
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Wrap component with I18nextProvider
const renderWithI18n = (component: React.ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('Layout', () => {
  it('renders the navigation title', () => {
    renderWithI18n(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    expect(screen.getByText('Regenerative Agriculture')).toBeInTheDocument();
  });

  it('renders children content', () => {
    renderWithI18n(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});