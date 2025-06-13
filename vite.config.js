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
  server: {
    host: true, // or '0.0.0.0' to expose to the network
    port: 5173, // optional, default is 5173
  },
  base:"/Mahesh-Portfolio",
});