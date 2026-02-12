import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#C13584',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </ErrorBoundary>
  </StrictMode>,
)
