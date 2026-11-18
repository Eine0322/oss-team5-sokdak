import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 서버 프록시 설정 (각 파트 개발 후 연결)
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:3000',
  //   },
  // },
})
