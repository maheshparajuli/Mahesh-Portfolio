import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })

// export default {
//   server: {
//     host: true, // Or use '0.0.0.0'
//     port: 5173, // Optional: choose any port you want
//   },
// };

export default defineConfig({
  plugins: [react()],
  
  base:"/Mahesh-Portfolio",
});